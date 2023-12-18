import { Link } from 'react-router-dom';
import recentDashboard from '../../assets/dashboard/recent_dashboard.png';

const RecentDashboard = () => {
    return (
        <div className='flex items-center justify-center bg-white mt-6 border border-gray-200 rounded-xl mb-[60px]'>
            <div className='mt-[100px] mb-[100px]'>
                <img src={recentDashboard} alt="" />
                <h1 className='md:text-[34px] text-[25px] font-semibold text-center'>Recent Dashboards Appear Here </h1>
                <h3 className='md:text-[26px] text-[18px] font-semibold text-[#717171] text-center'>Go to All Dashboards to see what’s Available.</h3>
                <div className='flex items-center justify-center'>
                    <Link to='/newDashboard' className='text-[#00B7E9] font-semibold'>View All Dashboards</Link>
                </div>
            </div>
        </div>
    );
};

export default RecentDashboard;