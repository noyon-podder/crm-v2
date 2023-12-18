
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';


const SelectReport = ({ setisOpen }) => {

    const [activeButton, setActiveButton] = useState(1);
    const [activePage, setActivePage] = useState("Recent");

    const handlePageButton = (page, button) => {
        setActiveButton(button);
        setActivePage(page);
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-30">
            <div className="relative overflow-hidden text-left bg-white rounded-lg shadow-xl w-[550px] p-6 max-h-[100vh] overflow-y-auto">

                <div className="flex items-center justify-between">
                    <h3 className="text-[26px] font-bold text-[#0A0A0A] capitalize" id="modal-title"> Select Report </h3>
                    <button className='btn bg-white hover:bg-white border p-1'><RxCross1 onClick={() => setisOpen(false)} size={25}></RxCross1></button>
                </div>

                <div className="border border-gray-200 rounded-xl mt-8 py-2 px-3 grid grid-cols-4 items-center gap-5 bg-[#F3F3F3]">
                    {
                        activeButton == 1 ?
                            <button className='btn text-white bg-[#11284F] font-semibold py-2 px-4 rounded-xl'>Recent</button>
                            :
                            <button onClick={() => handlePageButton("Recent", 1)} className='btn text-[#717171] font-semibold py-2 px-4'>Recent</button>
                    }

                    {
                        activeButton == 2 ?
                            <button className='btn text-white bg-[#11284F] font-semibold py-2 px-4 rounded-xl'>Private</button>
                            :
                            <button onClick={() => handlePageButton("Private", 2)} className='btn text-[#717171] font-semibold py-2 px-4'>Private</button>
                    }

                    {
                        activeButton == 3 ?
                            <button className='btn text-white bg-[#11284F] font-semibold py-2 px-4 rounded-xl'>Public</button>
                            :
                            <button onClick={() => handlePageButton("Public", 3)} className='btn text-[#717171] font-semibold py-2 px-4'>Public</button>
                    }

                    {
                        activeButton == 4 ?
                            <button className='btn text-white bg-[#11284F] font-semibold py-2 px-4 rounded-xl'>All</button>
                            :
                            <button onClick={() => handlePageButton("All", 4)} className='btn text-[#717171] font-semibold py-2 px-4'>All</button>
                    }
                </div>

                <div className="grid grid-cols-2 my-4 gap-4 items-center">
                    <div className="flex items-center gap-2 rounded-xl border border-[#E7E7E7]">
                        <input
                            type="text"
                            placeholder="Search Reports and Folder"
                            className="bg-none w-full outline-none text-[14px] font-semibold placeholder-[#717171] py-3 px-5"
                        />
                        <BiSearch className="text-[#717171]" size={20} />
                    </div>
                    <div>
                        <select id="selectLeadStatus" className="block w-full px-5 py-3 text-gray-700 bg-white border border-gray-200 rounded-xl"
                        >
                            <option value='' disabled selected>Reports And Folders</option>
                            <option value="active">Active</option>
                            <option value="pending">Pending</option>
                        </select>
                    </div>
                </div>

                <div className="border border-gray-200 rounded-xl mt-4">

                    <div className=' flex flex-wrap items-start justify-between px-4 py-2'>
                        <div>
                            <h3 className='font-semibold'>Marketing Exec </h3>
                            <h3 className='font-semibold'>Lead by Source</h3>
                        </div>
                        <div>
                            <p>Sales and Mrketing Reports</p>
                            <p className='text-[#717171]'>Sk Murad Hosain</p>
                            <p className='text-[#717171]'>14 Aug 2023 11:33 AM</p>
                        </div>
                    </div>

                    <hr className='my-2' />

                    <div className=' flex flex-wrap items-start justify-between px-4 py-2'>
                        <div>
                            <h3 className='font-semibold'>Marketing Exec </h3>
                            <h3 className='font-semibold'>Lead by Source</h3>
                        </div>
                        <div>
                            <p>Sales and Mrketing Reports</p>
                            <p className='text-[#717171]'>Sk Murad Hosain</p>
                            <p className='text-[#717171]'>14 Aug 2023 11:33 AM</p>
                        </div>
                    </div>

                    <hr className='my-2' />

                    <div className=' flex flex-wrap items-start justify-between px-4 py-2'>
                        <div>
                            <h3 className='font-semibold'>Marketing Exec </h3>
                            <h3 className='font-semibold'>Lead by Source</h3>
                        </div>
                        <div>
                            <p>Sales and Mrketing Reports</p>
                            <p className='text-[#717171]'>Sk Murad Hosain</p>
                            <p className='text-[#717171]'>14 Aug 2023 11:33 AM</p>
                        </div>
                    </div>

                    <hr className='my-2' />

                    <div className=' flex flex-wrap items-start justify-between px-4 py-2'>
                        <div>
                            <h3 className='font-semibold'>Marketing Exec </h3>
                            <h3 className='font-semibold'>Lead by Source</h3>
                        </div>
                        <div>
                            <p>Sales and Mrketing Reports</p>
                            <p className='text-[#717171]'>Sk Murad Hosain</p>
                            <p className='text-[#717171]'>14 Aug 2023 11:33 AM</p>
                        </div>
                    </div>

                    <div className=' flex flex-wrap items-start justify-between px-4 py-2'>
                        <div>
                            <h3 className='font-semibold'>Marketing Exec </h3>
                            <h3 className='font-semibold'>Lead by Source</h3>
                        </div>
                        <div>
                            <p>Sales and Mrketing Reports</p>
                            <p className='text-[#717171]'>Sk Murad Hosain</p>
                            <p className='text-[#717171]'>14 Aug 2023 11:33 AM</p>
                        </div>
                    </div>

                    <div className=' flex flex-wrap items-start justify-between px-4 py-2'>
                        <div>
                            <h3 className='font-semibold'>Marketing Exec </h3>
                            <h3 className='font-semibold'>Lead by Source</h3>
                        </div>
                        <div>
                            <p>Sales and Mrketing Reports</p>
                            <p className='text-[#717171]'>Sk Murad Hosain</p>
                            <p className='text-[#717171]'>14 Aug 2023 11:33 AM</p>
                        </div>
                    </div>

                </div>

                <div className="flex justify-end mt-8 gap-4">
                    <button onClick={() => setisOpen(false)} className="btn px-6 py-2.5 transition-colors duration-300 transform bg-white rounded-xl border">Cancel</button>
                    <button type="Submit" className="px-6 py-2.5 text-white transition-colors duration-300 transform bg-[#00B7E9] rounded-xl hover:bg-[#00B7E9]">Save</button>
                </div>


            </div>
        </div>
    );
};

export default SelectReport;