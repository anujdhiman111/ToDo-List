import React from "react";

const ToDoList = (props) => {
    return (
    <>
    <div className = "todo-style">
        <i className = "fa fa-times" area-hidden = "true" onClick = {() => {
            props.onSelect(props.id);
        }}></i>
        <li className = "todo-list">{props.text}</li>
    </div>
    </>
    )
}

export default ToDoList;