import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import SideNavBar from "../Shared/SideNavBar/SideNavBar";


const Main = () => {

    return (
        <div className="min-h-screen w-full h-full">
            <div className="fixed top-0 left-0 w-full z-50">
                <Navbar></Navbar>
            </div>
            <div className="grid lg:grid-cols-12 grid-cols-4">
                <div className="lg:col-span-2">
                    <div className="fixed top-20 left-0  z-50">
                        <SideNavBar></SideNavBar>
                    </div>
                </div>
                <div className="lg:col-span-10 col-span-4 bg-mainBG min-h-screen w-full">
                    <div className="lg:mx-[30px] mx-4 lg:mt-[90px] mt-[90px]"
                    >
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;