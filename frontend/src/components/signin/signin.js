
import { Input, FormControl, FormHelperText, FormLabel, Button, Card, Box } from "@chakra-ui/react";
import axios from 'axios';
import { useState } from "react";
import { api } from "../actions/api";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const Signin = async () => {
    try {
      const response = await axios.post(api + "/signin", {email,password});
      if (response.data.message) {
        console.log(response?.data?.values);
        alert("Login successful");
      } else {
        alert("User not found");
        navigate('/signup'); // Use navigate for routing
      }
    } catch (e) {
      console.log(e);
      alert("Error Occured.Please check your details and try again");
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgGradient="linear(to-r, teal.500, black.300)"
    >
      <Card
        p={8}
        borderRadius="lg"
        boxShadow="xl"
        bg="white"
        maxW="sm"
        width="100%"
      >
        <FormControl mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Password</FormLabel>
          <Input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <FormHelperText>
            <Button variant="link" onClick={() => navigate('/forgetpassword')}>Forget Password</Button>
          </FormHelperText>
        </FormControl>

        <Button
          colorScheme="teal"
          size="lg"
          width="full"
          mt={4}
          onClick={Signin} // Pass the function reference without parentheses
        >
          Sign In
        </Button>

        <p>Don't have an Account?</p>
        <Button variant="link" onClick={() => navigate('/signup')}>Sign Up</Button>
      </Card>
    </Box>
  );
};




// import { 
//   Card, 
//   CardBody, 
//   FormControl, 
//   FormHelperText, 
//   FormLabel, 
//   Input, 
//   Button, 
//   VStack, 
//   Box ,
//   Text,
//   Link
// } from "@chakra-ui/react";
// import axios from 'axios';
// import { api } from "../actions/api";
// import { useState } from "react";

// export const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const Signin = async () => {
//     try {
//       const res = await axios.post(api + "/signin", { email, password });
      
//       if (res.data) {
//         console.log(res?.data?.values);
//         alert("Login successful");
//         // Optionally redirect to another page, e.g.:
//         // window.location.href = "/dashboard";
//       } else {
//         alert(res?.data?.error);
//         window.location.href = "/signup";
//       }
//     } catch (error) {
//       console.error("Error during sign-in:", error);
//       alert("An error occurred. Please try again later.");
//     }
//   };

//   return (
//       <Box 
//           height="100vh" 
//           display="flex" 
//           justifyContent="center" 
//           alignItems="center" 
//           bg="gray.50"
//       >
//           <Card 
//               width="400px" 
//               boxShadow="lg" 
//               p={6} 
//               borderRadius="md"
//           >
//               <CardBody>
//                   <VStack spacing={4} align="stretch">
//                       <FormControl id="email">
//                           <FormLabel>Email address</FormLabel>
//                           <Input 
//                               type="email" 
//                               focusBorderColor="teal.500" 
//                               value={email}
//                               onChange={(e) => setEmail(e.target.value)} 
//                           />
//                           <FormHelperText>We'll never share your email.</FormHelperText>
//                       </FormControl>

//                       <FormControl id="password">
//                           <FormLabel>Password</FormLabel>
//                           <Input 
//                               type="password" 
//                               focusBorderColor="teal.500" 
//                               value={password}
//                               onChange={(e) => setPassword(e.target.value)} 
//                           />
//                           <FormHelperText>We'll never share your password.</FormHelperText>
//                       </FormControl>

//                       <Button 
//                           colorScheme="teal" 
//                           size="lg" 
//                           mt={4} 
//                           onClick={Signin}
//                       >
//                           Sign In
//                       </Button>
//                       <Box textAlign="center" mt={4}>
//         <Text>Have to signup?</Text>
//         <Link href="/signup" color="teal.500" fontWeight="bold">Sign Up</Link>
//       </Box>
              
//                   </VStack>
//               </CardBody>
//           </Card>
//       </Box>
//   );
// };