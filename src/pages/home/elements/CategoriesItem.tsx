import {
  FlexWrapper,
  Image,
  Typography,
} from "components";

import React from "react";
import styled from "styled-components/macro";

import { mobile, theme } from "styles/theme";

interface CateforiesItemStyleProps {
  listStyle?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  background?: string;
  width?: string;
}

interface FoodProps extends CateforiesItemStyleProps {
  title: string;
  background: string;
}

const CategoriesItem: React.FC<FoodProps> = ({ title, background }) => (
    <ItemStyles background={background}>
      <FlexWrapper flexDirection="column" alignItems={{_:'center'}}>
          <Image src={title} alt={title} />
          <Typography textAlign="center" pt="s24">{title}</Typography>
      </FlexWrapper>
    </ItemStyles>
  );


export default CategoriesItem;

const ItemStyles = styled.li<CateforiesItemStyleProps>`
  list-style: none;
  background: ${({ background }) => background || ""};
  border-radius: ${theme.radii.r40};
  padding: 3rem 2rem;

  @media ${mobile} {
    padding: 0;
    width: 100%;
    display: none;
    :nth-child(1),
    :nth-child(2),
    :nth-child(3) {
      display: list-item;
    }
  }
`;
