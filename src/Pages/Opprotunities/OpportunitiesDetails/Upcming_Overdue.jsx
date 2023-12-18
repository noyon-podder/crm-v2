import { useState } from "react";
import { BiTask } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

const Upcming_Overdue = () => {

    const [activeButton, setActiveButton] = useState(1);
    const [activePage, setActivePage] = useState("Activity");

    const handlePageButton = (page, button) => {
        setActiveButton(button);
        setActivePage(page);
    }

    return (
        <div className="m-4">
            <div className="border border-gray-200 rounded-xl mt-6 py-2 px-3 grid grid-cols-4 items-center gap-5 bg-[#F3F3F3]">
                {
                    activeButton == 1 ?
                        <button className='btn text-white bg-[#11284F] font-semibold py-2 px-2 rounded-xl'>Activity</button>
                        :
                        <button onClick={() => handlePageButton("Activity", 1)} className='btn text-[#717171] font-semibold py-2 px-2'>Activity</button>
                }

                {
                    activeButton == 2 ?
                        <button className='btn text-white bg-[#11284F] font-semibold py-2 px-2 rounded-xl'>Details</button>
                        :
                        <button onClick={() => handlePageButton("Details", 2)} className='btn text-[#717171] font-semibold py-2 px-2'>Details</button>
                }

                {
                    activeButton == 3 ?
                        <button className='btn text-white bg-[#11284F] font-semibold py-2 px-2 rounded-xl'>Quote</button>
                        :
                        <button onClick={() => handlePageButton("Quote", 3)} className='btn text-[#717171] font-semibold py-2 px-2'>Quote</button>
                }

                {
                    activeButton == 4 ?
                        <button className='btn text-white bg-[#11284F] font-semibold py-2 px-2 rounded-xl'>History</button>
                        :
                        <button onClick={() => handlePageButton("History", 4)} className='btn text-[#717171] font-semibold py-2 px-2'>History</button>
                }
            </div>




            <div className="mt-4 flex items-center justify-between">

                <div className="flex items-center cursor-pointer rounded-[10px]">
                    <div
                        className="text-center px-3 py-2 border border-[#EFF4FA] flex items-center gap-1"
                        style={{
                            borderTopLeftRadius: "10px",
                            borderBottomLeftRadius: "10px",
                        }}
                    >
                        <IoMdCall size={20} />
                        <p className="font-semibold text-xs">Call Log</p>
                    </div>
                    <div
                        className="text-center px-2 py-2 border hidden xl:block" style={{
                            borderTopRightRadius: "10px",
                            borderBottomRightRadius: "10px",
                        }}
                    >
                        <BsChevronDown size={20} />
                    </div>
                </div>

                <div className="flex items-center cursor-pointer rounded-[10px]">
                    <div
                        className="text-center px-3 py-2 border border-[#EFF4FA] flex items-center gap-1"
                        style={{
                            borderTopLeftRadius: "10px",
                            borderBottomLeftRadius: "10px",
                        }}
                    >
                        <BiTask size={20} />
                        <p className="font-semibold text-xs">Tasks</p>
                    </div>
                    <div
                        className="text-center px-2 py-2 border hidden xl:block" style={{
                            borderTopRightRadius: "10px",
                            borderBottomRightRadius: "10px",
                        }}
                    >
                        <BsChevronDown size={20} />
                    </div>
                </div>

                <div className="flex items-center cursor-pointer rounded-[10px]">
                    <div
                        className="text-center px-3 py-2 border border-[#EFF4FA] flex items-center gap-1"
                        style={{
                            borderTopLeftRadius: "10px",
                            borderBottomLeftRadius: "10px",
                        }}
                    >
                        <SlCalender size={20} />
                        <p className="font-semibold text-xs">New Event</p>
                    </div>
                    <div
                        className="text-center px-2 py-2 border hidden xl:block" style={{
                            borderTopRightRadius: "10px",
                            borderBottomRightRadius: "10px",
                        }}
                    >
                        <BsChevronDown size={20} />
                    </div>
                </div>

            </div>
            <h3 className="font-semibold lg:text-[26px] text-[18px] md:mt-8 mt-4">Upcming & Overdue</h3>
            <hr className="mt-1 mb-4" />

            <ol className="mt-8">
                <div className="flex items-start gap-2">
                    <div className="p-1 bg-gray-200 rounded-full"></div>
                    <li className="font-medium text-[#717171]">No past activity.Past meetings and tasks marked as done show up here.</li>
                </div>
                <div className="flex items-start gap-2">
                    <div className="p-1 bg-gray-200 rounded-full"></div>
                    <li className="font-medium text-[#717171]">No activites to show. Get started by sending an email,scheduling a task,and more.</li>
                </div>
            </ol>



        </div>
    );
};

export default Upcming_Overdue;