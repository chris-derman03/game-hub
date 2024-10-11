import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../../hooks/useGenres";

interface Props {
  selectedPlatform: Platform | null;
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedPlatform, selectedGenre }: Props) => {
  // Load games from API call
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={8}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {!isLoading
          ? data.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))
          : null}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
