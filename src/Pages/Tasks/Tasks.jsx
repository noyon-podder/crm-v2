import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import AddTaskModal from "./AddTaskModal";
import { AiOutlinePlus } from "react-icons/ai";
import TaskTable from "./TaskTable";
import TaskDetails from "./TaskDetails/TaskDetails";


const Tasks = () => {

    const [isOpen, setisOpen] = useState(false);

    return (
        <div>
            <div className="md:flex md:items-center md:justify-between">
                <div>
                    <h1 className="lg:text-[34px] md:text-[30px] text-[24px] font-semibold">Tasks</h1>
                    <div className="flex items-center gap-3">
                        <Link className="disabled cursor-pointer text-[#717171] md:text-[20px] text-[18px]">Tasks</Link>
                        <MdArrowForwardIos color="#717171"></MdArrowForwardIos>
                        <Link className="disabled cursor-pointer md:text-[20px] text-[18px] font-semibold">Recently Viewed</Link>
                    </div>
                </div>
                <div>
                    <button onClick={() => setisOpen(true)} className="flex items-center gap-2 btn bg-[#00B7E9] hover:bg-[#00B7E9] text-white p-3 rounded-2xl md:mt-0 mt-4 w-full justify-center"><AiOutlinePlus /> Add New Task</button>
                </div>
            </div>
            <TaskTable/>
            {/* <TaskDetails/> */}

            {
                isOpen == true && <AddTaskModal setisOpen={setisOpen} />
            }


        </div>
    );
};

export default Tasks;