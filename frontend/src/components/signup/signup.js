// import React from 'react';
// import { Input, FormControl, FormHelperText, FormLabel, Button, Card, Box, Heading } from "@chakra-ui/react";

// export const SignUp = () => {
//   return (
//     <Box
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//       minHeight="100vh"
//       bgGradient="linear(to-r, green.200, blue.300)"
//       padding={4}
//     >
//       <Card
//         p={8}
//         borderRadius="lg"
//         boxShadow="2xl"
//         bg="white"
//         maxW="md"
//         width="100%"
//       >
//         <Heading as="h2" size="xl" textAlign="center" mb={6} color="green.600">
//           Sign Up
//         </Heading>

//         <FormControl mb={4}>
//           <FormLabel>Email address</FormLabel>
//           <Input type="email" placeholder="Enter your email" />
//           <FormHelperText>We'll never share your email.</FormHelperText>
//         </FormControl>

//         <FormControl mb={4}>
//           <FormLabel>Password</FormLabel>
//           <Input type="password" placeholder="Enter your password" />
//           <FormHelperText>We'll never share your password.</FormHelperText>
//         </FormControl>

//         <FormControl mb={4}>
//           <FormLabel>Address</FormLabel>
//           <Input type="text" placeholder="Enter your address" />
//         </FormControl>

//         <FormControl mb={4}>
//           <FormLabel>Section</FormLabel>
//           <Input type="text" placeholder="Enter your section" />
//         </FormControl>

//         <FormControl mb={4}>
//           <FormLabel>Branch</FormLabel>
//           <Input type="text" placeholder="Enter your branch" />
//         </FormControl>

//         <FormControl mb={4}>
//           <FormLabel>College</FormLabel>
//           <Input type="text" placeholder="Enter your college" />
//         </FormControl>

//         <FormControl mb={4}>
//           <FormLabel>Mobile Number</FormLabel>
//           <Input type="tel" placeholder="Enter your mobile number" />
//         </FormControl>

//         <Button
//           colorScheme="green"
//           size="lg"
//           width="full"
//           mt={4}
//         >
//           Sign Up
//         </Button>

//         <p>Already have an Account?</p>
       
//        <a href="/signin">Sign in</a>
//       </Card>
      
//     </Box>
//   );
// };



import React, { useState } from 'react';
import axios from 'axios';
import { api } from "../actions/api";
import {
  Input,
  FormControl,
  FormHelperText,
  FormLabel,
  Button,
  Card,
  Box,
  Heading
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [section, setSection] = useState('');
  const [branch, setBranch] = useState('');
  const [college, setCollege] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSignUp = async () => {
    try {
      const response = await axios.post(`${api}/signup`, {
        email,
        password,
        address,
        section,
        branch,
        college,
        mobileNumber
      });
      
      if (response.data.message === 'User already exists') {
        alert('User already exists');
        navigate('/signin'); // Redirect to sign-in page
      } else {
        // Handle successful sign-up, maybe redirect or show a success message
        alert('Sign Up successful');
        navigate('/signin'); // Redirect to sign-in page after successful sign-up
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('An error occurred during sign up. Please try again.');
    }
  };

  const handleSignInRedirect = () => {
    navigate('/signin'); // Redirect to the sign-in page
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgGradient="linear(to-r, green.200, blue.300)"
      padding={4}
    >
      <Card
        p={8}
        borderRadius="lg"
        boxShadow="2xl"
        bg="white"
        maxW="md"
        width="100%"
      >
        <Heading as="h2" size="xl" textAlign="center" mb={6} color="green.600">
          Sign Up
        </Heading>

        <FormControl mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormHelperText>We'll never share your password.</FormHelperText>
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Section</FormLabel>
          <Input
            type="text"
            placeholder="Enter your section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Branch</FormLabel>
          <Input
            type="text"
            placeholder="Enter your branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>College</FormLabel>
          <Input
            type="text"
            placeholder="Enter your college"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Mobile Number</FormLabel>
          <Input
            type="tel"
            placeholder="Enter your mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </FormControl>

        <Button
          colorScheme="green"
          size="lg"
          width="full"
          mt={4}
          onClick={handleSignUp} // Handle sign-up on button click
        >
          Sign Up
        </Button>

        <Box textAlign="center" mt={4}>
          <p>Already have an Account?</p>
          <Button variant="link" colorScheme="green" onClick={handleSignInRedirect}>
            Sign In
          </Button>
        </Box>
      </Card>
    </Box>
  );
};
