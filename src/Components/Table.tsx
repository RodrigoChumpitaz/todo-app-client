import { FC } from "react"
import { ITodo } from "../interfaces/todo.interface"
import { BiSolidPencil } from "react-icons/bi";
import { MdCommentsDisabled } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast"

interface TableProps {
    data: ITodo[],
    selectItem?: any,
    deleteItem: (id: string) => {}
}

const Table: FC<TableProps> = ({ data, selectItem, deleteItem }): JSX.Element => {
    const onDelete = (id: string) => {
        toast.promise(deleteItem(id) as any, {
            loading: 'Deleting...',
            success: <b>Deleted!</b>,
            error: <b>Could not delete.</b>,
        })
    }
    return (
        <section>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="overflow-x-auto shadow-lg rounded-md sm:rounded-lg lg:w-[80%] w-full mx-auto">
                {data && <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Descripción
                            </th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                Estado
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Deshabilitado
                            </th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                Acción
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((todo: ITodo) => (
                            <tr className="border-b border-gray-200 dark:border-gray-700" key={todo.id}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    {todo.title}
                                </th>
                                <td className="px-6 py-4">
                                    {todo.description}
                                </td>
                                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                    {todo.status}    
                                </td>
                                <td className="px-6 py-4">
                                    {todo.disable ? "Si" : "No"}
                                </td>
                                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 flex flex-row gap-2 flex-wrap items-center justify-center">
                                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded"  onClick={() => selectItem(todo)} >
                                        <BiSolidPencil />
                                    </button>
                                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-2 rounded" onClick={() => selectItem(todo)}>
                                        <MdCommentsDisabled />
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded" onClick={() => onDelete(todo.id)}>
                                        <BsFillTrashFill />
                                    </button>
                                </td>
                            </tr>
                        ))} 
                    </tbody>
                </table>}
            </div> 
        </section>
    )
}

export default Table
