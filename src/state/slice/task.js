import { createSlice } from '@reduxjs/toolkit'


//initialState that takes empty array  but if there are task already in the local storage then it 
//takes that array of object(task objects)

const initialState = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

//function to set local storage
const setLocalStorage=(tasks)=>{
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

//function to generate the id
//id is generated by using date and task name
const idGenerator = (name) => {
    const date = Date.now();
    return `${date}-${name}`; 
  };
  

const taskSlice = createSlice({
    name: "Task",
    initialState,
    reducers: {
        
        createTask(state, action) {

            const id=idGenerator(action.payload.name); //generating the id 
            const newTaks={id,...action.payload} //creating the task
            const newState = [...state,newTaks];   //creating new tasks state
            setLocalStorage(newState);
            return newState; 
        },
        completeTask(state, action) {
            const id = action.payload;

            //find the task by id then set that task as completed
            const newState = state.map(task => {
                if (task.id === id) {
                    return { ...task,completed:true };
                }
                return task;
            });
            setLocalStorage(newState);
            return newState;


        },
        deleteTask(state, action) {
            const id = action.payload;
            //filter out the task which id we got
            //if there is no task then it will return same task array
            const newState = state.filter((t) => {
                return id !== t.id;
            })

            setLocalStorage(newState);

            return newState;
        }
    }
})


export default taskSlice.reducer;

export const { createTask, completeTask, deleteTask } = taskSlice.actions;

