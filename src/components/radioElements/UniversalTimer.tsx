import { FlexWrapper, Image, Typography } from "components";
import React from "react";

const UniversalTimer: React.FC = ({children}) => (

    <FlexWrapper gap="0.5rem"  width='9rem' height="2.75rem">
      <Image src="timer" alt="timer" />
      <Typography> {children} </Typography>
    </FlexWrapper>
);

export default UniversalTimer;
