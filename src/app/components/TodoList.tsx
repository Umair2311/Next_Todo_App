function TodoList() {
  return (
    <div>
      <table className="table-auto border-collapse border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600 p-3">Id</th>
            <th className="border border-slate-600 p-3">First Name</th>
            <th className="border border-slate-600 p-3">Email</th>
            <th className="border border-slate-600 p-3">Button 1</th>
            <th className="border border-slate-600 p-3">Button 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-600 p-3">1</td>
            <td className="border border-slate-600 p-3">Umair</td>
            <td className="border border-slate-600 p-3">test@test.co</td>
            <td className="border border-slate-600 p-3">
              <button className="px-3 py-1 cursor-pointer text-2xl border rounded-md mx-1">
                Edit
              </button>
            </td>
            <td className="border border-slate-600 p-3">
              <button className="px-3 py-1 cursor-pointer text-2xl border rounded-md mx-1">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TodoList
