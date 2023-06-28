import React from 'react'
import {
  AiOutlineLock,
  AiOutlineTeam,
  AiOutlineLineChart,
} from "react-icons/ai";
import { FeatureCard } from './subcomponents';

const Features = () => {
  return (
    <div className="w-full py-2 relative">
      <div className=" grid lg:grid-cols-3 grid-cols-1 gap-4 w-11/12 mx-auto absolute -translate-y-9 z-[400] top-0 left-0 right-0 mx-auto ">
        <FeatureCard
          icon={
            <AiOutlineLock className="text-7xl max-sm:text-5xl text-[#ffa500] mx-auto" />
          }
          text={"Reliable and Secure Investments"}
        />

        <FeatureCard
          icon={
            <AiOutlineTeam className="text-7xl max-sm:text-5xl text-[#ffa500] mx-auto" />
          }
          text={"Expert Guidance and Support"}
        />

        <FeatureCard
          icon={
            <AiOutlineLineChart className="text-7xl max-sm:text-5xl text-[#ffa500] mx-auto" />
          }
          text={"Transparent and Accessible Reporting"}
        />
      </div>
    </div>
  );
}

export default Features;