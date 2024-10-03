import React from "react";
import SliderHeader from "@utils/SliderHeader";

// Importing the icons
import { FaPlay, FaEye } from "react-icons/fa";
import { PiRecordFill } from "react-icons/pi";

// Importing the JSON file
import GamesData from "@json/Games.json";

// Importing the Slider library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "@utils/SliderArrows";

const Streaming = () => {
  let games = GamesData.streaming;
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
  return (
    <>
      <SliderHeader title="Games Streaming Now" />

      <Slider
        {...settings}
        className="mx-4 bg-bg-main bg-opacity-20 py-4 px-3 h-full mb-20 rounded-lg"
      >
        {games.map((game, index) => (
          <div>
            <div
              key={index}
              className="bg-bg-main rounded-md w-fit h-fit mx-2 hover:cursor-grab active:cursor-grabbing"
            >
              <div className="w-full h-full p-4 relative">
                <button className="p-5 bg-bg-main bg-opacity-50 rounded-md absolute
                cursor-pointer hover:bg-bg-hover hover:bg-opacity-50
                top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <FaPlay size={20} className="text-text-main" />
                </button>
                <button className="p-2 bg-bg-main rounded absolute
                cursor-pointer hover:bg-bg-hover
                flex gap-1 m-2">
                  <PiRecordFill size={20} className="text-accent-red inline-block" />
                  <p className="text-accent-red">LIVE</p>
                </button>
                <img
                  src={game.image}
                  alt={game.name}
                  className="object-cover cursor-default rounded"
                />
              </div>
              <h2 className="px-4 py-2 2xl:heading-medium heading-small">
                {game.title}
              </h2>
              <div className="flex flex-row justify-between items-center p-4">
                <div className="flex flex-row items-center gap-3">
                  <FaEye size={24} className="text-primary" />
                  <p className="body-large text-primary">{game.views}</p>
                </div>
                <button className="body-large  text-text-main bg-bg-highlight rounded px-6 max-sm:px-3 py-3 hover:bg-bg-hover">
                  Store Page
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Streaming;
