import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width="300px"
      borderRadius={10}
      overflow="hidden"
      boxShadow={"0 0 10px gray"}
      backgroundColor="rgb(45, 55, 72)"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
