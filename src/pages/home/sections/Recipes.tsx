import {
  Box,
  Container,
  FlexWrapper,
  GridWrapper,
  Image,
  SectionWrapper,
  Typography,
  // ButtonShow
} from "components";
import ButtonShow from "components/buttons/ButtonShow";
import React, { useEffect, useState } from "react";
import { FOOD_RECIPES } from "static/FoodRecipes";

import {useQuery } from "styles/theme";
import RecipesItem from "../elements/RecipesItem";

const Recipes: React.FC = () => {
  const { isMobile, isTablet } = useQuery();
  const [itemsCount, setItemsCount] = useState<number>(4);
  const countHandler = (data: number) => {
    setItemsCount(data);
  };

  useEffect(() => {
    setItemsCount(4);
  }, [isTablet]);

  const slicedFoodRecipes = FOOD_RECIPES.slice(0, 4);
  const filteredData = itemsCount === 4 ? FOOD_RECIPES : slicedFoodRecipes;
  
  return (
    <SectionWrapper>
      <Container>

      <FlexWrapper flexDirection='column' alignItems='center' >
        <Typography type="h4" textAlign="center" fontWeight="fw500" paddingBottom='s32'>
          Simple and tasty recipes
        </Typography>
        
        <Typography textAlign="center" color="radioColor"  paddingBottom='s32'>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </Typography>
  
          <GridWrapper gridTemplateColumns={isMobile? '1fr': '1fr 1fr 1fr'} gap="1.5rem">
            {filteredData.map(({id, title, time, tag, category}) => {
              return (
                title=== ''?<Box>
                  <Image
                  src={tag} alt={tag}
                  />
                </Box>:
                <RecipesItem
                key={id}
                title={title}
                time={time}
                tag={tag}
                category={category}
                />
                );
              })}
          </GridWrapper>   
            {isMobile && <ButtonShow onPassdata={countHandler} />}
         </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Recipes;

