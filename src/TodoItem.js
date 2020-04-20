import React from "react"

function TodoItem(props){
  const completestyle = {
    fontStyle:"italic",
    color:"#cdcdcd",
    textDecoration:"line-through"
  }
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onchanged={() => props.handleChange(props.item.id)}
        />
      <p style={props.item.completed ? completestyle: null}>{props.item.text}</p>
    </div>
  )
}
export default TodoItem
