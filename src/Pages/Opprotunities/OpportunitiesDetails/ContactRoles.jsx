import { BsChevronDown } from "react-icons/bs";
import image from '../../../assets/tableImage/tablePeoplePic-2.png';

const ContactRoles = () => {
    return (
        <div>
            <div className="m-5 flex items-center justify-between bg-[#F3F3F3] border border-gray-200 rounded-lg p-2">
                <h1 className="md:font-bold font-semibold md:text-[22px] text-[20px]">Contact Roles (3)</h1>
                <BsChevronDown size={25} className="border border-gray-200 bg-white rounded-lg p-1" />
            </div>
            <div className="m-5">

                <div>
                    <hr className="my-3" />
                    <div className="flex items-center justify-between">
                        <div className="flex flex-wrap items-center gap-2">
                            <img src={image} alt="" className="w-[52px]" />
                            <div>
                                <h3 className="md:text-[18px] text-[16px] font-semibold">Howard Jones (Buyer)</h3>
                                <p className="text-[#717171]">Role: Decision Maker</p>
                            </div>
                        </div>
                        <BsChevronDown size={25} className="border border-gray-200 bg-white rounded-lg p-1" />
                    </div>
                </div>

                <div>
                    <hr className="my-3" />
                    <div className="flex items-center justify-between">
                        <div className="flex flex-wrap items-center gap-2">
                            <img src={image} alt="" className="w-[52px]" />
                            <div>
                                <h3 className="md:text-[18px] text-[16px] font-semibold">Howard Jones (Buyer)</h3>
                                <p className="text-[#717171]">Role: Decision Maker</p>
                            </div>
                        </div>
                        <BsChevronDown size={25} className="border border-gray-200 bg-white rounded-lg p-1" />
                    </div>
                </div>

                <div>
                    <hr className="my-3" />
                    <div className="flex items-center justify-between">
                        <div className="flex flex-wrap items-center gap-2">
                            <img src={image} alt="" className="w-[52px]" />
                            <div>
                                <h3 className="md:text-[18px] text-[16px] font-semibold">Howard Jones (Buyer)</h3>
                                <p className="text-[#717171]">Role: Decision Maker</p>
                            </div>
                        </div>
                        <BsChevronDown size={25} className="border border-gray-200 bg-white rounded-lg p-1" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactRoles;