import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Styles from "../Components/CartPage.module.css";

export default function CartPage() {
  return (
    <Box>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box w="85%" m="auto">
        <Link to="/cart">
          <Image
            src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/websitecart.png"
            alt="Cart Header"
          />
        </Link>
        <Flex alignItems="center" mt="40px" mb="15px" gap="0.5rem">
          <Text>MY CART(0 ITEMS) |</Text>
          <Link to="/cart">
            <Flex gap="0.5rem">
              <Image
                src="https://d1z88p83zuviay.cloudfront.net/Images/nb-loader.png"
                alt="Loading Image"
                w="25px"
              />
              <Text>Refresh</Text>
            </Flex>
          </Link>
        </Flex>
        <Flex alignItems="center" justifyContent="right" gap="1rem">
          <Link to="/product">
            <Text className={Styles.continueText}>CONTINUE SHOPPING</Text>
          </Link>
          <Link to="/checkout">
            <Text
              className={Styles.proceedText}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              PROCEED TO CHECKOUT
            </Text>
          </Link>
        </Flex>
        <Flex
          alignItems="end"
          justifyContent="center"
          className={Styles.timings}
        >
          <Image
            src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/8ab57ed4-47e0-426a-8382-f4c89b11826a.png"
            alt="Bike"
            w="38px"
            h="25px"
          />
          <Text className={Styles.headerText}>
            Get your order delivered in 90 minutes . Service timings between
            10:00 am to 9.30 pm .
          </Text>
        </Flex>
        
      </Box>
      <Footer />
    </Box>
  );
}
