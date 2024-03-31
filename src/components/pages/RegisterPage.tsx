import { useNavigate } from "react-router-dom"
import RegisterForm from "../forms/RegisterForm"
import { Button } from "../ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card"

const RegisterPage = () => {

  const navigate = useNavigate();

  return (
    <Card className="w-1/4">
    <CardHeader>
      <CardTitle>Register</CardTitle>
      <CardDescription>Enter your credentials to register</CardDescription>
    </CardHeader>
    <CardContent>
      <RegisterForm />
    </CardContent>
    <CardFooter className="flex justify-center">
      <Button variant={"ghost"} className="w-full" onClick={() => navigate("/login")}>Do you have an account? Login</Button>
    </CardFooter>
  </Card>
  )
}

export default RegisterPage
