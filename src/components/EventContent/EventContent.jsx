import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Banner/banner.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowBigDown,
  ArrowBigDownDash,
  ArrowBigRight,
  Search,
  TicketPercent,
} from "lucide-react";

import SearchIcon from "@mui/icons-material/Search";

import EventVideo from "../../assets/event.mp4";
import EventSearch from "../EventSearch";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const EventContent = () => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        <SwiperSlide className="py-3 px-2 rounded-lg">
          <EventsBanner />
        </SwiperSlide>
      </Swiper>

      <div
            className="flex justify-center mb-16 mt-16 px-2 evnts__buttons__sch_org"
            id="event__search__organize"
          >
            <EventSearch />
          </div>


      <section className="flex my-16 md:px-2">
        <div className="flex flex-col items-center w-full py-5 relative justify-center">
          <div className="absolute w-full  top-0  bottom-0 -z-10">
            <img
              src="event-hero.jpeg"
              className="object-cover w-full h-full blur-[3px]"
            />
          </div>
          <Stack className="flex justify-center  w-full h-full">
            <Typography
              variant="h1"
              sx={{
                color: "#ffffff",
                textAlign: "center",
                fontWeight: "500",
                letterSpacing: "5px",
              }}
              className="uppercase  "
            >
              Eve<span className="">nts</span>
            </Typography>
            <Stack className="flex justify-center">
            <Typography variant="h5" sx={{
              color: '#fff',
              textAlign: 'center',
              fontWeight: '500',
              letterSpacing: '5px',
              
              
            }}>
          <span className="bg-red-500 px-1.5 rounded-md mr-3"> </span> Featured  Events
        </Typography>
            </Stack>
          </Stack>
        </div>
      </section>
          

      
    </>
  );
};

export default EventContent;

const EventsBanner = () => {
  const scrollOnClick = () => {
    window.scrollTo({
      top: window.pageYOffset + window.innerHeight * 0.5,
      behavior: "smooth",
    });
  };

  const redirectToOrgButton = () => {
    const element = document.getElementById("event__organize__button");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <Link className="relative block">
        <video
          width="100"
          height="100"
          className="w-full h-full xl:h-[85vh] object-cover blur-[3px]"
          alt="fan-club-banner"
          autoPlay
          muted
          loop
        >
          <source src={EventVideo} type="video/mp4" />
        </video>
        <div className="absolute top-3 left-0 z-10">
          <div className="bg-red-500 text-white py-1 px-3 rounded-tl-md">
            Events
          </div>
        </div>

        <div className="absolute bottom-5  right-0 z-10">
          <div className="py-1 px-2 bg-red-500 flex gap-2 items-center">
            <button className="text-white " onClick={redirectToOrgButton}>
              Organize
            </button>
            <TicketPercent size={20} className="text-white" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center">
          <motion.div className="flex   items-center text-[#fff]  opacity-2 p-3  rounded-tl-md rounded-tr-md ">
            <h2 className="lg:text-4xl  font-bold tracking-wider text-center ">
              Explore <span className="text-red-500">Events</span>
            </h2>
            <motion.div
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.2 }}
              className="bg-red-500 flex justify-center items-center ml-4 rounded-md"
              onClick={scrollOnClick}
            >
              <ArrowBigDown className="" />
            </motion.div>
          </motion.div>
        </div>
      </Link>
    </>
  );
};
