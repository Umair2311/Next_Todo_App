"use client"
import { useEffect, useState } from "react"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"
import AddTodoModal from "./AddTodoModal"
import { OptionType, TodoListType } from "../Types/todoTypes"

function Banner() {
  const [open, setOpen] = useState(false)
  const [todoList, setTodoList] = useState<TodoListType[]>([])
  function handleTodoModal() {
    setOpen(!open)
  }

  useEffect(() => {
    getTodoList()
  }, [])

  async function TodoApi(
    method: "GET" | "PUT" | "POST" | "DELETE",
    data?: TodoListType
  ) {
    let options: OptionType = {
      method: method,
      headers: { "content-type": "application/json" },
    }
    method === "POST" && (options["body"] = JSON.stringify(data))
    const todoData = await fetch("http://localhost:3001/users", options)
    const todoResponse = await todoData.json()
    return todoResponse
  }

  function addTodo(data: TodoListType) {
    setOpen(false)
    TodoApi("POST", data)
    getTodoList()
  }
  async function getTodoList() {
    const listTodo = await TodoApi("GET")
    listTodo && setTodoList(listTodo)
  }

  async function handleSearchList(text?: string) {
    const listData = await TodoApi("GET")
    if (!text) {
      setTodoList(listData)
    } else {
      const filteredList =
        listData &&
        listData.filter((item: TodoListType) => {
          return item["first-name"].toLowerCase().includes(text.toLowerCase())
        })

      setTodoList(filteredList)
    }
  }

  return (
    <div className="h-[calc(100vh-64px)] overflow-y-auto">
      <div className="p-20 h-full">
        <div className="flex justify-evenly items-center m-5 flex-col lg:flex-row">
          <TodoInput
            label="Add Todo"
            placeHolder="Add Todo"
            callBack={handleTodoModal}
          />
          <TodoInput
            label="Search"
            placeHolder="Search Todo"
            callBack={handleSearchList}
          />
        </div>
        <div className="flex justify-center p-3 m-5">
          <TodoList list={todoList} />
        </div>
      </div>
      <AddTodoModal open={open} close={handleTodoModal} addTodo={addTodo} />
    </div>
  )
}

export default Banner
