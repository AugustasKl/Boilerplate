import { Image } from "components";
import React, { useState } from "react";
import styled from "styled-components/macro";
import { position } from "styled-system";
import { Button } from "./Button";

const ButtonHeart: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const favoritesHandler = () => {
    setIsFavorite((prevState) => !prevState);
  };

  return (
    <Button onClick={favoritesHandler}>
      <StyledImage>
        {isFavorite ? (
          <Image src="heartRed" alt="Red heart" />
        ) : (
          <Image src="heartGray" alt="Gray heart" />
        )}
      </StyledImage>
    </Button>
  );
};

export default ButtonHeart;

const StyledImage = styled.image`
  position: absolute;
  top: 12.5%;
  right: 5%;
`;
