import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  Button,
  ButtonGroup,
  Image,
  Text,
} from "@chakra-ui/react";
import Swal from "sweetalert2";

function DashboardCardItem({ title, body, price, image }) {
  function limit(string = "", limit = 0) {
    return string.substring(0, limit);
  }

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

  const onAddToCart = () => {
    Swal.fire({
      icon: "success",
      title: "Item Add To Cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <Card maxW="sm" margin={3}>
      <CardBody>
        <Image
          src={image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{limit(body, 120)}</Text>
          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue" onClick={onBuy}>
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue" onClick={onAddToCart}>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default DashboardCardItem;
