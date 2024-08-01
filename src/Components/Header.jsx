import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Flex justifyContent="space-between" alignItems="center" px={20} py={8} borderBottom='1px solid #0000001A'>
      <Flex justifyContent="center" alignItems="center" fontSize="32px">
        <Text>Ease</Text>
        <Text color="primary.500">Doc</Text>
      </Flex>

      <Button borderRadius="34px" bgColor="primary.500" color='contrast.200'>
        ShareApp
      </Button>
    </Flex>
  );
}
