import React from 'react'
import vid from '../assets/Image/vid.mp4'
import logo from "../assets/Image/logo1.svg";

const Login = () => {
  return (
    <main className="flex">
      <section className="w-1/2 h-screen relative">
        <video
          src={vid}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
        ></video>
        <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.75)] flex justify-center items-center">
          <div className="flex items-center">
            <img src={logo} alt="" className="h-[9rem] w-[10rem]" />
            <h3 className="font-[marko] text-[#ffa500] mt-16 -ml-8 font-bold text-4xl">
              lockVest
            </h3>
          </div>
        </div>
      </section>
      <section className="flex-1 flex justify-center flex-col items-center">
        <form className="px-10 w-full">
          <div className='mb-5'>
            <input
              type="text"
              className="w-full bg-[#333] border-[1px] border-[#444] py-2 px-3 text-[#e6e6fa] font-[opensans] text-sm focus:outline-none focus:ring-0 max-mf:w-full"
              placeholder="EMAIL"
            />
          </div>
          <div className='mb-5'>
            <input
              type="password"
              className="w-full bg-[#333] border-[1px] border-[#444] py-2 px-3 text-[#e6e6fa] font-[opensans] text-sm focus:outline-none focus:ring-0 max-mf:w-full"
              placeholder="PASSWORD"
            />
          </div>
          <div className='mb-5'>
            <button className='uppercase text-[#e6e6fa] w-full bg-[#ffa500] text-sm py-2'>login</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login