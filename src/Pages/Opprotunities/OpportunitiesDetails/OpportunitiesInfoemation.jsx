import { BsChevronDown } from "react-icons/bs";


const OpportunitiesInfoemation = () => {
    return (
        <div>
            <div className="m-5 flex items-center justify-between bg-[#F3F3F3] border border-gray-200 rounded-lg p-2">
                <h1 className="md:font-bold font-semibold md:text-[22px] text-[20px]">Opportunities Information</h1>
                <BsChevronDown size={25} className="border border-gray-200 bg-white rounded-lg p-1" />
            </div>

            <div>
                <div className="m-5 flex items-center justify-between">
                    <p className="text-[#717171]">Account Name</p>
                    <p className="font-semibold">Acme Sample</p>
                </div>
                <hr className="my-3" />
            </div>

            <div>
                <div className="m-5 flex items-center justify-between">
                    <p className="text-[#717171]">Opportunities Owner</p>
                    <p className="font-semibold">SK Murad Hossain</p>
                </div>
                <hr className="my-3" />
            </div>

            <div>
                <div className="m-5 flex items-center justify-between">
                    <p className="text-[#717171]">Opportunity Name</p>
                    <p className="font-semibold">Acme - 140 Widgets (Sample)</p>
                </div>
                <hr className="my-3" />
            </div>

            <div>
                <div className="m-5 flex items-center justify-between">
                    <p className="text-[#717171]">Amount</p>
                    <p className="font-semibold">22,500.00</p>
                </div>
                <hr className="my-3" />
            </div>

            <div>
                <div className="m-5 flex items-center justify-between">
                    <p className="text-[#717171]">Close Date</p>
                    <p className="font-semibold">20-10-13</p>
                </div>
                <hr className="my-3" />
            </div>

            <div>
                <div className="m-5 flex items-center justify-between">
                    <p className="text-[#717171]">Stage</p>
                    <p className="font-semibold">Negotiation</p>
                </div>
                <hr className="my-3" />
            </div>

            <div>
                <div className="m-5 flex items-center justify-between">
                    <p className="text-[#717171]">Probability</p>
                    <p className="font-semibold">90%</p>
                </div>
                <hr className="my-3" />
            </div>

            <div>
                <div className="m-5 flex items-center justify-between">
                    <p className="text-[#717171]">Forcast Category</p>
                    <p className="font-semibold">Commit</p>
                </div>
                <hr className="my-3" />
            </div>

            <div>
                <div className="m-5 flex items-center justify-between">
                    <p className="text-[#717171]">Next Step</p>
                    <p className="font-semibold"></p>
                </div>
            </div>
            

        </div>
    );
};

export default OpportunitiesInfoemation;