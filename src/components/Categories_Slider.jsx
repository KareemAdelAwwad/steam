import React from "react";
import { Link } from "react-router-dom";
import SliderHeader from "../utilities/SliderHeader";

// Importing the JSON file
import GamesData from "../JSON/Games.json";

// Importing the Slider library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../utilities/SliderArrows";

const Categories = () => {
  let games = GamesData.Categories;
  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <SliderHeader title="Categories" />
      <Slider
        {...settings}
        className="mx-4 bg-bg-main bg-opacity-20 py-4 px-3 h-full rounded-lg mb-20"
      >
        {games.map((game, index) => (
          <Link key={index} to={game.href}>
            <div className="w-[250px] xl:w-[230px] lg:w-[250px] md:w-[210px] max-sm:w-fit aspect-square relative flex text-center items-center mx-auto max-sm:mx-1  rounded-lg overflow-hidden">
              <div className="w-full h-full absolut">
                <h3 className="heading-medium text-text-main absolute z-10 w-full top-[50%] translate-y-[-50%]">
                  {game.name}
                </h3>
              </div>
              <div
                style={{
                  background: `linear-gradient(to top, ${game.background} 10%, ${game.background}00 100%)`,
                }}
                className="w-full h-full absolute z-5"
              ></div>
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        ))}
      </Slider>
    </>
  );
};

export default Categories;
