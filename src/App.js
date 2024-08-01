import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./Styles/theme";
import { Dashboard, Login, LandingScreen, Consultant } from "./Pages";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/consultant" element={<Consultant />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
