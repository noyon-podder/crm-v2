import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import AddNewCampaings from "./AddNewCampaings";
import { AiOutlinePlus } from "react-icons/ai";
import AllCampaigns from "./AllCampaigns";
import MyCampaigns from "./MyCampaigns";
import RecentlyCampaigns from "./RecentlyCampaigns";


const Campaigns = () => {

    const [value, setValue] = useState('All active Campaign')
    const [isOpen, setisOpen] = useState(false);

    return (
        <div>
            <div className="md:flex md:items-center md:justify-between">
                <div>
                    <h1 className="lg:text-[34px] md:text-[30px] text-[24px] font-semibold">Campaings</h1>
                    <div className="flex items-center gap-3">
                        <Link className="disabled cursor-pointer text-[#717171] md:text-[20px] text-[18px]">Campaings</Link>
                        <MdArrowForwardIos color="#717171"></MdArrowForwardIos>
                        <Link className="disabled cursor-pointer md:text-[20px] text-[18px] font-semibold">{value}</Link>
                    </div>
                </div>
                <div className="flex items-center gap-[40px]">
                    <select onChange={(e) => setValue(e.target.value)} id="city_name" className="border rounded-xl py-3 px-5 bg-mainBG text-[#717171]"
                    >
                        <option value='All active Campaigns' selected>All active Campaigns</option>
                        <option value="My Active Campaigns">My Active Campaigns</option>
                        <option value="Recently viewed">Recently viewed</option>
                    </select>
                    <button onClick={() => setisOpen(true)} className="flex items-center gap-2 btn bg-[#00B7E9] hover:bg-[#00B7E9] text-white p-3 rounded-2xl md:mt-0 mt-4 w-full justify-center"><AiOutlinePlus /> Add New</button>
                </div>
            </div>
            {
                value === 'Recently viewed' ?
                    <RecentlyCampaigns />
                    : value === 'My Active Campaigns' ?
                        <MyCampaigns />
                        :
                        <AllCampaigns />

            }

            {
                isOpen == true && <AddNewCampaings setisOpen={setisOpen} />
            }


        </div>
    );
};

export default Campaigns;