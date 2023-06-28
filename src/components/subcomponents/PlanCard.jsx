import React from 'react'

const PlanCard = ({ planGrade, percentage, timeframe, minimumPrice, maximumPrice, CIRStatus }) => {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] text-white rounded-md py-3">
      <h3 className="mt-2 text-center font-[bellota] text-lg p-3 text-[#ffa500] uppercase">
        {planGrade}
      </h3>
      <h2 className="text-5xl text-center my-1 font-[bellota]">{percentage}</h2>
      <div className="mt-9 text-sm">
        <h3 className="font-[bellota] text-center text-gray-500">
          Duration : <span>{timeframe}</span>
        </h3>
        <div className="border-t-[1px] border-b-[1px] border-[#222] py-3 mt-4 font-[poppins] text-center text-sm">
          <span className="italic">Minimum</span> {minimumPrice}
        </div>
        <div className=" border-b-[1px] border-[#222] py-3 font-[poppins] text-center text-sm">
          <span className="italic">Maximum</span> {maximumPrice}
        </div>
        <div className=" border-b-[1px] border-[#222] py-3 font-[poppins] text-center text-sm">
          <span className="italic">Capital Invested Returns</span> &nbsp;{" "}
          {CIRStatus}
        </div>
        <div className="text-center mt-9 font-[bellota] text-sm">
          <button className="py-2 px-12 bg-[#ffa500] rounded-[3rem]">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlanCard
