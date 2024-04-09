import { TLoginSchema, loginSchema } from "@/schema/loginSchema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button.tsx";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form.tsx";
import { Input } from "../ui/input.tsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "@/api/login";
import { toast } from "../ui/use-toast.ts";
import { AppDispatch } from "@/state/store.ts";
import { useDispatch } from "react-redux";
import { saveLoginData } from "@/state/login/loginSlice.ts";
import { setLoading } from "@/state/login/loadingSlice.ts";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: login,
    onError: (error) => {
      dispatch(setLoading(false));
      toast({
        title: "Login failed",
        description: error.message,
        duration: 1500,
      });
      form.reset();
    },
    onSuccess: (data) => {
      dispatch(setLoading(false));
      queryClient.invalidateQueries({ queryKey: ["login"] });
      console.log(data.data);
      toast({
        title: "Login successful",
        variant: "default",
        duration: 1500,
      });
      dispatch(saveLoginData(data.data));
      if (data.data.role === "Admin") {
        navigate("/");
      } else {
        navigate("/borrow");
      }
    },
  });

  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: TLoginSchema) {
    loginMutation.mutate(data);
  }

  if (loginMutation.isPending) {
    dispatch(setLoading(true));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-Mail</FormLabel>
              <FormControl>
                <Input placeholder="example@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
