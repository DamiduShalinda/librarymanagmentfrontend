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
      icon: <Home size={20} strokeWidth={1.5} absoluteStrokeWidth />,
    },
    {
      path: "/authors",
      name: "Authors",
      icon: <User size={20} strokeWidth={1.5} absoluteStrokeWidth />,
    },
    {
      path: "/books",
      name: "Books",
      icon: <Library size={20} strokeWidth={1.5} absoluteStrokeWidth />,
    },
  ];

  return (
    <nav className=" text-black flex flex-col justify-normal p-5 w-[300px] h-full">
      <h1 className="text-lg font-bold">Library Managment</h1>
      <div className="flex flex-col gap-5 justify-between h-full pt-6">
        <div className="flex flex-col gap-1">
          <NavBarSearch />
          {routes.map((route, index) => (
            <NavBarItem key={index} {...route} />
          ))}
        </div>
        <Button
          variant={"ghost"}
          onClick={() => dispatch(removeLoginData())}
          className="px-2 py-1 border-black/5 border-2 rounded-md hover:bg-black/10"
        >
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

