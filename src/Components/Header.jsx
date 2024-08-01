import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: "EaseDoc",
        text: "Check out this amazing website!",
        url: window.location.href, // Get the current URL
      });
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };
  return (
    <Flex
      justifyContent="space-between"
      pos="absolute"
      zIndex="999"
      right={0}
      left={0}
      top={0}
      alignItems="center"
      px={20}
      py={2}
      borderBottom="1px solid #0000001A"
    >
      <Flex justifyContent="center" alignItems="center" fontSize="28px">
        <Text>Ease</Text>
        <Text color="primary.500">Doc</Text>
      </Flex>

      <Button
        borderRadius="50px"
        fontSize="sm"
        fontWeight="normal"
        py="2"
        bgColor="primary.500"
        onClick={handleShare}
        h="auto"
        color="contrast.200"
      >
        ShareApp
      </Button>
    </Flex>
  );
}
