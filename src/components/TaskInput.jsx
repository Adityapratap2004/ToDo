import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTask } from '../state/slice/task';
import toast from 'react-hot-toast'

const TaskInput = () => {
    const dispatch = useDispatch();

    const initialFormValue = { name: '', desc: '', completed: false }
    const [form, setForm] = useState(initialFormValue);

    //function to handle form 
    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }

    //add task function
    const addTask = (e) => {
        e.preventDefault();
        try {
            dispatch(createTask(form));
            setForm(initialFormValue);
            toast.success("Task added successfully")
            
        } catch (error) {
            console.log(error);
            toast.error("Not able to add task");
        }

    }

    return (
        <div className='bg-[#404040] w-full px-4 py-6 text-lg mb-6'>
            <form className='flex flex-col  gap-3  md:flex-row justify-between items-center' onSubmit={addTask}>
                <div className='flex flex-col md:flex-row w-full md:w-auto  gap-4'>
                    <div className='flex flex-col w-full md:w-auto '>
                        <label htmlFor="name" >Name</label>
                        <input type="text" id='name' required value={form.name} className=' rounded-md border border-[#ff9900] outline-none text-gray-700 px-1 py-1.5 w-full md:w-[250px] text-base' onChange={handleChange} />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="desc">Description</label>
                        <input type="text" id="desc" required value={form.desc} className='rounded-md border border-[#ff9900] outline-none text-gray-700 px-1 py-1.5  w-full md:w-[250px] text-base' onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <button className='bg-[#ff9900] px-4 py-1.5 rounded-full' type="submit">
                        Add Todo
                    </button>
                </div>

            </form>
        </div>
    )
}

export default TaskInput
