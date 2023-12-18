/* eslint-disable react/no-unescaped-entities */
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
import { useEffect, useState } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const LeadsScoreChart = () => {

    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Adver", "Empl", "Other", "Trade", "Adver", "Other", "Other", "Trade"],
            datasets: [
                {
                    data: [1.6, 1.2, 1.8, 2.7, 1.9, 1.4, 1.7, 2.4],
                    backgroundColor: "#EFADF3",
                    borderRadius: 8,
                    barThickness: 32,
                    hoverBackgroundColor: "#837DFB"
                }
            ],
        });

        setChartOptions({
            plugins: {
                legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                        boxWidth: 0,
                        boxHeight: 0,
                        borderRadius: 0,
                    }
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                }
            },
            maintainAspectRatio: false,
            responsive: true,
        });
    }, []);

    return (
        <div className="">
            <div className="flex items-center justify-between mx-6 mt-6">
                <h6 className="text-[18px] md:text-[26px] font-semibold"> Leads By Sorce </h6>
                <p className="font-semibold">View Report</p>
            </div>

            {/* Chart Start */}
            <div className="p-6">
                <Bar data={chartData} options={chartOptions} />
            </div>
            {/* Chart End */}

            <div className="flex items-center justify-between md:mx-6 mx-2 mb-6">
                <h6 className="text-[#5D6B82]">Created Month 01/08/2023</h6>
                <p className="text-[#5D6B82]">As of today At 11:45 AM  </p>
            </div>

        </div>
    );
};

export default LeadsScoreChart;