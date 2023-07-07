import React from "react";
import {
  Box,
  Text,
  Image,
  Flex,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/login");
  };
  return (
    <>
      <Box
        width={"full"}
        flexDir={useBreakpointValue({ base: "column", md: "row" })}
        minH={"full"}
        height={"full"}
        display={"flex"}
        padding={4}
        overflowY={"hidden"}
      >
        <Box
          flexDir={"column"}
          display={"flex"}
          position={"relative"}
          top={useBreakpointValue({ base: 0, md: 16 })}
        >
          <Flex
            flexDir={"row"}
            alignItems={"center"}
            justifyContent={"start"}
            fontSize={useBreakpointValue({ base: "3xl", sm: "2xl", md: "70" })}
            position={"relative"}
            top={"14"}
            fontWeight={"semibold"}
          >
            <Text>Welcome to Kios</Text>
            <Text color={"#23DE79"}>Pedia</Text>
          </Flex>
          <Text
            position={"relative"}
            top={14}
            left={useBreakpointValue({ base: 0, md: 4 })}
            fontSize={useBreakpointValue({ base: "20", md: "24" })}
          >
            Find and get your lovely items with premium quality!
          </Text>
          <Button
            colorScheme="teal"
            variant="outline"
            position={"relative"}
            top={16}
            fontSize={useBreakpointValue({ base: 18, md: 23 })}
            width={useBreakpointValue({ base: "full", md: "xl" })}
            left={useBreakpointValue({ base: 0, md: 4 })}
            onClick={() => onClick()}
            zIndex={999999}
          >
            Get Started
          </Button>
        </Box>
        <Box
          position={"relative"}
          bottom={useBreakpointValue({ base: 0, md: 28 })}
        >
          <Image
            src="../public/home.svg"
            position={"relative"}
            top={useBreakpointValue({ base: "24", md: "30" })}
            zIndex={-9999}
          ></Image>
        </Box>
      </Box>
    </>
  );
}

export default Landing;
