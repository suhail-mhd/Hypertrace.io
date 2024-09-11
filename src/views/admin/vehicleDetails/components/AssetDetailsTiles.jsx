import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "components/card";
import { MdBarChart, MdDashboard } from "react-icons/md";

const AssetDetailsTiles = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2, // Number of rows
    slidesPerRow: 1, // Number of slides per row
  };

  const cards = [
    { id: 1, title: "Card 1", content: "Content 1" , icon:<MdBarChart className="h-7 w-7"/> },
    { id: 2, title: "Card 2", content: "Content 2" , icon:<MdBarChart className="h-7 w-7"/> },
    { id: 3, title: "Card 3", content: "Content 3" , icon:<MdBarChart className="h-7 w-7"/> },
    { id: 4, title: "Card 4", content: "Content 4" , icon:<MdBarChart className="h-7 w-7"/> },
    { id: 5, title: "Card 5", content: "Content 5" , icon:<MdBarChart className="h-7 w-7"/> },
    { id: 6, title: "Card 6", content: "Content 6" , icon:<MdBarChart className="h-7 w-7"/> },
    { id: 7, title: "Card 7", content: "Content 7" , icon:<MdBarChart className="h-7 w-7"/> },
    { id: 8, title: "Card 8", content: "Content 8" , icon:<MdBarChart className="h-7 w-7"/> },
    // Add more cards as needed
  ];


  return (
    // <div className="slider-container">
    <Slider {...settings}>
       {cards.map((card) => (
      <div key={card.id} className=" h-44 relative rounded-[6px] bg-white bg-clip-border dark:!bg-navy-800 dark:text-white dark:shadow-none">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
            {card.icon}
            </span>
          </div>
        </div>

        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-gray-600">
          {card.title}
          </p>
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {card.content}
          </h4>
        </div>
      </div>
        ))}
    </Slider>
    // </div>
  );
};

export default AssetDetailsTiles;
