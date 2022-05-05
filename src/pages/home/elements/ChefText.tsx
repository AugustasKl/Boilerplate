import { Box, FlexWrapper, Typography } from "components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import React from "react";

const ChefText: React.FC = () => (
  <Box maxWidth="34rem">
    <FlexWrapper flexDirection="column" alignItems="flex-start" gap="3rem">
      <Typography type="h4" fontWeight="fw500">
        Everyone can be a chef in their own kitchen
      </Typography>
      <Typography color="radioColor">
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
      </Typography>
      <ButtonPrimary borderRadius="r10">Learn More</ButtonPrimary>
    </FlexWrapper>
  </Box>
);

export default ChefText;
