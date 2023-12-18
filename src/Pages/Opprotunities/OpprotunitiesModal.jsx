
import { useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { usePostopportunityMutation } from "../../Redux/features/opportunity/opportunityApi";
import { useDispatch } from "react-redux";
import { addToOpportunity } from "../../Redux/features/opportunity/opportunitySlice";


const OpprotunitiesModal = ({ setisOpen }) => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [postOpportunity, { isLoading, isError, isSuccess }] = usePostopportunityMutation();

    const dispatch = useDispatch();


    const handleDataPost = (data) => {
        // postOpportunity(data);
        dispatch(addToOpportunity(data));
        reset();
        setisOpen(false);
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-30">
            <div className="relative overflow-hidden text-left bg-white rounded-lg shadow-xl w-[550px] p-6 max-h-[100vh] overflow-y-auto">

                <div className="flex items-center justify-between">
                    <h3 className="text-[26px] font-bold text-[#0A0A0A] capitalize" id="modal-title"> New Opportunities</h3>
                    <button className='btn bg-white hover:bg-white border p-1'><RxCross1 onClick={() => setisOpen(false)} size={25}></RxCross1></button>
                </div>

                <h4 className="font-semibold text-[20px] mt-2">Opportunities Information</h4>
                <hr className="mt-2 mb-4" />

                <form onSubmit={handleSubmit(handleDataPost)}>

                    <div>
                        <label className="font-semibold" htmlFor="account_name">Account Name<span className="text-red-500">*</span></label>
                        <input placeholder="Account Name" {...register("account_name", { required: 'Full Name is required' })} id="account_name" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        {errors.account_name && <p className='text-red-600'>{errors.account_name?.message}</p>}
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="opprtunities_owner">Opportunities Owner</label>
                        <input placeholder="Opportunities Owner" {...register("opprtunities_owner")} id="opprtunities_owner" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                    </div>

                    <div className="grid gap-6 mt-4 grid-cols-2">
                        <div>
                            <label className="font-semibold" htmlFor="opportunities_name">Opportunities Name<span className="text-red-500">*</span></label>
                            <input placeholder="Opportunities Name" {...register("opportunities_name", { required: 'Opportunities Name is required' })} id="opportunities_name" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                            {errors.opportunities_name && <p className='text-red-600'>{errors.opportunities_name?.message}</p>}
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="amount">Amount</label>
                            <input placeholder="$000.00.00" {...register("amount")} id="amount" type="number" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="close_date">Close Date<span className="text-red-500">*</span></label>
                            <input {...register("close_date", { required: 'Close Date is required' })} id="close_date" type="date" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                            {errors.close_date && <p className='text-red-600'>{errors.close_date?.message}</p>}
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="stage"> Stage </label>
                            <select {...register('stage_name')} id="stage" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                            >
                                <option value='none' selected>--none--</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="probability_number">Probability</label>
                            <input placeholder="00%" {...register("probability_number")} id="probability_number" type="number" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="forecast"> Forecast Category<span className="text-red-500">*</span> </label>
                            <select {...register('forecast_name', { required: 'Forecast Category is required' })} id="forecast" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                            >
                                <option value='none' selected>--none--</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                            {errors.forecast_name && <p className='text-red-600'>{errors.forecast_name?.message}</p>}
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="next_step">Next Step</label>
                        <input placeholder="............." {...register("next_step")} id="next_step" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                    </div>


                    <h4 className="font-semibold text-[20px] mt-6">Additional Information</h4>
                    <hr className="mt-2 mb-4" />

                    <div className="grid gap-6 mt-4 grid-cols-2">
                        <div>
                            <label className="font-semibold" htmlFor="type"> Type </label>
                            <select {...register('additional_type')} id="type" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                            >
                                <option value='none' selected>--none--</option>
                                <option value="big">Big</option>
                                <option value="small">Small</option>
                            </select>
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="selectLeadSource"> Lead Source </label>
                            <select {...register('lead_source')} id="selectLeadSource" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                            >
                                <option value='none' selected>--none--</option>
                                <option value="facebook">Facebook</option>
                                <option value="instagram">Instagram</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="primary_campaign">Primary Campaign Source</label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="text"
                                placeholder="Search Campaign..."
                                {...register("primary_campaign")}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="primary_campaign"
                            />
                            <BiSearch className="text-[#717171]" size={25} />
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

                    <h4 className="font-semibold text-[20px] mt-6">Other Information</h4>
                    <hr className="mt-2 mb-4" />

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="other_contact">Contact</label>
                        <input
                            placeholder="Search Contacts......"
                            {...register("other_contact")}
                            id="other_contact"
                            className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                        ></input>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="synced_quote">Synced Quote</label>
                        <input
                            placeholder="Synced Quote......"
                            {...register("synced_quote")}
                            id="synced_quote"
                            className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                        ></input>
                    </div>




                    <div className="flex justify-end mt-6 gap-4">
                        <button onClick={() => setisOpen(false)} className="btn px-6 py-2.5 transition-colors duration-300 transform bg-white rounded-xl border">Cancel</button>
                        <button type="Submit" className="px-6 py-2.5 text-white transition-colors duration-300 transform bg-[#00B7E9] rounded-xl hover:bg-[#00B7E9]">Create Now</button>
                    </div>


                </form>

            </div>
        </div>
    );
};

export default OpprotunitiesModal;