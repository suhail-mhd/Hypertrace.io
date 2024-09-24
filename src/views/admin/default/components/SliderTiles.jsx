import React, {useEffect, useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "components/card";
import { MdBarChart, MdDashboard, MdFlag, MdNextPlan } from "react-icons/md";
import { FaTruckMoving, FaRoute  } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { LuParkingCircle } from "react-icons/lu";
import { GiUnplugged } from "react-icons/gi";
import { BsDatabaseFillX } from "react-icons/bs";
import { SlSizeActual } from "react-icons/sl";
import axios from "axios";

const SliderTiles = () => {
  const [PageRender, setPageRender] = useState(false);
  const [card, SetCard] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2, // Number of rows
    slidesPerRow: 1, // Number of slides per row
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // const cards = [
  //   { id: 1, title: "Number of Vehicle", content: "22" , icon:<FaTruckMoving className="h-7 w-7 text-blue-1000"/> },
  //   { id: 2, title: "Currently Moving", content: "3" , icon:<FaTruckFast className="h-7 w-7 text-blue-1000"/> },
  //   { id: 3, title: "Currently Parked", content: "15" , icon:<LuParkingCircle className="h-7 w-7 text-blue-1000"/> },
  //   { id: 4, title: "Device Pluggedout", content: "3" , icon:<GiUnplugged className="h-7 w-7 text-blue-1000"/> },
  //   { id: 5, title: "No Recent Data", content: "1" , icon:<BsDatabaseFillX className="h-7 w-7 text-blue-1000"/> },
  //   { id: 6, title: "Total Routes", content: "16" , icon:<FaRoute  className="h-7 w-7 text-blue-1000"/> },
  //   { id: 7, title: "Total Destination", content: "129" , icon:<MdFlag  className="h-7 w-7 text-blue-1000"/> },
  //   { id: 8, title: "Planned Distance", content: "4,285" , icon:<MdNextPlan  className="h-7 w-7 text-blue-1000"/> },
  //   { id: 8, title: "Actual Distance", content: "4,312" , icon:<SlSizeActual className="h-7 w-7 text-blue-1000"/> },
  //   // Add more cards as needed
  // ];

  const user = localStorage.getItem("userInfo");
  const userKey = JSON.parse(user);
  const USERKEY = userKey.api_key;

  const getCardSlider = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://ec2-13-60-63-246.eu-north-1.compute.amazonaws.com:8001/api/cardslider',
      headers: { 
        userKey: USERKEY,
      }
    };
    
    axios.request(config)
    .then((response) => {
      SetCard(response.data.cardslideritems)
    })
    .catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    getCardSlider()
    setPageRender(true);
  }, [ PageRender]);


  return (
    // <div className="slider-container">
    <Slider {...settings}>
       {card.map((card) => (
      <div key={card.id} className="h-44  relative rounded-[6px] bg-white bg-clip-border dark:!bg-navy-800 dark:text-white dark:shadow-none">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
            {/* {card.icon} */}
            </span>
          </div>
        </div>

        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-gray-600">
          {card.cardName}
          </p>
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {card.value}
          </h4>
        </div>
      </div>
        ))}
    </Slider>
    // </div>
  );
};

export default SliderTiles;
