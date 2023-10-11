import { useGetUsers } from "./Home.queries";

const HomeLogic = () => {
  const { data: users, isLoading, isError } = useGetUsers();
  return { users, isLoading, isError };
};

export default HomeLogic;
