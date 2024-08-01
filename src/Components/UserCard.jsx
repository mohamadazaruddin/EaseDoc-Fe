import React from "react";
import { Box, Text, Button, Avatar } from "@chakra-ui/react";

const UserCard = ({ name, title, onConsult, imageUrl }) => {
  return (
    <Box
      border="1px solid #0000001A"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      textAlign="center"
    >
      <Avatar name={name} src={imageUrl} size="xl" mb={4} bg="gray.200" />
      <Text fontWeight="bold" fontSize="lg">
        {name}
      </Text>
      <Text color="gray.500" mb={4}>
        {title}
      </Text>
      <Button bgColor="primary.500" color="contrast.200" onClick={onConsult}>
        Consult
      </Button>
    </Box>
  );
};

export default UserCard;
