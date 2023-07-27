import { useState, useEffect, useCallback } from "react";
import vid from "../assets/Image/vid.mp4";
import logo from "../assets/Image/logo1.svg";
import { Link } from "react-router-dom";
import { api } from "../assets/utils/functions";
import { validateForm, handleInputChange } from "../assets/Auth/Auth";
import useDebounce from "../assets/customHooks/useDebounce";
import { throttle, debounce } from "../assets/utils/functions";

const Register = () => {
  const [fullname, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // field validity state
  const [validationErrors, setValidationErrors] = useState({
    fullname: "",
    username: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [isFormValid, setFormValidity] = useState(false);

  useCallback(()=>{
    validateForm(setFormValidity)
  },[isFormValid])


  const handleUsernameChange = async (e)=> {
     try{
        if(username == '') return
        const response = await api.post('/api/usernameCheck', {
          username,
        })
        const { message, error } = response.data
        
        if(error) return console.log(error)

        console.log(message)

     } catch (err) {
       console.log(err)
     }
  }

  const handleEmailChange = async (e)=> {
      try {
        if (email == "") return;
        const response = await api.post("/api/emailCheck", {
          email,
        });
        const { message, error } = response.data;

        if (error) return console.log(error);

        console.log(message);
      } catch (err) {
        console.log(err);
      }
  }

  
  

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
      <section className="flex-1 flex justify-center flex-col items-center max-lg:mt-20">
        <form
          className="px-10 w-11/12 font-[poppins] max-md:px-3"
          method="post"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="mb-8 bellota text-xl text-[#e6e6fa] font-[bellota]">
            Hey <span>&#128075;</span> dear, get started
          </h3>

          {/* Registration inputs */}
          <div className="mb-4 w-full">
            <input
              type="text"
              className="w-full bg-[#333] border-[1px] border-[#444] py-2 px-3 text-[#e6e6fa]  text-sm focus:outline-none focus:ring-0 max-mf:w-full"
              placeholder="FULLNAME"
              name="fullname"
              value={fullname}
              onChange={(e) =>
                debounce(handleInputChange(e, setFullName), 2000)
              }
            />
          </div>

          <div className="mb-4 w-full">
            <input
              type="text"
              className="w-full bg-[#333] border-[1px] border-[#444] py-2 px-3 text-[#e6e6fa]  text-sm focus:outline-none focus:ring-0 max-mf:w-full"
              placeholder="USERNAME"
              value={username}
              onChange={(e) => debounce(handleInputChange(e, setUsername), 2000)}
            />
          </div>

          <div className="mb-4 w-full">
            <input
              type="email"
              className="w-full bg-[#333] border-[1px] border-[#444] py-2 px-3 text-[#e6e6fa]  text-sm focus:outline-none focus:ring-0 max-mf:w-full"
              placeholder="EMAIL"
              required
              value={email}
              onChange={(e) => debounce(handleInputChange(e, setEmail), 2000)}
            />
          </div>

          <div className="mb-4 w-full">
            <input
              type="text"
              className="w-full bg-[#333] border-[1px] border-[#444] py-2 px-3 text-[#e6e6fa]  text-sm focus:outline-none focus:ring-0 max-mf:w-full"
              placeholder="ADDRESS"
              value={address}
              onChange={(e) => debounce(handleInputChange(e, setAddress), 2000)}
            />
          </div>

          <div className="mb-4 w-full">
            <input
              type="number"
              className="w-full bg-[#333] border-[1px] border-[#444] py-2 px-3 text-[#e6e6fa]  text-sm focus:outline-none focus:ring-0 max-mf:w-full"
              placeholder="PHONE NO"
              value={phone}
              onChange={(e) => debounce(handleInputChange(e, setPhone), 2000)}
            />
          </div>

          <section className="flex items-center lg:space-x-3 mb-4 max-lg:flex-col max-lg:space-y-3">
            <div className="lg:w-[49%] w-full">
              <input
                type="password"
                className="w-full bg-[#333] border-[1px] border-[#444] py-2 px-3 text-[#e6e6fa]  text-sm focus:outline-none focus:ring-0 max-mf:w-full"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) =>
                  debounce(handleInputChange(e, setPassword), 2000)
                }
              />
            </div>
            <div className="lg:w-[49%] w-full">
              <input
                type="password"
                className="w-full bg-[#333] border-[1px] border-[#444] py-2 px-3 text-[#e6e6fa]  text-sm focus:outline-none focus:ring-0 max-mf:w-full"
                placeholder="CONFIRM PASSWORD"
                value={confirmPassword}
                onChange={(e) =>
                  debounce(handleInputChange(e, setConfirmPassword), 2000)
                }
              />
            </div>
          </section>

          <div className="mb-5">
            <button
              disabled={!isFormValid}
              className="uppercase text-[#e6e6fa] w-full bg-[#ffa500] text-sm py-2 hover:bg-[#CC8000] transition-all duration-200 cursor-[not-allowed]"
            >
              register
            </button>
          </div>
          <div className="text-[#e6e6fa] font-[poppins] text-sm flex items-center space-x-3 my-2">
            <span>Already have an account?</span>
            <Link to={"/login"} className="underline text-[#ffa500]">
              Sign in
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Register;