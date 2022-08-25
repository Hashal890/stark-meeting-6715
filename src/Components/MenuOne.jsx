import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

export default function MenuOne() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Menu isOpen={isOpen}>
        <MenuButton
          variant="ghost"
          mx={1}
          py={[1, 2, 2]}
          px={4}
          borderRadius={5}
          bg="#f3f3f3"
          aria-label="Courses"
          fontWeight="normal"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          color="#b71761"
          letterSpacing="3px"
        >
          SHOP BY CATEGORY {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </MenuButton>
        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
          <MenuItem>Gift Hampers</MenuItem>
          <MenuItem>Fruits & Vegetables</MenuItem>
          <MenuItem>Cheese, Meat & Fruit Platters</MenuItem>
          <MenuItem>Delicatessen & Cheese</MenuItem>
          <MenuItem>International Cuisine</MenuItem>
          <MenuItem>Health</MenuItem>
          <MenuItem>Indian Grocery</MenuItem>
          <MenuItem>Confectionary & Patisserie</MenuItem>
          <MenuItem>Meats, Seafood and Eggs</MenuItem>
          <MenuItem>Snack Bar</MenuItem>
          <MenuItem>Snacks & Beverages</MenuItem>
          <MenuItem>Breakfast, Dairy & Bakery</MenuItem>
          <MenuItem>Instant Meals & Aids</MenuItem>
          <MenuItem>The Good Food Cafe</MenuItem>
          <MenuItem>Packing Material</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
