import React from "react";
import Platform from "@components-global/Platform";
import SliderHeader from "@components-global/SliderHeader";
import { Link } from "react-router-dom";

// Importing Icons
import { IoHeartOutline } from "react-icons/io5";

// Importing the JSON file
import GamesData from "@json/Games.json";

// Importing the Slider library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "@components-global/SliderArrows";

const Featured = () => {
  let games = GamesData.featured;
  let settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <SliderHeader title="Featured" />

      <Slider
        {...settings}
        className="mx-4 bg-bg-main py-4 h-full mb-20 rounded-lg transition-all
        xl:pb-0 2xl:py-4
        "
      >
        {games.map((game, index) => (
          <div className="px-4" key={index}>
            <div className="flex xl:flex-row sm:flex-col max-sm:flex-col gap-5">
              {/*  Game Cover */}
              <div className="min-w-[60%] max-sm:hidden">
                <img
                  src={game.image}
                  alt={game.name}
                  className="rounded-md h-full object-cover w-full "
                />
              </div>
              {/*  Game Poster */}
              <div className="w-full max-h-screen hidden max-sm:block">
                <img
                  src={game.poster}
                  alt={game.name}
                  className="rounded-md h-full object-cover w-full "
                />
              </div>
              <div className="min-w-[38%] h-50 max-sm:h-fit rounded-md pr-2 flex flex-col gap-6">
                <div>
                  <h3 className="heading-large max-sm:heading-medium">
                    {game.name}
                  </h3>
                  <p className="body-small text-wrap">{game.description}</p>
                </div>
                <screenshots className="max-sm:hidden">
                  <div className="grid grid-cols-2 gap-4">
                    {game.screenshots.slice(0,4).map((screenshot, index) => (
                      <img
                        src={screenshot}
                        alt={game.name}
                        className="object-cover rounded-md max-w-58 h-32 w-full md:max-h-36 max-sm:h-24 max-sm:w-58"
                        key={index}
                      />
                    ))}
                  </div>
                </screenshots>
                <div className="flex justify-between items-center ">
                  <div>
                    {game.category.map((category, index) => (
                      <span
                        className="text-text-dim bg-bg-highlight px-4 py-3 rounded mr-2 hover:cursor-pointer
                        hover:bg-text-main hover:text-bg-main hover:underline transition-all"
                        key={index}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <Platform game={game} />
                </div>
                <navigator className="flex justify-between items-center ">
                  <div>
                    <button
                      className="px-8 py-3 rounded bg-bg-highlight text-text-main body-large
                    cursor-pointer hover:bg-bg-hover transition-all"
                    >
                      Wishlist
                      <IoHeartOutline
                        size={24}
                        className="text-text-main inline-block ml-2"
                      />
                    </button>
                  </div>
                  <div>
                    <h4 className="heading-small text-text-main inline-block">
                      {game.price}
                    </h4>
                    <button
                      className="px-8 py-3 ml-4 rounded bg-secondary text-text-main body-large
                    cursor-pointer hover:bg-bg-tertiary transition-all"
                    >
                      <Link to={`store/game/${game.href}`}>
                        {game.price === "Free" ? "Play Now" : "Buy Now"}
                      </Link>
                    </button>
                  </div>
                </navigator>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Featured;
