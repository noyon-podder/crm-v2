import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const TeamPipeLineChart = () => {

    const [chartData, setChartData] = useState([]);
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        // Define the data in the correct format for Google Charts
        const data = [
            ["Year", "Sales", "Expenses",],
            ["2004", 208, 803],
            ["2005", 414, 608],
            ["2006", 611, 406],
            ["2007", 316, 804],
            ["2007", 412, 507],
            ["2007", 617, 605],
            ["2007", 211, 409],
        ];

        // Define the chart options
        const options = {
            curveType: "function",
            legend: { position: "bottom" },
            lineWidth: 4,
            colors: ["#EFADF3", "#837DFB"],
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div>
            <div className="flex items-center justify-between xl:mx-6 lg:mx-3 mx-2 mt-6">
                <h6 className="text-[18px] md:text-[26px] font-semibold"> Team Pipeline </h6>
                <button className="font-semibold border p-1 rounded-lg">View Report</button>
            </div>
            <Chart
                chartType="LineChart"
                width="100%"
                height="200px"
                data={chartData}
                options={chartOptions}
            />
        </div>
    );
};

export default TeamPipeLineChart;