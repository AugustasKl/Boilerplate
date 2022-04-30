import styled from "styled-components/macro";
import { compose, grid, GridAreaProps, GridColumnProps, GridProps } from "styled-system";
import { Theme } from "styles/theme";
import { Box } from "./../../components";

const gridWrapperProps = compose(grid);

interface GridWrapperProps<T> extends GridAreaProps<T>, GridColumnProps<T>, GridProps<T> {
  gap?: string;
}


export const GridWrapper= styled(Box)<GridWrapperProps<Theme>>`
gap: ${({ gap }) => gap || ""};

&& {
    ${gridWrapperProps}
  }
`