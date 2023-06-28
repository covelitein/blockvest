import React from 'react'

const FeatureCard = ({ icon, text }) => {
  return (
    <section className="p-2 max-lg:flex-col flex items-center lg:space-x-2 border-[1px] border-[#ffa500] bg-[#111]">
      {icon}
      <h3 className="font-[poppins] text-[#ffa500] max-sm:text-center max-sm:text-[0.83rem]">
        {text}
      </h3>
    </section>
  );
}

export default FeatureCard