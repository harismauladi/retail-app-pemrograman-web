import React from "react";
import { Box, Stack, HStack, Text } from "@chakra-ui/react";
import DashboardCardItem from "./DashboardCardItem";
import "@fontsource/mada";
import { getProduct } from "../utils/api";

function DashboardCardList() {
  const data = getProduct;
  return (
    <>
      <Box width={"full"}>
        <Text
          fontSize={28}
          fontFamily={"mada"}
          fontWeight={"semibold"}
          marginX={6}
        >
          Product
        </Text>
        <Box
          overflowX={"scroll"}
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "teal",
              borderRadius: "24px",
            },
          }}
        >
          <Stack direction={"row"}>
            {data.map((product) => (
              <HStack>
                <DashboardCardItem key={product.id} {...product} />
              </HStack>
            ))}
          </Stack>
        </Box>
        <Text alignItems={"center"} justifyContent={"center"}>
          Copyright by Kelompok 2 Pemrograman Web
        </Text>
      </Box>
    </>
  );
}

export default DashboardCardList;
