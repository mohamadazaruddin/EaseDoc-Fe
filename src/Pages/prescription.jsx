import React from "react";
import {
  Flex,
  Textarea,
  Text,
  Box,
  Spacer,
  Button,
  Input,
  Dat,
} from "@chakra-ui/react";
import UserCard from "../Components/UserCard";
import { useLocation } from "react-router-dom";

export default function Prescription() {
  const location = useLocation();
  const user = location.state;
  console.log(user, "user");
  return (
    <Box h="100vh" w="100%" bgColor="contrast.200" py="60px" px="80px">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        columnGap="20px"
      >
        <UserCard
          name={user.doctorName.name}
          title="Eye Specialist"
          onConsult={() => {}}
        />
        <Flex
          alignItems="flex-start"
          w="80%"
          px="20px"
          py="30px"
          h="280px"
          borderRadius="8px"
          border="1px solid #0000001A"
        >
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            p={4}
            maxW="sm"
            bg="white"
          >
            {/* Profile Picture */}
            <HStack mb={4} spacing={4}>
              <Image
                borderRadius="full"
                boxSize="100px"
                src="https://via.placeholder.com/100" // Placeholder or actual URL
                alt={user.name}
                objectFit="cover"
              />
              <VStack align="start" spacing={1}>
                <Text fontWeight="bold" fontSize="lg">
                  {user.name}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {user.email}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  <b>Phone:</b> {user.phone_number}
                </Text>
              </VStack>
            </HStack>

            {/* Role */}
            <Text mb={2}>
              <b>Role:</b> {user.role}
            </Text>

            {/* History */}
            <Divider my={2} />
            <Stack spacing={1} align="start">
              {user.history_of_surgery && (
                <Text>
                  <b>History of Surgery:</b> {user.history_of_surgery}
                </Text>
              )}
              {user.history_of_illness && (
                <Text>
                  <b>History of Illness:</b> {user.history_of_illness}
                </Text>
              )}
            </Stack>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
