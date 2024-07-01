import React from "react";

// Importing Icons
import { PiWindowsLogoFill } from "react-icons/pi";
import { FaSteam, FaApple } from "react-icons/fa6";

import { IoHeart, IoHeartOutline } from "react-icons/io5";

// Importing the JSON file
import GamesData from "../JSON/Games.json";

// Importing the Slider library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../utilities/SliderArrows";

const Under_5 = () => {
  let games = GamesData.discount;
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    Steam: <FaSteam size={22} className="text-text-dim hover:text-text-main" />,
    Mac: <FaApple size={22} className="text-text-dim hover:text-text-main" />,
    Windows: (
      <PiWindowsLogoFill
        size={22}
        className="text-text-dim hover:text-text-main"
      />
    ),
  };
  return (
    <>
      <div className="flex justify-between mb-6 px-6 items-center">
        <h2 className="heading-small">Under $5</h2>
        <button className="text-text-dim border-text-dim border-[1px] border-solid px-5 py-2 rounded-md hover:border-text-main hover:text-text-main transition-all">
          See more
        </button>
      </div>

      <Slider
        {...settings}
        className="mx-4 bg-bg-main bg-opacity-20 py-4 px-3 h-full rounded-lg mb-20"
      >
        {games.map((game, index) => (
          <div key={index}>
            <div className="bg-bg-main rounded-md w-fit h-fit mx-2">
              <div className="w-full p-4">
                <img
                  src={game.image}
                  alt={game.name}
                  className="object-cover rounded h-[220px]"
                />
              </div>
              <h2 className="p-4 heading-medium max-sm:heading-small">{game.name}</h2>
              <div
                className="flex flex-row justify-between items-center p-4"
                key={index}
              >
                <div className="flex gap-1">
                  {game.platforms.map((platform, index) => (
                    <div key={index}>{platformIcons[platform]}</div>
                  
                  ))}
                </div>
                <h3 className="body-medium text-text-dim max-sm:hidden sm:hidden lg:block">
                  Untile {game.end_date}
                </h3>
                <button className="heading-small  text-bg-main bg-accent-green rounded-sm px-4 max-sm:px-3 py-2 hover:bg-opacity-90">
                  {game.discount}
                </button>
                <div className="heding-small">
                  <h6 className="text-text-dim line-through">{game.price}</h6>
                  <h6 className="text-accent-green">{game.originalPrice}</h6>
                </div>
                <button
                  className="px-4 py-3 rounded bg-bg-highlight text-text-main body-large
                    cursor-pointer hover:bg-bg-hover transition-all max-sm:hidden sm:hidden lg:block"
                >
                  <IoHeartOutline
                    size={24}
                    className="text-text-main inline-block"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Under_5;
