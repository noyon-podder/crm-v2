
import { useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import { RxCross1 } from 'react-icons/rx';
import { FcBusinessContact } from "react-icons/fc";
import { usePostTaskMutation } from "../../Redux/features/task/taskApi";
import { useDispatch } from "react-redux";
import { addToTask } from "../../Redux/features/task/taskSlice";


const AddTaskModal = ({ setisOpen }) => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const [postTask, { isLoading, isError, isSuccess }] = usePostTaskMutation();
   
    const dispatch = useDispatch();

    const handleDataPost = (data) => {
        // postTask(data);
        dispatch(addToTask(data))
        reset();
        setisOpen(false);
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-30">
            <div className="relative overflow-hidden text-left bg-white rounded-lg shadow-xl w-[550px] p-6 max-h-[100vh] overflow-y-auto">

                <div className="flex items-center justify-between">
                    <h3 className="text-[26px] font-bold text-[#0A0A0A] capitalize" id="modal-title"> New Task </h3>
                    <button className='btn bg-white hover:bg-white border p-1'><RxCross1 onClick={() => setisOpen(false)} size={25}></RxCross1></button>
                </div>
                <h4 className="font-semibold text-[20px] mt-2">Task Information</h4>
                <hr className="mt-2 mb-4" />

                <form onSubmit={handleSubmit(handleDataPost)}>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="campaign_source_people">Primary Campaign Source</label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <FcBusinessContact className="text-[#717171]" size={30} />
                            <input
                                type="text"
                                placeholder="Search People..."
                                {...register("campaign_source_people")}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="campaign_source_people"
                            />
                            <BiSearch className="text-[#717171]" size={25} />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="related_to_people">Related To</label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <FcBusinessContact className="text-[#717171]" size={30} />
                            <input
                                type="text"
                                placeholder="Search Account..."
                                {...register("related_to_people")}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="related_to_people"
                            />
                            <BiSearch className="text-[#717171]" size={25} />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="subject">Subject<span className="text-red-500">*</span></label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="text"
                                placeholder="Search Suubjects..."
                                {...register("subject", { required: 'Subject is required' })}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="subject"
                            />
                            <BiSearch className="text-[#717171]" size={25} />
                        </div>
                        {errors.subject && <p className='text-red-600'>{errors.subject?.message}</p>}
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="name">Name</label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <FcBusinessContact className="text-[#717171]" size={30} />
                            <input
                                type="text"
                                placeholder="Search Contacts..."
                                {...register("assigned_to")}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="name"
                            />
                            <BiSearch className="text-[#717171]" size={25} />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="comments">Comments</label>
                        <textarea
                            placeholder="Comments......"
                            {...register("comments")}
                            id="comments"
                            className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                            rows="3"
                        ></textarea>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="due_date">Due Date<span className="text-red-500">*</span></label>
                        <input {...register("due_date", { required: 'Due Date is required' })} id="due_date" type="date" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        {errors.due_date && <p className='text-red-600'>{errors.due_date?.message}</p>}
                    </div>

                    <h4 className="font-semibold text-[20px] mt-8">Set Task Reminder</h4>
                    <hr className="mt-2 mb-4" />

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="font-semibold" htmlFor="close_date">Close Date</label>
                            <input {...register("close_date")} id="close_date" type="date" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>
                        <div>
                            <label className="font-semibold" htmlFor="time">Time</label>
                            <input {...register("time")} id="time" type="time" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>
                    </div>

                    <h4 className="font-semibold text-[20px] mt-8">Additional Information</h4>
                    <hr className="mt-2 mb-4" />

                    <div>
                        <label className="font-semibold" htmlFor="selectLeadStatus"> Status<span className="text-red-500">*</span> </label>
                        <select {...register('status', { required: 'Status is required' })} id="selectLeadStatus" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                        >
                            <option value="Not Started">Not Started</option>
                            <option value="Started">Started</option>
                        </select>
                        {errors.status && <p className='text-red-600'>{errors.status?.message}</p>}
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="selectPriorityStatus"> Priority<span className="text-red-500">*</span> </label>
                        <select {...register('priority', { required: 'Priority is required' })} id="selectPriorityStatus" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                        >
                            <option value="Normal">Normal</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                        {errors.priority && <p className='text-red-600'>{errors.priority?.message}</p>}
                    </div>


                    <div className="flex justify-end mt-8 gap-4">
                        <button onClick={() => setisOpen(false)} className="btn px-6 py-2.5 transition-colors duration-300 transform bg-white rounded-xl border">Cancel</button>
                        <button type="Submit" className="px-6 py-2.5 text-white transition-colors duration-300 transform bg-[#00B7E9] rounded-xl hover:bg-[#00B7E9]">Save</button>
                    </div>


                </form>

            </div>
        </div>
    );
};

export default AddTaskModal;