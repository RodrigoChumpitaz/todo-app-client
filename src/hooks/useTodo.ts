import { useEffect, useState } from "react"
import { getAll } from "../service/todo.service"
import { ITodo } from "../interfaces/todo.interface"

export const useTodo = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    const getTodos = async () => {
        const data = await getAll()
        setTodos(data)
    }

    useEffect(() => {
        getTodos()
    },[])
    
    return {
        todos,
        setTodos
    }
}