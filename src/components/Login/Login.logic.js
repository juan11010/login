import { joiResolver, useForm } from "@mantine/form";
import loginSchema from "./schema";
import { useLogin } from "./Login.queries";

const initialValues = {
  email: "",
  password: "",
};

const LoginLogic = () => {
  const form = useForm({
    initialValues,
    validate: joiResolver(loginSchema),
  });

  const { mutate, isLoading } = useLogin();

  const handleLogin = form.onSubmit((body) =>
    mutate(body, { onSuccess, onError }),
  );

  const onSuccess = () => console.log("login successful");
  const onError = () => console.log("login failed");

  return { form, handleLogin, isLoading };
};

export default LoginLogic;
