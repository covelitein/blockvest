import React from 'react'
import image from '../assets/Image/count.jpg'
import {
  AiOutlineDollarCircle,
  AiOutlineUser,
  AiOutlineBarChart,
} from "react-icons/ai";

const CoolFacts = () => {
  return (
    <section
      className="min-h-[25rem] flex justify-center items-center md:space-x-24 max-md:space-y-5 max-md:flex-col"
      style={{
        background: `linear-gradient(to left, rgba(0,0,0,0.7), rgba(0,0,0,0.8)),url(${image}) no-repeat center/cover fixed`,
      }}
    >
      <div className="flex flex-col justify-center items-center font-[bellota] font-semibold">
        <AiOutlineUser className="text-6xl text-[#ffa500]" />
        <h1 className="text-white text-3xl">+4k</h1>
        <h3 className="text-[#ffa500] text-lg text-center">Registered Users</h3>
      </div>
      <div className="flex flex-col justify-center items-center font-[bellota] font-semibold">
        <AiOutlineDollarCircle className="text-6xl text-[#ffa500]" />
        <h1 className="text-white text-3xl">2.5k</h1>
        <h3 className="text-[#ffa500] text-lg text-center">
          Total Assets managed
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center font-[bellota] font-semibold">
        <AiOutlineBarChart className="text-6xl text-[#ffa500]" />
        <h1 className="text-white text-3xl">3.3k</h1>
        <h3 className="text-[#ffa500] text-lg text-center">
          Successful investments
        </h3>
      </div>
    </section>
  );
}

export default CoolFacts
