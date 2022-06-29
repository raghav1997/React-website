import React from "react";
import Video from "../../videos/video.mp4";
import { HeroContainter, HeroBg, VideoBg } from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainter>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
    </HeroContainter>
  );
};

export default HeroSection;
