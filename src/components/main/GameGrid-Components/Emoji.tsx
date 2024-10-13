import bullseye from "../../../assets/Emojis/bulls-eye.webp";
import thumbsUp from "../../../assets/Emojis/thumbs-up.webp";
import meh from "../../../assets/Emojis/meh.webp";
import { Image, ImageProps, Tooltip } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Meh...", boxSize: "25px" },
    4: { src: thumbsUp, alt: "Recommended", boxSize: "25px" },
    5: { src: bullseye, alt: "Exceptional", boxSize: "30px" },
  };

  return (
    <Tooltip hasArrow label={emojiMap[rating].alt}>
      <Image {...emojiMap[rating]} marginTop={1} />
    </Tooltip>
  );
};

export default Emoji;
