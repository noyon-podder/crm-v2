import { useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import { RxCross1 } from 'react-icons/rx';
import { usePostCampaignMutation } from "../../Redux/features/campaign/campaignApi";
import { useDispatch } from "react-redux";
import { addToAllCampaign } from "../../Redux/features/campaign/campaignSlice";

const AddNewCampaings = ({ setisOpen }) => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const [postCampaign, { isLoading, isError, isSuccess }] = usePostCampaignMutation();
   
    const dispatch = useDispatch();

    const handleDataPost = (data) => {
        // postCampaign(data);
        dispatch(addToAllCampaign(data))
        reset();
        setisOpen(false);
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-30">
            <div className="relative overflow-hidden text-left bg-white rounded-lg shadow-xl w-[550px] p-6 max-h-[100vh] overflow-y-auto">

                <div className="flex items-center justify-between">
                    <h3 className="text-[26px] font-bold text-[#0A0A0A] capitalize" id="modal-title"> New Campaigns </h3>
                    <button className='btn bg-white hover:bg-white border p-1'><RxCross1 onClick={() => setisOpen(false)} size={25}></RxCross1></button>
                </div>
                <h4 className="font-semibold text-[20px] mt-2">Campaigns Information</h4>
                <hr className="mt-2 mb-4" />

                <form onSubmit={handleSubmit(handleDataPost)}>

                    <div className="grid gap-6 mt-4 grid-cols-2">
                        <div>
                            <label className="font-semibold" htmlFor="campaign_name">Campaign Name<span className="text-red-500">*</span></label>
                            <input placeholder="Customer Conference" {...register("campaign_name", { required: 'Campaign Name is required' })} id="campaign_name" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                            {errors.campaign_name && <p className='text-red-600'>{errors.campaign_name?.message}</p>}
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="campaign_owner">Campaign Owner</label>
                            <input placeholder="SK Murad Hossain" {...register("campaign_owner")} id="campaign_owner" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="parent_campaign">Parent Campaign</label>
                            <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                                <input
                                    type="text"
                                    placeholder="Search Campaign"
                                    {...register("parent_campaign")}
                                    className="bg-none w-full outline-none text-[14px] font-semibold"
                                    id="parent_campaign"
                                />
                                <BiSearch className="text-[#717171]" size={25} />
                            </div>
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="status">Status </label>
                            <select {...register('status')} id="status" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                            >
                                <option value='none' selected>--none--</option>
                                <option value="Planed">Planed</option>
                                <option value="Success">Success</option>
                            </select>
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="type">Type</label>
                            <input placeholder="Event" {...register("type")} id="type" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="start_date">Start Date<span className="text-red-500">*</span></label>
                            <input {...register("start_date", { required: 'Start Date is required' })} id="start_date" type="date" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                            {errors.start_date && <p className='text-red-600'>{errors.start_date?.message}</p>}
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="description">Description</label>
                            <input placeholder="Description..." {...register("description")} id="description" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="end_date">End Date<span className="text-red-500">*</span></label>
                            <input {...register("end_date", { required: 'End Date is required' })} id="end_date" type="date" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                            {errors.end_date && <p className='text-red-600'>{errors.end_date?.message}</p>}
                        </div>

                    </div>

                    <h4 className="font-semibold text-[20px] mt-2">Planing</h4>
                <hr className="mt-2 mb-4" />

                    <div className="grid gap-6 mt-4 grid-cols-2">

                        <div>
                            <label className="font-semibold" htmlFor="num_sent_campaign">Num Sent in Campaign</label>
                            <input placeholder="00" {...register("num_sent_campaign")} id="num_sent_campaign" type="number" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="budget_cost">Budget Cost</label>
                            <input placeholder="--none--" {...register("budget_cost")} id="budget_cost" type="number" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="expected_response">Expected Response</label>
                            <input placeholder="0.00%" {...register("expected_response")} id="expected_response" type="number" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="actual_cost">Actual Cost</label>
                            <input placeholder="--none--" {...register("actual_cost")} id="actual_cost" type="number" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>
                        
                    </div>

                    <div>
                            <label className="font-semibold" htmlFor="expected_revenue">Expected revenue in campaign</label>
                            <input placeholder="--none--" {...register("expected_revenue")} id="expected_revenue" type="number" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>

                    <div className="flex justify-end mt-6 gap-4">
                        <button onClick={() => setisOpen(false)} className="btn px-6 py-2.5 transition-colors duration-300 transform bg-white rounded-xl border">Cancel</button>
                        <button type="Submit" className="px-6 py-2.5 text-white transition-colors duration-300 transform bg-[#00B7E9] rounded-xl hover:bg-[#00B7E9]">Save</button>
                    </div>


                </form>

            </div>
        </div>
    );
};

export default AddNewCampaings;