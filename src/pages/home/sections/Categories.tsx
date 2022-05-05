import { Container, FlexWrapper, SectionWrapper, Typography } from "components";
import React from "react";
import { FOOD_CATEGORIES } from "static/FoodCategories";
import { useQuery } from"styles/theme";
import CategoriesItem from "../elements/CategoriesItem";
import { FoodProps } from "static/FoodCategories";

const Categories: React.FC<FoodProps> = () => {
  const { isMobile } = useQuery();
  return (
    <SectionWrapper>
      <Container>
        <Typography
          type="h4"
          fontWeight="fw500"
          textAlign={isMobile ? "center" : "left"}
          pb="s32"
        >
          Categories
        </Typography>

        <FlexWrapper
          flexDirection={{ _: "column", desktop: "row" }}
          justifyContent="space-between"
          gap={isMobile ? "2rem" : "1rem"}
          width={isMobile ? "40%" : "100%"}
          marginLeft={isMobile ? "s128" : "s0"}
        >
          {FOOD_CATEGORIES.map(({ id, title, background }) => (
            <CategoriesItem  key={id} title={title} background={background} />
          ))}
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Categories;
