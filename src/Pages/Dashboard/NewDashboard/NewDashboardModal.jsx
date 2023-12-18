import { useForm } from "react-hook-form";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { usePostNewAddDashboardMutation } from "../../../Redux/features/dashboard/dashboardApi";
import { useDispatch } from "react-redux";
import { addToNewDashboard } from "../../../Redux/features/dashboard/dashboardSlice";


const NewDashboardModal = ({ setisOpen }) => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const [postNewAddDashboard, { isLoading, isError, isSuccess }] = usePostNewAddDashboardMutation();

    const dispatch = useDispatch();

    const handleDataPost = (data) => {
        // postNewAddDashboard(data);
        dispatch(addToNewDashboard(data));
        reset();
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-30">
            <div className="relative overflow-hidden text-left bg-white rounded-lg shadow-xl w-[550px] p-6 max-h-[100vh] overflow-y-auto">

                <div className="flex items-center justify-between">
                    <h3 className="text-[26px] font-bold text-[#0A0A0A] capitalize" id="modal-title"> New Dashboard </h3>
                    <button className='btn bg-white hover:bg-white border p-1'><RxCross1 onClick={() => setisOpen(false)} size={25}></RxCross1></button>
                </div>

                <form onSubmit={handleSubmit(handleDataPost)}>

                    <div className="mt-6">
                        <label className="font-semibold" htmlFor="report">Report</label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="text"
                                placeholder="Marketing Exes Leads by Source"
                                {...register("report")}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="report"
                            />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="y_axis_lead_source">Y-Axis</label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="text"
                                placeholder="Lead Source"
                                {...register("y_axis_lead_source")}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="y_axis_lead_source"
                            />
                        </div>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="date"
                                placeholder="Created Month"
                                {...register("y_axis_created_month")}
                                className="bg-none w-full outline-none text-[14px] font-semibold placeholder:text-[#717171]"
                                id="y_axis_created_month"
                            />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="x_axis_record_count">X-Axis</label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="text"
                                placeholder="Record Count"
                                {...register("x_axis_record_count")}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="x_axis_record_count"
                            />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="display_units">Display Units</label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="text"
                                placeholder="Shortened Number"
                                {...register("display_units")}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="display_units"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-x-3 font-semibold text-[14px] mt-5">
                        <input type="checkbox" className="text-black border-gray-300 rounded-lg w-5 h-5" />
                        Show Values
                    </div>

                    <div className="flex items-center gap-x-3 font-semibold text-[14px] mt-5">
                        <input type="checkbox" className="text-black border-gray-300 rounded-lg w-5 h-5" />
                        Show Chatter Photos
                    </div>

                    <h1 className="mt-3 font-semibold text-[16px]">X-Axis Range</h1>
                    <div className="flex items-center gap-x-3 font-semibold text-[14px] mt-5">
                        <input type="checkbox" className="text-black border-gray-300 rounded-lg w-5 h-5" />
                        Automatic
                    </div>

                    <div className="flex items-center gap-x-3 font-semibold text-[14px] mt-3">
                        <input type="checkbox" className="text-black border-gray-300 rounded-lg w-5 h-5" />
                        Custom
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="decimal_places">Decimal Places</label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="text"
                                placeholder="Autometic"
                                {...register("decimal_places")}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="decimal_places"
                            />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="selectSortBy"> Sort By </label>
                        <select {...register('sort_by', { required: 'Lead Status is required' })} id="selectSortBy" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                        >
                            <option value='Lead Source' selected>Lead Source</option>
                            <option value="active">Active</option>
                            <option value="pending">Pending</option>
                        </select>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="selectThenSortBy">Then Sort By </label>
                        <select {...register('then_sort_by', { required: 'Lead Status is required' })} id="selectThenSortBy" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                        >
                            <option value='Lead Source' selected>Lead Source</option>
                            <option value="active">Active</option>
                            <option value="pending">Pending</option>
                        </select>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="customer_link">Customer Link</label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="text"
                                placeholder="New"
                                {...register("customer_link")}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="customer_link"
                            />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="max_group_displayed">Max Group Displayed</label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="number"
                                placeholder="100"
                                {...register("max_group_displayed")}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="max_group_displayed"
                            />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="title">Title</label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="text"
                                placeholder="Marketing Exec leads by Source"
                                {...register("title")}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="title"
                            />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="sub_title">Sub Title</label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="text"
                                placeholder="Marketing Exec leads by Source"
                                {...register("sub_title")}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="sub_title"
                            />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="footer">Footer</label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="text"
                                placeholder="Marketing Exec leads by Source"
                                {...register("footer")}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="footer"
                            />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="legend_position">Legend Position</label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="text"
                                placeholder="Marketing Exec leads by Source"
                                {...register("legend_position")}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="legend_position"
                            />
                        </div>
                    </div>



                    <div className="flex justify-end mt-8 gap-4">
                        <button onClick={() => setisOpen(false)} className="btn px-6 py-2.5 transition-colors duration-300 transform bg-white rounded-xl border">Cancel</button>
                        <button type="Submit" className="px-6 py-2.5 text-white transition-colors duration-300 transform bg-[#00B7E9] rounded-xl hover:bg-[#00B7E9] flex items-center gap-2"><AiOutlinePlus /> Create Now</button>
                    </div>


                </form>

            </div>
        </div>
    );
};

export default NewDashboardModal;