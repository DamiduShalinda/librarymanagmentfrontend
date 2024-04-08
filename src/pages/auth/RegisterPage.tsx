import { useNavigate } from "react-router-dom";
import RegisterForm from "../../components/auth/RegisterForm.tsx";
import { Button } from "../../components/ui/button.tsx";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../components/ui/card.tsx";
import { TRegisterSchema } from "@/schema/registerSchema.ts";
import { useMutation } from "@tanstack/react-query";
import { register } from "@/api/register/index.ts";

const RegisterPage = () => {
  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: register,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      navigate("/login");
    },
  });

  const onSubmit = (data: TRegisterSchema) => {
    registerMutation.mutate(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-1/4">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Enter your credentials to register</CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm onSubmit={onSubmit} />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            variant={"ghost"}
            className="w-full"
            onClick={() => navigate("/login")}
          >
            Do you have an account? Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterPage;
