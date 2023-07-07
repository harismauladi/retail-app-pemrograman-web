import React from "react";
import { Box, Stack, HStack, Text, Button } from "@chakra-ui/react";
import ChartCardItem from "./ChartCardItem";
import "@fontsource/mada";
import { getChartProduct } from "../utils/api";
import Swal from "sweetalert2";

function ChartCardList() {
  const data = getChartProduct;
  const onBuy = () => {
    Swal.fire({
      title: "Are you sure want to buy this?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Buy Now",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Buyed", "Your item will arrive soon!", "success");
      }
    });
  };
  return (
    <>
      <Box width={"full"}>
        <Text
          fontSize={28}
          fontFamily={"mada"}
          fontWeight={"semibold"}
          marginX={6}
        >
          Cart
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
                <ChartCardItem key={product.id} {...product} />
              </HStack>
            ))}
          </Stack>
        </Box>
        <Box marginY={6}>
          <Button
            variant="ghost"
            colorScheme="blue"
            justifyContent={"end"}
            marginX={5}
          >
            Empty Cart
          </Button>
          <Button
            variant="solid"
            colorScheme="blue"
            justifyContent={"end"}
            onClick={onBuy}
          >
            Buy Now ({data.length})
          </Button>
        </Box>
        <Box width={"full"}>
          <Text alignItems={"center"} justifyContent={"center"}>
            Copyright by Kelompok 2 Pemrograman Web
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default ChartCardList;
