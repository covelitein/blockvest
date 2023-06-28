import React from 'react'
import { DashboardContentWrapper, DashboardNavWrapper } from "../components";

const Dashboard = () => {
  return (
    <section className="w-full h-screen">
      <div className="grid mf:grid-cols-7 grid-cols-1  h-full w-full">
        <DashboardNavWrapper>
          <div className="absolute bottom-3 left-2 w-11/12">
            <button className="bg-[#CC8000] text-center text-sm rounded-full px-2 py-1 text-[#fff] w-full font-[bellota]">
              Connect wallet
            </button>
          </div>
        </DashboardNavWrapper>
        <DashboardContentWrapper>
          <div className="mt-5 px-4 min-h-[9rem]">
            <h3 className="text-lg">
              Hello, Covelitein. Your investment journey continues.
            </h3>
          </div>

          <section className="my-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
            <div className="h-[9rem] bg-[#222]"></div>
            <div className="h-[9rem] bg-[#222]"></div>
            <div className="h-[9rem] bg-[#222]"></div>
            <div className="h-[9rem] bg-[#222]"></div>
          </section>

          <section className="my-6 grid lg:grid-cols-2 grid-cols-1 gap-2">
            <div className="h-[20rem] bg-[#222]"></div>
            <div className="h-[20rem] bg-[#222]"></div>
          </section>

          <section className="my-11 w-full h-[13rem] bg-[#222]"></section>

          <footer className=" py-3">
            <p className="text-sm">
              &copy; 2023 All rights reserved, blockvest
            </p>
          </footer>
        </DashboardContentWrapper>
      </div>
    </section>
  );
}

export default Dashboard
