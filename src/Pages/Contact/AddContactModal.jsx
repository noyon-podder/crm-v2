import { useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { usePostContactMutation } from "../../Redux/features/contact/contactApi";
import { useDispatch } from "react-redux";
import { addToContact } from "../../Redux/features/contact/contactSlice";


const AddContactModal = ({ setisOpen }) => {

    const [postContact, { isLoading, isError, isSuccess }] = usePostContactMutation();

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const dispatch = useDispatch();

    const handleDataPost = (data) => {
        // postContact(data);
        dispatch(addToContact(data));
        reset();
        setisOpen(false);
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-30">
            <div className="relative overflow-hidden text-left bg-white rounded-lg shadow-xl w-[550px] p-6 max-h-[100vh] overflow-y-auto">

            <div className="flex items-center justify-between">
                    <h3 className="text-[26px] font-bold text-[#0A0A0A] capitalize" id="modal-title"> New Contact </h3>
                    <button className='btn bg-white hover:bg-white border p-1'><RxCross1 onClick={() => setisOpen(false)} size={25}></RxCross1></button>
                </div>
                
                <h4 className="font-semibold text-[20px] mt-2">Contact Information</h4>
                <hr className="mt-2 mb-4" />

                <form onSubmit={handleSubmit(handleDataPost)}>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="account_name">Account Name<span className="text-red-500">*</span></label>
                        <input placeholder="Account Name" {...register("account_name", { required: 'Account Name is required' })} id="account_name" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="contact_owner">Contact Owner</label>
                        <input placeholder="Contact Owner" {...register("contact_owner")} id="contact_owner" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                    </div>


                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className="font-semibold" htmlFor="username">Full Name<span className="text-red-500">*</span></label>
                            <input placeholder="Full Name" {...register("full_name", { required: 'Full Name is required' })} id="username" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                            {errors.full_name && <p className='text-red-600'>{errors.full_name?.message}</p>}
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="title">Title</label>
                            <input placeholder="Title" {...register("title")} id="title" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="email">Email</label>
                        <input placeholder="Email Name" {...register("email")} id="email" type="email" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
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

                    <h4 className="font-semibold text-[20px] mt-6">Additional Information</h4>
                    <hr className="mt-2 mb-4" />

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="mt-3">
                            <label className="font-semibold" htmlFor="additional_phone_number">Additional Phone</label>
                            <input placeholder="Phone Number" {...register("additional_phone_number")} onKeyPress={(e) => {
                                    const keyCode = e.which || e.keyCode;
                                    if (keyCode < 48 || keyCode > 57) {
                                        e.preventDefault();
                                    }
                                }} id="additional_phone_number" type="tel" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>

                        <div className="mt-3">
                            <label className="font-semibold" htmlFor="fax_number">Fax</label>
                            <input placeholder="Fax Number" {...register("fax_number")} onKeyPress={(e) => {
                                    const keyCode = e.which || e.keyCode;
                                    if (keyCode < 48 || keyCode > 57) {
                                        e.preventDefault();
                                    }
                                }} id="fax_number" type="tel" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="reports_to">Reports To</label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="text"
                                placeholder="Search Contacts..."
                                {...register("reports_to")}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="reports_to"
                            />
                            <BiSearch className="text-[#717171]" size={25} />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="department">Department</label>
                        <input placeholder="Department Name" {...register("department")} id="department" type="tel" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                    </div>


                    <h4 className="font-semibold text-[20px] mt-6">Address Information</h4>
                    <hr className="mt-2 mb-4" />

                    <div>
                        <label className="font-semibold" htmlFor="mailing_country_name">Mailing Country </label>
                        <select {...register('mailing_country_name')} id="mailing_country_name" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                        >
                            <option value='none' selected>--none--</option>
                            <option value="usa">USA</option>
                            <option value="canada">CANADA</option>
                        </select>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="mailing_city_name">Mailing City </label>
                        <select {...register('mailing_city_name')} id="mailing_city_name" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                        >
                            <option value='none' selected>--none--</option>
                            <option value="melborn">Melborn</option>
                            <option value="kaliifornia">Kalifornia</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">

                        <div>
                            <label className="font-semibold" htmlFor="mailing_zip_code">Mailing Zip/Postal Code</label>
                            <input placeholder="Zip Code" {...register("mailing_zip_code")} id="mailing_zip_code" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>

                        <div>
                            <label className="font-semibold" htmlFor="mailing_state_name">Mailing State/Province</label>
                            <input placeholder="State/Province" {...register("mailing_state_name")} id="mailing_state_name" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
                        </div>
                    </div>

                    <div>
                        <label className="font-semibold" htmlFor="mailing_street_name">Mailing Street</label>
                        <input placeholder="Street Name" {...register("mailing_street_name")} id="mailing_street_name" type="text" className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl" />
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

export default AddContactModal;