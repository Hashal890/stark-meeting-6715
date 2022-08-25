import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Styles from "../Components/Homepage.module.css";
import HomeImageOne from "../Assets/HomepageOne.png";
import CarouselOne from "../Components/CarouselOne";
import HomeImageFlexOne from "../Components/HomeImageFlexOne";
import HomeSlickOne from "../Components/HomeSlickOne";

export default function HomePage() {
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
      <Image
        src={HomeImageOne}
        alt="Home Image One"
        className={Styles.homeImageOne}
      />
      <CarouselOne />
      <HomeImageFlexOne />
      <HomeSlickOne />
      <Footer />
    </Box>
  );
}
