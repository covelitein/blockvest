import React from 'react'
import { useState,useRef } from "react"
import { FaChevronDown } from "react-icons/fa"

const Accordion = ({question, children, className}) => {
    const [isOpen, setOpen] = useState(false)
    const el = useRef()

    const handleClick = () => {
      setOpen(!isOpen)
    };
  return (
    <li className="list-none">
      <div
        className="flex justify-between py-3 bg-[#222] px-3 items-center  hover:bg-[rgba(0,0,0,0.5)] focus:bg-slate-200 duration-300 transition-all cursor-pointer rounded-md my-1"
        onClick={handleClick}
      >
        <h2
          className={`font-[poppins] text-[#ffa500] text-[0.95rem] max-sd:text-[0.9rem] ${className}`}
        >
          {question}
        </h2>
        <FaChevronDown
          className={`text-lg text-[#ffa500] font-[200] max-sd:text-[0.8rem] cursor-pointer duration-400 transition-all ${
            !isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>
      <ul>
        <li
          ref={el}
          className={`duration-400 transition-all overflow-y-hidden text-[0.9rem]  text-justify shadow-inner font-[poppins] list-none`}
          style={
            isOpen
              ? { maxHeight: el.current.scrollHeight }
              : { maxHeight: "0px" }
          }
        >
          <div className="font-[poppins] py-5 text-white text-sm bg-[#222] shadow-lg px-5">
            {children}
          </div>
        </li>
      </ul>
    </li>
  );
}

export default Accordion
