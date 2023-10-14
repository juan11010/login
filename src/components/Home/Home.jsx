import { Button, Input, Modal, TextInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import HomeLogic from "./Home.logic";
import { useDisclosure } from "@mantine/hooks";

function Home() {
  const { users, isLoading, isError, handleEditUser, form, editLoading } =
    HomeLogic();
  const [opened, { open, close }] = useDisclosure(false);

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  const openModal = (userId) => {
    console.log(userId);
    form.setValues({ id: userId });
    open();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>ERROR</div>;
  }

  return (
    <>
      <Modal opened={opened} onClose={close} title="Editar Usuario">
        <form onSubmit={handleEditUser}>
          <TextInput
            label="Type the new name"
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Type the new email"
            {...form.getInputProps("email")}
          />
          <Button variant="filled" type="submit" mt="md" onClick={close}>
            Rename
          </Button>
        </form>
      </Modal>
      <div>
        <h1>User list</h1>
        {users.map((user) => (
          <div key={user.id}>
            {user.name} ({user.email})
            <Button onClick={() => openModal(user.id)} loading={editLoading}>
              Editar
            </Button>
          </div>
        ))}
      </div>
      <br />
      <Button onClick={() => navigateToLogin()}>Login</Button>
    </>
  );
}

export default Home;
