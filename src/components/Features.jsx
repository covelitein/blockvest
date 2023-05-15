import React from 'react'
import {
  AiOutlineLock,
  AiOutlineTeam,
  AiOutlineLineChart,
} from "react-icons/ai";

const Features = () => {
  return (
    <div className="w-full py-2 relative">
      <div className="w-11/12 mx-auto flex justify-center max-lg:space-y-4 lg:space-x-3 absolute -translate-y-9 z-[400] top-0 left-0 right-0 mx-auto max-lg:flex-col">
        <section className="w-1/4 p-2 max-lg:w-full max-lg:flex-col flex items-center lg:space-x-2 border-[1px] border-[#ffa500] bg-[#111]">
          <AiOutlineLock className="text-7xl max-sm:text-5xl text-[#ffa500] mx-auto" />
          <h3 className="font-[poppins] text-[#ffa500] max-sm:text-center max-sm:text-[0.83rem]">
            Reliable and Secure Investments
          </h3>
        </section>
        <section className="w-1/4 p-2 max-lg:w-full max-lg:flex-col flex items-center lg:space-x-2 border-[1px] border-[#ffa500] bg-[#111]">
          <AiOutlineTeam className="text-7xl max-sm:text-5xl text-[#ffa500] mx-auto" />
          <h3 className="font-[poppins] text-[#ffa500] max-sm:text-center max-sm:text-[0.83rem]">
            Expert Guidance and Support
          </h3>
        </section>
        <section className="w-1/4 p-2 max-lg:w-full max-lg:flex-col flex items-center lg:space-x-2 border-[1px] border-[#ffa500]  bg-[#111]">
          <AiOutlineLineChart className="text-7xl max-sm:text-5xl text-[#ffa500] mx-auto" />
          <h3 className="font-[poppins] text-[#ffa500] max-sm:text-center max-sm:text-[0.83rem]">
            Transparent and Accessible Reporting
          </h3>
        </section>
      </div>
    </div>
  );
}

export default Features;