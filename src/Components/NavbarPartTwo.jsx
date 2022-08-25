import {
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import MenuOne from "./MenuOne";
import MenuThree from "./MenuThree";
import MenuTwo from "./MenuTwo";
import Styles from "./Navbar.module.css";

export default function NavbarPartTwo() {
  return (
    <Flex alignItems="center" border="1px solid rgb(224, 224, 224)" mt="8">
      <MenuOne />
      <Button borderRadius="0px" bg="transparent" className={Styles.navButton}>
        MY ORDERS
      </Button>
      <Button borderRadius="0px" bg="transparent" className={Styles.navButton}>
        GIFTING
      </Button>
      <Button borderRadius="0px" bg="transparent" className={Styles.navButton}>
        REWARDS
      </Button>
      <MenuTwo />
      <Button borderRadius="0px" bg="transparent" className={Styles.navButton}>
        OFFERS
      </Button>
      <MenuThree />
      <Button borderRadius="0px" bg="transparent" className={Styles.navButton}>
        BOOK STORE VISIT
      </Button>
    </Flex>
  );
}
