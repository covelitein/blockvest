import React from 'react'
import { FaTwitter, FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa";


const ExpertCard = ({ image, name, position }) => {
  return (
    <div className=" min-h-[15rem] border-[1px] border-[#ffa500] relative">
      <div className="w-full relative par">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="flex justify-center items-center space-x-3 h-full w-full absolute top-0 left-0 bg-[rgba(0,0,0,0.6)] socials text-3xl text-[#ffa500]">
          <FaTwitter />
          <FaTelegram />
          <FaInstagram />
          <FaFacebook />
        </div>
      </div>
      <div className="py-1 min-h-[3rem] text-white font-[bellota] w-full bg-[rgba(0,0,0,0.7)] ">
        <h3 className="px-4 uppercase">{name}</h3>
        <h4 className="font-[poppins] px-4 text-[#ffa500]">{position}</h4>
      </div>
    </div>
  );
}

export default ExpertCard
