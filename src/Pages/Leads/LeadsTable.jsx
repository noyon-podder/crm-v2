import { AiOutlineFilter } from "react-icons/ai";
import { BiEditAlt, BiSearch, BiDotsHorizontalRounded } from "react-icons/bi";
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { FiPhone } from 'react-icons/fi';
import { GrStatusGood } from 'react-icons/gr';
import { useGetLeadsQuery } from "../../Redux/features/leads/leadsApi";
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";
import tableImage from '../../assets/tableImage/tableIPeople.png';

const LeadsTable = () => {

    const { addLeadsData } = useSelector((state) => state.leads);

    const { data: tableDatas, isLoading } = useGetLeadsQuery(undefined, {
        refetchOnMountOrArgChange: true,
        pollingInterval: 30000,
    });

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="md:mt-6 mt-4 bg-white rounded-xl border border-[#E7E7E7] mb-6">

            <div className="flex items-center justify-between mr-[18px] ml-[18px] gap-2">
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


            {/* Table Start */}
            <div className="mt-6 overflow-x-auto">
                <table className="min-w-full">
                    <thead className="bg-[#F8FAFC]">
                        <tr>
                            <th className="py-2 px-4 text-sm font-normal text-left text-gray-500 ">
                                <div className="flex items-center gap-x-3 font-semibold text-[16px]">
                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded-lg w-5 h-5 " />
                                    Name - Mail
                                </div>
                            </th>

                            <th className="px-12 py-2 text-left text-gray-500  font-semibold text-[16px]">
                                <span className="text-2xl font-semibold">T</span> Title
                            </th>

                            <th className="px-4 py-2 font-semibold text-[16px] text-left text-gray-500 ">
                                <div className="flex items-center gap-x-2">
                                    <SiHomeassistantcommunitystore />
                                    <span>Company</span>
                                </div>
                            </th>

                            <th className="px-4 py-2 font-semibold text-[16px] text-left text-gray-500 ">
                                <div className="flex items-center gap-x-2">
                                    <FiPhone />
                                    <span>Phone</span>
                                </div>
                            </th>

                            <th className="px-4 py-2 font-semibold text-[16px] text-left text-gray-500 ">
                                <div className="flex items-center gap-x-2">
                                    <GrStatusGood color="#717171" />
                                    <span>Status</span>
                                </div>
                            </th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        {/* For Redux */}
                        {
                            addLeadsData?.map(tableData => <tr key={tableData?._id}>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />

                                        <div className="flex items-center gap-x-2">
                                            <img className="object-cover w-10 h-10 rounded-full" src={tableImage} alt="" />
                                            <div>
                                                <h2 className="font-bold">{tableData?.full_name}</h2>
                                                <p className="text-sm font-normal text-[#717171]">info@salesforce.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div>
                                        <p className="text-[#717171]">UI/UX Designer</p>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-[16px] text-[#0A0A0A] whitespace-nowrap">{tableData?.company}</td>
                                <td className="px-4 py-4 text-[16px] text-[#717171]">{tableData?.phone_number}</td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-x-2">
                                        <p className="px-3 py-1 font-semibold text-[#6D1473] rounded-full bg-[#F9E3FB]">{tableData?.lead_status}</p>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-x-6">

                                        <button className="text-gray-500 transition-colors duration-200 focus:outline-none">
                                            <BiDotsHorizontalRounded size={30} />
                                        </button>
                                    </div>
                                </td>
                            </tr>)
                        }

                        {/* For Backend */}
                        {
                            tableDatas?.map(tableData => <tr key={tableData?._id}>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />

                                        <div className="flex items-center gap-x-2">
                                            <img className="object-cover w-10 h-10 rounded-full" src={tableData?.image} alt="" />
                                            <div>
                                                <h2 className="font-bold">{tableData?.name}</h2>
                                                <p className="text-sm font-normal text-[#717171]">{tableData?.mail}</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div>
                                        <p className="text-[#717171]">
                                            {tableData?.title}
                                        </p>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-[16px] text-[#0A0A0A] whitespace-nowrap">{tableData?.company}</td>
                                <td className="px-4 py-4 text-[16px] text-[#717171]">{tableData?.phone}</td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-x-2">
                                        <p className="px-3 py-1 font-semibold text-[#6D1473] rounded-full bg-[#F9E3FB]">{tableData?.status}</p>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-x-6">

                                        <button className="text-gray-500 transition-colors duration-200 focus:outline-none">
                                            <BiDotsHorizontalRounded size={30} />
                                        </button>
                                    </div>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>

                <hr />

                <div className="flex justify-end my-6">
                    <a href="#" className="border flex items-center justify-center px-3 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
                        </svg>
                    </a>

                    <a href="#" className="border hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        1
                    </a>

                    <a href="#" className="border hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        2
                    </a>

                    <a href="#" className="border hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        ...
                    </a>

                    <a href="#" className="border hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        9
                    </a>

                    <a href="#" className="border hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        10
                    </a>

                    <a href="#" className="border flex items-center justify-center px-3 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                        </svg>
                    </a>
                </div>

            </div>

        </div>
    );
};

export default LeadsTable;