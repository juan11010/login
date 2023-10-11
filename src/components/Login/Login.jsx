import {
  Box,
  Button,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import LoginLogic from "./Login.logic";

function Login() {
  const { form, handleLogin, isLoading } = LoginLogic();

  return (
    <Box maw={400} mx="auto">
      <Paper shadow="sm" radius="md" p="xl" withBorder>
        <Text size="lg" fw={500}>
          Welcome
        </Text>
        <Divider my="lg" />
        <form onSubmit={handleLogin}>
          <Stack>
            <TextInput
              label="Email"
              placeholder="ejemplo@email.com"
              {...form.getInputProps("email")}
              required
            />
            <PasswordInput
              label="Password"
              {...form.getInputProps("password")}
              required
            />
          </Stack>
          <Group justify="right" my="md">
            <Button type="submit" radius="lg" loading={isLoading}>
              Login
            </Button>
          </Group>
        </form>
      </Paper>
    </Box>
  );
}

export default Login;
