import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";
import { useDebounce, useLoadListener, useScrollListener } from '../assets/customHooks'
import { logo } from '../assets/Image'



const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [scrolled]);

  const handleLoad = useCallback(() => {
    if (window.pageYOffset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [scrolled]);

  const updateOnScroll = useDebounce(handleScroll, 100);
  const updateOnLoad = handleLoad;

  useLoadListener(updateOnScroll);
  useScrollListener(updateOnLoad);

  const handleClick = useCallback(() => {
    setOpen(!isOpen);
  },[isOpen])

  const OpenHamburger = useDebounce(handleClick, 100)

  return (
    <header
      className={`w-full h-[5rem] flex justify-center transition-all duration-75 items-center fixed top-0 left-0 z-[500] text-white ${
        scrolled ? "bg-[rgba(0,0,0,0.7)] glassy" : "bg-transparent"
      }`}
    >
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <Link to={"/"} className="flex items-center -space-x-1.5">
          <img src={logo} alt="" className="h-[2rem] w-[2rem]" />
          <h3 className="text-[#FFA500] mt-3 font-[marko] text-lg">lockvest</h3>
        </Link>

        <ul className="hidden items-center space-x-5 ml-2 text-white font-[bellota] text-base lg:flex uppercase">
          <Link
            to={"/"}
            className="hover:text-[#FFA500] duration-200 cursor-pointer"
          >
            Home
          </Link>
          <li className="hover:text-[#FFA500] duration-200 cursor-pointer">
            About Us
          </li>
          <li className="hover:text-[#FFA500] duration-200 cursor-pointer">
            Services
          </li>
          <li className="hover:text-[#FFA500] duration-200 cursor-pointer">
            Plans
          </li>
          <li className="hover:text-[#FFA500] duration-200 cursor-pointer">
            Contact Us
          </li>
        </ul>
        <div className="lg:flex items-center space-x-2 hidden">
          <Link
            to={"/login"}
            className="text-[#FFA500] font-[bellota] border-[2px] border-[#FFA500] px-2 py-1  text-md hover:bg-[#CC8000] hover:text-white hover:border-[#CC8000] flex  items-center space-x-4 uppercase"
          >
            <AiOutlineUser />
            Login
          </Link>
          <Link
            to={"/register"}
            className="text-white font-[bellota] border-[2px] border-[#FFA500] bg-[#FFA500] px-2 py-1 bg-opacity text-md duration-200 hover:bg-[#CC8000] hover:border-[#CC8000] flex items-center space-x-4 uppercase"
          >
            <AiOutlineUserAdd className="text-xl text-white !important" />
            Register
          </Link>
        </div>
        <div className="h-8 w-8 max-lg:block hidden">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 32 42"
            xmlns="http://www.w3.org/2000/svg"
            className={`${!isOpen ? "" : "active"} svg`}
            onClick={OpenHamburger}
          >
            <g transform="matrix(1,0,0,1,-438.286,-264.004)">
              <g id="arrow_left1">
                <g transform="matrix(-1,-1.22465e-16,1.22465e-16,-1,858.787,564.935)">
                  <path
                    id="top"
                    d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"
                  />
                </g>
                <g transform="matrix(-1,-2.44929e-16,-2.44929e-16,1,858.786,5)">
                  <path
                    id="bottom"
                    d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"
                  />
                </g>
                <g transform="matrix(-1,-1.22465e-16,1.22465e-16,-1,858.787,569.935)">
                  <path id="middle" d="M390,284.967L420,284.967" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header
