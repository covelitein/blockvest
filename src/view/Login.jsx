import { useState, useEffect } from 'react'
import vid from '../assets/Image/vid.mp4'
import logo from "../assets/Image/logo1.svg";
import { Link } from 'react-router-dom';
import { api } from "../assets/utils/functions";

const Login = () => {

  return (
    <main className="flex">
      <section className="w-1/2 h-screen relative max-lg:hidden">
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
      <section className="flex-1 flex justify-center flex-col items-center max-lg:mt-32">
        <form className="px-10 w-full font-[poppins]">
          <h3 class="mb-8 bellota text-xl text-[#e6e6fa] ">
            Welcome <span>&#128075;</span> dear, sign in please
          </h3>
          <div className="mb-8">
            <input
              type="text"
              className="w-full bg-[#333] border-[1px] border-[#444] py-2 px-3 text-[#e6e6fa]  text-sm focus:outline-none focus:ring-0 max-mf:w-full"
              placeholder="EMAIL"
            />
          </div>
          <div className="mb-8">
            <input
              type="password"
              className="w-full bg-[#333] border-[1px] border-[#444] py-2 px-3 text-[#e6e6fa]  text-sm focus:outline-none focus:ring-0 max-mf:w-full"
              placeholder="PASSWORD"
            />
          </div>
          <div className="mb-5">
            <button
              disabled={true}
              className="uppercase text-[#e6e6fa] w-full bg-[#ffa500] text-sm py-2 hover:bg-[#CC8000] transition-all duration-200 cursor-[not-allowed]"
            >
              login
            </button>
          </div>
          <div className="text-[#e6e6fa] font-[poppins] text-sm flex items-center space-x-3">
            <span>Don't have an account?</span>
            <Link to={"/register"} className="underline text-[#ffa500]">
              Sign up
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login