import { FlexWrapper, Image, Typography } from "components";
import React from "react";

const Timer: React.FC = () => (
  <FlexWrapper gap="0.5rem" backgroundColor="radioColor" borderRadius="r40" width='9rem' height="2.75rem" justifyContent='center' alignItems="center">
      <Image src="timer" alt="timer" />
      <Typography> 30 minutes </Typography>
    </FlexWrapper>
);

export default Timer;
