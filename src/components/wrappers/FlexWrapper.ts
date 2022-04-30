import styled from "styled-components/macro";

import { compose, flexbox, FlexboxProps } from "styled-system";
import { Theme } from "styles/theme";
import { Box } from "./../../components";

const flexWrapperProps = compose(flexbox);

interface FlexWrapperProps<T> extends FlexboxProps<T> {

  alignItems?: string;
  justifyContent?: string;
  gap?: string;
}

export const FlexWrapper = styled(Box)<FlexWrapperProps<Theme>>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  gap: ${({ gap }) => gap || ""};

  && {
    ${flexWrapperProps}
  }
`;
