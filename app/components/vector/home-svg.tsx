import * as React from "react";
import Svg, { Path } from "react-native-svg";

function HomeSvg({ color = "#EE57A4" }) {
  return (
    <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
      <Path
        d="M11.997 24.569v-6.25h5v6.25c0 .687.563 1.25 1.25 1.25h3.75c.688 0 1.25-.563 1.25-1.25v-8.75h2.125c.575 0 .85-.713.413-1.088L15.335 5.32a1.26 1.26 0 00-1.675 0L3.21 14.73c-.425.375-.163 1.088.412 1.088h2.125v8.75c0 .687.563 1.25 1.25 1.25h3.75c.688 0 1.25-.563 1.25-1.25z"
        fill={color}
      />
    </Svg>
  );
}

export default HomeSvg;
