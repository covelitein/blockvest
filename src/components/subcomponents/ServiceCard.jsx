import React from 'react'

const ServiceCard = ({ icon, type, desc }) => {
  return (
    <div className="min-h-[10rem] bg-[#111]">
      <div className=" px-5">
        {icon}
      </div>
      <div className="text-[#999] font-[poppins] max-sm:text-[0.8rem] p-1 text-[0.9rem] text-justify pr-2">
        <h1 className="text-white font-[bellota] max-sm:text-lg font-bold text-xl uppercase mb-5 mt-2">
          {type}
        </h1>
        {desc}
      </div>
    </div>
  );
}

export default ServiceCard
