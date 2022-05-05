import { FlexWrapper, Image, Typography } from "components";
import React from "react";

const Silverware: React.FC = () => (

    <FlexWrapper gap="0.5rem" backgroundColor="radioColor" borderRadius="r40" width='9rem' height="2.75rem" justifyContent='center' alignItems="center">
      <Image src="silverware" alt="silvery" />
      <Typography> Chicken </Typography>
    </FlexWrapper>
);

export default Silverware;
