import React from "react";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";
import ChartCardList from "../components/ChartCardList";

function ChartPage() {
  return (
    <>
      <Navbar />
      <Box padding={4}>
        <ChartCardList />
      </Box>
    </>
  );
}

export default ChartPage;
