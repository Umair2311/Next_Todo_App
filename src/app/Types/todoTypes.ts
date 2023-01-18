export interface TodoListType {
  "first-name": string
  "last-name": string
  email: string
  id?: number
}

export interface OptionType {
  method: "GET" | "POST" | "PUT" | "DELETE"
  headers: { "content-type": "application/json" }
  body?: string
}
