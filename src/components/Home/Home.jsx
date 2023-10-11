import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import HomeLogic from "./Home.logic";

function Home() {
  const { users, isLoading, isError } = HomeLogic();
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>ERROR</div>;
  }

  return (
    <>
      <div>
        <h1>User list</h1>
        {users.map((user) => (
          <div key={user.id}>
            {user.name} ({user.email})
          </div>
        ))}
      </div>
      <br />
      <Button onClick={() => navigateToLogin()}>Login</Button>
    </>
  );
}

export default Home;
