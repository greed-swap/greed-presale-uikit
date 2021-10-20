import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 105" {...props}>
      <image width="128" height="105" href="/images/menu/meme-icon.png" />
    </Svg>
  );
};

export default Icon;
