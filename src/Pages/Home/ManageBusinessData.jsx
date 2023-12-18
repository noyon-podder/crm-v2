import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import products from '../../assets/homeBusinessDataPic/prroducts.png';
import contacts from '../../assets/homeBusinessDataPic/contacts.png';
import orders from '../../assets/homeBusinessDataPic/orders.png';
import price_books from '../../assets/homeBusinessDataPic/price_books.png';
import quotes from '../../assets/homeBusinessDataPic/quotes.png';

const ManageBusinessData = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mt-6 mb-8 bg-white border border-gray-200 rounded-lg">

            <div className="mx-6">

                <div className="flex items-center justify-between mt-6">
                    <div>
                        <h1 className="lg:text-[26px] md:text-[20px] text-[18px] font-semibold">Manage Business Data</h1>
                    </div>
                    <div>
                        <button className="flex items-center gap-2 btn p-2 border border-gray-200 rounded-2xl w-full justify-center"><AiOutlinePlus /> Add New</button>
                    </div>
                </div>

                <div>
                    <div

                        className="border rounded-lg font-semibold text-black w-full mt-6"
                    >
                        <div className="flex items-center justify-between py-3 px-5">
                            <h1>Sales Operations</h1>
                            <IoIosArrowDown onClick={toggleAccordion} size={25} />
                        </div>
                        {
                            isOpen && <hr />
                        }
                        <div>
                            {
                                isOpen &&
                                <div className="grid lg:grid-cols-6 grid-cols-3 md:gap-5 gap-3 m-5">
                                    <div className=" border border-gray-200 rounded-lg text-center py-4">
                                    <div className="flex flex-col items-center">
                                        <h3 className="font-semibold mb-2">Products</h3>
                                        <img src={products} alt="" />
                                        </div>
                                    </div>
                                    <div className=" border border-gray-200 rounded-lg text-center py-4">
                                    <div className="flex flex-col items-center">
                                        <h3 className="font-semibold mb-2">Quotes</h3>
                                        <img src={quotes} alt="" />
                                        </div>
                                    </div>
                                    <div className=" border border-gray-200 rounded-lg text-center py-4">
                                    <div className="flex flex-col items-center">
                                        <h3 className="font-semibold mb-2">Price Books</h3>
                                        <img src={price_books} alt="" />
                                        </div>
                                    </div>
                                    <div className=" border border-gray-200 rounded-lg text-center py-4">
                                    <div className="flex flex-col items-center">
                                        <h3 className="font-semibold mb-2">Contacts</h3>
                                        <img src={contacts} alt="" />
                                        </div>
                                    </div>
                                    <div className=" border border-gray-200 rounded-lg text-center py-4">
                                    <div className="flex flex-col items-center">
                                        <h3 className="font-semibold mb-2">Orders</h3>
                                        <img src={orders} alt="" />
                                        </div>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg text-center py-4">
                                        <div className="flex flex-col items-center">
                                            <h3 className="font-semibold mb-2">Products</h3>
                                            <img src={products} alt="" />
                                        </div>
                                    </div>


                                </div>
                            }
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <input type="text" placeholder="Email" className="w-full block placeholder-black font-semibold p-2 border border-gray-200 rounded-lg px-5" />
                    <input type="text" placeholder="data" className="w-full block placeholder-black font-semibold p-2 border border-gray-200 rounded-lg mt-5 mb-5 px-5" />
                </div>


            </div>

        </div>
    );
};

export default ManageBusinessData;