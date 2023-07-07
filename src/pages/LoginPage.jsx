import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoginPage() {
  const [email, emailHandler] = useInput();
  const [password, passwordHandler] = useInput();
  const navigate = useNavigate();

  const onLoginSuccess = () => {
    Swal.fire({
      icon: "success",
      title: "Login Success",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/dashboard");
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"3xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={emailHandler} value={email} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={passwordHandler}
                value={password}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={onLoginSuccess}
              >
                Sign in
              </Button>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"center"}
                justify={"space-between"}
              >
                <Text>
                  Don't have an accout ?{" "}
                  <Link
                    href="/register"
                    textDecoration={"none"}
                    color={"blue.400"}
                  >
                    Sign Up
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Box>
        <Text>Copyright by Kelompok 2 Pemrograman Web</Text>
      </Stack>
    </Flex>
  );
}
