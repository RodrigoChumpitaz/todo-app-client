import { ITodo, ITodoInsertRequest, ITodoInsertResponse } from "../interfaces/todo.interface";
const API_URL = import.meta.env.VITE_API_URL;

export const getAll = async (): Promise<ITodo[]> => {
    try {
        const response = await fetch(`${API_URL}/get`);
        const data: ITodo[] = await response.json();
        return data;
    } catch (error) {
        throw new Error(error as string);
    }
}

export const add = async (todo: ITodoInsertRequest): Promise<ITodoInsertResponse> => {
    try {
        const response = await fetch(`${API_URL}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        const data: ITodoInsertResponse = await response.json();
        return data;
    } catch (error) {
        throw new Error(error as string)
    }
}

export const deleteTodo = async (id: string): Promise<{}> => {
    try {
        const messageDelete = await fetch(`${API_URL}/delete/${id}`, {
            method: 'DELETE'
        })
        return messageDelete;
    } catch (error) {
        throw new Error(error as string)
    }
}