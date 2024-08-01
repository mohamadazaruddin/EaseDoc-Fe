import React, { useState, useContext } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import AuthContext from "../services/context/AuthContext";
import { toast } from "react-toastify";
import { Link, Navigate, useLocation } from "react-router-dom";
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [historyOfSurgery, setHistoryOfSurgery] = useState("");
  const [historyOfIllness, setHistoryOfIllness] = useState("");
  const [password, setPassword] = useState("");
  const [viewpass, setViewpass] = useState(false);
  const location = useLocation();
  const { login } = useContext(AuthContext);
  const useQuery = () => {
    return new URLSearchParams(location.search);
  };
  const query = useQuery();
  const role = query.get("role");
  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/users/signup`, {
        name,
        email,
        specialty: role === "doctor" ? specialty : undefined,
        years_of_experience: role === "doctor" ? yearsOfExperience : undefined,
        history_of_surgery: role === "patient" ? historyOfSurgery : undefined,
        history_of_illness: role === "patient" ? historyOfIllness : undefined,
        phone_number: phoneNumber,
        password,
        role,
      })
      .then(function (response) {
        login({ email, password });
        toast.success("Account Created Successfully", {
          autoClose: 1000,
        });
      })
      .catch(function (err) {
        toast.error(`${err.response.data.message}`, {
          autoClose: 3000,
        });
      });
  };
  return (
    <Box
      h="100vh"
      overflowY="auto"
      p={5}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgColor="contrast.200"
    >
      <Box
        mx="auto"
        py={6}
        px={4}
        w="full"
        bg="white"
        shadow="md"
        borderRadius="md"
        maxW="500px"
      >
        <form onSubmit={handlesubmit} style={{ marginTop: "32px" }}>
          <Heading
            as="h2"
            size="md"
            textAlign="center"
            fontWeight="semibold"
            textTransform="capitalize"
          >
            {role} Sign Up
          </Heading>

          <FormControl mb={2} mt={4}>
            <FormLabel htmlFor="name" fontSize="xs">
              Name
            </FormLabel>
            <Input
              id="name"
              h={8}
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outline"
            />
          </FormControl>

          <FormControl mb={2}>
            <FormLabel htmlFor="email" fontSize="xs">
              Email
            </FormLabel>
            <Input
              id="email"
              type="email"
              h={8}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outline"
            />
          </FormControl>

          {role === "doctor" && (
            <>
              <FormControl mb={2}>
                <FormLabel htmlFor="specialty" fontSize="xs">
                  Specialty
                </FormLabel>
                <Input
                  id="specialty"
                  h={8}
                  type="text"
                  placeholder="Specialty"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  variant="outline"
                />
              </FormControl>

              <FormControl mb={2}>
                <FormLabel htmlFor="years_of_experience" fontSize="xs">
                  Years of Experience
                </FormLabel>
                <Input
                  id="years_of_experience"
                  type="number"
                  h={8}
                  placeholder="Years of Experience"
                  value={yearsOfExperience}
                  onChange={(e) => setYearsOfExperience(e.target.value)}
                  variant="outline"
                />
              </FormControl>
            </>
          )}

          {role === "patient" && (
            <>
              <FormControl mb={2}>
                <FormLabel htmlFor="history_of_surgery" fontSize="xs">
                  History of Surgery
                </FormLabel>
                <Input
                  id="history_of_surgery"
                  type="text"
                  h={8}
                  placeholder="History of Surgery"
                  value={historyOfSurgery}
                  onChange={(e) => setHistoryOfSurgery(e.target.value)}
                  variant="outline"
                />
              </FormControl>

              <FormControl mb={2}>
                <FormLabel htmlFor="history_of_illness" fontSize="xs">
                  History of Illness
                </FormLabel>
                <Input
                  id="history_of_illness"
                  type="text"
                  h={8}
                  placeholder="History of Illness"
                  value={historyOfIllness}
                  onChange={(e) => setHistoryOfIllness(e.target.value)}
                  variant="outline"
                />
              </FormControl>
            </>
          )}

          <FormControl mb={2}>
            <FormLabel htmlFor="phone_number" fontSize="xs">
              Phone Number
            </FormLabel>
            <Input
              id="phone_number"
              type="text"
              h={8}
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              variant="outline"
            />
          </FormControl>

          <FormControl mb={6} position="relative">
            <Button
              position="absolute"
              top="35px"
              right="4"
              variant="link"
              onClick={() => setViewpass(!viewpass)}
              zIndex={1}
            >
              {viewpass ? "Hide" : "Show"}
            </Button>
            <FormLabel htmlFor="password" fontSize="xs">
              Password
            </FormLabel>
            <Input
              id="password"
              type={viewpass ? "text" : "password"}
              placeholder="Password"
              value={password}
              h={8}
              onChange={(e) => setPassword(e.target.value)}
              variant="outline"
            />
          </FormControl>

          <Button
            type="submit"
            colorScheme="teal"
            width="full"
            borderRadius="full"
            py={2}
            fontWeight="medium"
            mt={4}
          >
            Sign Up
          </Button>
          <Text textAlign="right" mt={1}>
            Already registered?
            <Link to="/login" style={{ color: "#38B2AC" }}>
              Log in
            </Link>
          </Text>
        </form>
      </Box>
    </Box>
  );
}
