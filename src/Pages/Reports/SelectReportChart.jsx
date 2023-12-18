import { AiOutlineFilter, AiOutlinePlus } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";


import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
import { useEffect, useState } from "react";
import { BiBarChartAlt2, BiEditAlt } from "react-icons/bi";
import { BsSoundwave } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";

const dataset = [
    {
        name: "Advertisemebt",
        score: 52
    },
    {
        name: "Employee Referral",
        score: 35
    },
    {
        name: "Other",
        score: 38
    },
    {
        name: "Trade Show",
        score: 46
    },
    {
        name: "Website",
        score: 32
    }
]

const colors = [
    {
        name: "#EFADF3"
    },
    {
        name: "#00B7E9"
    },
    {
        name: "#3EC99E"
    },
    {
        name: "#837DFB"
    },
    {
        name: "#338BBD"
    }
]

const SelectReport = () => {

    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    const barThickness = window.innerWidth < 768 ? 40 : 60;


    useEffect(() => {
        setChartData({
            labels: dataset.map(item => item.name),
            datasets: [
                {
                    // label: dataset.map(item => item.name),
                    data: dataset.map(item => item.score),
                    backgroundColor: colors.map((item) => `${item.name}`),
                    // backgroundColor: dataset.map((item, index) => `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.6)`),
                    borderRadius: 20
                },
            ],
        });



        setChartOptions({
            plugins: {
                legend: {
                    display: false,
                    position: "right",
                    labels: {
                        boxWidth: 10,
                        boxHeight: 10,
                        borderRadius: 70,
                    }
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                    barThickness: barThickness,
                }
            },
            maintainAspectRatio: false,
            responsive: true,
        });
    }, [barThickness]);


    const [toggle, setToggle] = useState(true);
    const [toggle2, setToggle2] = useState(true);
    const [toggle3, setToggle3] = useState(true);
    const [toggle4, setToggle4] = useState(true);
    const toggleClass = " transform translate-x-5";

    return (
        <div>

            <div className="md:flex md:items-center md:justify-between">
                <div>
                    <h1 className="lg:text-[34px] md:text-[30px] text-[24px] font-semibold">Reports</h1>
                    <div className="flex items-center gap-3">
                        <Link className="disabled cursor-pointer text-[#717171] md:text-[20px] text-[18px]">Reports</Link>
                        <MdArrowForwardIos color="#717171"></MdArrowForwardIos>
                        <Link className="disabled cursor-pointer md:text-[20px] text-[18px] font-semibold">Marketing Exec Leads By Source</Link>
                    </div>
                </div>
                <div>
                    <button className="flex items-center gap-2 btn bg-[#00B7E9] hover:bg-[#00B7E9] text-white p-3 rounded-2xl md:mt-0 mt-4 w-full justify-center"><AiOutlinePlus /> Add New</button>
                </div>
            </div>



            <div className="bg-white mt-6 border border-gray-200 rounded-lg mb-10">
                <div className="flex items-center justify-between mr-[18px] ml-[18px] gap-2">
                    <p className="text-[#717171]">1/08/2023</p>
                    <div className=" mt-[24px] flex items-center gap-2">
                        <button className="btn bg-white border py-3 px-4 rounded-2xl flex items-center gap-2 font-semibold"><AiOutlineFilter /> Filter</button>
                        <button className="btn bg-white border py-3 px-4 rounded-2xl flex items-center gap-2 font-semibold"><BiEditAlt /> Edit</button>
                    </div>
                </div>

                <div className="grid grid-cols-12 mr-[18px] mt-3">
                    <div className="max-h-[440px] md:col-span-10 col-span-12">
                        <Bar data={chartData} options={chartOptions} className="p-4 col-span-10" />

                    </div>
                    <div className="md:col-span-2 hidden md:block">
                        <div>
                            <p className="mb-5">Lead Source</p>
                            {dataset?.map((data, index) => (
                                <div key={index} className="flex items-center gap-0.5 mt-4">
                                    <div className="grid grid-cols-2 ">
                                        <div className="h-4 rounded-md w-4" style={{ backgroundColor: colors[index].name }}></div>
                                    </div>
                                    <p>{data?.name}</p>
                                </div>
                            ))}
                        </div>
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
                                        <div className="flex items-center gap-x-2">
                                            <span>Lead Source </span>
                                            <BiBarChartAlt2 />
                                        </div>
                                    </div>
                                </th>

                                <th className="px-12 py-2 text-left text-gray-500  font-semibold xl:text-[16px] text-[13px]">
                                    <div className="flex items-center gap-x-2">
                                        <span>Created Month</span>
                                        <SlCalender />
                                    </div>
                                </th>

                                <th className="px-4 py-2 font-semibold xl:text-[16px] text-[13px] text-left text-gray-500 ">
                                    <div className="flex items-center gap-x-2">
                                        <span>Record Count</span>
                                        <BsSoundwave />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">

                            <tr>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                        <h2>Advertisement</h2>
                                    </div>
                                </td>
                                <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div>
                                        <p className="text-[#717171]">1/08/2023</p>
                                        <p className="font-bold mt-1">Sub Total</p>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-[16px] whitespace-nowrap">
                                    <h2 className="font-semibold">1</h2>
                                    <h2 className="font-semibold">1</h2>
                                </td>
                            </tr>

                            <tr>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                        <h2>Employee Referral</h2>
                                    </div>
                                </td>
                                <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div>
                                        <p className="text-[#717171]">1/08/2023</p>
                                        <p className="font-bold mt-1">Sub Total</p>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-[16px] whitespace-nowrap">
                                    <h2 className="font-semibold">4</h2>
                                    <h2 className="font-semibold">4</h2>
                                </td>
                            </tr>

                            <tr>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                        <h2>Other</h2>
                                    </div>
                                </td>
                                <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div>
                                        <p className="text-[#717171]">1/08/2023</p>
                                        <p className="font-bold mt-1">Sub Total</p>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-[16px] whitespace-nowrap">
                                    <h2 className="font-semibold">5</h2>
                                    <h2 className="font-semibold">5</h2>
                                </td>
                            </tr>

                            <tr>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                        <h2>Trade Show</h2>
                                    </div>
                                </td>
                                <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div>
                                        <p className="text-[#717171]">1/08/2023</p>
                                        <p className="font-bold mt-1">Sub Total</p>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-[16px] whitespace-nowrap">
                                    <h2 className="font-semibold">3</h2>
                                    <h2 className="font-semibold">3</h2>
                                </td>
                            </tr>

                            <tr>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700 w-5 h-5 " />
                                        <h2>Website</h2>
                                    </div>
                                </td>
                                <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div>
                                        <p className="text-[#717171]">1/08/2023</p>
                                        <p className="font-bold mt-1">Sub Total</p>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-[16px] whitespace-nowrap">
                                    <h2 className="font-semibold">7</h2>
                                    <h2 className="font-semibold">7</h2>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
                <hr />

                {/* Counts Row Start */}

                <div className="border border-gray-200 rounded-xl m-6 py-2 px-3 grid md:grid-cols-4 grid-cols-2 items-center gap-5">

                    <div className="flex items-center gap-1 xl:gap-3">
                        <p className="font-semibold">Row Counts</p>
                        <div
                            className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-black rounded-full p-1 cursor-pointer"
                            onClick={() => {
                                setToggle(!toggle);
                            }}
                        >
                            {/* Switch */}
                            <div
                                className={
                                    "bg-gray-300 md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                                    (toggle ? null : toggleClass)
                                }
                            ></div>
                        </div>
                    </div>

                    <div className="flex items-center gap-1 xl:gap-3">
                        <p className="font-semibold">Row Counts</p>
                        <div
                            className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-black rounded-full p-1 cursor-pointer"
                            onClick={() => {
                                setToggle2(!toggle2);
                            }}
                        >
                            {/* Switch */}
                            <div
                                className={
                                    "bg-gray-300 md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                                    (toggle2 ? null : toggleClass)
                                }
                            ></div>
                        </div>
                    </div>

                    <div className="flex items-center  gap-1 xl:gap-3">
                        <p className="font-semibold">Row Counts</p>
                        <div
                            className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-black rounded-full p-1 cursor-pointer"
                            onClick={() => {
                                setToggle3(!toggle3);
                            }}
                        >
                            {/* Switch */}
                            <div
                                className={
                                    "bg-gray-300 md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                                    (toggle3 ? null : toggleClass)
                                }
                            ></div>
                        </div>
                    </div>

                    <div className="flex items-center  gap-1 xl:gap-3">
                        <p className="font-semibold">Row Counts</p>
                        <div
                            className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-black rounded-full p-1 cursor-pointer"
                            onClick={() => {
                                setToggle4(!toggle4);
                            }}
                        >
                            {/* Switch */}
                            <div
                                className={
                                    "bg-gray-300 md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                                    (toggle4 ? null : toggleClass)
                                }
                            ></div>
                        </div>
                    </div>


                </div>

            </div>





        </div>
    );
};

export default SelectReport;