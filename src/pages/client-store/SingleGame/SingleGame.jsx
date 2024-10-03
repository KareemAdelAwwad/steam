import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import gamesData from "@json/Games.json";
import BTN from "@utils/btn";
import { FaRegHeart } from "react-icons/fa6";

// import react slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../../../utilities/ActiveSlider.css"
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "@utils/SliderArrows";
import Reviews from "@utils/Reviews";
import Platform from "@utils/Platform";
import Discount from "@utils/Discount";
import AddToCart from "@utils/AddToCart";


// Featch data from API
// const api = 'http://store.steampowered.com/api/appdetails?appids=1245620';

const SingleGame = () => {
  const { href } = useParams();
  console.log(href);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    centerMode: true,
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
  let game = gamesData.featured.filter((game) => game.href === href)[0];
  console.log(game);
  return (
    <div className="w-full h-full bg-secondary m-0 py-8">
      <section className="container 2xl:w-[1567px] mx-auto max-sm:px-4 flex flex-col  gap-2.5">
        <header className="w-full h-fit p-4 bg-bg-main flex lg:flex-row flex-col gap-2
        justify-between items-center rounded overflow-hidden">
          <h2 className="text-white text-4xl heading-large ml-2">
            {game.name}
          </h2>
          <div className="flex flex-row-reverse flex-wrap gap-2">
            <BTN title="Community Hub" />
            <BTN title="Browse All DLCs" />
            <BTN title="Wishlist" hasIcon={true} Icon={FaRegHeart} />
            <BTN title="Follow" outline={true} />
            <BTN title="Ignore" outline={true} />
          </div>
        </header>
        <section className="w-full xl:h-[680px] bg-bg-main bg-opacity-50 p-4 rounded flex lg:flex-row lg:gap-0 flex-col gap-16 justify-between">
          <div className="lg:w-[69%] w-full">
            <Slider
              asNavFor={nav2}
              ref={(slider) => (sliderRef1 = slider)}
              swipeToSlide={true}
              arrows={false}
            >
              {game.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="w-full xl:h-[485px] rounded-md overflow-hidden"
                >
                  <img
                    src={screenshot}
                    alt="screenshot"
                    className="object-cover"
                  />
                </div>
              ))}
            </Slider>

            <Slider
              {...settings}
              asNavFor={nav1}
              ref={(slider) => (sliderRef2 = slider)}
              swipeToSlide={true}
              focusOnSelect={true}
              className="mt-2 mx-6"
            >
              {game.screenshots.map((screenshot, index) => (
                <div key={index} className="h-30 rounded-md overflow-hidden">
                  <img
                    src={screenshot}
                    alt="screenshot"
                    className="object-cover cursor-pointer"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex flex-col justify-between lg:w-[30%] w-full">
            <img src={game.image} alt={game.name} className="w-full rounded-md" />
            <p className="body-medium">{game.description}</p>
            <reviews className="flex flex-col justify-between w-[80%]">
              <h6 className="body-medium text-text-dim">Reviews</h6>
              <Reviews game={game.reviews.pastMonth} />
              <Reviews game={game.reviews.allTime} />
            </reviews>
            <info className="flex flex-col gap-2">
              <div>
                <h6 className="body-medium text-text-dim inline-block w-[22%]">
                  Release Date
                </h6>
                <p className="body-medium inline-block">{game.releaseDate}</p>
              </div>

              <div>
                <h6 className="body-medium text-text-dim inline-block w-[22%]">
                  Developer
                </h6>
                <p className="body-medium text-primary inline-block">
                  {game.developer}
                </p>
              </div>

              <div>
                <h6 className="body-medium text-text-dim inline-block w-[22%]">
                  Publisher
                </h6>
                <p className="body-medium text-primary inline-block">
                  {game.publisher}
                </p>
              </div>
            </info>
            <tags className="flex gap-2 flex-col">
              <h6 className="body-medium text-text-dim">Popular Tags</h6>
              <div className="flex gap-1 flex-wrap">
                {game.category.map((tag, index) => (
                  <span
                    className="text-text-dim bg-bg-highlight px-3 py-1.5 rounded hover:cursor-pointer
                    hover:bg-text-main hover:text-bg-main hover:underline transition-all"
                    key={index}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </tags>
          </div>
        </section>

        <section className="w-full rounded flex lg:flex-row flex-col gap-2.5">
          <colgroup className="lg:w-[70%] w-full flex flex-col gap-2.5">
            <editions className="w-full flex flex-col gap-2.5">
              {game.Editions.map((edition, index) => (
                <div
                  className="w-full bg-bg-main bg-opacity-50 p-4 rounded flex flex-col gap-2.5 "
                  key={index}
                >
                  <div className="flex">
                    <div className="flex justify-between items-center w-[70%]">
                      <h2 className="heading-medium">{edition.name}</h2>
                      <Platform game={game} size={25} />
                    </div>
                    <div className="flex justify-end items-center gap-3 w-[30%]">
                      <Discount game={edition} />
                      <AddToCart title="Add to cart" />
                    </div>
                  </div>
                  {edition.content ? (
                    <includs className="bg-[#1E2329] bg-opacity-40 p-5 rounded">
                      <h6 className="body-large text-text-dim">Includes:</h6>
                      <ul className="body-large list-disc list-inside pl-4">
                        {edition.content.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </includs>
                  ) : null}
                </div>
              ))}
            </editions>
            {
              game.DLCs.length !== 0 ? (
                <dlc className="w-full bg-bg-main bg-opacity-50 p-4 rounded flex flex-col gap-2.5">
                <div className="flex justify-between items-center">
                  <h2 className="heading-small text-text-dim">DLCs</h2>
                  <BTN title="Browse All DLCs" outline={true} size={1} />
                </div>
                <div className="flex flex-col gap-2">
                  {game.DLCs.map((dlc, index) => (
                    <div
                      className="bg-[#1E2329] bg-opacity-40 rounded w-full px-4 py-2 flex justify-between items-center"
                      key={index}
                    >
                      <h6 className="body-medium text-text-dim">{dlc.name}</h6>
                      <Discount game={dlc} />
                    </div>
                  ))}
                </div>
                <div className="w-full flex justify-end gap-4">
                  <Discount game={game.dlcsPrice} />
                  <AddToCart title="Add All DLCs to Cart" />
                </div>
              </dlc>
              ) : null
            }
          </colgroup>

          <aside className="w-full lg:w-[30%] flex flex-col gap-2.5">
            <div className="bg-bg-main p-4 rounded"></div>
            <div className="bg-bg-main p-4 rounded"></div>
          </aside>
        </section>
      </section>
    </div>
  );
};

export default SingleGame;
