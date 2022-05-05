import {FlexWrapper, Image, Typography } from "components";
import ButtonHeart from "components/buttons/ButtonHeart";
import UniversalSilverware from "components/radioElements/UniversalSilverware";
import UniversalTimer from "components/radioElements/UniversalTimer";
import React from "react";
import styled from "styled-components/macro";
import { theme } from "styles/theme";

interface RecipeStylesProps {
  listStyle?: string;
  padding?: string;
  margin?: string;
  background?: string;
  borderRadius?: string;
  width?: string;
}

interface RecipeProps extends RecipeStylesProps {
  title: string;
  time: string;
  category: string;
  tag: string;
}

const RecipesItem: React.FC<RecipeProps> = ({ title, time, tag, category }) => (
  <RecipeStyles>
    <ButtonHeart />
    <FlexWrapper flexDirection="column" gap="1rem">
      <Image src={tag} alt={title} />
      <Typography
        fontWeight="fw700"
        paddingX="s16"
        paddingTop="s32"
        fontSize="fs18"
      >
        {title}
      </Typography>
      <FlexWrapper paddingX="s16" paddingTop="s16">
        <UniversalTimer>{time}</UniversalTimer>
        <UniversalSilverware>{category}</UniversalSilverware>
      </FlexWrapper>
    </FlexWrapper>
  </RecipeStyles>
);

export default RecipesItem;

const RecipeStyles = styled.li<RecipeStylesProps>`
  position: relative;
  padding: 3rem 0;
  width: 25rem;
  background: linear-gradient(#e7f9fd 0%, #e7f9fd 100%);
  border-radius: ${theme.radii.r20};
  list-style: none;

  img {
    width: 100%;
    margin-top: -4.2rem;
    border-radius: ${theme.radii.r20};
  }
`;
