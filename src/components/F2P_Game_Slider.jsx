import React from "react";
import Platform from "../utilities/Platform";
import SliderHeader from "../utilities/SliderHeader";
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
  return (
    <>
      <SliderHeader title="Free To Play" />

      <Slider
        {...settings}
        className="mx-4 bg-bg-main bg-opacity-20 py-4 px-3 h-full rounded-lg mb-20"
      >
        {f2pGames.map((game, index) => (
          <div key={index}>
            <div className="bg-bg-main rounded-md w-fit h-fit mx-2">
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
                  <Platform game={game} />
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
