
import { AiOutlinePlus } from 'react-icons/ai';
import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import NewDashboardModal from './NewDashboardModal';
import newDashboardPic from '../../../assets/dashboard/new_dashboard.png';
import { useSelector } from 'react-redux';

const NewDashboard = () => {

    const [isOpen, setisOpen] = useState(false);

    const { addRecentDashboardData, addNewDashboardData } = useSelector((state) => state.dashboard);
    console.log(addRecentDashboardData, addNewDashboardData);

    return (
        <div>
            <div>
            <div className="md:flex md:items-center md:justify-between">
                <div>
                    <h1 className="lg:text-[34px] md:text-[30px] text-[24px] font-semibold">Dashboard</h1>
                    <div className="flex items-center gap-3">
                        <Link to='/dashboard' className="disabled cursor-pointer text-[#717171] md:text-[20px] text-[18px]">Dashboard</Link>
                        <MdArrowForwardIos color="#717171"></MdArrowForwardIos>
                        <Link className="disabled cursor-pointer md:text-[20px] text-[18px] font-semibold">New Dashboard</Link>
                    </div>
                </div>
                <div>
                    <button onClick={() => setisOpen(true)} className="flex items-center gap-2 btn bg-[#00B7E9] hover:bg-[#00B7E9] text-white p-3 rounded-2xl md:mt-0 mt-4 w-full justify-center"><AiOutlinePlus /> Add Component</button>
                </div>
            </div>
            <div className='flex items-center justify-center md:bg-white bg-[#F1FCFE] mt-6 border border-gray-200 rounded-xl mb-[60px]'>
            <div className='mt-[100px] mb-[100px]'>
                <img src={newDashboardPic} alt="" />
            </div>
        </div>

            {
                isOpen == true && <NewDashboardModal setisOpen={setisOpen} />
            }


        </div>
        </div>
    );
};

export default NewDashboard;