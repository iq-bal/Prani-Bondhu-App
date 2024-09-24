import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function ProfileSvg({ color = "#EE57A4" }) {
  return (
    <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
      <G stroke={color} strokeWidth={1.25}>
        <Path
          d="M5 22.5a5 5 0 015-5h10a5 5 0 015 5 2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 015 22.5z"
          strokeLinejoin="round"
        />
        <Path d="M15 12.5A3.75 3.75 0 1015 5a3.75 3.75 0 000 7.5z" />
      </G>
    </Svg>
  );
}

export default ProfileSvg;
