import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm.tsx";
import { Button } from "../../components/ui/button.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card.tsx";

const LoginPage = () => {

  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-1/4">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to login</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant={"ghost"} className="w-full" onClick={() => navigate("/register")}>Don't have an account? Register</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
