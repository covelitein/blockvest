import React from 'react'
import {
  BiWallet,
  BiBitcoin,
  BiLineChartDown,
  BiShield,
  BiLockAlt,
  BiSupport,
  BiShieldQuarter,
} from "react-icons/bi";
import Heading from './Heading';

const Services = () => {
  return (
    <section className="lg:mt-8 mt-12 min-h-[30rem]">
      <div className="w-11/12 max-lg:w-[90%] mx-auto flex items-center flex-col justify-center">
        <Heading
          plaintext={" OUR"}
          colored={"SERVICES"}
          desc={"we offer top notch services"}
        />
        <div className="w-full flex max-md:flex-col max-md:space-y-5 items-center justify-center space-x-3 text-[#ffa500] mb-5">
          <div className="w-[45%] max-md:w-full bg-[#111]">
            <div className=" px-5">
              <BiWallet className="text-6xl max-sm:text-4xl" />
            </div>
            <div className="text-[#999] font-[poppins] p-1 text-[0.9rem] max-sm:text-[0.8rem] text-justify pr-2">
              <h1 className="max-sm:text-lg text-white font-[bellota] font-bold text-xl uppercase mb-5 mt-2">
                Investment Portfolio
              </h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus dolore accusantium architecto ipsa, natus incidunt a
              aperiam, dolor ratione sit repudiandae beatae. At harum ut a iure
              veritatis minima earum adipisci eaque tempore exercitationem
              voluptas recusandae, perspiciatis, quam repellat cupiditate?
              Voluptates voluptatem deleniti laudantium ipsa explicabo aliquid
              modi iste! Voluptatum.
            </div>
          </div>
          <div className="w-[45%] max-md:w-full min-h-[15rem] bg-[#111]">
            <div className=" px-5">
              <BiLineChartDown className="text-6xl max-sm:text-4xl" />
            </div>
            <div className="text-[#999] font-[poppins] max-sm:text-[0.8rem] p-1 text-[0.9rem] text-justify pr-2">
              <h1 className="text-white font-[bellota] max-sm:text-lg font-bold text-xl uppercase mb-5 mt-2">
                Market Analysis
              </h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus dolore accusantium architecto ipsa, natus incidunt a
              aperiam, dolor ratione sit repudiandae beatae. At harum ut a iure
              veritatis minima earum adipisci eaque tempore exercitationem
              voluptas recusandae, perspiciatis, quam repellat cupiditate?
              Voluptates voluptatem deleniti laudantium ipsa explicabo aliquid
              modi iste! Voluptatum.
            </div>
          </div>
        </div>
        <div className="w-full flex max-md:flex-col max-md:space-y-5 items-center justify-center space-x-3 text-[#ffa500] mb-5">
          <div className="w-[45%] max-md:w-full bg-[#111]">
            <div className=" px-5">
              <BiBitcoin className="text-6xl max-sm:text-4xl" />
            </div>
            <div className="text-[#999] font-[poppins] p-1 text-[0.9rem] max-sm:text-[0.8rem] text-justify pr-2">
              <h1 className="text-white font-[bellota] max-sm:text-lg font-bold text-xl uppercase mb-5 mt-2">
                Crypto Trading
              </h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus dolore accusantium architecto ipsa, natus incidunt a
              aperiam, dolor ratione sit repudiandae beatae. At harum ut a iure
              veritatis minima earum adipisci eaque tempore exercitationem
              voluptas recusandae, perspiciatis, quam repellat cupiditate?
              Voluptates voluptatem deleniti laudantium ipsa explicabo aliquid
              modi iste! Voluptatum.
            </div>
          </div>
          <div className="w-[45%] max-md:w-full bg-[#111]">
            <div className="px-5">
              <BiShieldQuarter className="text-6xl max-sm:text-4xl" />
            </div>
            <div className="text-[#999] font-[poppins] max-sm:text-[0.8rem] p-1 text-[0.9rem] text-justify pr-2">
              <h1 className="text-white font-[bellota] max-sm:text-lg font-bold text-xl uppercase mb-5 mt-2">
                Risk Management
              </h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus dolore accusantium architecto ipsa, natus incidunt a
              aperiam, dolor ratione sit repudiandae beatae. At harum ut a iure
              veritatis minima earum adipisci eaque tempore exercitationem
              voluptas recusandae, perspiciatis, quam repellat cupiditate?
              Voluptates voluptatem deleniti laudantium ipsa explicabo aliquid
              modi iste! Voluptatum.
            </div>
          </div>
        </div>
        <div className="w-full max-md:flex-col max-md:space-y-5 flex items-center justify-center space-x-3 text-[#ffa500] mb-5">
          <div className="w-[45%] max-md:w-full bg-[#111]">
            <div className=" px-5">
              <BiLockAlt className="text-6xl max-sm:text-4xl" />
            </div>
            <div className="text-[#999] font-[poppins] max-sm:text-[0.8rem] p-1 text-[0.9rem] text-justify pr-2">
              <h1 className="text-white font-[bellota] max-sm:text-lg font-bold text-xl uppercase mb-5 mt-2">
                User Security
              </h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus dolore accusantium architecto ipsa, natus incidunt a
              aperiam, dolor ratione sit repudiandae beatae. At harum ut a iure
              veritatis minima earum adipisci eaque tempore exercitationem
              voluptas recusandae, perspiciatis, quam repellat cupiditate?
              Voluptates voluptatem deleniti laudantium ipsa explicabo aliquid
              modi iste! Voluptatum.
            </div>
          </div>
          <div className="w-[45%] max-md:w-full bg-[#111]">
            <div className="px-5">
              <BiSupport className="text-6xl max-sm:text-4xl" />
            </div>
            <div className="text-[#999] font-[poppins] p-1 max-sm:text-[0.8rem] text-[0.9rem] text-justify pr-2">
              <h1 className="text-white font-[bellota] font-bold max-sm:text-lg text-xl uppercase mb-5 mt-2">
                Customer Support
              </h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus dolore accusantium architecto ipsa, natus incidunt a
              aperiam, dolor ratione sit repudiandae beatae. At harum ut a iure
              veritatis minima earum adipisci eaque tempore exercitationem
              voluptas recusandae, perspiciatis, quam repellat cupiditate?
              Voluptates voluptatem deleniti laudantium ipsa explicabo aliquid
              modi iste! Voluptatum.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services

// Investment Portfolio - <BiWallet />
// Crypto Trading - <BiBitcoin />
// Market Analysis - <BiLineChart />
// Risk Management - <BiShield />
// User Security - <BiLockAlt />
// Customer Support - <BiSupport />
