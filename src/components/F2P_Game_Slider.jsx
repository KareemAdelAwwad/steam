import React from "react";

// Importing Icons
import { PiWindowsLogoFill } from "react-icons/pi";
import { FaSteam, FaApple, FaAndroid } from "react-icons/fa6";

// Importing the JSON file
import GamesData from "../JSON/Games.json";

// Importing the Slider library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../utilities/SliderArrows";


const F2P_Game_Card = () => {
  let f2pGames = GamesData.f2p;
  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const platformIcons = {
    Steam: <FaSteam size={26} className="text-text-dim hover:text-text-main" />,
    Mac: <FaApple size={26} className="text-text-dim hover:text-text-main" />,
    Android: (
      <FaAndroid size={26} className="text-text-dim hover:text-text-main" />
    ),
    Windows: (
      <PiWindowsLogoFill
        size={26}
        className="text-text-dim hover:text-text-main"
      />
    ),
  };
  return (
    <>
      <div className="flex justify-between mb-6 px-6 items-center">
        <h2 className="heading-small">Free To Play</h2>
        <button className="text-text-dim border-text-dim border-[1px] border-solid px-5 py-2 rounded-md hover:border-text-main hover:text-text-main transition-all">
          See more
        </button>
      </div>

      <Slider
        {...settings}
        className="mx-4 bg-bg-main bg-opacity-20 py-4 px-3 h-full rounded-lg mb-20"
      >
        {f2pGames.map((game, index) => (
          <div>
            <div key={index} className="bg-bg-main rounded-md w-fit h-fit mx-2">
              <div className="w-full h-full  p-4">
                <img
                  src={game.image}
                  alt={game.name}
                  className="object-cover rounded"
                />
              </div>
              <h2 className="p-4 heading-medium">{game.name}</h2>
              <div
                className="flex flex-row justify-between items-center p-4"
                key={game.id}
              >
                <div className="flex flex-row justify-between w-[60%]">
                  <div className="flex gap-1">
                    {game.platforms.map((platform, index) => (
                      <div key={index}>{platformIcons[platform]}</div>
                    ))}
                  </div>
                  <h3 className="heading-small text-text-dim">{game.price}</h3>
                </div>
                <button className="heading-small  text-bg-main bg-accent-green rounded-sm px-4 max-sm:px-3 py-2">
                  Play Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default F2P_Game_Card;
