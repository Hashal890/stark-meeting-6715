import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Styles from "./Homepage.module.css";

export default function HomeSlickCard({
  image,
  title,
  categoryOne,
  categoryTwo,
  categoryThree,
  categoryFour,
}) {
  return (
    <Box w="280px">
      <Image src={image} alt={title} className={Styles.slickCardImage} />
      <Text className={Styles.slickCardTitle}>{title}</Text>
      <Text className={Styles.slickCardText}>{categoryOne}</Text>
      <Text className={Styles.slickCardText}>{categoryTwo}</Text>
      <Text className={Styles.slickCardText}>{categoryThree}</Text>
      <Text className={Styles.slickCardText} color="#83b748">
        {categoryFour}
      </Text>
    </Box>
  );
}
