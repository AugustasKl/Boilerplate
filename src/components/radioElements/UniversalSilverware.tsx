import { FlexWrapper, Image, Typography } from "components";
import React from "react";

const UniversalSilverware: React.FC = ({children}) => (

    <FlexWrapper gap="0.5rem"  width='9rem' height="2.75rem">
      <Image src="silverware" alt="silvery" />
      <Typography> {children} </Typography>
    </FlexWrapper>
);

export default UniversalSilverware;
