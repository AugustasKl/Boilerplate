import { Container, FlexWrapper, SectionWrapper } from "components";
// import { HeroImageMobile, HeroImageDesktop } from "./index";
import React from "react";
import { useQuery } from "styles/theme";
import HeroImageMobile from "../elements/HeroImageMobile";

import HeroImageDesktop from "../elements/HeroImageDesktop";
import HeroText from "../elements/HeroText";

const Hero: React.FC = () => {
  const {isMobile} = useQuery();
  return (
    <SectionWrapper>
      <Container>
        <FlexWrapper 
        flexDirection={{ _: "column", tablet: "row", desktop: "row" }}>
          <HeroText />
          <FlexWrapper >
          {isMobile ? <HeroImageMobile /> : <HeroImageDesktop />}
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Hero;
