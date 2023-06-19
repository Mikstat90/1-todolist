import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist"

export type valueFilter = 'Active' | 'Completed' | 'All'

function App() {

    // let tasks = [
    //{ id: 1, title: "HTML&CSS", isDone: true },
    //{ id: 2, title: "JS", isDone: true },
    //{ id: 3, title: "ReactJS", isDone: false },
    //]

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
    ])

    const [fValueNEW, setfValueNEW] = useState<valueFilter>('All')

    const removeTask = (taskID: number) => {
        //tasks = tasks.filter(el => el.id !== taskID)
        //setTasks(tasks)
        setTasks(tasks.filter(el => el.id !== taskID))
    }

    const filterTasks = (fValue: valueFilter) => {
        setfValueNEW(fValue)
    }

    let filteredTasks = tasks
    if (fValueNEW === 'Active') {
        filteredTasks = tasks.filter(el => !el.isDone)
    } else if (fValueNEW === 'Completed') {
        filteredTasks = tasks.filter(el => el.isDone)
    }
    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks={filteredTasks}
                removeTask={removeTask}
                filterTasks={filterTasks}
            />
        </div>
    );
}

export default App;
