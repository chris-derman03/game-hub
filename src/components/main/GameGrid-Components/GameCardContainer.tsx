import { Box, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  const bgColor = useColorModeValue("white.50", "gray.700");

  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      boxShadow={"0 0 10px gray"}
      backgroundColor={bgColor}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
