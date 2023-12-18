import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { CgArrowTopRight } from "react-icons/cg";
import { HiOutlineLightBulb } from "react-icons/hi";


const HomeTabs = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-5">

            <div className="bg-[#D4F3FB] rounded-xl border border-gray-300 flex items-center justify-between p-6 gap-4">
                <div>
                    <p className="w-[50px] h-[50px] bg-[#00B7E9] rounded-full"><AiOutlineShoppingCart size={30} color="#FFFFFF" className="relative left-2 top-3"></AiOutlineShoppingCart></p>
                    <h3 className="xl:text-[18px] lg:text-[14px] text-[18px] font-semibold mt-6">Total Spend</h3>
                </div>
                <div>
                    <h2 className="font-semibold text-[34px]">$11.67M</h2>
                    <p className="text-[#069669] mt-6 flex items-center gap-2">+33.45% <span className="w-[20px] h-[20px] bg-white rounded-full"><CgArrowTopRight className="relative top-[3px]" color="#00B7E9"></CgArrowTopRight></span></p>
                </div>
            </div>

            <div className="bg-[#DEF6EE] rounded-xl border border-gray-300 flex items-center justify-between p-6 gap-4">
                <div>
                    <p className="w-[50px] h-[50px] bg-[#3EC99E] rounded-full"><HiOutlineLightBulb size={30} color="#FFFFFF" className="relative left-2 top-3"></HiOutlineLightBulb></p>
                    <h3 className="xl:text-[18px] lg:text-[14px] text-[18px] font-semibold mt-6">Total Impressions</h3>
                </div>
                <div>
                    <h2 className="font-semibold text-[34px]">$47.404</h2>
                    <p className="text-[#FF0C27] mt-6 flex items-center gap-2">-112.4% <span className="w-[20px] h-[20px] bg-white rounded-full"><CgArrowTopRight className="relative top-[3px]" color="#3EC99E"></CgArrowTopRight></span></p>
                </div>
            </div>

            <div className="bg-[#EAE9FE] rounded-xl border border-gray-300 flex items-center justify-between p-6 gap-4">
                <div>
                    <p className="w-[50px] h-[50px] bg-[#837DFB] rounded-full"><BiSolidBarChartAlt2 size={30} color="#FFFFFF" className="relative left-2 top-3"></BiSolidBarChartAlt2></p>
                    <h3 className="xl:text-[18px] lg:text-[14px] text-[18px] font-semibold mt-6">Total Sales</h3>
                </div>
                <div>
                    <h2 className="font-semibold text-[34px]">$12.33B</h2>
                    <p className="text-[#069669] mt-6 flex items-center gap-2">+4.46% <span className="w-[20px] h-[20px] bg-white rounded-full"><CgArrowTopRight className="relative top-[3px]" color="#837DFB"></CgArrowTopRight></span></p>
                </div>
            </div>

        </div>
    );
};

export default HomeTabs;