// import { Input, FormControl, FormHelperText, FormLabel, Button, Card, Box } from "@chakra-ui/react";
// import axios from 'axios';
// import { useState } from "react";
// import { api } from "../actions/api";
// import { useNavigate } from "react-router-dom";
// export const SignIn = () => {

//   const [name,setName]=useState('');
//   const [password,setPassword]=useState('');
  
//   const Signin=async()=>{
//     await axios.post(api+"/signin",{name,password})
//          .then((res)=>{
//              if(res.data.message){
//                  console.log(res?.data?.values)
//                 alert("login sucessfully")
//            } else {
//                 alert("user not found");
//                 navigate('/signup');
//                 //  window.location.href="/signup"
//              }
            
//         })
//     .catch((e)=>console.log(e))
//   }
//   return (
//     <Box
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//       minHeight="100vh"
//       bgGradient="linear(to-r, teal.500, black.300)"
//     >
//       <Card
//         p={8}
//         borderRadius="lg"
//         boxShadow="xl"
//         bg="white"
//         maxW="sm"
//         width="100%"
//       >
       
//         <FormControl mb={4}>
//           <FormLabel>Email address</FormLabel>
//           <Input type="email" onChange={(e)=>setName(e.target.value)} />
         
//         </FormControl>

//         <FormControl mb={4}>
//           <FormLabel>Password</FormLabel>
//           <Input type="password" onChange={(e)=>setName(e.target.value)} />
       
//           <a href="forgetpassword">Forget Password</a>
//         </FormControl>

//         <Button
//           colorScheme="teal"
//           size="lg"
//           width="full"
//           mt={4} onClick={Signin()}
//         >
//           Sign In
//         </Button>
//         <p>Don't have an Account?</p>
//        <a href="signup">SignUp</a>
//       </Card>
//     </Box>
//   );
// };



import { Input, FormControl, FormHelperText, FormLabel, Button, Card, Box } from "@chakra-ui/react";
import axios from 'axios';
import { useState } from "react";
import { api } from "../actions/api";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const Signin = async () => {
    try {
      const response = await axios.post(api + "/signin", { name, password });
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
            value={name}
            onChange={(e) => setName(e.target.value)} 
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
