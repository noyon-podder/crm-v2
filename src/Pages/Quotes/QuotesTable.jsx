import { AiOutlineFilter } from "react-icons/ai";
import { BiDotsHorizontalRounded, BiEditAlt, BiSearch } from "react-icons/bi";
import { BsArrowDownCircle, BsCalendar2X } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { FaMoneyBills } from "react-icons/fa6";
import { useGetQuotesQuery } from "../../Redux/features/quotes/quotesApi";
import Loading from '../Loading/Loading';

const QuotesTable = () => {

    const { data: tableDatas, isLoading } = useGetQuotesQuery(undefined, {
        refetchOnMountOrArgChange: true,
        pollingInterval: 30000,
    });
    
    if(isLoading){
        <Loading/>
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
                <table className="min-w-full table">
                    <thead className="bg-[#F8FAFC]">
                        <tr>
                            <th className="py-2 px-4 text-sm font-normal text-left text-gray-500 ">
                                <div className="flex items-center gap-x-3 font-semibold xl:text-[16px] text-[13px]">
                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded-lg w-5 h-5 " />
                                    Quotes Name
                                </div>
                            </th>

                            <th className="px-12 py-2 text-left text-gray-500  font-semibold xl:text-[16px] text-[13px]">
                                <div className="flex items-center gap-x-2">
                                    <SlCalender />
                                    <span>Opportunity Name</span>
                                </div>
                            </th>

                            <th className="px-4 py-2 font-semibold xl:text-[16px] text-[13px] text-left text-gray-500 ">
                                <div className="flex items-center gap-x-2">
                                    <BsArrowDownCircle />
                                    <span>Syncing</span>
                                </div>
                            </th>

                            <th className="px-4 py-2 font-semibold xl:text-[16px] text-[13px] text-left text-gray-500 ">
                                <div className="flex items-center gap-x-2">
                                    <BsCalendar2X />
                                    <span>Expiration Date</span>
                                </div>
                            </th>

                            <th className="px-4 py-2 font-semibold xl:text-[16px] text-[13px] text-left text-gray-500 ">
                                <div className="flex items-center gap-x-2">
                                    <BsArrowDownCircle color="#717171" />
                                    <span>Sub Total</span>
                                </div>
                            </th>

                            <th className="px-4 py-2 font-semibold xl:text-[16px] text-[13px] text-left text-gray-500 ">
                                <div className="flex items-center gap-x-2">
                                    <FaMoneyBills />
                                    <span>Amount</span>
                                </div>
                            </th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        {/* using backend */}

                        {
                            tableDatas?.map(tableData => <tr key={tableData?._id}>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                        <h2 className="font-bold">{tableData?.quotes_name}</h2>
                                    </div>
                                </td>
                                <td className="pl-12 py-4 text-gray-700 whitespace-nowrap">
                                    <div>
                                        <p className="text-[#717171]">{tableData?.opportunity_name}</p>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-[16px] whitespace-nowrap">
                                    <div>
                                        <p className="text-[#717171]">{tableData?.syncing}</p>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-[16px] text-[#717171]">{tableData?.expried_date}</td>
                                <td className="px-4 py-4 whitespace-nowrap">
                                    <h2 className="text-[#717171]">{tableData?.sub_total}</h2>
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap">
                                    <p>{tableData?.amount} </p>
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-x-6">
    
                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
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

export default QuotesTable;