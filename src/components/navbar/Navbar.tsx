import { removeLoginData } from "@/state/login/loginSlice";
import { AppDispatch } from "@/state/store";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import React from "react";
import { Home, Library, User } from "lucide-react";
import NavBarItem, { RouterDetails } from "./NavBarItem";
import NavBarSearch from "./NavBarSearch";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const routes: RouterDetails[] = [
    {
      path: "/",
      name: "Home",
      icon: <Home size={16} strokeWidth={1} absoluteStrokeWidth />,
    },
    {
      path: "/authors",
      name: "Authors",
      icon: <User size={16} strokeWidth={1} absoluteStrokeWidth />,
    },
    {
      path: "/books",
      name: "Books",
      icon: <Library size={16} strokeWidth={1} absoluteStrokeWidth />,
    },
  ];

  return (
    <nav className="flex flex-col justify-normal p-5 pr-0 w-[300px] h-full bg-gray-100">
      <div className="flex w-full flex-col items-center">
        <h1 className="text-xs font-medium text-red-700">University of Kelaniya</h1>
        <h1 className="text-3xl font-bold">Library</h1>
      </div>
      <div className="flex flex-col gap-5 justify-between h-full pt-6">
        <div className="flex flex-col gap-1">
          {routes.map((route, index) => (
            <NavBarItem key={index} {...route} />
          ))}
        </div>
        <Button
          variant={"ghost"}
          onClick={() => dispatch(removeLoginData())}
          className="px-2 py-1 border-black/5 border-2 rounded-md hover:bg-white"
        >
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

