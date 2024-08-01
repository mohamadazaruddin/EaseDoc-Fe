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

export default function Consultant() {
  const location = useLocation();
  const user = location.state;
    console.log(user,"user");
  return (
    <Box h="100vh" w="100%" bgColor="contrast.200" py="60px" px="80px">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        columnGap="20px"
      >
        <UserCard
          name={user.doctorName}
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
          <Box w="50%" mr="10px">
            <Text>Illness history</Text>
            <Textarea
              size="lg"
              borderRadius="8px"
              resize="none"
              bgColor="secondary.100"
            />
          </Box>
          <Box w="50%">
            <Box mb="100px">
              <Text>Recent Surgery</Text>
              <Input borderRadius="8px" bgColor="secondary.100" type="date" />
            </Box>
            <Button
              borderRadius="20px"
              bgColor="primary.500"
              w="100px"
              float="right"
            >
              Next
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
