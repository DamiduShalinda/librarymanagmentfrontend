import { removeLoginData } from "@/state/login/loginSlice";
import { AppDispatch } from "@/state/store";
import { useDispatch } from "react-redux";

const Navbar = () => {

  const dispatch = useDispatch<AppDispatch>();

  return (
    <nav className=" text-black flex justify-between p-5 w-full border-b border-black">
      <h1 className="text-lg font-bold">Library Managment</h1>
      <div className="flex flex-row gap-5">
        <a href="/" className="px-2 py-1 border-black/5 border-2 rounded-md hover:bg-black/10">Home</a>
        <a href="/authors" className="px-2 py-1 border-black/5 border-2 rounded-md hover:bg-black/10">Authors</a>
        <a href="/books" className="px-2 py-1 border-black/5 border-2 rounded-md hover:bg-black/10">Books</a>
        <a href="#"
         onClick={() => dispatch(removeLoginData())}
         className="px-2 py-1 border-black/5 border-2 rounded-md hover:bg-black/10"
         >Logout</a>
      </div>
    </nav>
  )
}

export default Navbar