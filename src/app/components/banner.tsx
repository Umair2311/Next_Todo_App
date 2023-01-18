"use client"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"
import AddTodoModal from "./AddTodoModal"
import { useState } from "react"
function Banner() {
  const [open, setopen] = useState(false)
  function handleTodoModal() {
    setopen(!open)
  }

  return (
    <div className="h-[calc(100vh-64px)]">
      <div className="p-20 h-full">
        <div className="flex justify-evenly items-center m-5 flex-col lg:flex-row">
          <TodoInput
            label="Add"
            placeHolder="Add Todo"
            callBack={handleTodoModal}
          />
          <TodoInput label="Search" placeHolder="Search Todo" />
        </div>
        <div className="flex justify-center p-3 m-5">
          <TodoList />
        </div>
      </div>
      <AddTodoModal open={open} close={handleTodoModal} />
    </div>
  )
}

export default Banner
