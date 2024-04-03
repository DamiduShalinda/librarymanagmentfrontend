import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export type RouterDetails = {
    path: string;
    name: string;
    icon: React.ReactNode;
  };

 const NavBarItem = ({ path, name, icon }: RouterDetails) => {
    const navigate = useNavigate();
    return (
      <Button
        variant={"ghost"}
        className="flex items-center justify-start gap-2 w-full"
        onClick={() => navigate(path)}
      >
        {icon} {name}
      </Button>
    );
  };

export default NavBarItem;
