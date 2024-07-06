import React from "react";
import SliderHeader from "../utilities/SliderHeader";
// Importing the JSON file
import GamesData from "../JSON/Games.json";

// Importing the Slider library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../utilities/SliderArrows";

const RecentlyUpdated = () => {
  let games = GamesData.updates;
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
      <SliderHeader title="Recently Updated" />

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
              <div className="w-full h-full p-4">
                <img
                  src={game.image}
                  alt={game.name}
                  className="object-cover  rounded"
                />
              </div>
              <h2 className="px-4 py-2 2xl:heading-medium heading-small">
                {game.name}
                </h2>
              <p className="px-4 body-small">
                {
                    game.description.length > 75
                        ? game.description.slice(0, 75) + "..."
                        : game.description
                }
                </p>
              <div className="flex flex-row justify-between items-center p-4">
                <button className="body-large  text-text-main border-bg-highlight border-solid border-[1px] rounded px-4 max-sm:px-3 py-2 hover:border-bg-hover">
                  {game.location}
                </button>
                <button className="body-large  text-text-main bg-bg-highlight rounded px-4 max-sm:px-3 py-2 hover:bg-bg-hover">
                  View Updates
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default RecentlyUpdated;
