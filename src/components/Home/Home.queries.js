import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { editUserService, getUsersService } from "./Home.services";

export const useGetUsers = () => {
  return useQuery(["users"], () => getUsersService());
};

export const useEditUserMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (body) => {
      const { id, name, email } = body;
      console.log(id);
      editUserService(id, { name, email });
    },
    {
      onSuccess: (res, body) => {
        const { id } = body;
        queryClient.invalidateQueries(["users", id]);
      },
    },
  );
};
