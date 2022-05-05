import {
  Box,
  Container,
  FlexWrapper,
  SectionWrapper,
  Typography,
} from "components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { InputPrimary } from "components/Input/InputPrimary";
import React from "react";
import styled from "styled-components/macro";

import { mobile, theme, useQuery } from "styles/theme";

import SubscriptionImage from "../elements/SubscriptionImage";

const Subscription: React.FC = () => {
  const { isMobile} = useQuery();
  return (
    <SectionWrapper>
      <Container>
        <FlexWrapper
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          position="relative"
        >
          {isMobile ? <SubscriptionStyles /> : <SubscriptionImage />}
   
          <Box textAlign="center" position="absolute" mb="s64">
            <Typography type="h4" fontWeight="fw500" pb="s16">
              Deliciousness to your inbox
            </Typography>
            <Box maxWidth="37rem">
              <Typography color="radioColor">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                ad minim
              </Typography>
            </Box>

            <FlexWrapper
              flexDirection={isMobile ? "column" : "row"}
              alignItems="center"
              justifyContent="center"
              pt="s32"
            >
              <InputPrimary placeholder="Your email address...">
                <ButtonPrimary>Subsribe</ButtonPrimary>
              </InputPrimary>
            </FlexWrapper>
          </Box>
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Subscription;

const SubscriptionStyles = styled.div`
  @media ${mobile} {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.subscribeBackground};
    height: 30rem;
    width: 30rem;
    text-align: center;
    img {
      display: none;
    }
  }
`;
