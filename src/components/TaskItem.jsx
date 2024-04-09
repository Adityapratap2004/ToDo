import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, deleteTask } from '../state/slice/task';
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import toast from "react-hot-toast"
const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    //function to make task completed
    const taskCompletedButton = () => {
        try {
            dispatch(completeTask(task.id));
            toast.success("Task added to completed list")            
        } catch (error) {
            console.log(error);
            toast.error("Not able to add task in completed task")
        }
    }

    //function to delete task
    const deleteTaskButton = () => {
        try {
            dispatch(deleteTask(task.id));
            toast.success("Task deleted successfully");
        } catch (error) {
            console.log(error);
            toast.error("Not able to delete the task");
        }
    }
    return (
        <div className='bg-[#404040] w-full  px-4 py-3 md:py-6 text-lg flex flex-col gap-3 md:flex-row items-start justify-between md:items-center my-2'>
            <div className='w-full mb-2 md:mb-0 md:auto'>
                <div className='flex justify-between '>
                    <h1 className={`text-4xl font-semibold ${task.completed ? 'text-[#707070] line-through' : 'text-[#ff9900]'}`}>{task.name}</h1>
                    <div className='md:hidden flex text-3xl '>
                        <TiTick className=' cursor-pointer ' onClick={taskCompletedButton} />
                        <MdDelete className=' cursor-pointer' onClick={deleteTaskButton} />

                    </div>
                </div>
                <p className={`${task.completed && 'line-through text-[#707070] '} text-base md:text-lg`}>{task.desc}</p>
            </div>
            <div className='hidden md:flex  justify-center  gap-4'>
                {!task.completed && <button className='text-[#00aa69] bg-white px-4 rounded-full py-1.5 border border-[#00aa69]' onClick={taskCompletedButton}>
                    Completed
                </button>}
                <button className='text-[#ca0000] bg-white px-4 rounded-full py-1.5 border border-[#ca0000]' onClick={deleteTaskButton}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default TaskItem
