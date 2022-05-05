import { FlexWrapper } from "components";
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components/macro";
import { theme } from "styles/theme";

const HomeNav: React.FC = () => (
  <HeaderWrapper>
    <FlexWrapper gap="2rem">
      <Link to="/">Home</Link>
      <Link to="/">Recipes</Link>
      <Link to="/">Blog</Link>
      <Link to="/">Contact</Link>
      <Link to="/">About us</Link>
    </FlexWrapper>
  </HeaderWrapper>
);

export default HomeNav;

const HeaderWrapper = styled.header`

  a {
    color: ${theme.colors.black};
    text-decoration: none;
  } 

	
`;
