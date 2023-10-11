import { useQuery } from "@tanstack/react-query";
import { getUsersService } from "./Home.services";

export const useGetUsers = () => {
  return useQuery(["users"], () => getUsersService());
};
