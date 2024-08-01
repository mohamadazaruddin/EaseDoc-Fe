import React, { useState, useContext } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import AuthContext from "../services/context/AuthContext";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [viewpass, setViewpass] = useState(false);
  const { login } = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    login({ email, password });
  };
  const [cookies] = useCookies(["user"]);
  const location = useLocation();

  const useQuery = () => {
    return new URLSearchParams(location.search);
  };
  const query = useQuery();
  const role = query.get("role");
  return cookies.token ? (
    <Navigate to="/dashboard" />
  ) : (
    <Box
      h="full"
      p={5}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgColor="contrast.200"
    >
      <Box
        mx="auto"
        py={6}
        px={4}
        w="full"
        bg="white"
        shadow="md"
        borderRadius="md"
        maxW="500px"
      >
        {/* Form */}
        <form onSubmit={handleLogin} style={{ marginTop: "32px" }}>
          <Heading
            as="h2"
            size="md"
            textAlign="center"
            fontWeight="semibold"
            textTransform="capitalize"
          >
            {role} Log In
          </Heading>
          <FormControl mb={4} mt={4}>
            <FormLabel htmlFor="email">email</FormLabel>
            <Input
              id="email"
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outline"
            />
          </FormControl>
          <FormControl mb={6} position="relative">
            <Button
              position="absolute"
              top="35px"
              right="4"
              variant="link"
              onClick={() => setViewpass(!viewpass)}
              zIndex={1}
            >
              {viewpass ? "Hide" : "Show"}
            </Button>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type={viewpass ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outline"
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="teal"
            width="full"
            borderRadius="full"
            py={2}
            fontWeight="medium"
            mt={4}
          >
            Log In
          </Button>
          <Text textAlign="right" fontSize="xs" mt={1}>
            Not registered yet?
            <Link to={`/signup?role=${role}`} style={{ color: "#38B2AC" }}>
              Sign up
            </Link>
          </Text>
        </form>
      </Box>
    </Box>
  );
}
