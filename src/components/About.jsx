import {useState} from 'react'
import about from "../assets/Image/vest.svg";
import logo from "../assets/Image/logo1.svg";
import Heading from './Heading';


const About = () => {
  const [display, setDisplay] = useState('mission')

  return (
    <div className="min-h-[20rem] mt-[8rem] py-3 max-lg:mt-[26rem]">
      <Heading
        plaintext={"ABOUT"}
        colored={"US"}
        desc={"The totality of our company is healthy investment practice"}
      />
      <div className="flex w-11/12 mx-auto max-lg:flex-col">
        <div className="w-1/2 max-lg:w-full flex justify-center items-center rounded-md">
          <img src={about} alt="" className="w-[40rem]" />
        </div>
        <div className="w-1/2 text-[#999] max-lg:w-full">
          <p className="font-[poppins] lg:mt-8 text-justify max-sm:text-[0.9rem]">
            Blockvest Crypto Investments was created with a simple yet ambitious
            goal - to provide a reliable and accessible platform for individuals
            and businesses to invest in cryptocurrency. Our team of experienced
            professionals is dedicated to staying ahead of the curve,
            continuously improving our investment strategies and risk management
            systems to ensure our clients' assets are always protected. With a
            focus on transparency, compliance, and user-friendliness, we strive
            to make investing in crypto a seamless and rewarding experience for
            everyone.
          </p>
          <div className="flex items-center text-white my-5 sm:space-x-8 font-[bellota] max-sm:flex-col">
            <h3
              className={`cursor-pointer max-sm:w-full ${
                display == "mission" ? " bg-[#ffa500]" : ""
              } p-2`}
              onClick={() => setDisplay("mission")}
            >
              OUR MISSION
            </h3>

            <h3
              className={`cursor-pointer max-sm:w-full ${
                display == "vision" ? " bg-[#ffa500]" : ""
              } p-2`}
              onClick={() => setDisplay("vision")}
            >
              OUR VISION
            </h3>
            <h3
              className={`cursor-pointer max-sm:w-full ${
                display == "goal" ? " bg-[#ffa500]" : ""
              } p-2`}
              onClick={() => setDisplay("goal")}
            >
              OUR GOAL
            </h3>
          </div>

          <div className="relative max-sm:text-[0.9rem]">
            <div
              className={`font-[poppins] ${
                display == "mission"
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              } transition-all duration-300 absolute left-0 right-0 mx-auto text-justify`}
            >
              Blockvest is dedicated to providing innovative investment
              solutions and top-notch customer service to its clients in the
              digital asset industry. Our mission is to empower individuals and
              institutions with cutting-edge investment opportunities in the
              cryptocurrency market, while ensuring maximum security,
              transparency, and flexibility.
            </div>
            <div
              className={`font-[poppins] ${
                display == "vision"
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              } transition-all duration-300 absolute left-0 right-0 mx-auto text-justify`}
            >
              Our vision is to become a leading global provider of digital asset
              investment solutions, serving clients with the highest level of
              integrity and professionalism. We aim to revolutionize the
              traditional financial landscape by leveraging the power of
              blockchain technology, and contributing to the mainstream adoption
              of cryptocurrencies.
            </div>
            <div
              className={`font-[poppins] ${
                display == "goal"
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              } transition-all duration-300 absolute left-0 right-0 mx-auto text-justify`}
            >
              We aim to offer a diverse range of investment products,
              continuously improve our investment strategies and risk management
              systems, provide a secure platform for clients, maintain
              transparency and compliance, and foster a culture of innovation,
              collaboration, and learning for our team members.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About

// import {
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
//   Avatar,
//   Typography,
// } from "@material-tailwind/react";
// import {
//   Cog6ToothIcon,
//   PowerIcon,
//   InboxArrowDownIcon,
//   UserCircleIcon,
//   LifebuoyIcon,
// } from "@heroicons/react/24/outline";
 
// export default function Example() {
//   return (
//     <Menu>
//       <MenuHandler>
//         <Avatar
//           variant="circular"
//           alt="candice wu"
//           className="cursor-pointer"
//           src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
//         />
//       </MenuHandler>
//       <MenuList>
//         <MenuItem className="flex items-center gap-2">
//           <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
//           <Typography variant="small" className="font-normal">
//             My Profile
//           </Typography>
//         </MenuItem>
//         <MenuItem className="flex items-center gap-2">
//           <Cog6ToothIcon strokeWidth={2} className="h-4 w-4" />
//           <Typography variant="small" className="font-normal">
//             Edit Profile
//           </Typography>
//         </MenuItem>
//         <MenuItem className="flex items-center gap-2">
//           <InboxArrowDownIcon strokeWidth={2} className="h-4 w-4" />
//           <Typography variant="small" className="font-normal">
//             Inbox
//           </Typography>
//         </MenuItem>
//         <MenuItem className="flex items-center gap-2">
//           <LifebuoyIcon strokeWidth={2} className="h-4 w-4" />
//           <Typography variant="small" className="font-normal">
//             Help
//           </Typography>
//         </MenuItem>
//         <hr className="my-2 border-blue-gray-50" />
//         <MenuItem className="flex items-center gap-2 ">
//           <PowerIcon strokeWidth={2} className="h-4 w-4" />
//           <Typography variant="small" className="font-normal">
//             Sign Out
//           </Typography>
//         </MenuItem>
//       </MenuList>
//     </Menu>
//   );
// }