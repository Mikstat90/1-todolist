import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist"
import {v1} from "uuid";


export type FilterValuesType = 'Active' | 'Completed' | 'All'

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ])

    const removeTask = (taskID: number) => {
        //tasks = tasks.filter(el => el.id !== taskID)
        //setTasks(tasks)
        setTasks(tasks.filter(el => el.id !== taskID))
    }


    /*const [fValueNEW, setfValueNEW] = useState<valueFilter>('All')
    const filterTasks = (fValue: valueFilter) => {
        setfValueNEW(fValue)
    }

    let filteredTasks = tasks
    if (fValueNEW === 'Active') {
        filteredTasks = tasks.filter(el => !el.isDone)
    }
    if (fValueNEW === 'Completed') {
        filteredTasks = tasks.filter(el => el.isDone)
    }*/

    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks={tasks}
                removeTask={removeTask}
                //filterTasks={filterTasks}
            />
        </div>
    );
}

export default App;
