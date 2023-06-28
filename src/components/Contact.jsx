import React from 'react'
import {
  AiOutlineMail,
  AiOutlineHome,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { FaTwitter, FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from 'react-icons/fa';
import { Heading } from './subcomponents';

const Contact = () => {
  return (
    <section className="pt-20 pb-3 ">
      <div className="w-11/12 mx-auto">
        <Heading
          plaintext={"CONTACT"}
          colored={"US"}
          desc={"let us know if you need help"}
        />
        <div className="flex max-lg:flex-col font-[poppins]">
          <div className="w-3/5 min-h-[20rem] max-lg:w-full">
            <p className=" text-sm mb-6 text-[#e6e6fa] pr-3">
              Need to speak to us? Do you have any queries or suggestions?
              Please contact us about all enquiries including membership and
              volunteer work using the form below.
            </p>
            <form action="">
              <div className="flex items-center md:space-x-4 max-md:space-y-3 my-3 max-md:flex-col ">
                <input
                  type="text"
                  className="w-[45%] bg-[#333] border-[1px] border-[#444] py-2 px-3 text-[#e6e6fa]  text-sm focus:outline-none focus:ring-0 max-mf:w-full"
                  placeholder="FIRST NAME"
                />
                <input
                  type="text"
                  className="w-[45%] bg-[#333] border-[1px] border-[#444] py-2 px-3 text-[#e6e6fa]  text-sm focus:outline-none focus:ring-0 max-mf:w-full"
                  placeholder="LAST NAME"
                />
              </div>
              <div className="flex items-center md:space-x-4 max-md:space-y-3 mb-3 lg:my-12 max-md:flex-col">
                <input
                  type="text"
                  className="w-[45%] bg-[#333] border-[1px] border-[#444] py-2 px-3 text-[#e6e6fa]  text-sm focus:outline-none focus:ring-0 max-mf:w-full"
                  placeholder="EMAIL"
                />
                <input
                  type="text"
                  className="w-[45%] bg-[#333] border-[1px] border-[#444] py-2 px-3 text-[#e6e6fa]  text-sm focus:outline-none focus:ring-0 max-mf:w-full"
                  placeholder="SUBJECT"
                />
              </div>
              <div className="w-full">
                <textarea
                  className="w-[92%] h-[15rem] bg-[#333] max-mf:w-full p-3 text-sm"
                  placeholder="ENTER MESSAGE..."
                ></textarea>
              </div>
              <div className="mt-3">
                <button className="font-[poppins] py-2 px-5 bg-[#ffa500] text-[#e6e6fa] focus:outline-none focus:ring-0">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
          <div className="w-2/5 min-h-[20rem] max-lg:w-full max-lg:mt-24">
            <div className="w-11/12 max-lg:w-full mx-auto sm:p-4 py-8 px-2 bg-[#222] shadow-lg rounded-md mt-2 font-[poppins] text-white">
              <div className="flex space-x-4 mb-11 max-sm:flex-col max-sm:items-center">
                <AiOutlineHome className="text-3xl text-[#ffa500] " />
                <div className="w-3/4 max-sm:w-full">
                  <h3 className="uppercase mt-3 max-sm:text-center">Address</h3>
                  <p className="text-sm font-[100] max-sm:text-center text-[#777] mt-3">
                    123 Main St Apt 4B Anytown, NY 12345
                  </p>
                </div>
              </div>
              <div className="flex space-x-4 mb-11 font-[poppins] max-sm:flex-col max-sm:items-center">
                <FaPhoneAlt className="text-3xl text-[#ffa500]" />
                <div className="w-3/4 max-sm:w-full">
                  <h3 className="uppercase mt-3 max-sm:text-center">
                    Phone Numbers
                  </h3>
                  <p className="text-sm font-[100] text-[#777] mt-3 max-sm:text-center">
                    +44 20 7123 4567
                  </p>
                  <p className="text-sm font-[100] text-[#777] mt-3 max-sm:text-center">
                    +1 212-555-1234
                  </p>
                  <p className="text-sm font-[100] text-[#777] mt-3 max-sm:text-center">
                    +81 3-1234-5678
                  </p>
                </div>
              </div>
              <div className="flex space-x-4 mb-11 max-sm:flex-col max-sm:items-center">
                <AiOutlineMail className="text-3xl text-[#ffa500]" />
                <div className="w-3/4">
                  <h3 className="uppercase mt-2 max-sm:text-center">
                    Email Addresses
                  </h3>
                  <p className="text-sm font-[100] text-[#777] mt-3 max-sm:text-center">
                    samantha.smith280@gmail.com
                  </p>
                  <p className="text-sm font-[100] text-[#777] mt-3 max-sm:text-center">
                    john@doe129.net
                  </p>
                  <p className="text-sm font-[100] text-[#777] mt-3 max-sm:text-center">
                    alex.jones546@arcticmail.co
                  </p>
                </div>
              </div>
              <div className="flex space-x-4 mb-11 max-sm:flex-col max-sm:items-center">
                <AiOutlineShareAlt className="text-3xl text-[#ffa500]" />
                <div className="w-3/4">
                  <h3 className="uppercase mt-2  max-sm:text-center">
                    Social handles
                  </h3>
                  <div className="flex mt-3 items-center space-x-4 text-white text-2xl max-sm:justify-center">
                    <FaFacebook />
                    <FaTwitter />
                    <FaTelegram />
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
