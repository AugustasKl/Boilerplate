import styled from "styled-components/macro";

import { backgroundColor, BackgroundColorProps, compose, position, PositionProps } from "styled-system";
import { tablet, Theme } from "styles/theme";

const containerProps = compose(position, backgroundColor);

interface ContainerProps<T> extends BackgroundColorProps<T>, PositionProps<T> {
//   minHeight?: string;
//   position?:string
//   backgroundColor?: Colors;
}

export const Container = styled.div<ContainerProps<Theme>>`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 72rem;
  
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? theme.colors : ""};
    position: ${({position})=> position || ''}


  && {
    ${containerProps}
  }
  @media ${tablet} {
		max-width:100%;
	}
`;
