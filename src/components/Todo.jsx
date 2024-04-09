import React from 'react'
import TaskInput from './TaskInput'
import TaskList from './TaskList'

const Todo = () => {
    return (
        <div className='mx-auto w-full max-w-[1024px] px-2 md:px-4 text-white md:pt-5'>
            <h1 className=' text-center text-4xl   font-semibold py-10'> My Todos</h1>
            <TaskInput />
            <TaskList />
        </div>
    )
}

export default Todo
