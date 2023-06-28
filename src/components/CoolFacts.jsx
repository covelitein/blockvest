import React from 'react'
import {
  AiOutlineDollarCircle,
  AiOutlineUser,
  AiOutlineBarChart,
} from "react-icons/ai";
import { coolfacts } from '../assets/Image';
import { CoolFact } from './subcomponents';

const CoolFacts = () => {
  return (
    <section
      className="min-h-[17rem] flex justify-center items-center md:space-x-24 max-md:space-y-5 max-md:flex-col"
      style={{
        background: `linear-gradient(to left, rgba(0,0,0,0.7), rgba(0,0,0,0.8)),url(${coolfacts}) no-repeat center/cover fixed`,
      }}
    >
      <CoolFact
        icon={<AiOutlineUser className="text-6xl text-[#ffa500]" />}
        coolFactType={"Registered Users"}
        totalReviews={"2.5k"}
      />
      <CoolFact
        icon={<AiOutlineDollarCircle className="text-6xl text-[#ffa500]" />}
        coolFactType={"Total Assets managed"}
        totalReviews={"+4k"}
      />
      <CoolFact
        icon={<AiOutlineBarChart className="text-6xl text-[#ffa500]" />}
        coolFactType={"Successful investments"}
        totalReviews={"3.3k"}
      />
    </section>
  );
}

export default CoolFacts
