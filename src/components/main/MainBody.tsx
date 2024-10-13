import { HStack } from "@chakra-ui/react";
import PlatformSelector from "./PlatformSelector";
import GameGrid from "./GameGrid";
import SortSelector from "./SortSelector";
import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
  setGameQuery: (query: GameQuery) => void;
}

const MainBody = ({ gameQuery, setGameQuery }: Props) => {
  return (
    <>
      <HStack paddingLeft={2} spacing={5} marginBottom={5}>
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
      <GameGrid gameQuery={gameQuery} />
    </>
  );
};

export default MainBody;
