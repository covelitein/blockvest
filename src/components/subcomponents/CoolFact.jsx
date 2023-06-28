import React from 'react'

const CoolFact = ({ icon, coolFactType, totalReviews }) => {
  return (
    <div className="flex flex-col justify-center items-center font-[bellota] font-semibold space-y-3">
      {icon}
      <h1 className="text-white text-3xl">{totalReviews}</h1>
      <h3 className="text-[#ffa500] text-lg text-center">{coolFactType}</h3>
    </div>
  );
}

export default CoolFact