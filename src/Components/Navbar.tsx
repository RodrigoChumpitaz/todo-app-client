import { BiSolidUserCircle } from "react-icons/bi"
import { BsMoonStarsFill } from "react-icons/bs"

const Navbar = (): JSX.Element  => {
  return (
    <nav className="bg-slate-800 py-5 px-4 dark:text-white flex items-center justify-between flex-wrap shadow-lg">
      <section>
        <h1 className="font-bold text-xl">Todo<span className="text-red-400">App</span></h1>
      </section>
      <section className="flex items-center gap-2">
        <BsMoonStarsFill  className="text-[1.5em] mx-5" />
        <BiSolidUserCircle className="text-[2rem]" />
        <p className="text-xl">Usuario</p>
      </section>
    </nav>
  )
}

export default Navbar
