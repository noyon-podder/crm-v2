import { AiOutlineMenu } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { LiaBirthdayCakeSolid } from "react-icons/lia";


const LeadsEvents = () => {
    return (
        <div>
            <div className="flex items-center justify-between text-[#717171] mx-6 mt-7">
                <AiOutlineMenu size={20} />
                <div className="flex items-center gap-2">
                    <p>May 2023</p>
                    <BsChevronDown size={20} />
                    <BiDotsVerticalRounded size={20} />
                </div>
            </div>
            <hr className="my-4" />

            <div className="flex px-3">
                <div className="w-full ">
                    <ul className="">
                        <li className="relative flex gap-4 pb-4">
                            <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-[#E7E7E7]"></div>

                            <h2 className="text-[#5D6B82] text-base font-semibold">
                                Date
                            </h2>
                            <div className="flex items-center justify-between w-full">
                                <h2 className="text-[#5D6B82] text-base font-semibold">
                                    Events
                                </h2>
                                <HiMiniViewfinderCircle color="#5D6B82" size={20} />
                            </div>
                        </li>
                        <li className="relative flex gap-4 pb-6 ">
                            <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-[#E7E7E7] ">
                                <div className="relative w-3 h-3 rounded-full border border-[#837DFB] bg-white z-40"></div>
                            </div>
                            <div className="w-full flex">
                                <p className="text-[#5D6B82] text-sm font-semibold ">
                                    01 Sun
                                </p>
                                <div className=" w-full">
                                    <div className="py-[14px] px-5 bg-[#837DFB] flex items-center justify-between rounded-lg w-full">
                                        <h2 className="text-white text-base font-semibold">
                                            Roman Birthday
                                        </h2>
                                        <LiaBirthdayCakeSolid color="#fff" size={22} />
                                    </div>
                                    <div className="bg-[#00B7E9] px-5 py-2 rounded-md w-full mt-2">
                                        <h2 className="text-white font-semibold text-base">
                                            New years, Day
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="relative flex gap-4 pb-6 ">
                            <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-[#E7E7E7] ">
                                <div className="relative w-3 h-3 rounded-full border border-[#837DFB] bg-white z-40"></div>
                            </div>
                            <div className="w-full flex">
                                <p className="text-[#5D6B82] text-sm font-semibold ">
                                    02 Mon
                                </p>
                                <div className=" w-full">
                                    <div className="py-[14px] px-5 bg-[#F5F6F7] flex items-center justify-between rounded-lg w-full">
                                        <h2 className="text-[#354764] text-base font-semibold">
                                            Brand Design
                                        </h2>
                                        <span className="text-base text-[#354764] font-normal">
                                            5.08 - 7.30
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="relative flex gap-4 pb-6 ">
                            <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-[#E7E7E7] ">
                                <div className="relative w-3 h-3 rounded-full border border-[#837DFB] bg-white z-40"></div>
                            </div>
                            <div className="w-full flex">
                                <p className="text-[#5D6B82] text-sm font-semibold ">
                                    03 Tue
                                </p>
                                <div className="w-full">
                                    <div className="py-[14px] px-5 bg-[#F5F6F7] flex items-center justify-between rounded-lg w-full">
                                        <h2 className="text-[#354764] text-base font-semibold">
                                            Dashboard Design
                                        </h2>
                                        <span className="text-base text-[#354764] font-normal">
                                            5.08 - 7.30
                                        </span>
                                    </div>
                                    <div className="py-[14px] px-5 bg-[#3EC99E] flex items-center justify-between rounded-lg w-full mt-2">
                                        <h2 className="text-[#FAFBFB] text-base font-semibold">
                                            Dashboard Trial
                                        </h2>
                                        <span className="text-base text-[#FAFBFB] font-normal">
                                            5.08 - 7.30
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>



        </div>
    );
};

export default LeadsEvents;