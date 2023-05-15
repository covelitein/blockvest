import React from 'react'
import tImage from '../assets/Image/testimonial.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import a1 from '../assets/Image/a1.jpg'
import a2 from '../assets/Image/a2.jpg'
import a3 from '../assets/Image/a3.jpg'
import Heading from './Heading';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Testimonial = () => {
  return (
    <section
      className="min-h-[30rem] mt-8"
      style={{
        background: `linear-gradient(to left,rgba(0,0,0,0.7),rgba(0,0,0,0.8)),url(${tImage}) no-repeat top/cover fixed`,
      }}
    >
      <div className="w-11/12 mx-auto py-3">
        <Heading
          plaintext={"Testimonials"}
          desc={"testimonies from our clients across the globe"}
        />
        <div className="mt-[3rem] w-full">
          <Swiper
            spaceBetween={50}
            autoplay={{
              delay: 6000,
            }}
            loop={true}
            speed={700}
            direction="horizontal"
            pagination={{
              el: ".s-pagination",
              clickable: true,
              renderBullet: function (index, className) {
                return `<div class="${className}"></div>`;
              },
            }}
            className="w-full min-h-[20rem] text-white relative "
          >
            <SwiperSlide className="">
              <div className="flex w-full justify-center items-center">
                <main className="flex flex-col h-[20rem] w-[40rem]">
                  <div className="">
                    <FaQuoteLeft className="text-2xl max-sm:text-lg" />
                    <p className="mt-3 py-2 font-[poppins] px-8 max-sm:text-[0.8rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae consectetur ea unde officia facere alias atque
                      odit temporibus nihil modi?
                    </p>
                    <FaQuoteRight className="text-2xl ml-auto mt-2 max-sm:text-lg" />
                  </div>
                  <div className="px-7 flex space-x-3 text-[#ffa500]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                  <div className="mt-3 px-7 flex items-center space-x-3">
                    <img
                      src={a1}
                      alt=""
                      className="object-cover h-[6rem] w-[6rem] rounded-full max-sm:w-[4rem] max-sm:h-[4rem]"
                    />
                    <div className="font-[poppins] mt-6 max-sm:text-[0.75rem]">
                      <h3>Yewande Nimc</h3>
                      <h2>Social media manager</h2>
                    </div>
                  </div>
                </main>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex w-full justify-center items-center">
                <main className="flex flex-col h-[20rem] w-[40rem]">
                  <div className="">
                    <FaQuoteLeft className="text-2xl max-sm:text-lg" />
                    <p className="mt-3 py-2 font-[poppins] px-8 max-sm:text-[0.8rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae consectetur ea unde officia facere alias atque
                      odit temporibus nihil modi?
                    </p>
                    <FaQuoteRight className="text-2xl ml-auto mt-2 max-sm:text-lg" />
                  </div>
                  <div className="px-7 flex space-x-3 text-[#ffa500]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                  <div className="mt-3 px-7 flex items-center space-x-3">
                    <img
                      src={a2}
                      alt=""
                      className="object-cover h-[6rem] w-[6rem] rounded-full max-sm:w-[4rem] max-sm:h-[4rem]"
                    />
                    <div className="font-[poppins] mt-6 max-sm:text-[0.75rem]">
                      <h3>Ben Hallson</h3>
                      <h2>Consultancy Expert</h2>
                    </div>
                  </div>
                </main>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex w-full justify-center items-center">
                <main className="flex flex-col h-[20rem] w-[40rem]">
                  <div className="">
                    <FaQuoteLeft className="text-2xl max-sm:text-lg" />
                    <p className="mt-3 py-2 font-[poppins] px-8 max-sm:text-[0.8rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae consectetur ea unde officia facere alias atque
                      odit temporibus nihil modi?
                    </p>
                    <FaQuoteRight className="text-2xl ml-auto mt-2 max-sm:text-lg" />
                  </div>
                  <div className="px-7 flex space-x-3 text-[#ffa500]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                  <div className="mt-3 px-7 flex items-center space-x-3">
                    <img
                      src={a3}
                      alt=""
                      className="object-cover h-[6rem] w-[6rem] rounded-full max-sm:w-[4rem] max-sm:h-[4rem]"
                    />
                    <div className="font-[poppins] mt-6 max-sm:text-[0.75rem]">
                      <h3>Wonder twin</h3>
                      <h2>Frontend web developers</h2>
                    </div>
                  </div>
                </main>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="s-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial
