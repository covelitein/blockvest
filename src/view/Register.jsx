import { useState, useEffect } from "react";
import vid from "../assets/Image/vid.mp4";
import logo from "../assets/Image/logo1.svg";
import { Link } from "react-router-dom";
import { api } from "../assets/utils/functions";

const Register = () => {
  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
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

  useEffect(() => {
    validateField("fullname", fullname);
  }, [fullname]);

  useEffect(() => {
    validateField("username", username);
  }, [username]);

  useEffect(() => {
    validateField("email", email);
  }, [email]);

  useEffect(() => {
    validateField("address", address);
  }, [address]);

  useEffect(() => {
    validateField("phone", phone);
  }, [phone]);

  useEffect(() => {
    validateField("password", password);
  }, [password]);

  useEffect(() => {
    validateField("confirmPassword", confirmPassword);
  }, [confirmPassword]);

  useEffect(() => {
    validateForm();
  }, [fullname, username, email, address, phone, password, confirmPassword]);

  const [isFormValid, setFormValidity] = useState(false);

  const validateForm = () => {
    const isValid = Object.values(validationErrors).every(
      (error) => error === ""
    );

    setFormValidity(isValid);
  };

  const validateField = (fieldName, value) => {
    let errorMessage = "";

    switch (fieldName) {
      case "fullname":
        errorMessage = validateName(value);
        break;

      case "username":
        errorMessage = validateUsername(value);
        break;

      case "email":
        errorMessage = validateEmail(value);
        break;

      case "address":
        errorMessage = value === "" ? "Address is required" : "";
        break;

      case "phone":
        errorMessage = value === "" ? "Phone is required" : "";
        break;

      case "password":
        errorMessage = value === "" ? "Password is required" : "";
        break;

      case "confirmPassword":
        errorMessage =
          value === ""
            ? "Confirm Password is required"
            : password !== confirmPassword
            ? "Passwords do not match"
            : "";
        break;

      default:
        break;
    }

    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: errorMessage,
    }));
  };

  const validateName = (value) => {
    const words = value.trim().split(/\s+/);
    const fullname = value.trim();

    const returnValue =
      fullname === ""
        ? "please enter fullname"
        : fullname === "admin"
        ? "Forbidden user name"
        : fullname.length < 3
        ? "username too short"
        : words.length < 2
        ? "Enter both firstname and lastname"
        : words[0].length < 3 || words[1].length < 3
        ? "firstname or lastname too short"
        : "";

    return returnValue;
  };

  const validateUsername = (value) => {
    const username = value.trim();

    const returnValue =
      username === ""
        ? "please enter username"
        : username.length < 3
        ? "username too short"
        : "";
  };

  const validateEmail = (value) => {
    const email = value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const returnValue =
      email === ""
        ? "please enter email address"
        : !emailRegex(email)
        ? "please enter a valid email address"
        : "";

    return returnValue;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "fullname":
        setFullName(value);
        break;
      case "username":
        setUserName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  // const handleSubmit = async (e)=> {
  //     e.preventDefault()
  //     if(!fullname || !username || !email || !address || !phone || !password) return
  //     const formData = {
  //       fullname,
  //       username,
  //       email,
  //       address,
  //       phone,
  //       password
  //     }
  //     await api.post('/register',formData)
  // }

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
        <form
          className="px-10 w-11/12"
          method="post"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 class="mb-8 bellota text-xl text-[#e6e6fa] font-[bellota]">
            Hey <span>&#128075;</span> dear, get started
          </h3>

          {/* Registration inputs */}
          <div className="mb-4 w-full">
            <input
              type="text"
              className="w-full bg-[#333] border-[1px] border-[#444] py-2 px-3 text-[#e6e6fa] font-[opensans] text-sm focus:outline-none focus:ring-0 max-mf:w-full"
              placeholder="FULLNAME"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="mb-4 w-full">
            <input
              type="text"
              className="w-full bg-[#333] border-[1px] border-[#444] py-2 px-3 text-[#e6e6fa] font-[opensans] text-sm focus:outline-none focus:ring-0 max-mf:w-full"
              placeholder="USERNAME"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="mb-4 w-full">
            <input
              type="email"
              className="w-full bg-[#333] border-[1px] border-[#444] py-2 px-3 text-[#e6e6fa] font-[opensans] text-sm focus:outline-none focus:ring-0 max-mf:w-full"
              placeholder="EMAIL"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4 w-full">
            <input
              type="text"
              className="w-full bg-[#333] border-[1px] border-[#444] py-2 px-3 text-[#e6e6fa] font-[opensans] text-sm focus:outline-none focus:ring-0 max-mf:w-full"
              placeholder="ADDRESS"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="mb-4 w-full">
            <input
              type="number"
              className="w-full bg-[#333] border-[1px] border-[#444] py-2 px-3 text-[#e6e6fa] font-[opensans] text-sm focus:outline-none focus:ring-0 max-mf:w-full"
              placeholder="PHONE NO"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <section className="flex items-center space-x-3 mb-4">
            <div className="w-[49%]">
              <input
                type="password"
                className="w-full bg-[#333] border-[1px] border-[#444] py-2 px-3 text-[#e6e6fa] font-[opensans] text-sm focus:outline-none focus:ring-0 max-mf:w-full"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="w-[49%]">
              <input
                type="text"
                className="w-full bg-[#333] border-[1px] border-[#444] py-2 px-3 text-[#e6e6fa] font-[opensans] text-sm focus:outline-none focus:ring-0 max-mf:w-full"
                placeholder="CONFIRM PASSWORD"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
          <div className="text-[#e6e6fa] font-[poppins] text-sm flex items-center space-x-3">
            <span>Don't have an account?</span>
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
// https://www.metaintro.com/?ref=s4WW6x
