import { TodoListType } from "../Types/todoTypes"

interface TodoListProps {
  list: TodoListType[]
  editCallBack?: (item: TodoListType) => void
  deleteCallBack?: (item: TodoListType) => void
}

function TodoList(props: TodoListProps) {
  const { list, editCallBack, deleteCallBack } = props
  return (
    <div>
      <table className="table-auto border-collapse border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600 p-3">Id</th>
            <th className="border border-slate-600 p-3">First Name</th>
            <th className="border border-slate-600 p-3">Last Name</th>
            <th className="border border-slate-600 p-3">Email</th>
            <th colSpan={2} className="border border-slate-600 p-3 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="border border-slate-600 p-3">{item.id}</td>
                  <td className="border border-slate-600 p-3">
                    {item["first-name"]}
                  </td>
                  <td className="border border-slate-600 p-3">
                    {item["last-name"]}
                  </td>
                  <td className="border border-slate-600 p-3">{item.email}</td>
                  <td className="border border-slate-600 p-3">
                    <button
                      className="px-3 py-1 cursor-pointer text-2xl border rounded-md mx-1"
                      onClick={() => editCallBack && editCallBack(item)}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="border border-slate-600 p-3">
                    <button
                      className="px-3 py-1 cursor-pointer text-2xl border rounded-md mx-1"
                      onClick={() => deleteCallBack && deleteCallBack(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default TodoList
