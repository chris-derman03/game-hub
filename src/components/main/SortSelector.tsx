import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "DIV1", label: "DIVIDER" },
  { value: "-metacritic", label: "Critic Popularity" },
  { value: "metacritic", label: "Critic Unpopularity" },
  { value: "DIV2", label: "DIVIDER" },
  { value: "-rating", label: "Average Player Popularity" },
  { value: "rating", label: "Average Player Unpopularity" },
  { value: "DIV3", label: "DIVIDER" },
  { value: "name", label: "Alphabetic (A-Z)" },
  { value: "-name", label: "Alphabetic (Z-A)" },
  { value: "DIV4", label: "DIVIDER" },
  { value: "-released", label: "Release Date (Newest)" },
  { value: "released", label: "Release Date (Oldest)" },
];

interface Props {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

const GameSorter = ({ sortOrder, onSelectSortOrder }: Props) => {
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) =>
          order.label !== "DIVIDER" ? (
            <MenuItem
              onClick={() => onSelectSortOrder(order.value)}
              key={order.value}
            >
              {order.label}
            </MenuItem>
          ) : (
            <MenuDivider key={order.value} />
          )
        )}
      </MenuList>
    </Menu>
  );
};

export default GameSorter;
