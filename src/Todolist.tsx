import React from "react";
import {valueFilter} from "./App";

type PropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (value: number) => void
    filterTasks: (fValue: valueFilter) => void
}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((el: TaskType) => {
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
                <button onClick={() => props.filterTasks('All')}>All</button>
                <button onClick={() => props.filterTasks('Active')}>Active</button>
                <button onClick={() => props.filterTasks('Completed')}>Completed</button>
            </div>
        </div>
    );
}