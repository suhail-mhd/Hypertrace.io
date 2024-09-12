import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "components/card";
import { MdBarChart, MdDashboard, MdOutlineUpdate  } from "react-icons/md";
import { IoFootstepsSharp } from "react-icons/io5";
import { GiMovementSensor } from "react-icons/gi";
import { IoIosAlert } from "react-icons/io";
import { SiStatuspage } from "react-icons/si";
import { FaBatteryThreeQuarters, FaSignal  } from "react-icons/fa6";
import { RiGpsLine } from "react-icons/ri";
import { LuRadioTower } from "react-icons/lu";

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
    { id: 1, title: "Steps taken", content: "Content 1" , icon:<IoFootstepsSharp className="h-7 w-7 text-blue-1000"/> },
    { id: 2, title: "Movement count", content: "Content 2" , icon:<GiMovementSensor className="h-7 w-7 text-blue-1000"/> },
    { id: 3, title: "Alerts count", content: "Content 3" , icon:<IoIosAlert className="h-7 w-7 text-blue-1000"/> },
    { id: 4, title: "Last updated date/time", content: "Content 4" , icon:<MdOutlineUpdate  className="h-7 w-7 text-blue-1000"/> },
    { id: 5, title: "Current status", content: "Content 5" , icon:<SiStatuspage className="h-7 w-7 text-blue-1000"/> },
    { id: 6, title: "Battery %", content: "Content 6" , icon:<FaBatteryThreeQuarters className="h-7 w-7 text-blue-1000"/> },
    { id: 7, title: "Signal strength", content: "Content 7" , icon:<FaSignal  className="h-7 w-7 text-blue-1000"/> },
    { id: 8, title: "GPS signal quality", content: "Content 8" , icon:<RiGpsLine className="h-7 w-7 text-blue-1000"/> },
    { id: 8, title: "Tower identification", content: "Content 8" , icon:<LuRadioTower className="h-7 w-7 text-blue-1000"/> },
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
