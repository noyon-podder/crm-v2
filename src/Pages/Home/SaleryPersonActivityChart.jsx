
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Acme (Sample)',
        uv: 50,
        pv: 2400,
        fill: '#338BBD',
    },
    {
        name: 'Global Media (Sample)',
        uv: 60,
        pv: 4567,
        fill: '#837DFB',
    },
    {
        name: 'Green Dot Publishing',
        uv: 70,
        pv: 1398,
        fill: '#3EC99E',
    },
    {
        name: 'Lee Enterprise,Inc',
        uv: 80,
        pv: 9800,
        fill: '#00B7E9',
    },
    {
        name: 'Medlife,Inc',
        uv: 90,
        pv: 3908,
        fill: '#EFADF3',
    }
];

const style = {
    left: 20
};


const SaleryPersonActivityChart = () => {
    return (
        // cx="50%" cy="50%" innerRadius="10%" outerRadius="80%"
        <div>
            <div className="flex items-center justify-between xl:mx-6 lg:mx-3 mx-2 mt-6">
                <h6 className="text-[18px] md:text-[26px] font-semibold"> Sales Person Activity </h6>
                <button className="font-semibold border p-1 rounded-lg">View Report</button>
            </div>
            <ResponsiveContainer width="100%" height={240}>
                <RadialBarChart cx="80%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={8} data={data}>
                    <RadialBar
                        minAngle={15}
                        label={{ position: 'center', fill: '#fff' }}
                        background
                        clockWise
                        dataKey="uv"
                    />
                    <Legend iconSize={15} layout="vertical" verticalAlign="middle" wrapperStyle={style} formatter={(value, entry) => <span>
                        <span className='text-black xl:text-lg lg:text-[14px] text-xs'>{entry.payload.name}</span>
                        <span className="ml-2 text-black font-semibold">{entry.payload.uv}%</span>
                    </span>} />
                </RadialBarChart>
            </ResponsiveContainer>

            <div className="flex items-center justify-between md:mx-6 mx-2 mb-6">
                <h6 className="text-[#5D6B82]">Created Month 01/08/2023</h6>
                <p>As of today At 11:45 AM  </p>
            </div>
        </div>
    );
};

export default SaleryPersonActivityChart;