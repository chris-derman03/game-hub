import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "./GameGrid-Components/GameCard";
import GameCardSkeleton from "./GameGrid-Components/GameCardSkeleton";
import GameCardContainer from "./GameGrid-Components/GameCardContainer";
import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  // Load games from API call
  const { data, error, isLoading } = useGames(gameQuery);
  if (error) return <Text>{error}</Text>;

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
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
  );
};

export default GameGrid;
