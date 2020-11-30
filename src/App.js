import React, { useState } from "react";
import "./index.css";
import ToDoList from "./ToDoList"

const App = () => {
  const[itemValue, setItemValue] = useState();
  const[item , setItem] = useState([]);
  const itemEvent = (event) => {
    setItemValue(event.target.value);
  }
  const listItem = () => {
    setItem((oldItems) => {
      return[...oldItems, itemValue];
    });
    setItemValue("");
  };
  const deleteItem = (id) => {
  setItem((oldItems) => {
    return oldItems.filter((arrElem, index) => {
    return index != id;
    });
  });
};
  return( 
     <>
       <div className = "main-div">
         <div className = "todo-div">
           <h1 className = "todo-heading">To Do List</h1>
           <input type = "text" placeholder = "Add a Items"
           value = {itemValue} className = "todo-input" onChange = {itemEvent}/>
           <button type = "button" className = "todo-button" onClick = {listItem}>+</button>
           <ol className = "todo-main-list">
             {/*<li className = "todo-list">{itemValue}</li>*/}
             {item.map((itemVal,indexNo) => {
               return <ToDoList text = {itemVal} onSelect = {deleteItem}
                key = {indexNo} id = {indexNo}/>;
             })}
           </ol>
         </div>
       </div>
     </>
   )
}

export default App;