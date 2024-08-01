import React from "react";
import { Box, Text, Flex, Button, Image } from "@chakra-ui/react";
import Header from "../Components/Header";
import { Link, Navigate } from "react-router-dom";
export default function landingScreen() {
  return (
    <Box h="full" w="full" bgColor="#D2D8E3">
      <Header />
      <Flex px="80px" w="full" h="full" align="center">
        <Box w="50%">
          <Text fontWeight="bold" fontSize="64px" color="#361603">
            Quality Doctors
            <br /> For Your Best
            <br /> Care
          </Text>
          <Flex align="center" justify="flex-start" gap={5} mt={10}>
            <Link to="/login?role=patient">
              <Button
                px={5}
                py={2.5}
                bgColor="#071A34"
                color="#D7A11A"
                _hover={{
                  bgColor: "#071A34",
                  color: "#D7A11A",
                }}
              >
                Patient Login
              </Button>
            </Link>
            <Link to="/login?role=doctor">
              <Button
                px={5}
                py={2.5}
                bgColor="#D7A11A"
                color="#071A34"
                _hover={{
                  bgColor: "#D7A110",
                  color: "#071A34",
                }}
              >
                Doctor Login
              </Button>
            </Link>
          </Flex>
        </Box>
        <Box
          w="50%"
          h="full"
          display="flex"
          alignItems="end"
          justifyContent="flex-start"
        >
          <Image src="/doctorImg.png" height="500px" w="auto" />
        </Box>
      </Flex>
    </Box>
  );
}

// import React from "react";

// export default function Login() {
//   return (
//
//   );
// }
