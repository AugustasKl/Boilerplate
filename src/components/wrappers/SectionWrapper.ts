import styled from 'styled-components/macro';

import { Colors, mobile, tablet, theme } from 'styles/theme';

interface SectionWrapperStyles {
	minHeight?: string;
	backgroundColor?: Colors;
	padding?:string;
	borderRadius?:string
}

export const SectionWrapper = styled.section<SectionWrapperStyles>`
	position: relative;	
	padding: ${({padding})=> padding || '4rem'};
	border-radius: ${({borderRadius})=> borderRadius || `${theme.radii.r20}`};
	min-height: ${({ minHeight }) => minHeight || ''};
	background-color: ${({ backgroundColor, theme }) =>
		backgroundColor ? theme.colors[backgroundColor] : ''};

	@media ${tablet} {
		padding: 3rem;
	}
	@media ${mobile} {
    padding: 2rem 0.5rem;
  }
`;
