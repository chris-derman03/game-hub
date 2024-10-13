import { Box, HStack } from "@chakra-ui/react";
import PlatformSelector from "./PlatformSelector";
import GameGrid from "./GameGrid";
import SortSelector from "./SortSelector";
import { GameQuery } from "../../App";
import GameHeading from "./GameHeading";

interface Props {
  gameQuery: GameQuery;
  setGameQuery: (query: GameQuery) => void;
}

const MainBody = ({ gameQuery, setGameQuery }: Props) => {
  return (
    <>
      <Box paddingLeft={2}>
        <GameHeading gameQuery={gameQuery} />
        <HStack spacing={5} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>
      </Box>
      <GameGrid gameQuery={gameQuery} />
    </>
  );
};

export default MainBody;
