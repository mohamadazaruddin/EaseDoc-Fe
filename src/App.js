import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./Styles/theme";
import React from "react";
import { Dashboard, Login, LandingScreen, Signup } from "./Pages";
import axios from "axios";
import { CookiesProvider, useCookies } from "react-cookie";
import { AuthProvider } from "./services/context/AuthContext";
function App() {
  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}`)
      .then(function (response) {})
      .catch(function (err) {});
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <CookiesProvider>
            <Routes>
              <Route path="/" element={<LandingScreen />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
          </CookiesProvider>
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}
const PrivateRoute = ({ children }) => {
  const [cookies] = useCookies(["user"]);
  return cookies.token ? children : <Navigate to="/login" />;
};

export default App;
