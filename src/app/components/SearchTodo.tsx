function SearchTodo() {
  return (
    <div className="flex">
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-56 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Todo"
      />
      <button className="px-3 py-1 cursor-pointer text-2xl border rounded-md mx-1">
        Search
      </button>
    </div>
  )
}

export default SearchTodo
