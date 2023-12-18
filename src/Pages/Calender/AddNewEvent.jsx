import { useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import {RxCross1} from 'react-icons/rx';
import { usePostCalenderEventMutation } from "../../Redux/features/calender/calenderApi";
import { useDispatch } from "react-redux";
import { addToCalender } from "../../Redux/features/calender/calenderSlice";

const AddNewEvent = ({ setAddModalShow }) => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [postCalenderEvent, { isLoading, isError, isSuccess }] = usePostCalenderEventMutation();
    const dispatch = useDispatch();

    const handleDataPost = (data) => {
        // postCalenderEvent(data);
        dispatch(addToCalender(data));
        reset();
        setAddModalShow(false);
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-30">
            <div className="relative overflow-hidden text-left bg-white rounded-lg shadow-xl w-[550px] p-6 max-h-[100vh] overflow-y-auto">

                <div className="flex items-center justify-between">
                    <h3 className="text-[26px] font-bold text-[#0A0A0A] capitalize" id="modal-title"> New Event </h3>
                    <button className='btn bg-white hover:bg-white border p-1'><RxCross1 onClick={() => setAddModalShow(false)} size={25}></RxCross1></button>
                </div>
                <h4 className="font-semibold text-[20px] mt-2">Calender Details</h4>
                <hr className="mt-2 mb-4" />

                <form onSubmit={handleSubmit(handleDataPost)}>

                    <div className="grid gap-6 mt-4 grid-cols-2">
                        <div>
                            <label className="font-semibold" htmlFor="assigned_to">Assigned To<span className="text-red-500">*</span></label>
                            <input placeholder="Assigned To" {...register("assigned_to", { required: 'Assigned To is required' })} id="assigned_to" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                            {errors.assigned_to && <p className='text-red-600'>{errors.assigned_to?.message}</p>}
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="related_to">Related To</label>
                            <input placeholder="Related To" {...register("related_to")} id="related_to" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="subject">Subject<span className="text-red-500">*</span></label>
                            <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                                <input
                                    type="text"
                                    placeholder="Sear..."
                                    {...register("subject", { required: 'Subject is required' })}
                                    className="bg-none w-full outline-none text-[14px] font-semibold"
                                    id="subject"
                                />
                                <BiSearch className="text-[#717171]" size={25} />
                            </div>
                            {errors.subject && <p className='text-red-600'>{errors.subject?.message}</p>}
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="name">Name</label>
                            <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                                <input
                                    type="text"
                                    placeholder="Search Con...."
                                    {...register("name")}
                                    className="bg-none w-full outline-none text-[14px] font-semibold"
                                    id="name"
                                />
                                <BiSearch className="text-[#717171]" size={25} />
                            </div>
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="start_date">Start Date<span className="text-red-500">*</span></label>
                            <input {...register("start_date", { required: 'Start Date is required' })} id="start_date" type="date" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                            {errors.start_date && <p className='text-red-600'>{errors.start_date?.message}</p>}
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="start_time">Start Time<span className="text-red-500">*</span></label>
                            <input {...register("start_time", { required: 'Start Time is required' })} id="start_time" type="time" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                            {errors.start_time && <p className='text-red-600'>{errors.start_time?.message}</p>}
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="end_date">End Date<span className="text-red-500">*</span></label>
                            <input {...register("end_date", { required: 'End Date is required' })} id="end_date" type="date" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                            {errors.end_date && <p className='text-red-600'>{errors.end_date?.message}</p>}
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="end_time">End Time<span className="text-red-500">*</span></label>
                            <input {...register("end_time", { required: 'End Time is required' })} id="end_time" type="time" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                            {errors.end_time && <p className='text-red-600'>{errors.end_time?.message}</p>}
                        </div>
                    </div>

                    <div className="flex items-center justify-start gap-10 mt-4">
                        <div className="flex items-center justify-start gap-3 mt-4">
                            <input type="checkbox" className="text-blue-500 border-gray-300 rounded-lg w-5 h-5 " />
                            <h3 className="text-[#717171] font-semibold">All-Day Event</h3>
                        </div>
                        <div className="flex items-center justify-start gap-3 mt-4">
                            <input type="checkbox" className="text-blue-500 border-gray-300 rounded-lg w-5 h-5 " />
                            <h3 className="text-[#717171] font-semibold">Private</h3>
                        </div>
                    </div>

                    <p className="text-[#717171] mt-3">Your private event details are also visible to your Salesforce admin and users with the View All Data permission. For more information, contact your Salesforce admin.</p>


                    <h4 className="font-semibold text-[20px] mt-6">Other Information</h4>
                    <hr className="mt-2 mb-4" />

                    <div className="grid gap-6 mt-4 grid-cols-2">
                        <div>
                            <label className="font-semibold" htmlFor="location">Location</label>
                            <input
                                placeholder="Location"
                                {...register("location")}
                                id="location"
                                className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                            ></input>
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="show_time_as">Show Time As</label>
                            <input
                                placeholder="Busy"
                                {...register("show_time_as")}
                                id="show_time_as"
                                className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                            ></input>
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="description">Description</label>
                        <textarea
                            placeholder="Description......"
                            {...register("description")}
                            id="description"
                            className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                            rows="3"
                        ></textarea>
                    </div>





                    <div className="flex justify-end mt-6 gap-4">
                        <button onClick={() => setAddModalShow(false)} className="btn px-6 py-2.5 transition-colors duration-300 transform bg-white rounded-xl border">Cancel</button>
                        <button type="Submit" className="px-6 py-2.5 text-white transition-colors duration-300 transform bg-[#00B7E9] rounded-xl hover:bg-[#00B7E9]">Save</button>
                    </div>


                </form>

            </div>
        </div>
    );
};

export default AddNewEvent;