import { useMutation } from "@tanstack/react-query";
import { loginService } from "./Login.services";

export const useLogin = () => {
  return useMutation((body) => loginService(body));
};
