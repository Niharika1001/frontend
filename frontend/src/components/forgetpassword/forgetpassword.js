// import React from 'react';
// import {
//   Input,
//   FormControl,
//   FormHelperText,
//   FormLabel,
//   Button,
//   Card,
//   Box,
//   Heading,
// } from '@chakra-ui/react';

// export const ForgetPassword = () => {
//   return (
//     <Box
//       maxW="400px"
//       mx="auto"
//       mt={10}
//       p={6}
//       borderWidth={1}
//       borderRadius="md"
//       boxShadow="lg"
//     >
//       <Card
//         p={6}
//         borderRadius="md"
//         boxShadow="md"
//         bgGradient="linear(to-r, teal.500, green.500)"
//       >
//         <Heading as="h2" size="lg" textAlign="center" mb={6} color="white">
//           Forgot Password
//         </Heading>
//         <FormControl mb={4}>
//           <FormLabel color="white">Email</FormLabel>
//           <Input type="email" bg="white" />
//           <FormHelperText color="whiteAlpha.800">
//             We'll never share your email.
//           </FormHelperText>
//         </FormControl>

//         <FormControl mb={4}>
//           <FormLabel color="white">OTP</FormLabel>
//           <Input type="text" bg="white" />
//           <FormHelperText color="whiteAlpha.800">
//             Enter the OTP sent to your email.
//           </FormHelperText>
//         </FormControl>

//         <FormControl mb={4}>
//           <FormLabel color="white">New Password</FormLabel>
//           <Input type="password" bg="white" />
//           <FormHelperText color="whiteAlpha.800">
//             We'll never share your password.
//           </FormHelperText>
//         </FormControl>

//         <FormControl mb={4}>
//           <FormLabel color="white">Confirm Password</FormLabel>
//           <Input type="password" bg="white" />
//           <FormHelperText color="whiteAlpha.800">
//             We'll never share your password.
//           </FormHelperText>
//         </FormControl>

//         <Button colorScheme="red" width="full" mt={4}>
//           Update Password
//         </Button>
//       </Card>
//     </Box>
//   );
// };




import React from 'react';
import {
  Input,
  FormControl,
  FormHelperText,
  FormLabel,
  Button,
  Card,
  Box,
  Heading,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const ForgetPassword = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleUpdatePassword = () => {
    // Perform any necessary actions here, like form validation or API requests
    navigate('/signin'); // Navigate to the sign-in page upon successful password update
  };

  return (
    <Box
      maxW="400px"
      mx="auto"
      mt={10}
      p={6}
      borderWidth={1}
      borderRadius="md"
      boxShadow="lg"
    >
      <Card
        p={6}
        borderRadius="md"
        boxShadow="md"
        bgGradient="linear(to-r, teal.500, green.500)"
      >
        <Heading as="h2" size="lg" textAlign="center" mb={6} color="white">
          Forgot Password
        </Heading>
        <FormControl mb={4}>
          <FormLabel color="white">Email</FormLabel>
          <Input type="email" bg="white" />
          <FormHelperText color="whiteAlpha.800">
            We'll never share your email.
          </FormHelperText>
        </FormControl>

        <FormControl mb={4}>
          <FormLabel color="white">OTP</FormLabel>
          <Input type="text" bg="white" />
          <FormHelperText color="whiteAlpha.800">
            Enter the OTP sent to your email.
          </FormHelperText>
        </FormControl>

        <FormControl mb={4}>
          <FormLabel color="white">New Password</FormLabel>
          <Input type="password" bg="white" />
          <FormHelperText color="whiteAlpha.800">
            We'll never share your password.
          </FormHelperText>
        </FormControl>

        <FormControl mb={4}>
          <FormLabel color="white">Confirm Password</FormLabel>
          <Input type="password" bg="white" />
          <FormHelperText color="whiteAlpha.800">
            We'll never share your password.
          </FormHelperText>
        </FormControl>

        <Button
          colorScheme="red"
          width="full"
          mt={4}
          onClick={handleUpdatePassword} // Call the function to handle routing
        >
          Update Password
        </Button>
      </Card>
    </Box>
  );
};
