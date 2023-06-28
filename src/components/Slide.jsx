import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const theme = createTheme({
  breakpoints: {
    values: {
      mf: 900,
    },
  },
});

const Slide = ({ images }) => {
  const swiperEl = useRef(null);

  function toggleCaptionAnimation(swiper) {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const slides = swiper.slides;

    // Remove 'animated' class from all slides and add 'not-animated' class
    slides.forEach((slide) => {
      slide.querySelectorAll("[data-caption-animate]").forEach((el) => {
        el.classList.remove("animated");
        el.classList.remove(el.dataset.captionAnimate);
        el.classList.add("not-animated");
      });
    });

    // Add 'animated' class to the active slide
    activeSlide.querySelectorAll("[data-caption-animate]").forEach((el) => {
      const delay = el.getAttribute("data-caption-delay");
      setTimeout(() => {
        el.classList.remove("not-animated");
        el.classList.add("animated");
        el.classList.add(el.dataset.captionAnimate);
      }, delay);
    });
  }

  return (
    <div className="h-full text-white w-full">
      <Swiper
        ref={swiperEl}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 9000,
          disableOnInteraction: true,
        }}
        speed={700}
        onTransitionEnd={(swiper) => {
          toggleCaptionAnimation(swiper);
        }}
        onInit={(swiper) => {
          toggleCaptionAnimation(swiper);
        }}
        className="w-full relative h-full"
        style={{
          ".swiperButtonPrev, .swiperButtonNext": {
            width: "24px !important",
            height: "24px",
            fontSize: "12px !important",
          },
        }}
      >
        <SwiperSlide className="relative">
          <img
            src={images[0]}
            alt=""
            className="w-full h-full object-cover relative"
          />
          <div className=" bg-[rgba(0,0,0,0.9)] h-full flex justify-center items-center flex-col w-full absolute top-0 left-0 space-y-5 ">
            <h1
              className="text-6xl max-mf:text-3xl font-bold font-[poppins] max-sm:text-2xl text-[#FFA500] uppercase text-center"
              data-caption-animate="fadeInLeft"
              data-caption-delay="0"
            >
              Invest in the Future
            </h1>
            <p
              className="text-base font-[poppins] max-sm:text-[0.8rem] max-sm:px-9 max-mf:text-sm text-center w-[30rem] max-sm:w-[90%]"
              data-caption-animate="fadeInRight"
              data-caption-delay="200"
            >
              Get ahead of the curve and invest in the future of blockchain with
              Blockvest
            </p>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                sx={{
                  border: "2px solid #FFA500",
                  color: "#FFA500",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "#FFA500",
                    color: "#fff",
                  },
                  margin: "1rem 0",
                  fontFamily: "poppins",
                  fontSize: "1.1rem",
                  [theme.breakpoints.down("mf")]: {
                    fontSize: "13px",
                    padding: "8px 12px",
                  },
                }}
                data-caption-animate="fadeInUp"
                data-caption-delay="300"
              >
                Get started
              </Button>
            </ThemeProvider>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={images[1]}
            alt=""
            className="w-full h-full object-cover relative"
          />
          <div className=" bg-[rgba(0,0,0,0.9)] h-full flex justify-center items-center flex-col w-full absolute top-0 left-0 space-y-5 ">
            <h1
              className="text-6xl font-bold font-[poppins] max-sm:text-xl max-mf:text-3xl text-[#FFA500] uppercase text-center"
              data-caption-animate="fadeInLeft"
              data-caption-delay="0"
            >
              Secure Your Investments
            </h1>
            <p
              className="text-base font-[poppins] max-sm:text-[0.75rem] max-sm:px-9 max-sm:w-[90%] text-center w-[30rem] "
              data-caption-animate="fadeInRight"
              data-caption-delay="200"
            >
              Protect your investments and trade with confidence on our secure
              platform
            </p>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                sx={{
                  border: "2px solid #FFA500",
                  color: "#FFA500",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "#FFA500",
                    color: "#fff",
                  },
                  margin: "1rem 0",
                  fontFamily: "poppins",
                  fontSize: "1.1rem",
                  [theme.breakpoints.down("mf")]: {
                    fontSize: "13px",
                    padding: "8px 12px",
                  },
                }}
                data-caption-animate="fadeInUp"
                data-caption-delay="300"
              >
                Get started
              </Button>
            </ThemeProvider>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={images[2]}
            alt=""
            className="w-full h-full object-cover relative"
          />
          <div className=" bg-[rgba(0,0,0,0.9)] h-full flex justify-center items-center flex-col w-full absolute top-0 left-0 space-y-5 ">
            <h1
              className="text-6xl font-bold max-sm:text-xl max-mf:text-3xl font-[poppins] text-[#FFA500] uppercase text-center"
              data-caption-animate="fadeInLeft"
              data-caption-delay="0"
            >
              Join the Digital Revolution
            </h1>
            <p
              className="text-base font-[poppins] text-center w-[30rem] max-sm:text-[0.8rem] max-sm:px-11 max-mf:text-sm max-sm:w-[90%]"
              data-caption-animate="fadeInRight"
              data-caption-delay="200"
            >
              Join the digital revolution with Blockvest
            </p>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                sx={{
                  border: "2px solid #FFA500",
                  color: "#FFA500",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "#FFA500",
                    color: "#fff",
                  },
                  margin: "1rem 0",
                  fontFamily: "poppins",
                  fontSize: "1.1rem",
                  [theme.breakpoints.down("mf")]: {
                    fontSize: "13px",
                    padding: "8px 12px",
                  },
                }}
                data-caption-animate="fadeInUp"
                data-caption-delay="300"
              >
                Get started
              </Button>
            </ThemeProvider>
          </div>
        </SwiperSlide>
        <div className="swiper-button-next">  </div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default Slide;
