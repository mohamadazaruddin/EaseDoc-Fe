import React from "react";
import { Box, Avatar, Text, VStack, HStack, Divider } from "@chakra-ui/react";

const ProfileCard = ({ user }) => {
  return (
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
      <HStack mb={4}>
        <Avatar size="lg" name={user.name} src="" />{" "}
        <VStack align="start" spacing={1}>
          <Text fontWeight="bold" fontSize="lg">
            {user.name}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {user.email}
          </Text>
        </VStack>
      </HStack>

      {/* Phone Number */}
      <Text mb={2}>
        <b>Phone Number:</b> {user.phone_number}
      </Text>

      {/* History */}
      <Divider my={2} />
      <VStack align="start" spacing={1}>
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
      </VStack>
    </Box>
  );
};

export default ProfileCard;
