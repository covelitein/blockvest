import React from 'react'

const Heading = ({ plaintext,  colored, desc }) => {
  return (
    <>
      <h3 className="font-[bellota] text-[#fff] text-center text-5xl max-sm:text-3xl">
        {plaintext} <span className="text-[#ffa500]">{colored}</span>
      </h3>
      <div className="flex justify-center items-center my-5">
        <div className="w-20 h-[1px] bg-[#ffa500] mx-3 max-sm:mx-1"></div>
        <div className="flex justify-center items-center font-[bellota] text-[#fff] max-sm:text-[0.8rem] text-center">
          {desc}
        </div>
        <div className="w-20 h-[1px] bg-[#fff] mx-3 max-sm:mx-1"></div>
      </div>
    </>
  );
}

export default Heading
