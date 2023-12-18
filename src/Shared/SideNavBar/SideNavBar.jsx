
import { BiBarChartAlt2, BiCalendar, BiSearch } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { RiAccountBoxFill } from "react-icons/ri";
import { MdContactPage, MdOutlineCampaign, MdOutlineReport, MdOutlineTask, MdRequestQuote } from "react-icons/md";
import { SiPerforce } from "react-icons/si";
import { LuLayoutDashboard } from "react-icons/lu";
import { GoTasklist } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const SideNavBar = () => {

    const usePathname = useLocation();
    const pathname = usePathname?.pathname;

    const navBar = (
        <>
            <div className="flex flex-col">
                <div
                    className={
                        pathname === "/"
                            ? "nab_item text-[#E52CF0]"
                            : "text-[#717171] nab_item"
                    }
                >
                    <div className="flex items-center justify-between text-[18px] font-semibold">
                        <Link to="/" className="hover:text-[#E52CF0] flex items-center gap-2">
                            <AiFillHome />
                            Home
                        </Link>
                    </div>
                </div>
                <div
                    className={
                        pathname === "/leads"
                            ? "nab_item text-[#E52CF0]"
                            : "text-[#717171] nab_item"
                    }
                >
                    <div className="flex items-center justify-between mt-3 text-[18px] font-semibold">
                        <Link
                            to="/leads"
                            className="hover:text-[#E52CF0] flex items-center gap-2"
                        >
                            <BiBarChartAlt2 />
                            Leads
                        </Link>
                    </div>
                </div>
                <div
                    className={
                        pathname === "/account"
                            ? "nab_item text-[#E52CF0]"
                            : "text-[#717171] nab_item"
                    }
                >
                    <div className="flex items-center justify-between mt-3 text-[18px] font-semibold">
                        <Link
                            to="/account"
                            className="hover:text-[#E52CF0] flex items-center gap-2"
                        >
                            <RiAccountBoxFill />
                            Account
                        </Link>
                    </div>
                </div>
                <div
                    className={
                        pathname === "/contact"
                            ? "nab_item text-[#E52CF0]"
                            : "text-[#717171] nab_item"
                    }
                >
                    <div className="flex items-center justify-between mt-3 text-[18px] font-semibold">
                        <Link
                            to="/contact"
                            className="hover:text-[#E52CF0] flex items-center gap-2"
                        >
                            <MdContactPage />
                            Contact
                        </Link>
                    </div>
                </div>
                <div
                    className={
                        pathname?.startsWith("/opportunities")
                            ? "nab_item text-[#E52CF0]"
                            : "text-[#717171] nab_item"
                    }
                >
                    <div className="flex items-center justify-between mt-3 text-[18px] font-semibold">
                        <Link
                            to="/opportunities"
                            className="hover:text-[#E52CF0] flex items-center gap-2"
                        >
                            <GoTasklist />
                            Opportunities
                        </Link>
                    </div>
                </div>
                <div
                    className={
                        pathname === "/calender"
                            ? "nab_item text-[#E52CF0]"
                            : "text-[#717171] nab_item"
                    }
                >
                    <div className="flex items-center justify-between mt-3 text-[18px] font-semibold">
                        <Link
                            to="/calender"
                            className="hover:text-[#E52CF0] flex items-center gap-2"
                        >
                            <BiCalendar />
                            Calender
                        </Link>
                    </div>
                </div>
                <div
                    className={
                        pathname === "/forecasts"
                            ? "nab_item text-[#E52CF0]"
                            : "text-[#717171] nab_item"
                    }
                >
                    <div className="flex items-center justify-between mt-3 text-[18px] font-semibold">
                        <Link
                            to="/forecasts"
                            className="hover:text-[#E52CF0] flex items-center gap-2"
                        >
                            <SiPerforce />
                            Forecasts
                        </Link>
                    </div>
                </div>
                <div
                    className={
                        pathname === "/dashboard" || pathname === "/newDashboard"
                            ? "nab_item text-[#E52CF0]"
                            : "text-[#717171] nab_item"
                    }
                >
                    <div className="flex items-center justify-between mt-3 text-[18px] font-semibold">
                        <Link
                            to="/dashboard"
                            className="hover:text-[#E52CF0] flex items-center gap-2"
                        >
                            <LuLayoutDashboard />
                            Dashboard
                        </Link>
                    </div>
                </div>
                <div
                    className={
                        pathname === "/reports"
                            ? "nab_item text-[#E52CF0]"
                            : "text-[#717171] nab_item"
                    }
                >
                    <div className="flex items-center justify-between mt-3 text-[18px] font-semibold">
                        <Link
                            to="/reports"
                            className="hover:text-[#E52CF0] flex items-center gap-2"
                        >
                            <MdOutlineReport />
                            Reports
                        </Link>
                    </div>
                </div>
                <div
                    className={
                        pathname === "/quotes"
                            ? "nab_item text-[#E52CF0]"
                            : "text-[#717171] nab_item"
                    }
                >
                    <div className="flex items-center justify-between mt-3 text-[18px] font-semibold">
                        <Link
                            to="/quotes"
                            className="hover:text-[#E52CF0] flex items-center gap-2"
                        >
                            <MdRequestQuote />
                            Quotes
                        </Link>
                    </div>
                </div>
                <div
                    className={
                        pathname === "/campaings"
                            ? "nab_item text-[#E52CF0]"
                            : "text-[#717171] nab_item"
                    }
                >
                    <div className="flex items-center justify-between mt-3 text-[18px] font-semibold">
                        <Link
                            to="/campaings"
                            className="hover:text-[#E52CF0] flex items-center gap-2"
                        >
                            <MdOutlineCampaign />
                            Campaigns
                        </Link>
                    </div>
                </div>
                <div
                    className={
                        pathname === "/tasks"
                            ? "nab_item text-[#E52CF0]"
                            : "text-[#717171] nab_item"
                    }
                >
                    <div className="flex items-center justify-between mt-3 text-[18px] font-semibold">
                        <Link
                            to="/tasks"
                            className="hover:text-[#E52CF0] flex items-center gap-2"
                        >
                            <MdOutlineTask />
                            Tasks
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <div className="hidden lg:block pl-5">
          <div className="">
            <div className="mt-5">
              <div className="flex items-center gap-2 rounded-lg border border-[#E7E7E7] xl:w-[200px] lg:w-[140px] px-[10px] ">
                <BiSearch className="text-[#717171]" size={25} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-none w-full outline-none text-[18px] placeholder-[#717171]"
                />
              </div>
              <div className="mt-8">
                <div>{navBar}</div>
              </div>
            </div>

            <div className="mt-20">
              <div className="flex items-center text-[18px] font-semibold">
                <button className="text-red-500 flex items-center gap-2">
                  <FiLogOut />
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default SideNavBar;