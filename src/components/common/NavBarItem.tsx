import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button.tsx";

export type RouterDetails = {
  path: string;
  name: string;
  icon: React.ReactNode;
};

const NavBarItem = ({ path, name, icon }: RouterDetails) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Button
      variant={"ghost"}
      className={`px-2 py-1 rounded-md hover:bg-white flex items-center justify-start gap-2 rounded-r-none ${
        location.pathname === path ? "bg-white pl-8" : ""
      }`}
      onClick={() => navigate(path)}
    >
      {icon} {name}
    </Button>
  );
};

export default NavBarItem;
