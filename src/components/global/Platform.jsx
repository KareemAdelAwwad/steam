import React from "react";
// Importing Icons
import { PiWindowsLogoFill } from "react-icons/pi";
import { FaSteam, FaApple, FaAndroid } from "react-icons/fa6";

const Platform = ({game, size=26}) => {
  const platformIcons = {
    Steam: <FaSteam size={size} className="text-text-dim hover:text-text-main" />,
    Mac: <FaApple size={size} className="text-text-dim hover:text-text-main" />,
    Android: (
      <FaAndroid size={size} className="text-text-dim hover:text-text-main" />
    ),
    Windows: (
      <PiWindowsLogoFill
        size={size}
        className="text-text-dim hover:text-text-main"
      />
    ),
  };
  return (
    <div className="flex gap-1">
      {game.platforms.map((platform, index) => (
        <div key={index}>{platformIcons[platform]}</div>
      ))}
    </div>
  );
};

export default Platform;
