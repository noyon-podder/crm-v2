import { BsChevronDown } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { CgNotes } from "react-icons/cg";
import { useState } from "react";
import { BiSolidFileBlank } from "react-icons/bi";
import { AiOutlineSound, AiOutlineUpload } from "react-icons/ai";
import { LuContact2 } from "react-icons/lu";
import { TbReportMoney } from "react-icons/tb";


const FileUpload = () => {

    const [isUpload, setIsUpload] = useState(false);

    return (
        <>

            <div className="border border-gray-200 rounded-lg bg-white">

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                    <div className="m-5 flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                        <h1 className="md:font-bold font-semibold text-[20px] flex items-center gap-3"><FaRegHandshake color="#00B7E9" /> Partners (0)</h1>
                        <BsChevronDown size={25} className="border border-gray-200 bg-white rounded-lg p-1" />
                    </div>
                    <div className="m-5 flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                        <h1 className="md:font-bold font-semibold text-[20px] flex items-center gap-3"><LiaCartArrowDownSolid color="#FE5D2C" /> Products (0)</h1>
                        <BsChevronDown size={25} className="border border-gray-200 bg-white rounded-lg p-1" />
                    </div>
                    <div className="m-5 flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                        <h1 className="md:font-bold font-semibold text-[20px] flex items-center gap-3"><CgNotes color="#FE5D2C" /> Notes (0)</h1>
                        <BsChevronDown size={25} className="border border-gray-200 bg-white rounded-lg p-1" />
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg m-5">
                    <div className=" flex items-center justify-between p-3">
                        <h1 className="md:font-bold font-semibold text-[20px] flex items-center gap-3"><BiSolidFileBlank size={30} color="#FFFFFF" className="bg-[#717171] rounded-full p-1" /> Files (0)</h1>
                        <BsChevronDown onClick={() => setIsUpload(!isUpload)} size={25} className="border border-gray-200 bg-white rounded-lg p-1" />
                    </div>
                    {
                        isUpload && <div className="m-5">
                            <hr />
                            <div className="border-dashed border-2 border-gray-400 rounded-xl py-10 text-center mt-5">
                                <input
                                    type="file"
                                    id="fileInput"
                                    accept="image/*"
                                    className="hidden"
                                />
                                <label
                                    htmlFor="fileInput"
                                    className="btn cursor-pointer border border-gray-200 p-3 rounded-xl text-[#107AD3] font-semibold flex items-center justify-center gap-3 w-40 mx-auto"
                                >
                                    <AiOutlineUpload /> Upload File
                                </label>
                            </div>
                        </div>
                    }
                </div>

            </div>


            <div className="border border-gray-200 rounded-lg bg-white mt-5">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                <div className="m-5 flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                        <h1 className="md:font-bold font-semibold text-[20px] flex items-center gap-3"><LuContact2 color="#00B7E9" /> Contact Roles (3)</h1>
                        <BsChevronDown size={25} className="border border-gray-200 bg-white rounded-lg p-1" />
                    </div>
                    <div className="m-5 flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                        <h1 className="md:font-bold font-semibold text-[20px] flex items-center gap-3"><LiaCartArrowDownSolid color="#FE5D2C" /> Products (0)</h1>
                        <BsChevronDown size={25} className="border border-gray-200 bg-white rounded-lg p-1" />
                    </div>
                    <div className="m-5 flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                        <h1 className="md:font-bold font-semibold text-[20px] flex items-center gap-3"><TbReportMoney color="#3BA755" /> Quotes (0)</h1>
                        <BsChevronDown size={25} className="border border-gray-200 bg-white rounded-lg p-1" />
                    </div>

                    <div className="m-5 flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                        <h1 className="md:font-bold font-semibold text-[20px] flex items-center gap-3"><FaRegHandshake color="#00B7E9" /> Partners (0)</h1>
                        <BsChevronDown size={25} className="border border-gray-200 bg-white rounded-lg p-1" />
                    </div>
                    <div className="m-5 flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                        <h1 className="md:font-bold font-semibold text-[20px] flex items-center gap-3"><AiOutlineSound color="#FE5D2C" /> Campaign Influence (9)</h1>
                        <BsChevronDown size={25} className="border border-gray-200 bg-white rounded-lg p-1" />
                    </div>
                    <div className="m-5 flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                        <h1 className="md:font-bold font-semibold text-[20px] flex items-center gap-3"><CgNotes color="#FE5D2C" /> Notes (0)</h1>
                        <BsChevronDown size={25} className="border border-gray-200 bg-white rounded-lg p-1" />
                    </div>
                    
                    
                </div>
            </div>


        </>
    );
};

export default FileUpload;