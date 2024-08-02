import React, { useEffect, useState } from "react";
import {
  Flex,
  Textarea,
  Button,
  Box,
  GridItem,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import UserCard from "../Components/UserCard";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { nullPlaceholder } from "../services/utils/nullPlaceholder";
import { ToastContainer, toast } from "react-toastify";

export default function Prescription() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = location.state;
  console.log(user.user._id, "ddd");
  const [formData, setFormData] = useState({
    care_taken: "",
    medicines: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    const prescription = {
      consultation_id: user.user._id,
      care_taken: formData.care_taken,
      medicines: formData.medicines,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/prescription`,
        prescription
      );
      navigate("/dashboard");
      toast.success("Prescription created", { autoClose: 1000 });
      onClose();
    } catch (error) {
      toast.success("Something Went Wrong", { autoClose: 1000 });
    }
  };
  const {
    name,
    email,
    phone_number,
    role,
    history_of_illness,
    history_of_surgery,
  } = user.user.patient;

  const { current_illness, family_history, allergies, others } = user.user;
  return (
    <Box
      h="100vh"
      w="100%"
      overflowY="auto"
      bgColor="contrast.200"
      py="60px"
      px="80px"
    >
      <Header />
      <Flex justifyContent="space-between" w="100%" columnGap="20px" mt={10}>
        <UserCard name={name} title={email} onConsult={() => {}} />
        <Box
          w="80%"
          px="20px"
          py="30px"
          textAlign="center"
          borderRadius="8px"
          border="1px solid #0000001A"
        >
          <Grid templateColumns="repeat(3, 1fr)" gap={6} textAlign="start">
            <GridItem>
              <Box as="span" fontWeight="semibold" mr={1}>
                Name :
              </Box>
              {nullPlaceholder(name)}
            </GridItem>
            <GridItem>
              <Box as="span" fontWeight="semibold" mr={1}>
                Email :
              </Box>

              {nullPlaceholder(email)}
            </GridItem>
            <GridItem>
              <Box as="span" fontWeight="semibold" mr={1}>
                Phone Number :
              </Box>
              {nullPlaceholder(phone_number)}
            </GridItem>
            <GridItem>
              <Box as="span" fontWeight="semibold" mr={1}>
                History of Illness :
              </Box>
              {nullPlaceholder(history_of_illness)}
            </GridItem>
            <GridItem>
              <Box as="span" fontWeight="semibold" mr={1}>
                History of Surgery :
              </Box>
              {nullPlaceholder(history_of_surgery)}
            </GridItem>
            <GridItem>
              <Box as="span" fontWeight="semibold" mr={1}>
                Current Illness :
              </Box>
              {nullPlaceholder(current_illness)}
            </GridItem>
            <GridItem>
              <Box as="span" fontWeight="semibold" mr={1}>
                Family history :
              </Box>
              {nullPlaceholder(family_history)}
            </GridItem>
            <GridItem>
              <Box as="span" fontWeight="semibold" mr={1}>
                Allergies :
              </Box>
              {nullPlaceholder(allergies)}
            </GridItem>
            <GridItem>
              <Box as="span" fontWeight="semibold" mr={1}>
                Others :
              </Box>
              {nullPlaceholder(others)}
            </GridItem>
          </Grid>
          <Button
            bgColor="#071A34"
            color="#fff"
            borderRadius="full"
            py={2}
            px={10}
            fontWeight="medium"
            onClick={onOpen}
            mt={10}
          >
            Create Prescription
          </Button>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Create Prescription</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Care Taken</FormLabel>
              <Input
                type="text"
                name="care_taken"
                value={formData.care_taken}
                onChange={handleChange}
                placeholder="Describe Care Taken"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Medicines</FormLabel>
              <Input
                type="text"
                name="medicines"
                value={formData.medicines}
                onChange={handleChange}
                placeholder="Enter Medicines Prescribed"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              borderRadius="50px"
              fontSize="sm"
              fontWeight="normal"
              py="2"
              bgColor="contrast.200"
              h="auto"
              color="primary.500"
              border="1px solid"
              borderColor="primary.500"
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              ml="4"
              borderRadius="50px"
              fontSize="sm"
              fontWeight="normal"
              py="2"
              bgColor="primary.500"
              h="auto"
              color="contrast.200"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
