import { useForm } from "@mantine/form";
import { useEditUserMutation, useGetUsers } from "./Home.queries";

const initialValues = {
  id: 0,
  name: "",
  email: "",
};

const HomeLogic = () => {
  const form = useForm({ initialValues });

  const { data: users, isLoading, isError } = useGetUsers();

  const {
    mutate,
    isLoading: editLoading,
    isError: editError,
  } = useEditUserMutation();

  const handleEditUser = form.onSubmit((values) => mutate(values));

  return { users, isLoading, isError, handleEditUser, form, editLoading };
};

export default HomeLogic;
