import React from "react";
import ExpertOne from "../assets/Image/person_1.jpg";
import ExpertTwo from "../assets/Image/person_2.jpg";
import ExpertThree from "../assets/Image/person_3.jpg";
import { FaTwitter, FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa";
import Heading from "./Heading";

const OurExperts = () => {
  return (
    <section className="mt-[9rem]">
      <div className="w-11/12 mx-auto">
        <Heading
          plaintext={"OUR"}
          colored={"EXPERTS"}
          desc={"we are a combination of trained investment professionals"}
        />
        <section className="flex items-center justify-center mt-10 mf:space-x-4 max-mf:flex-col max-mf:space-y-6">
          <div className="w-1/4 min-h-[15rem] max-mf:w-full border-[1px] border-[#ffa500] relative max-mf:w-full">
            <div className="w-full h-[20rem] max-mf:h-[30rem] relative par">
              <img
                src={ExpertOne}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="flex justify-center items-center space-x-3 h-full w-full absolute top-0 left-0 bg-[rgba(0,0,0,0.6)] socials text-3xl text-[#ffa500]">
                <FaTwitter />
                <FaTelegram />
                <FaInstagram />
                <FaFacebook />
              </div>
            </div>
            <div className="py-1 min-h-[3rem] text-white font-[bellota] w-full bg-[rgba(0,0,0,0.7)] ">
              <h3 className="px-4 uppercase">Jason McScott</h3>
              <h4 className="font-[poppins] px-4 text-[#ffa500]">
                C.E.O / founder
              </h4>
            </div>
          </div>
          <div className="w-1/4 min-h-[15rem] border-[1px] border-[#ffa500] relative max-mf:w-full">
            <div className="w-full h-[20rem] max-mf:h-[30rem] relative par">
              <img
                src={ExpertTwo}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="flex justify-center items-center space-x-3 h-full w-full absolute top-0 left-0 bg-[rgba(0,0,0,0.6)] socials text-3xl text-[#ffa500]">
                <FaTwitter />
                <FaTelegram />
                <FaInstagram />
                <FaFacebook />
              </div>
            </div>
            <div className="py-1 min-h-[3rem] text-white font-[bellota] w-full bg-[rgba(0,0,0,0.7)] ">
              <h3 className="px-4 uppercase">Darren Will</h3>
              <h4 className="font-[poppins] px-4 text-[#ffa500]">
                Trades consultant
              </h4>
            </div>
          </div>
          <div className="w-1/4 min-h-[15rem] border-[1px] border-[#ffa500] relative max-mf:w-full">
            <div className="w-full h-[20rem] max-mf:h-[30rem] relative par">
              <img
                src={ExpertThree}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="flex justify-center items-center space-x-3 h-full w-full absolute top-0 left-0 bg-[rgba(0,0,0,0.6)] socials text-3xl text-[#ffa500]">
                <FaTwitter />
                <FaTelegram />
                <FaInstagram />
                <FaFacebook />
              </div>
            </div>
            <div className="py-1 min-h-[3rem] text-white font-[bellota] w-full bg-[rgba(0,0,0,0.7)] ">
              <h3 className="px-4 uppercase">Lyon James</h3>
              <h4 className="font-[poppins] px-4 text-[#ffa500]">
                Trades expert
              </h4>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default OurExperts;
