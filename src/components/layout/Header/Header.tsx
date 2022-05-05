import { Box, Container, ContentWrapper, FlexWrapper, Image } from "components";
import { Link } from "gatsby";
import HomeNav from "components/layout/navigation/HomeNav";
import SocialItems from "components/layout/navigation/SocialItems";
import React from "react";
import styled from "styled-components/macro";
import { useQuery } from "styles/breakpoints";
import { mobile, tablet, theme } from "styles/theme";

const Header: React.FC = () => {
const {isMobile}=useQuery()
return(
  <HeaderWrapper>
    <FlexWrapper justifyContent="space-between" 
      flexDirection={isMobile ? 'column' : 'row'}
      alignItems='center'
      borderBottom=' 1px solid rgb(204, 204, 204);'
      paddingY={isMobile? 's32' :'s40'}
      paddingX={isMobile? 's4': 's160'}
      gap={isMobile? "2rem": '0rem' }
    >
        <Image src="Logo" alt="Logo"  />
      <FlexWrapper gap="1rem"
      >
        <HomeNav/>
      </FlexWrapper>
      <FlexWrapper gap="1rem">
        <SocialItems/>
      </FlexWrapper>
    </FlexWrapper>
</HeaderWrapper>

)
}

export default Header;

const HeaderWrapper = styled.header`

  a {
    color: ${theme.colors.black};
    text-decoration: none;
  } 

	
`;
