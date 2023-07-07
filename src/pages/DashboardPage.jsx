import React from "react";
import Navbar from "../components/Navbar";
import DashboardCardList from "../components/DashboardCardList";
import { Box } from "@chakra-ui/react";

function DashboardPage() {
  return (
    <>
      <Navbar />
      <Box padding={4}>
        <DashboardCardList />
      </Box>
    </>
  );
}

export default DashboardPage;
