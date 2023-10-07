import { ITodoInsertRequest, ITodoInsertResponse } from "../interfaces/todo.interface"
import { add, deleteTodo } from "../service/todo.service"

export const useCrudTodo = () => {
    const addTodo = async (todo: ITodoInsertRequest): Promise<ITodoInsertResponse> => {
        try {
            const data = await add(todo);
            return data;
        } catch (error) {
            throw error;
        }
    }

    const removeTodo = async (id: string) => {
        try {
            const data = await deleteTodo(id);
            return data;
        } catch (error) {
            throw error;
        }
    }

    return {
        addTodo,
        removeTodo
    }
}