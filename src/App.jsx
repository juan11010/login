import { Box, Button, MantineProvider } from "@mantine/core";
import Login from "./components/Login/Login";
import "@mantine/core/styles.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <MantineProvider defaultColorScheme="auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
