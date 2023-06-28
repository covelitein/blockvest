import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxLightningBolt } from "react-icons/rx";
import { SlSettings } from "react-icons/sl";
import { avatar } from '../assets/Image';

const DashboardContentWrapper = ({ children }) => {
  return (
    <section className="h-full col-span-6 overflow-x-hidden overflow-y-scroll scroll text-[#ffa500] font-[poppins]">
      <div className="sm:w-[97%] mx-auto w-full max-sm:px-3">
        <header className="h-[3rem] bg-[#222] my-4 w-full rounded-md sticky top-4 left-0 shadow-[#111] shadow-md">
          <div className="py-1 px-4 flex items-center space-x-5 text-[#ffa500] ml-auto w-[14rem]">
            <div className="relative px-[5px] py-[3px] rounded-md">
              <IoIosNotificationsOutline className="text-2xl font-bold" />
              <button className="h-1.5 w-1.5 bg-red-600 rounded-full absolute top-[1px] right-[1px] text-white text-[0.3rem]"></button>
            </div>
            <div className="relative px-1.5 py-[5px] rounded-md">
              <RxLightningBolt className="text-xl" />
              <button className="h-1.5 w-1.5 bg-red-600 rounded-full absolute top-0 right-0"></button>
            </div>
            <div className="relative px-1.5 py-[5px] rounded-md">
              <SlSettings className="text-xl" />
            </div>
            <div className="h-[2.5rem] w-[2.5rem] relative cursor-pointer">
              <img
                src={avatar}
                alt="image"
                className="rounded-full object-cover object-center"
              />
              <button className="w-[0.6rem] h-[0.6rem] bg-green-500 rounded-full absolute z-4 bottom-[7px] right-[0.7px] border-[0.5px] border-[#222]"></button>
            </div>
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}

export default DashboardContentWrapper