import React, { useState, useContext } from "react";  
import { Link, Navigate } from "react-router-dom";  
import { useCookies } from "react-cookie";  
import { Box, Button, FormControl, FormLabel, Input, Heading, Text, Image } from '@chakra-ui/react';  
import AuthContext from "../services/context/AuthContext";  

export default function Login() {  
  const [username, setUsername] = useState("");  
  const [password, setPassword] = useState("");  
  const [viewpass, setViewpass] = useState(false);  
  const { login } = useContext(AuthContext);  
  const handleLogin = async (e) => {  
    e.preventDefault();  
    login({ username, password });  
  };  
  const [cookies] = useCookies(["user"]);  

  return cookies.token ? (  
    <Navigate to="/home" />  
  ) : (  
    <Box h='full' p={5} display="flex" alignItems="center" justifyContent="center">  
      <Box mx="auto" py={6} px={4} w="full" bg="white" shadow="md" borderRadius="md" maxW="500px">  
        <Image src="/assets/images/appLogo.svg" alt="logo" boxSize="100px" mx="auto" />  
        
        {/* Form */}  
        <form onSubmit={handleLogin} style={{ marginTop: '32px' }}>  
          <Heading as="h2" size="lg" textAlign="center" fontWeight="semibold">Log In</Heading>  
          <FormControl mb={4} mt={4}>  
            <FormLabel htmlFor="username">Username</FormLabel>  
            <Input  
              id="username"  
              type="text"  
              placeholder="Username"  
              value={username}  
              onChange={(e) => setUsername(e.target.value)}  
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
            <Link to="/signup" style={{ color: "#38B2AC" }}>  
              Sign up  
            </Link>  
          </Text>  
        </form>  
      </Box>  
    </Box>  
  );  
}