import { FC } from "react"
import { MdReportProblem } from "react-icons/md"

const Error: FC<{ message: string }> = ({ message }): JSX.Element => {
  return (
    <div className="p-4 bg-red-500 text-white rounded-md w-2/5 mx-auto flex justify-center items-center gap-2 shadow-lg">
        <p className="text-xl font-bold uppercase">{message} </p>
        <MdReportProblem className="text-4xl"/>
    </div>
  )
}

export default Error
