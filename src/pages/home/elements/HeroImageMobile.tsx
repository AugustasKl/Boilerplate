import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const HeroImageMobile: React.FC = () => (
  <StaticImage
    src="../../../assets/images/chickenImg.png"
    alt="chicken"
    style={{
      borderRadius: "0rem 0rem 1.25rem 1.25rem ",
    }}
  />

);


export default HeroImageMobile;
