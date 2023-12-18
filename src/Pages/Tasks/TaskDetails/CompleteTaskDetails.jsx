import { BiDotsHorizontalRounded } from "react-icons/bi";
import image from '../../../assets/tableImage/tablePeoplePic-2.png';
import { MdOutlineForwardToInbox } from 'react-icons/md';
import { FaPhoneVolume } from "react-icons/fa";
import { AiOutlineTag } from "react-icons/ai";


const CompleteTaskDetails = () => {
    return (
        <div>

            <div className="border border-gray-200 rounded-lg mt-5 mx-1 md:mx-0">
                <div className="flex items-center justify-between p-4 border-[#E7E7E7] rounded-lg">
                    <div className="flex items-center gap-2">
                        <img src={image} alt="" />
                        <h4 className="font-semibold md:text-[16px] text-[14px]">Albert Flores</h4>
                    </div>
                    <div className="border-[#E7E7E7] border md:block hidden"><BiDotsHorizontalRounded size={25} /></div>
                </div>
                <hr />
                <div className="p-4">
                    <p className="text-[#717171] flex items-center gap-1"><MdOutlineForwardToInbox size={20} />debra@example.com</p>
                    <p className="mt-2 text-[#717171] flex items-center gap-1"><FaPhoneVolume size={20} />(205) 555-0100</p>
                    <div className="flex items-center gap-2 mt-3">
                        <AiOutlineTag size={20} color="#717171" />
                        <button className="btn border border-gray-200 p-0.5 px-2 rounded-lg font-semibold">Important</button>
                        <button className="btn border border-gray-200 p-0.5 px-2 rounded-lg font-semibold">Lead</button>
                    </div>
                </div>
            </div>

            <div className="border border-gray-200 rounded-lg mt-5 mx-1 md:mx-0">
                <div className="flex items-center justify-between p-4 border-[#E7E7E7] rounded-lg">
                    <div className="flex items-center gap-2">
                        <img src={image} alt="" />
                        <h4 className="font-semibold md:text-[16px] text-[14px]">Marvin McKinney</h4>
                    </div>
                    <div className="border-[#E7E7E7] border md:block hidden"><BiDotsHorizontalRounded size={25} /></div>
                </div>
                <hr />
                <div className="p-4">
                    <p className="text-[#717171] flex items-center gap-1"><MdOutlineForwardToInbox size={20} />debra@example.com</p>
                    <p className="mt-2 text-[#717171] flex items-center gap-1"><FaPhoneVolume size={20} />(205) 555-0100</p>
                    <div className="flex items-center gap-2 mt-3">
                        <AiOutlineTag size={20} color="#717171" />
                        <button className="btn border border-gray-200 p-0.5 px-2 rounded-lg font-semibold">Supplier</button>
                    </div>
                </div>
            </div>

            <div className="border border-gray-200 rounded-lg mt-5 mx-1 md:mx-0">
                <div className="flex items-center justify-between p-4 border-[#E7E7E7] rounded-lg">
                    <div className="flex items-center gap-2">
                        <img src={image} alt="" />
                        <h4 className="font-semibold md:text-[16px] text-[14px]">Jane Cooper</h4>
                    </div>
                    <div className="border-[#E7E7E7] border md:block hidden"><BiDotsHorizontalRounded size={25} /></div>
                </div>
                <hr />
                <div className="p-4">
                    <p className="text-[#717171] flex items-center gap-1"><MdOutlineForwardToInbox size={20} />debra@example.com</p>
                    <p className="mt-2 text-[#717171] flex items-center gap-1"><FaPhoneVolume size={20} />(205) 555-0100</p>
                    <div className="flex items-center gap-2 mt-3">
                        <AiOutlineTag size={20} color="#717171" />
                        <button className="btn border border-gray-200 p-0.5 px-2 rounded-lg font-semibold">Customer</button>
                        <button className="btn border border-gray-200 p-0.5 px-2 rounded-lg font-semibold">Lead</button>
                    </div>
                </div>
            </div>

            <div className="border border-gray-200 rounded-lg mt-5 mx-1 md:mx-0">
                <div className="flex items-center justify-between p-4 border-[#E7E7E7] rounded-lg">
                    <div className="flex items-center gap-2">
                        <img src={image} alt="" />
                        <h4 className="font-semibold md:text-[16px] text-[14px]">Jane Cooper</h4>
                    </div>
                    <div className="border-[#E7E7E7] border md:block hidden"><BiDotsHorizontalRounded size={25} /></div>
                </div>
                <hr />
                <div className="p-4">
                    <p className="text-[#717171] flex items-center gap-1"><MdOutlineForwardToInbox size={20} />debra@example.com</p>
                    <p className="mt-2 text-[#717171] flex items-center gap-1"><FaPhoneVolume size={20} />(205) 555-0100</p>
                    <div className="flex items-center gap-2 mt-3">
                        <AiOutlineTag size={20} color="#717171" />
                        <button className="btn border border-gray-200 p-0.5 px-2 rounded-lg font-semibold">Important</button>
                        <button className="btn border border-gray-200 p-0.5 px-2 rounded-lg font-semibold">Lead</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CompleteTaskDetails;