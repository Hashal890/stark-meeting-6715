import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

export default function HomeSlickTwoCard({
  image,
  popUpMess,
  title,
  piece,
  price,
}) {
  return (
    <Box className={Styles.slickCardTwo}>
      <Link to="/product">
        <Image src={image} alt={title} className={Styles.slickCardTwoImage} />
      </Link>
      <Text className={Styles.slickCardTwoPopup}>{popUpMess}</Text>
      <Text className={Styles.slickCardTwoTitle}>{title}</Text>
      <Text textAlign="center">{piece}</Text>
      <Flex alignItems="center" justifyContent="center" gap="10px" mt="2">
        <Button
          className={Styles.slickCardTwoButtonOne}
          bg="whiteAlpha.900"
          _hover={{ background: "whiteAlpha.900" }}
          fontSize="14px"
        >
          MRP ₹ {price}
        </Button>
        <Button
          className={Styles.slickCardTwoButtonTwo}
          leftIcon={<i class="fa-solid fa-cart-plus"></i>}
          bg="rgb(123, 205, 0)"
          _hover={{ background: "rgb(123, 205, 0)" }}
          fontSize="14px"
        >
          ADD
        </Button>
      </Flex>
    </Box>
  );
}
