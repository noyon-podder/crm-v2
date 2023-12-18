import { useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { usePostAccountsMutation } from "../../Redux/features/account/accountApi";
import { useDispatch } from "react-redux";
import { addToAccount } from "../../Redux/features/account/accountSlice";


const AdDAccountModal = ({ setisOpen }) => {

    const [postAccount, { isLoading, isError, isSuccess }] = usePostAccountsMutation();

    const dispatch = useDispatch();


    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const handleDataPost = (data) => {
        dispatch(addToAccount(data))
        postAccount(data);
        reset();
        setisOpen(false);
    }


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-30">
            <div className="relative overflow-hidden text-left bg-white rounded-lg shadow-xl w-[550px] p-6 max-h-[100vh] overflow-y-auto">

            <div className="flex items-center justify-between">
                    <h3 className="text-[26px] font-bold text-[#0A0A0A] capitalize" id="modal-title"> New Account </h3>
                    <button className='btn bg-white hover:bg-white border p-1'><RxCross1 onClick={() => setisOpen(false)} size={25}></RxCross1></button>
                </div>
                
                <h4 className="font-semibold text-[20px] mt-2">Account Information</h4>
                <hr className="mt-2 mb-4" />

                <form onSubmit={handleSubmit(handleDataPost)}>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="account_name">Account Name<span className="text-red-500">*</span></label>
                        <input placeholder="Account Name" {...register("account_name", { required: 'Account Name is required' })} id="account_name" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="account_owner">Account Owner</label>
                        <input placeholder="Account Owner" {...register("account_owner")} id="account_owner" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="phone_number">Phone</label>
                        <input placeholder="Phone Number" {...register("phone_number")} onKeyPress={(e) => {
                                    const keyCode = e.which || e.keyCode;
                                    if (keyCode < 48 || keyCode > 57) {
                                        e.preventDefault();
                                    }
                                }} id="phone_number" type="tel" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="account_name">Parent Account</label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="text"
                                placeholder="Search Accounts..."
                                {...register("parent_account")}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="account_name"
                            />
                            <BiSearch className="text-[#717171]" size={25} />
                        </div>
                    </div>

                    <div className="grid gap-6 mt-4 grid-cols-2">
                        <div>
                            <label className="font-semibold" htmlFor="selectLeadSource"> Type </label>
                            <select {...register('lead_source')} id="selectLeadSource" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                            >
                                <option value='none' selected>--none--</option>
                                <option value="saving">Saving</option>
                                <option value="running">Running</option>
                            </select>
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="selectIndustryType"> Industry </label>
                            <select {...register('industry_type')} id="selectIndustryType" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                            >
                                <option value='none' selected>--none--</option>
                                <option value="big">Big</option>
                                <option value="small">Small</option>
                            </select>
                        </div>
                    </div>

                    <h4 className="font-semibold text-[20px] mt-6">Additional Information</h4>
                    <hr className="mt-2 mb-4" />


                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="website">Website</label>
                        <input placeholder="Website Link" {...register("website")} id="website" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                    </div>

                    <div className="grid gap-6 mt-4 grid-cols-2">
                        <div className="mt-3">
                            <label className="font-semibold" htmlFor="additional_phone_number">Phone</label>
                            <input placeholder="Phone" {...register("additional_phone_number")} onKeyPress={(e) => {
                                    const keyCode = e.which || e.keyCode;
                                    if (keyCode < 48 || keyCode > 57) {
                                        e.preventDefault();
                                    }
                                }} id="additional_phone_number" type="tel" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>

                        <div className="mt-3">
                            <label className="font-semibold" htmlFor="employee_number">Employee</label>
                            <input placeholder="Employee" {...register("employee_number")} id="employee_number" type="number" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
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

                    <h4 className="font-semibold text-[20px] mt-6">Address Information</h4>
                    <hr className="mt-2 mb-4" />

                    <div>
                        <label className="font-semibold" htmlFor="billing_country_name">Billing Country </label>
                        <select {...register('billing_country_name')} id="billing_country_name" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                        >
                            <option value='none' selected>--none--</option>
                            <option value="usa">USA</option>
                            <option value="canada">CANADA</option>
                        </select>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="billing_city_name">Billing City </label>
                        <select {...register('billing_city_name')} id="billing_city_name" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                        >
                            <option value='none' selected>--none--</option>
                            <option value="melborn">Melborn</option>
                            <option value="kaliifornia">Kalifornia</option>
                        </select>
                    </div>

                    <div className="grid gap-6 mt-4 grid-cols-2">
                            <div>
                                <label className="font-semibold" htmlFor="billing_zip_code">Billing Zip/Postal Code</label>
                                <input placeholder="Zip Code" {...register("billing_zip_code")} id="billing_zip_code" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                            </div>

                            <div>
                                <label className="font-semibold" htmlFor="billing_state_name">Billing State/Province</label>
                                <input placeholder="State Name" {...register("billing_state_name")} id="billing_state_name" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                            </div>
                    </div>

                    <div>
                        <label className="font-semibold" htmlFor="billing_street_name">Billing Street</label>
                        <input placeholder="Billing Street Name" {...register("billing_street_name")} id="billing_street_name" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                    </div>


                    <hr className="my-6" />

                    <div>
                        <label className="font-semibold" htmlFor="shipping_country_name">Shipping Country </label>
                        <select {...register('shipping_country_name')} id="shipping_country_name" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                        >
                            <option value='none' selected>--none--</option>
                            <option value="usa">USA</option>
                            <option value="canada">CANADA</option>
                        </select>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="shipping_city_name">Shipping City </label>
                        <select {...register('shipping_city_name')} id="shipping_city_name" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                        >
                            <option value='none' selected>--none--</option>
                            <option value="melborn">Melborn</option>
                            <option value="kaliifornia">Kalifornia</option>
                        </select>
                    </div>

                    <div className="grid gap-6 mt-4 grid-cols-2">
                            <div>
                                <label className="font-semibold" htmlFor="shipping_zip_code">Shipping Zip Code</label>
                                <input placeholder="Zip Code" {...register("shipping_zip_code")} id="shipping_zip_code" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                            </div>

                            <div>
                                <label className="font-semibold" htmlFor="shipping_state_name">Shipping State/Province</label>
                                <input placeholder="State Name" {...register("shipping_state_name")} id="shipping_state_name" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                            </div>
                    </div>

                    <div>
                        <label className="font-semibold" htmlFor="shipping_street_name">Shipping Street</label>
                        <input placeholder="Shipping Street Name" {...register("shipping_street_name")} id="shipping_street_name" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
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

export default AdDAccountModal;