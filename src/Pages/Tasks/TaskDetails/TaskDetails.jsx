import { AiOutlineFilter, AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlinePlus } from "react-icons/ai";
import { BiEditAlt, BiSearch, BiBarChartAlt2 } from "react-icons/bi";
import { FaVirus } from "react-icons/fa";
import ProgressTaskDetails from "./ProgressTaskDetails";
import LeadtaskDetails from "./LeadtaskDetails";
import CompleteTaskDetails from "./CompleteTaskDetails";
import ClosetaskDetails from "./ClosetaskDetails";


const TaskDetails = () => {
    return (
        <div className="md:mt-6 mt-4 bg-white rounded-xl border border-[#E7E7E7] mb-6">

            <div className="flex items-center justify-between md:mx-[18px] gap-2">
                <div className="flex items-center gap-2 rounded-2xl border border-[#E7E7E7] px-[10px] py-3 xl:w-[250px] mt-[24px]">
                    <BiSearch className="text-[#717171]" size={20} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-none w-full outline-none text-[14px] font-semibold placeholder-[#717171]"
                    />
                </div>
                <div className=" mt-[24px] flex items-center gap-2">
                    <button className="btn bg-white border py-3 px-4 rounded-2xl flex items-center gap-2 font-semibold"><AiOutlineFilter /> Filter</button>
                    <button className="btn bg-white border py-3 px-4 rounded-2xl flex items-center gap-2 font-semibold"><BiEditAlt /> Edit</button>
                </div>
            </div>



            <div className="grid lg:grid-cols-12 grid-cols-12 gap-2 md:m-6 mt-4">

                {/* Progress task */}
                <div className="lg:col-span-3 col-span-6">
                    <div className="flex items-center justify-between bg-[#F8FAFC] p-2 border-[#E7E7E7] rounded-lg">
                        <div className="flex items-center gap-2">
                            <FaVirus color="#AE56FF" size={20} />
                            <h2 className="text-[16px] md:text-[20px] font-semibold">Progress</h2>
                            <p className="bg-white text-[#3EC99E] border rounded-xl px-2">4</p>
                        </div>
                        <div className="border-[#E7E7E7] border p-1"><AiOutlinePlus /></div>
                    </div>
                    {/* Preogree task details */}
                    <ProgressTaskDetails />
                </div>

                {/* Lead task */}
                <div className="lg:col-span-3 col-span-6">
                    <div className="flex items-center justify-between bg-[#F8FAFC] p-2 border-[#E7E7E7] rounded-lg">
                        <div className="flex items-center gap-2">
                            <BiBarChartAlt2 color="#3EC99E" size={20} />
                            <h2 className="text-[16px] md:text-[20px] font-semibold">Lead</h2>
                            <p className="bg-white text-[#3EC99E] border rounded-xl px-2">4</p>
                        </div>
                        <div className="border-[#E7E7E7] border p-1"><AiOutlinePlus /></div>
                    </div>
                    {/* Lead task details */}
                    <LeadtaskDetails />
                </div>

                {/* Complete task */}
                <div className="lg:col-span-3 col-span-6">
                    <div className="flex items-center justify-between bg-[#F8FAFC] p-2 border-[#E7E7E7] rounded-lg">
                        <div className="flex items-center gap-2">
                            <AiOutlineCheckCircle color="#00B7E9" size={20} />
                            <h2 className="text-[16px] md:text-[20px] font-semibold">Complete</h2>
                            <p className="bg-white text-[#3EC99E] border rounded-xl px-2">4</p>
                        </div>
                        <div className="border-[#E7E7E7] border p-1"><AiOutlinePlus /></div>
                    </div>
                    {/* Complete task details */}
                    <CompleteTaskDetails />
                </div>

                {/* Close task */}
                <div className="lg:col-span-3 col-span-6">
                    <div className="flex items-center justify-between bg-[#F8FAFC] p-2 border-[#E7E7E7] rounded-lg">
                        <div className="flex items-center gap-2">
                            <AiOutlineCloseCircle color="#EB5757" size={20} />
                            <h2 className="text-[16px] md:text-[20px] font-semibold">Close</h2>
                            <p className="bg-white text-[#3EC99E] border rounded-xl px-2">4</p>
                        </div>
                        <div className="border-[#E7E7E7] border p-1"><AiOutlinePlus /></div>
                    </div>
                    {/* Close task details */}
                    <ClosetaskDetails/>
                </div>

            </div>

        </div>
    );
};

export default TaskDetails;