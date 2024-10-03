import React from "react";
import Wishlist_Button from "@utils/Wishlist_Button";
import Platform from "@utils/Platform";
import Discount from "@utils/Discount";
import SliderHeader from "@utils/SliderHeader";

// Importing the JSON file
import GamesData from "@json/Games.json";

// Importing the Slider library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "@utils/SliderArrows";

const SpecialOffers = () => {
  let games = GamesData.SpecialOffers;
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
      <SliderHeader title="Special Offers" />

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
                  className="object-cover rounded h-[200px] w-[380px]"
                />
              </div>
              <h2 className="p-4 heading-medium max-sm:heading-small">
                {game.name}
              </h2>
              <div
                className="flex flex-row justify-between items-center p-4"
                key={index}
              >
                <Platform game={game} />
                <h3 className="body-medium text-text-dim max-sm:hidden sm:hidden lg:block">
                  {game.end_date === "Only Today!"
                    ? "Only Today!"
                    : `Until ${game.end_date}`}
                </h3>
                <Discount game={game}/>
                <Wishlist_Button />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SpecialOffers;
