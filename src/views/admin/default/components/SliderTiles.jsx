import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "components/card";
import { MdBarChart, MdDashboard } from "react-icons/md";

const SliderTiles = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesPerRow: 2,
        rows: 2,
        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 3,
        //       infinite: true,
        //       dots: true,
        //     },
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 2,
        //       initialSlide: 2,
        //     },
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //     },
        //   },
        // ],
      };
  return (
    // <div className="slider-container">
          <Slider {...settings}>
            <Card
              extra="!flex-row flex-grow items-center rounded-[20px] gap-5"
              
            >
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 dark:text-white">
                    <MdBarChart className="h-7 w-7" />
                  </span>
                </div>
              </div>

              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  Number of Vehicle
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  22
                </h4>
              </div>
            </Card>
            <Card
              extra="!flex-row flex-grow items-center rounded-[20px] gap-5"
              
            >
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 dark:text-white">
                    <MdBarChart className="h-7 w-7" />
                  </span>
                </div>
              </div>

              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                Currently Moving
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  3
                </h4>
              </div>
            </Card>
            <Card
              extra="!flex-row flex-grow items-center rounded-[20px] gap-5"
              
            >
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 dark:text-white">
                    <MdBarChart className="h-7 w-7" />
                  </span>
                </div>
              </div>

              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                Currently Parked
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  15
                </h4>
              </div>
            </Card>
            <Card
              extra="!flex-row flex-grow items-center rounded-[20px] gap-5"
              
            >
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 dark:text-white">
                    <MdBarChart className="h-7 w-7" />
                  </span>
                </div>
              </div>

              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                Device Pluggedout
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  3
                </h4>
              </div>
            </Card>
            <Card
              extra="!flex-row flex-grow items-center rounded-[20px] gap-5"
              
            >
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 dark:text-white">
                    <MdBarChart className="h-7 w-7" />
                  </span>
                </div>
              </div>

              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                No Recent Data
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  1
                </h4>
              </div>
            </Card>
            <Card
              extra="!flex-row flex-grow items-center rounded-[20px] gap-5"
              
            >
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                  <span className="flex items-center text-brand-500 dark:text-white">
                    <MdBarChart className="h-7 w-7" />
                  </span>
                </div>
              </div>

              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                Total Routes
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  16
                </h4>
              </div>
            </Card>
          </Slider>
        // </div>
  )
}

export default SliderTiles