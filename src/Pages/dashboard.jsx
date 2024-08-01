import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import UserCard from "../Components/UserCard";
import ProfileCard from "../Components/ProfileCard";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Dashboard() {
  const [userData, setUserData] = useState([]);
  const [cookies] = useCookies(["user"]);
  const role = cookies.user?.role; // Safe access using optional chaining
  const navigate = useNavigate(); // Initialize useNavigate
  console.log(cookies.user, "ee");
  // Fetch the user data
  const getUsers = async () => {
    if (!role) return; // Exit if role is not defined
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/users?role=${role}`
      );
      console.log(response.data, "response");
      setUserData(response.data);
    } catch (err) {
      console.log(err.response?.data?.message || err.message, "it is an error");
    }
  };

  // Call getLikes when the component mounts or role changes
  useEffect(() => {
    getUsers();
  }, [role]);

  const handleConsult = (user) => {
    // Use navigate() to change route
    if (role === "doctor") {
      navigate("/consultant", { state: { user } });
    } else if (role === "patient") {
      navigate("/prescription", { state: { user } });
    }
  };

  return (
    <Box
      height="100vh"
      overflowY="auto"
      bgColor="contrast.200"
      w="full"
      pt={10}
    >
      <Header />
      <Box px={20} py={8}>
        <ProfileCard user={cookies.user} />
        <Flex alignItems="center" justifyContent="space-between" mt={10}>
          <Flex>
            <Text fontWeight="600">List Of Doctors</Text>
            <Text color="primary.500">({userData.length})</Text>
          </Flex>

          <Box
            bgColor="secondary.500"
            color="yellow.500"
            p="6px 10px"
            borderRadius="8px"
          >
            Notifications (0)
          </Box>
        </Flex>
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={10} pt={5}>
          {userData.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              title={user.specialty ? user.specialty : user.email}
              onConsult={() => handleConsult(user)}
              imageUrl={user.imageUrl}
              role={user.role}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
