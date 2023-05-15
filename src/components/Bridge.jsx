import React from 'react'
import bridge from '../assets/Image/bridge.jpg'

const Bridge = () => {
  return (
    <section
      className="h-[25rem] mt-11 max-lg:mt-[20rem] w-full flex justify-center items-center flex-col text-white space-y-5"
      style={{
        background: `linear-gradient(to left, rgba(0,0,0,0.7), rgba(0,0,0,0.8)),url(${bridge}) no-repeat center/cover fixed`,
      }}
    >
      <h1 className="text-3xl font-[poppins] text-center max-sm:text-xl">
        Invest in <span className="text-[#ffa500]">Crypto with Confidence</span>
      </h1>
      <p className="w-2/3 text-center text-sm font-[poppins] max-sm:w-full max-sm:px-3 max-sm:text-[0.85rem]">
        Join Blockvest to invest in cryptocurrencies and blockchain-based
        projects with confidence. Our secure platform and advanced technology
        make it easy to take your investments to the next level.
      </p>
      <button className="font-[poppins] bg-[#ffa500] py-2 px-6 rounded-lg">
        Get started
      </button>
    </section>
  );
}

export default Bridge
