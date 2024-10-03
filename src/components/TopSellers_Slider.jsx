import React from "react";
import SliderHeader from "@utils/SliderHeader";

// Importing the JSON file
import GamesData from "@json/Games.json";

// Importing the Slider library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "@utils/SliderArrows";
import Platform from "@utils/Platform";
import Wishlist_Button from "@utils/Wishlist_Button";

const TopSellers_Slider = () => {
  let games = GamesData.TopSellers;
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 3,
    slidesPerRow: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
            rows: 3,
            slidesPerRow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
            rows: 3,
            slidesPerRow: 1,
        },
      },
    ],
  };
  return (
    <>
      <SliderHeader title="Top Sellers" />

      <Slider
        {...settings}
        className="mx-4 bg-bg-main bg-opacity-20 p-4 h-full rounded-lg mb-20"
      >
        {games.map((game,index) => (
          <div className="my-2 w-full" key={index}>
            <div className="w-[98%] h-[130px] max-sm:h-full bg-bg-main p-4 lg:p-3 flex flex-row max-sm:flex-col gap-5 rounded">
              <img
                src={game.image}
                alt={game.name}
                className="w-[350px] h-full object-cover rounded"
              />
              <div className="flex flex-col gap-6 w-full">
                <h1 className="text-white heading-medium max-sm:heading-small">{game.name}</h1>
                <div className="flex flex-row justify-between items-center">
                  <Platform game={game}/>
                  <div className="flex flex-row items-center gap-4">
                    <h3 className="heading-small">{game.price}</h3>
                    <Wishlist_Button />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default TopSellers_Slider;
