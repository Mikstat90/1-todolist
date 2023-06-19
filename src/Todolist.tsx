import React, {useState} from "react";
import {FilterValuesType} from "./App";

type PropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (value: number) => void
    //filterTasks: (fValue: valueFilter) => void
}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: PropsType) => {

    const [fValueNEW, setfValueNEW] = useState<FilterValuesType>('All')

    const filterTasks = (fValue: FilterValuesType) => {
        setfValueNEW(fValue)
    }

    const durshlagFoo = () => {
        let filteredTasks = props.tasks
        if (fValueNEW === 'Active') {
            filteredTasks = props.tasks.filter(el => !el.isDone)
        }
        if (fValueNEW === 'Completed') {
            filteredTasks = props.tasks.filter(el => el.isDone)
        }
        return filteredTasks
    }


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {durshlagFoo().map((el: TaskType) => {
                    return (
                        <li key={el.id}>
                            <button onClick={() => props.removeTask(el.id)}>X</button>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => filterTasks('All')}>All</button>
                <button onClick={() => filterTasks('Active')}>Active</button>
                <button onClick={() => filterTasks('Completed')}>Completed</button>
            </div>
        </div>
    );
}