import { Image } from "components";
import React from "react";

const SocialItems: React.FC = () => (
  <>
    <a href="#">
      <Image src="facebook" alt="facebook" />
    </a>
    <a href="#">
      <Image src="twitter" alt="twitter" />
    </a>
    <a href="#">
      <Image src="instagram" alt="instagram" />
    </a>
  </>
);

export default SocialItems;
