import React from "react";

type TodolistPropsType = {
    track1: string
    track2?: number
    tasks: TaskType[]
    //tasks: Array<TaskType>
}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            {/*<h3>What to learn</h3>*/}
            <h3>{props.track1}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>

                {/*{props.tasks.map(el => (<li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>))}*/}

                {props.tasks.map((el: TaskType) => {
                    debugger
                    return (
                        <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                    )
                })}

                {/* <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[3].isDone}/> <span>{props.tasks[3].title}</span></li>*/}

            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
}