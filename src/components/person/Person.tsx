import { FlexWrapper, Image, Typography } from 'components'
import React from 'react'

const Person:React.FC = () => (
    <FlexWrapper gap="2rem">
    <Image src="john" alt="john"/>
    <FlexWrapper flexDirection='column' alignItems='flex-start'>
            <Typography fontWeight="fw600">John Smith</Typography>
            <Typography color="radioColor">15 March 2022 </Typography>
            </FlexWrapper>
    </FlexWrapper>
    
  )


export default Person