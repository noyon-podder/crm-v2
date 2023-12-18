
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calender.css";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AddNewEvent from "./AddNewEvent";
import ShowEventDetailsModal from "./ShowEventDetailsModal";
import { useGetCalenderEventDataQuery } from "../../Redux/features/calender/calenderApi";
const localizer = momentLocalizer(moment);
import Loading from '../Loading/Loading';
import { useSelector } from "react-redux";

const Calender = () => {

    const [modalShow, setModalShow] = useState(false);
    const [AddModalShow, setAddModalShow] = useState(false);
    const [data, setData] = useState({});

    // backend event
    const { data: calenderEvents, isLoading } = useGetCalenderEventDataQuery(undefined, {
        refetchOnMountOrArgChange: true,
        // pollingInterval: 30000,
    });

    // redux state event
    const { addClenderEventData } = useSelector((state) => state.calender);
    console.log(addClenderEventData);

    // All Event
    const events = addClenderEventData.map(item => {
        const startTime = moment(item?.start_date + 'T' + item?.start_time, 'YYYY-MM-DDTHH:mm').toDate();
        const endTime = moment(item?.end_date + 'T' + item?.end_time, 'YYYY-MM-DDTHH:mm').toDate();

        return {
            start: startTime,
            end: endTime,
            title: item?.subject,
            color: `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.6)`,
            assigned_to: item?.assigned_to,
            description: item?.description
        };
    });

    if (isLoading) {
        return <Loading />
    }

    const handleEventClick = (event) => {
        setData(event);
        setModalShow(true);
    }

    return (
        <div>
            <div className="md:flex md:items-center md:justify-between">
                <div>
                    <h1 className="lg:text-[34px] md:text-[30px] text-[24px] font-semibold">Calender</h1>
                </div>
                <div>
                    <button onClick={() => setAddModalShow(true)} className="flex items-center gap-2 btn bg-[#00B7E9] hover:bg-[#00B7E9] text-white p-3 rounded-2xl md:mt-0 mt-4 w-full justify-center"><AiOutlinePlus /> Add New</button>
                </div>
            </div>
            <div className="mb-10 mt-6">
                <a href="#showEventSetails_Modal">
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        onSelectSlot={(slotInfo) => {
                            const { start, end } = slotInfo;
                            console.log(start, end);
                        }}
                        selectable
                        popup={true}
                        style={{ height: 700 }}
                        onSelectEvent={handleEventClick}
                        eventPropGetter={(event) => ({
                            style: {
                                backgroundColor: event.color || 'Blue',
                                color: 'black',
                                fontWeight: 'bold',
                                width: 'full',
                                height: '80px'
                            },
                        })}
                        className="bg-white p-10"
                    />
                </a>
                {
                    modalShow && data && <ShowEventDetailsModal data={data} setModalShow={setModalShow} />
                }
                {
                    AddModalShow && <AddNewEvent setAddModalShow={setAddModalShow} />
                }
            </div>
        </div>
    )
};

export default Calender;

