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
import { toast } from "@/components/ui/use-toast.ts";

const RegisterPage = () => {
  const navigate = useNavigate();

  const {mutate , data } = useMutation({
    mutationFn: register,
    onError: (error) => {
      console.log(error);
      toast({
        title: error.message,
        variant: "destructive",
        duration: 1500,
      });
    },
    onSuccess: () => {
      navigate("/login");
      toast({
        title: "User registered successfully",
        variant: "default",
        duration: 1500,
      });
    },
  });

  const onSubmit = (data: TRegisterSchema) => {
    mutate(data);
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
