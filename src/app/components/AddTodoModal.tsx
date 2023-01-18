import { ChangeEvent, useEffect, useState } from "react"
import { TodoListType } from "../Types/todoTypes"

interface ModalProps {
  open: Boolean
  close: () => void
  data: TodoListType
  addTodo?: (data: TodoListType) => void
  editTodo?: (data: TodoListType) => void
}

function AddTodoModal(props: ModalProps) {
  const { open, close, addTodo, editTodo, data } = props
  const [todoData, setTodoData] = useState<TodoListType>({
    "first-name": "",
    "last-name": "",
    email: "",
  })

  useEffect(() => {
    if (data) {
      setTodoData(data)
    }
  }, [data])

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement>,
    todoInputs: string
  ) {
    let data = JSON.parse(JSON.stringify(todoData))
    data[todoInputs] = e.target.value
    setTodoData(data)
  }

  function submitTodo(type: "edit" | "add") {
    if (
      todoData.email !== "" &&
      todoData["first-name"] !== "" &&
      todoData["last-name"] !== ""
    ) {
      type === "add" && addTodo && addTodo(todoData)
      type === "edit" && editTodo && editTodo(todoData)
    } else {
      if (todoData.email === "") {
        alert("Enter your email")
      } else if (todoData["first-name"] === "") {
        alert("Enter your First name")
      } else {
        alert("Enter your Last Name")
      }
    }
    setTodoData({
      "first-name": "",
      "last-name": "",
      email: "",
    })
  }

  return (
    open && (
      <div
        tabIndex={-1}
        aria-hidden="true"
        className="fixed top-2/4 -translate-y-1/3 z-50 w-full p-4 overflow-x-hidden overflow-y-auto h-modal md:h-full"
      >
        <div className="relative w-full mx-auto my-0 h-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={close}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Added Name and Email
              </h3>
              <form className="space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={todoData.email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    onChange={(e) => handleInputChange(e, "email")}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="fname"
                    name="fname"
                    id="fname"
                    value={todoData["first-name"]}
                    placeholder="First Name"
                    onChange={(e) => handleInputChange(e, "first-name")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="lname"
                    name="lname"
                    id="lname"
                    value={todoData["last-name"]}
                    placeholder="Last Name"
                    onChange={(e) => handleInputChange(e, "last-name")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => submitTodo(data ? "edit" : "add")}
                >
                  {data.email ? "Update Todo" : "Add Todo"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default AddTodoModal
