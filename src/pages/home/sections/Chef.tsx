import { Container, FlexWrapper, Image, SectionWrapper } from 'components'
import React from 'react'
import { useQuery } from 'styles/theme'
import ChefText from '../elements/ChefText'

const Chef:React.FC = () => {
  const{isMobile}=useQuery()
  return (
    <SectionWrapper>
      <Container>
        <FlexWrapper flexDirection={{_:'column', desktop:'row'}} alignItems="center" justifyContent="center" gap='2rem'>
            <ChefText/>       
            <Image src="Chef" alt='chef' maxWidth={isMobile ?'30rem': '100%'}/>
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  )
}

export default Chef