import { useForm } from "react-hook-form";
import { RxCross1 } from 'react-icons/rx';
import { AiOutlinePlus } from "react-icons/ai";
import { usePostRecentAddDashboardMutation } from "../../Redux/features/dashboard/dashboardApi";
import { useDispatch } from "react-redux";
import { addToRecentDashboard } from "../../Redux/features/dashboard/dashboardSlice";


const AddDasboard = ({ setisOpen }) => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const [postRecentAddDashboard, { isLoading, isError, isSuccess }] = usePostRecentAddDashboardMutation();

    const dispatch = useDispatch();

    const handleDataPost = (data) => {
        // postRecentAddDashboard(data);
        dispatch(addToRecentDashboard(data));
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
                        <label className="font-semibold" htmlFor="name">Name<span className="text-red-500">*</span></label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="text"
                                placeholder="Name"
                                {...register("name", { required: 'Name is required' })}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="name"
                            />
                        </div>
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="website">Website</label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="text"
                                placeholder="website"
                                {...register("website")}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="website"
                            />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="title">Title</label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="text"
                                placeholder="title"
                                {...register("title")}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="title"
                            />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="phone">
                            Phone
                        </label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="tel"
                                placeholder="Phone"
                                {...register("phone")}
                                onKeyPress={(e) => {
                                    const keyCode = e.which || e.keyCode;
                                    if (keyCode < 48 || keyCode > 57) {
                                        e.preventDefault();
                                    }
                                }}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="phone"
                            />
                        </div>
                    </div>


                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="company">Company</label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="text"
                                placeholder="company"
                                {...register("company")}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="company"
                            />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="industry">Industry</label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="text"
                                placeholder="industry"
                                {...register("industry")}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="industry"
                            />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="folder">Folder</label>
                        <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-2 mt-2 w-full">
                            <input
                                type="text"
                                placeholder="folder"
                                {...register("folder")}
                                className="bg-none w-full outline-none text-[14px] font-semibold"
                                id="folder"
                            />
                        </div>
                    </div>

                    <div className="mt-3">
                        <label className="font-semibold" htmlFor="description">Description</label>
                        <textarea
                            placeholder="description......"
                            {...register("description")}
                            id="description"
                            className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-xl"
                            rows="3"
                        ></textarea>
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

export default AddDasboard;