import { useNavigate } from "react-router-dom"
import RegisterForm from "../../components/auth/RegisterForm.tsx"
import { Button } from "../../components/ui/button.tsx"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../components/ui/card.tsx"

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
