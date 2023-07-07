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

export default function ChartCardItem({ title, body, price, image }) {
  function limit(string = "", limit = 0) {
    return string.substring(0, limit);
  }

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
          <Button variant="solid" colorScheme="blue">
            Remove From Cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
