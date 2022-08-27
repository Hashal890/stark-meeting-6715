import React from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Styles from "../Components/ProductPage.module.css";

export default function ProductFilterSection() {
  return (
    <Box className={Styles.filterMainBox}>
      <Flex className={Styles.filterHeader}>
        <Text className={Styles.filterHeaderOne}>filter</Text>
        <Spacer />
        <Text className={Styles.filterHeaderTwo}>clear all</Text>
      </Flex>
      <Box className={Styles.filterBody}>
        <Text className={Styles.filterBodyHeader}>Fruits & Vegetables</Text>
        <Box className={Styles.filterBodyBox}>
          <Text className={Styles.filterBodyText}>Fruits</Text>
          <Text className={Styles.filterBodyText}>Exotic Fruits</Text>
          <Text className={Styles.filterBodyText}>Daily Vegetables</Text>
          <Text className={Styles.filterBodyText}>Exotic Vegetables</Text>
          <Text className={Styles.filterBodyText}>Baby-Tender Vege...</Text>
          <Text className={Styles.filterBodyText}>Organic</Text>
          <Text className={Styles.filterBodyText}>Canned & Frozen</Text>
          <Text className={Styles.filterBodyText}>Cold-Pressed Fre...</Text>
        </Box>
        <Text className={Styles.filterBodyHeader}>Brands</Text>
        <Box className={Styles.filterBodyBox}>
          <Text className={Styles.filterBodyTextTwo}>fruits and veget...</Text>
          <Text className={Styles.filterBodyTextTwo}>fruit & vegetable</Text>
          <Text className={Styles.filterBodyTextTwo}>healthy alternat...</Text>
          <Text className={Styles.filterBodyTextTwo}>natures best</Text>
          <Text className={Styles.filterBodyTextTwo}>natures basket</Text>
          <Text className={Styles.filterBodyTextTwo}>tong garden</Text>
          <Text className={Styles.filterBodyTextTwo}>fabbox</Text>
          <Text className={Styles.filterBodyTextTwo}>very</Text>
          <Text className={Styles.filterBodyTextTwo}>spc</Text>
          <Text className={Styles.filterBodyTextTwo}>yummiez</Text>
          <Text className={Styles.filterBodyTextTwo}>daucy</Text>
          <Text className={Styles.filterBodyTextTwo}>dole</Text>
          <Text className={Styles.filterBodyTextTwo}>godrej nature ba...</Text>
          <Text className={Styles.filterBodyTextTwo}>vegetables</Text>
          <Text className={Styles.filterBodyTextTwo}>american garden</Text>
          <Text className={Styles.filterBodyTextTwo}>cirio</Text>
          <Text className={Styles.filterBodyTextTwo}>fragata</Text>
          <Text className={Styles.filterBodyTextTwo}>fresh</Text>
          <Text className={Styles.filterBodyTextTwo}>freshcon</Text>
          <Text className={Styles.filterBodyTextTwo}>fruits</Text>
          <Text className={Styles.filterBodyTextTwo}>happilo</Text>
          <Text className={Styles.filterBodyTextTwo}>tomato cherry</Text>
        </Box>
      </Box>
    </Box>
  );
}
