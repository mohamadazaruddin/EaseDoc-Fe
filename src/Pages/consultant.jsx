import React, { useState } from "react";
import {
  Flex,
  Textarea,
  Text,
  useToast,
  Box,
  Spacer,
  Button,
  Input,
  Heading,
  FormControl,
  SimpleGrid,
  FormLabel,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import UserCard from "../Components/UserCard";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import { useCookies } from "react-cookie";
export default function Consultant() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state;
  const [cookies] = useCookies(["user"]);
  const [formData, setFormData] = useState({
    allergies: "",
    Others: "",
    current_illness: "",
    family_history: "",
    recent_surgery: "",
  });

  if (!user) {
    return (
      <Box h="100vh" w="100%" bgColor="contrast.200" py="60px" px="80px">
        <Text>No user data available.</Text>
      </Box>
    );
  }

  // Accessing the doctorName properties
  const doctor = user.user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const consultationData = {
      patient: cookies.user.id,
      doctor: doctor._id,
      current_illness: formData.current_illness,
      family_history: formData.family_history,
      recent_surgery: formData.recent_surgery,
      others: formData.Others,
      allergies: formData.allergies,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/consultation`,
        consultationData
      );
      setFormData({
        allergies: "",
        Others: "",
        current_illness: "",
        family_history: "",
        recent_surgery: "",
      });
      navigate("/dashboard");
      toast.success("Created Successfully", { autoClose: 1000 });
    } catch (error) {
      toast.error("Something Went Wrong", { autoClose: 1000 });
    }
  };
  return (
    <Box h="100vh" w="100%" bgColor="contrast.200" py="60px" px="80px">
      <Header />
      <Flex w="100%" columnGap="20px" mt={10}>
        <UserCard
          name={doctor.name}
          title={doctor.specialty ? doctor.specialty : doctor.email}
          onConsult={() => {}}
          imageUrl={user.imageUrl} // Ensure user.imageUrl exists or handle it appropriately
        />
        <Flex
          alignItems="flex-start"
          w="80%"
          px="20px"
          py="30px"
          borderRadius="8px"
          border="1px solid #0000001A"
        >
          <Box
            p={5}
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="full"
          >
            <Box w="full">
              <Heading as="h3" size="lg" textAlign="center" mb={6}>
                Create Consultation
              </Heading>
              <form onSubmit={handleSubmit}>
                <SimpleGrid columns={[1, 2]} spacing={4}>
                  <FormControl mb={4}>
                    <FormLabel>Current Illness</FormLabel>
                    <Input
                      type="text"
                      name="current_illness"
                      value={formData.current_illness}
                      onChange={handleChange}
                      placeholder="Describe Current Illness"
                    />
                  </FormControl>
                  <FormControl mb={4}>
                    <FormLabel>Family History</FormLabel>
                    <Input
                      type="text"
                      name="family_history"
                      value={formData.family_history}
                      onChange={handleChange}
                      placeholder="Enter Family History"
                    />
                  </FormControl>
                  <FormControl mb={4}>
                    <FormLabel>Recent Surgery Date</FormLabel>
                    <Input
                      type="date"
                      name="recent_surgery"
                      value={formData.recent_surgery}
                      onChange={handleChange}
                      placeholder="Enter Date of Recent Surgery"
                    />
                  </FormControl>

                  <FormControl mb={4}>
                    <FormLabel>Any Allergies</FormLabel>
                    <Input
                      type="text"
                      name="allergies"
                      value={formData.allergies}
                      onChange={handleChange}
                      placeholder="Allergies"
                    />
                  </FormControl>
                  <FormControl mb={4}>
                    <FormLabel>Others</FormLabel>
                    <Input
                      type="text"
                      name="Others"
                      value={formData.Others}
                      onChange={handleChange}
                      placeholder="Others"
                    />
                  </FormControl>
                </SimpleGrid>
                <Button type="submit" colorScheme="teal" width="full" mt={4}>
                  Submit
                </Button>
              </form>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
