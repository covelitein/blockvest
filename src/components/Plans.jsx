import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Heading from './Heading';

const Plans = () => {
  return (
    <section className="mt-[10rem] py-4">
      <Heading
        plaintext={"OUR"}
        colored={"PLANS"}
        desc={"we offer flexible plans"}
      />
      <div className="w-11/12 mx-auto mt-5">
        <Swiper
          effect={"coverflow"}
          spaceBetween={90}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            990: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide className="bg-[rgba(0,0,0,0.5)] text-white rounded-md py-3">
            <h3 className="mt-3 text-center font-[bellota] text-lg p-3 text-[#ffa500]">
              BEGINNING PLAN
            </h3>
            <h2 className="text-7xl text-center my-5 font-[bellota]">30%</h2>
            <div className="mt-16">
              <h3 className="font-[bellota] text-center text-gray-500">
                Duration : <span>24 Hours</span>
              </h3>
              <div className="border-t-[1px] border-b-[1px] border-[#222] py-3 mt-9 font-[poppins] text-center">
                <span className="italic">Minimum</span> $200
              </div>
              <div className=" border-b-[1px] border-[#222] py-3 font-[poppins] text-center">
                <span className="italic">Maximum</span> $5,000
              </div>
              <div className=" border-b-[1px] border-[#222] py-3 font-[poppins] text-center">
                <span className="italic">Capital Invested Returns</span> &nbsp;
                Yes
              </div>
              <div className="text-center mt-9 font-[bellota]">
                <button className="py-2 px-12 bg-[#ffa500] rounded-[3rem]">
                  Get started
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[rgba(0,0,0,0.5)] text-white rounded-md py-3">
            <h3 className="mt-3 text-center font-[bellota] text-lg p-3 text-[#ffa500]">
              BASIC PLAN
            </h3>
            <h2 className="text-7xl text-center my-5 font-[bellota]">50%</h2>
            <div className="mt-16">
              <h3 className="font-[bellota] text-center text-gray-500">
                Duration : <span>7 days</span>
              </h3>
              <div className="border-t-[1px] border-b-[1px] border-[#222] py-3 mt-9 font-[poppins] text-center">
                <span className="italic">Minimum</span> $5,000
              </div>
              <div className=" border-b-[1px] border-[#222] py-3 font-[poppins] text-center">
                <span className="italic">Maximum</span> $10,000
              </div>
              <div className=" border-b-[1px] border-[#222] py-3 font-[poppins] text-center">
                <span className="italic">Capital Invested Returns</span> &nbsp;
                Yes
              </div>
              <div className="text-center mt-9 font-[bellota]">
                <button className="py-2 px-12 bg-[#ffa500] rounded-[3rem]">
                  Get started
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[rgba(0,0,0,0.5)] text-white rounded-md py-3">
            <h3 className="mt-3 text-center font-[bellota] text-lg p-3 text-[#ffa500]">
              GOLD PLAN
            </h3>
            <h2 className="text-7xl text-center my-5 font-[bellota]">80%</h2>
            <div className="mt-16">
              <h3 className="font-[bellota] text-center text-gray-500">
                Duration : <span>2 weeks</span>
              </h3>
              <div className="border-t-[1px] border-b-[1px] border-[#222] py-3 mt-9 font-[poppins] text-center">
                <span className="italic">Minimum</span> $10,000
              </div>
              <div className=" border-b-[1px] border-[#222] py-3 font-[poppins] text-center">
                <span className="italic">Maximum</span> $50,000
              </div>
              <div className=" border-b-[1px] border-[#222] py-3 font-[poppins] text-center">
                <span className="italic">Capital Invested Returns</span> &nbsp;
                Yes
              </div>
              <div className="text-center mt-9 font-[bellota]">
                <button className="py-2 px-12 bg-[#ffa500] rounded-[3rem]">
                  Get started
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[rgba(0,0,0,0.5)] text-white rounded-md py-3">
            <h3 className="mt-3 text-center font-[bellota] text-lg p-3 text-[#ffa500]">
              PREMIUM PLAN
            </h3>
            <h2 className="text-7xl text-center my-5 font-[bellota]">100%</h2>
            <div className="mt-16">
              <h3 className="font-[bellota] text-center text-gray-500">
                Duration : <span>1 Month</span>
              </h3>
              <div className="border-t-[1px] border-b-[1px] border-[#222] py-3 mt-9 font-[poppins] text-center">
                <span className="italic">Minimum</span> $50,000
              </div>
              <div className=" border-b-[1px] border-[#222] py-3 font-[poppins] text-center">
                <span className="italic">Maximum</span> Unlimited
              </div>
              <div className=" border-b-[1px] border-[#222] py-3 font-[poppins] text-center">
                <span className="italic">Capital Invested Returns</span> &nbsp;
                Yes
              </div>
              <div className="text-center mt-9 font-[bellota]">
                <button className="py-2 px-12 bg-[#ffa500] rounded-[3rem]">
                  Get started
                </button>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </section>
  );
}

export default Plans

// <div class="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">

//     <div class="flex space-x-2 animate-pulse">
//         <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
//         <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
//         <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
//     </div>

// </div>