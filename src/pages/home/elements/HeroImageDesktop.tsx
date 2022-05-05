import { StaticImage } from "gatsby-plugin-image";
import React from "react";


const HeroImageDesktop: React.FC = () => (
  <StaticImage
    src="../../../assets/images/chickenImg.png"
    alt="chicken"
    style={{
      borderRadius: "0rem 1.25rem 1.25rem 0rem  ",
    }}
  />
);

export default HeroImageDesktop;
