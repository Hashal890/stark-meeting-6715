import { Flex, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import Styles from "./Homepage.module.css";

export default function HomeImageFlexOne() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      w="85%"
      m="auto"
      mt="1.5%"
      mb="1%"
    >
      <Image
      className={Styles.gridImages}
        src="https://www.naturesbasket.co.in/Images/NaturesBasketGifting.jpeg?v=7"
        alt="Image One"
      />
      <Spacer />
      <Image
      className={Styles.gridImages}
        src="https://www.naturesbasket.co.in/Images/Japanesecuisine-webbox.png?v=12"
        alt="Image Two"
      />
      <Spacer />
      <Image
      className={Styles.gridImages}
        src="https://www.naturesbasket.co.in/Images/Gluten-free-web%20box%20banner.png?v=15"
        alt="Image Three"
      />
    </Flex>
  );
}
