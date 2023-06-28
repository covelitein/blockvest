import React from 'react'
import {
  BiWallet,
  BiBitcoin,
  BiLineChartDown,
  BiLockAlt,
  BiSupport,
  BiShieldQuarter,
} from "react-icons/bi";
import { Heading, ServiceCard } from './subcomponents';

const Services = () => {
  return (
    <section className="lg:mt-8 mt-12 min-h-[30rem]">
      <div className="w-11/12 mx-auto flex items-center flex-col justify-center">
        <Heading
          plaintext={"OUR"}
          colored={"SERVICES"}
          desc={"we offer top notch services"}
        />
        <div className="text-[#ffa500] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
          <ServiceCard
            icon={<BiWallet className="text-6xl max-sm:text-4xl" />}
            type={"Investment Portfolio"}
            desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          />
          <ServiceCard
            icon={<BiLineChartDown className="text-6xl max-sm:text-4xl" />}
            type={"Market Analysis"}
            desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          />
          <ServiceCard
            icon={<BiBitcoin className="text-6xl max-sm:text-4xl" />}
            type={"Crypto Trading"}
            desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          />
          <ServiceCard
            icon={<BiLockAlt className="text-6xl max-sm:text-4xl" />}
            type={"User Security"}
            desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          />
          <ServiceCard
            icon={<BiShieldQuarter className="text-6xl max-sm:text-4xl" />}
            type={"Risk Management"}
            desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          />
          <ServiceCard
            icon={<BiSupport className="text-6xl max-sm:text-4xl" />}
            type={"Customer Support"}
            desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          />
        </div>
      </div>
    </section>
  );
}

export default Services