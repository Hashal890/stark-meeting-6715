import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Checkbox,
  Flex,
  Image,
  Input,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import PayCart from "../Components/PayCart";

export default function Checkout() {
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
      <form>
        <Flex w="85%" m="auto" columnGap="50">
          <Box w="60%" mt="5">
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/cart">
                  Cart
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>Payment</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Box mt="5" border="1px solid lightgrey" p="10px">
              <Text fontWeight="semibold" ml="40%">
                Checkout Options
              </Text>
              <Image
                src="https://www.naturesbasket.co.in/Images/icons-card-payments-mode.png"
                alt="Payment"
                w="100%"
              />
            </Box>
            <Box w="48%" mt="10">
              <hr />
            </Box>
            <Text ml="49%" mt="-3">
              OR
            </Text>
            <Box w="47%" ml="53%" mt="-2">
              <hr />
            </Box>
            <Flex>
              <Box p="4">
                <Text fontWeight="semibold" fontSize="20">
                  Contact information
                </Text>
              </Box>
              <Spacer />
              <Box p="4">
                <Text mt="2" fontSize="14">
                  Already have an account? <Link to="/login"> Log in</Link>{" "}
                </Text>
              </Box>
            </Flex>
            <Input placeholder="Enter email-ID" required />
            <Checkbox mt="3"> Email me with news and offers</Checkbox>
            <Text mt="5" fontWeight="semibold" fontSize="20">
              Shipping address
            </Text>
            <Select mt="4" placeholder="Select country/region" required>
              <option value="option1">USA</option>
              <option value="option2">India</option>
              <option value="option3">UK</option>
            </Select>
            <Flex columnGap="3">
              <Input mt="4" placeholder="First Name" required />
              <Input mt="4" placeholder="Last Name" required />
            </Flex>
            <Input mt="4" placeholder="Company" required />
            <Input mt="4" placeholder="Address" required />
            <Input mt="4" placeholder="Apartment,suite,etc." required />
            <Flex columnGap="3">
              <Input mt="4" placeholder="Enter City" required />
              <Input mt="4" placeholder="Enter State" required />
              <Input mt="4" placeholder="Enter ZIP code" required />
            </Flex>

            <Input mt="4" placeholder="Enter phone number" required />
            <Flex>
              <Box p="4">
                <Link to="/cart">
                  <Text fontWeight="semibold" fontSize="20">
                    Return to cart
                  </Text>
                </Link>
              </Box>
              <Spacer />
              <Box p="4">
                <Link to="/">
                  <Button
                    pt="7"
                    pb="7"
                    pr="5"
                    pl="5"
                    bgColor="black"
                    color="white"
                    _hover={{ bg: "black", color: "white" }}
                    onClick={() => alert("order successfully placed")}
                  >
                    Continue to shipping
                  </Button>
                </Link>
              </Box>
            </Flex>
          </Box>
          <Box w="40%" borderLeft="1px solid lightgrey">
            <PayCart />
          </Box>
        </Flex>
      </form>
      <Footer />
    </Box>
  );
}
