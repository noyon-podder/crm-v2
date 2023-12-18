import { BiBell, BiSearch } from 'react-icons/bi';
import { FaBars, FaEllipsisV } from 'react-icons/fa';
import logo from '../../assets/navbar/getFlow-logo.png';
import profilePic from '../../assets/navbar/profile-pic.png';
import SideBarMenuItem from '../SideNavBar/SideBarMenuItem';
import {  useRef, useState } from 'react';

const Navbar = () => {

    const [sidebarShow, setSidebarShow] = useState(false);
    const sidebarRef = useRef(null);

    return (
        <div className="bg-black p-4">
            <div className="lg:flex lg:items-center lg:gap-[50px]">

                <div className="flex justify-between items-center w-full">
                    {/* show for mobile device bars */}
                        <div className="flex items-center gap-[20px] lg:hidden">
                            {/* menubar */}
                            <div
                                className="relative cursor-pointer"
                                onClick={() => setSidebarShow(!sidebarShow)}
                                ref={sidebarRef}
                            >
                                <FaBars className="text-white cursor-pointer text-[24px]" />
                                <div
                                    className={
                                        sidebarShow
                                            ? "-left-5 absolute top-full mt-6  duration-300"
                                            : "-left-96 absolute top-full mt-6  duration-300"
                                    }
                                >
                                    <div className="min-w-[200px] h-full z-50 shadow-lg py-[20px] px-[15px] bg-white dark:bg-darkWhite border-r border-[#f4f4f4] dark:border-darkBg">
                                        <SideBarMenuItem />
                                    </div>
                                </div>
                            </div>
                        </div>

                    {/* Logo  hidden in mobile device*/}
                    <div className="hidden md:flex items-center">
                        <img src={logo} alt="" />
                    </div>

                    <div className="flex items-center gap-1 md:gap-4 relative">
                        {/* notification */}
                        <div className='border rounded-full p-2 md:py-4 block md:hidden'>
                            <BiSearch className='text-white cursor-pointer text-[20px]' />
                        </div>
                        <div className="relative border rounded-full p-2">
                            <BiBell className="text-white cursor-pointer text-[20px]" />
                            <span className="w-2 h-2 rounded-full bg-[#EB5757] absolute top-[4px] left-[16px]"></span>
                        </div>
                        {/* profile */}
                        <div className="lg:flex lg:items-center lg:gap-[10px] mr-0 lg:mr-[24px]">
                            <div
                                className="cursor-pointer"
                            >
                                <img src={profilePic} alt="" className='w-[40px]' />
                            </div>
                            <div className="w-[170px] h-[40px] hidden lg:block">
                                <h2 className="text-white text-sm font-semibold">
                                    Sk Murad Hosain
                                </h2>
                                <p className="text-white text-sm font-normal">muradhosain22@gmail.com</p>
                            </div>
                        </div>
                        <div className='text-white hidden lg:block'>
                            <FaEllipsisV size={20}></FaEllipsisV>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;