import { FC } from "react"
import { ITodoInsertRequest } from "../interfaces/todo.interface"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"

interface FormTodoProps {
    onSave: (todoInsert: ITodoInsertRequest)=> void
}

const FormTodo: FC<FormTodoProps> = ({ onSave }): JSX.Element => {
    const { register, handleSubmit, reset, formState: { errors }} = useForm<ITodoInsertRequest>();

    const onSubmit = (data: ITodoInsertRequest) => {
        toast.promise(onSave(data) as any, {
            loading: 'Saving...',
            success: <b>Settings saved!</b>,
            error: <b>Could not save.</b>,
        })
        reset();
    }

    return (
        <div className="p-6 rounded bg-slate-800 dark:text-white sm:w-full lg:w-[35rem] text-lg lg:mx-auto">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <h2 className="font-bold mb-3">Add To-Do</h2>
            <form className="flex flex-col gap-4 text-slate-700" onSubmit={handleSubmit(onSubmit)}>
                <section className="flex gap-4 flex-wrap md:flex-nowrap">
                    <label htmlFor="title" className="font-semibold dark:text-white md:w-1/5">Title</label>   
                    <input 
                        type="text" 
                        id="title" 
                        required
                        className="md:w-4/5 w-full appearance-none rounded-sm p-1" 
                        {...register("title", { required: true })}
                        {...errors.title && <span className='text-red-400 text-xs'>Nombre es requerido</span>}
                    />
                </section>
                <section className="flex w-full gap-4 flex-wrap md:flex-nowrap">
                    <label htmlFor="description" className="font-semibold dark:text-white md:w-1/5">Description</label>   
                    <input 
                        type="text" 
                        id="description" 
                        required
                        className="md:w-4/5 w-full appearance-none rounded-sm p-1" 
                        {...register("description", { required: true })}
                        {...errors.description && <span className='text-red-400 text-xs'>Descripción es requerida</span>}
                    />
                </section>
                <button className="bg-red-400 rounded-md text-white font-bold py-2 mt-2">
                    Add
                </button>
            </form>
        </div>
    )
}

export default FormTodo
