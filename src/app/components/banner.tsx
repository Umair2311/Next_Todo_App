import TodoInput from "./TodoInput"
import SearchTodo from "./SearchTodo"
import TodoList from "./TodoList"
function Banner() {
  return (
    <div className="h-[calc(100vh-64px)]">
      <div className="p-20 h-full">
        <div className="flex justify-evenly items-center m-5">
          <TodoInput />
          <SearchTodo />
        </div>
        <div className="flex justify-center p-3 m-5">
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default Banner
