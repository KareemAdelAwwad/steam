import React from "react";
import Wishlist_Button from "@components-global/Wishlist_Button";
import Platform from "@components-global/Platform";
import SliderHeader from "@components-global/SliderHeader";
// Importing the JSON file
import GamesData from "@json/Games.json";

// Importing the Slider library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "@components-global/SliderArrows";

const Trending = () => {
  let games = GamesData.Trending;
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
      <SliderHeader title="New & Trending" />

      <Slider
        {...settings}
        className="mx-4 bg-bg-main bg-opacity-20 py-4 px-3 h-full rounded-lg mb-20"
      >
        {games.map((game, index) => (
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
                <div className="flex flex-row justify-between w-[83%]">
                  <Platform game={game} />
                  <h3 className="heading-small text-text-dim">{game.price}</h3>
                </div>
                <Wishlist_Button />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Trending;
