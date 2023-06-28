import React from 'react'
import { Link } from 'react-router-dom';
import { logo } from '../assets/Image';

const DashboardNavWrapper = ({ children }) => {
  return (
    <nav className="h-full overflow-x-hidden overflow-y-scroll scroll p-3 max-mf:hidden relative">
      <div className="w-11/12 mx-auto">
        <Link to={"/"} className="flex items-center lg:-space-x-1.5 -space-x-1">
          <img src={logo} alt="" className="lg:h-[2rem] lg:w-[2rem] h-[1.5rem] w-[1.5rem]" />
          <h3 className="text-[#FFA500] mt-3 font-[marko] lg:text-lg text-base">lockvest</h3>
        </Link>
        {children}
      </div>
    </nav>
  );
}

export default DashboardNavWrapper