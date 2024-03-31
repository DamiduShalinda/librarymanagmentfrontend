import { useNavigate } from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const LoginPage = () => {

  const navigate = useNavigate();

  return (
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
  );
};

export default LoginPage;
