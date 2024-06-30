import React from "react";
import { SiWindows10 } from "react-icons/si";
import GamesData from "../JSON/Games.json";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const F2P_Game_Card = () => {
  let f2pGames = GamesData.f2p;
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
  return (
    <Slider {...settings}>
      {f2pGames.map((game, index) => (
        <div>
          <div
            key={index}
            className="bg-bg-main rounded-md w-fit h-fit mx-2 hover:cursor-grab active:cursor-grabbing"
          >
            <div className="w-full h-full  p-4">
              <img
                src={game.image}
                alt={game.name}
                className="object-cover  rounded-sm"
              />
            </div>
            <h2 className="p-4 heading-medium">{game.name}</h2>
            <div
              className="flex flex-row justify-between items-center p-4"
              key={game.id}
            >
              <div className="flex flex-row justify-between w-[60%]">
                <SiWindows10 size={20} className="text-text-dim" />
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
  );
};

export default F2P_Game_Card;
