import React from 'react'
import TaskItem from './TaskItem'
import { useSelector } from "react-redux"

const TaskList = () => {
    //getting task state from redux store
    const Tasks = useSelector(state => state.Tasks)
    return (
        <div>
            {
                Tasks.map((task) => {
                    return <TaskItem key={task.id} task={task} />
                })
            }
        </div>

    )
}

export default TaskList
