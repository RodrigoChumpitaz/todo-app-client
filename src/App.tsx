import FormTodo from "./Components/FormTodo"
import Navbar from "./Components/Navbar"
import Table from "./Components/Table"
import { useCrudTodo } from "./hooks/useCrudTodo";
import { useTodo } from "./hooks/useTodo"
import { ITodo, ITodoInsertRequest, ITodoInsertResponse } from "./interfaces/todo.interface";
import { useState } from 'react';

function App(): JSX.Element{
  const { todos, setTodos } = useTodo();
  const { addTodo, removeTodo } = useCrudTodo();

  const [itemSelected, setItemSelected] = useState<ITodo | null>(null);

  const onSaveTodo = async (todoInsert: ITodoInsertRequest) => {
    try {
      const newTodo: ITodoInsertResponse  = await addTodo(todoInsert);
      setTodos((prevTodos) => [...prevTodos, newTodo.data]);
    } catch (error) {
      console.log(error);
    } 
  }

  const deleteTodo = async (id: string) => {
    try {
      const deleted = await removeTodo(id);
      if(deleted){
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className="text-center">
      <Navbar />
      <main className="flex flex-col gap-16 p-10 justify-center">
        <FormTodo onSave={onSaveTodo}/>
        <Table data={todos} deleteItem={deleteTodo} />
      </main>
    </div>
  )
}

export default App
