import React from "react";
import { v4 as uuidv4 } from 'uuid';
const todo=[
    {
        "title":"This is title 1",
        "Description": "this is description 1"
    },

    {
        "title":"This is title 2",
        "Description": "this is description 2"
    },
    {
        "title":"This is title 3",
        "Description": "this is description 3"
    },
    {
        "title":"This is title 4",
        "Description": "this is description 4"
    }
];


const List =()=>{
    return <div>
        {todo.map(todo=>{
            return <div key={uuidv4()}>
                <h1>todo.title</h1>
                <p1>todo.description</p1>
            </div>
        })}
    </div>
}

export default List;

