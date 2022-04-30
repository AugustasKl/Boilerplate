import styled from 'styled-components/macro';

import { tablet } from 'styles/theme';

interface ContentWrapperStyles {
    margin?: string;
    maxWidth?:string;
	padding?: string;
}

export const ContentWrapper = styled.section<ContentWrapperStyles>`
	margin: 0 auto;	
	max-width: 58rem;
	padding: 0 1rem;


	@media ${tablet} {
		max-width: 100%;
	}
`;
