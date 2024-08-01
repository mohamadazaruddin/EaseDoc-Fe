import React from "react";
import Header from "../Components/Header";
import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import UserCard from "../Components/UserCard";

export default function Dashboard() {
  const users = [
    {
      name: "Dr Abhishek Sharma",
      title: "Eye Specialist",
      imageUrl: "image-url-1",
    },
    { name: "Dr Priya Verma", title: "Dermatologist", imageUrl: "image-url-2" },
    { name: "Dr Ravi Shankar", title: "Cardiologist", imageUrl: "image-url-3" },
    { name: "Dr Neha Gupta", title: "Pediatrician", imageUrl: "image-url-4" },
  ];

  const handleConsult = (doctorName) => {
    alert(`Consultation initiated with ${doctorName}`);
  };

  return (
    <Box height="100vh" bgColor="contrast.200" w="full">
      <Header />
      <Box px={20} py={8}>
        <Flex alignItems="center" justifyContent="space-between" mt={10}>
          <Flex>
            <Text fontWeight="600">List Of Doctors</Text>
            <Text color="primary.500">({users.length})</Text>
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
          {users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              title={user.title}
              onConsult={() => handleConsult(user.name)}
              imageUrl={user.imageUrl}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
