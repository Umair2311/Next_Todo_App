interface TodoProps {
  label: string
  placeHolder?: string
  callBack?: () => void
}

function TodoInput(props: TodoProps) {
  const { label, placeHolder, callBack } = props
  return (
    <div className="flex">
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-56 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeHolder ?? label}
      />
      <button
        className="px-3 py-1 cursor-pointer text-2xl border rounded-md mx-1"
        onClick={callBack && callBack}
      >
        {label}
      </button>
    </div>
  )
}

export default TodoInput
