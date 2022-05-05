import {
  Box,
  FlexWrapper,
  Image,
  SectionWrapper,
  Typography,
  ButtonPrimary, 
  // Person
} from "components";

import Person from "components/person/Person";
import HotRecipes from "components/radioElements/HotRecipes";
import Silverware from "components/radioElements/Silverware";
import Timer from "components/radioElements/Timer";

import React from "react";
import { useQuery } from "styles/theme";

const HeroText: React.FC = () => {
  const { isMobile } = useQuery();

  return (
    <>
      <SectionWrapper
        padding="2rem 3rem"
        backgroundColor="heroBackground"
        borderRadius={isMobile ? " 1.25rem 1.25rem 0rem 0rem" : "1.25rem 0rem 0rem 1.25rem"}
      >
        <Box width="28rem" padding={isMobile ? "s32" : "s0"}>
          <FlexWrapper
            flexDirection="column"
            justifyContent="space-between"
            alignItems="flex-start"
            gap="2rem"
          >
            <HotRecipes />
            <Typography type="h4" fontWeight="fw400">
              Spicy delicious chicken wings
            </Typography>
            <Typography color="radioColor">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </Typography>

            <FlexWrapper gap="1rem">
              <Timer />
              <Silverware />
            </FlexWrapper>

            <FlexWrapper
              marginTop="s64"
              alignItems="flex-start"
              justifyContent="space-between"
              width="100%"
              flexDirection={{ _: "column", desktop: "row" }}
              gap={isMobile ? "1.5rem" : "0"}
              //nesuprantu kodel viena karta veikia su _, o kita tik su isMobile?
            >
              <Person />
              <ButtonPrimary>
                View Recipes
                <Image src="play" alt="play" />
              </ButtonPrimary>
            </FlexWrapper>
          </FlexWrapper>
        </Box>
      </SectionWrapper>
    </>
  );
};

export default HeroText;
