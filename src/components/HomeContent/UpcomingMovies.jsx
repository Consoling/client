import { Puff, ThreeDots } from "react-loader-spinner";
import Slider from "react-slick";
import axios from "axios";
import { motion } from "framer-motion";
import {useState, useEffect} from 'react'

import '../../index.css'

const UpcomingMovies = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const BASE_URL = import.meta.env.VITE_NODE_URL;

  const cardFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    async function getMovieData() {
      await new Promise((resolve) => setTimeout(resolve, 2800));
      await axios.get(`${BASE_URL}/movie-data`).then((item) => {
        console.log(item.data);
        setMovieList(item.data);
        setLoading(false);
      });
    }
    getMovieData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    rtl: false,

    swipeToSlide: true,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" flex flex-col w-full mt-20 px-4 md:px-20">
      <div className="w-full h-full flex flex-row items-center gap-2">
        <div className="w-2 rounded-md h-10 bg-red-500"></div>
        <span className="text-lg text-red-500 font-semibold flex flex-row justify-center items-center">
          Factory Built
        </span>
        <span className="flex flex-row justify-center items-center">
          <img src="/factory.gif" className="w-7" />
        </span>
      </div>
      <div className="flex flex-row mt-1 px-2 gap-5 md:gap-20 items-center">
        <span className="md:text-4xl text-xl flex flex-row   mt-3 font-inter font-semibold ">
          Upcoming Movies
        </span>
      </div>

      <div className="my-10 container flex flex-row w-full h-full border-y-2 ">
        {loading ? (
          <div className="w-full flex flex-col h-64 justify-center items-center">
            <Puff
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
            <span className="text-sm mt-2 flex flex-row items-center gap-1 justify-center">
              Spawning Upcoming Movies{" "}
              <ThreeDots
                height="15"
                width="15"
                color="#ee2222"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </span>
          </div>
        ) : (
          <Slider
            {...settings}
            className=" w-full cat-slider flex flex-row shadow-3xl "
          >
            {movieList.map((item, key) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col w-[320px] h-80 border  rounded-sm cursor-pointer hover:scale-110 duration-300 ease-out hover:drop-shadow-xl hover:shadow-3xl
                  upcmvs__crd__cntr
                  "
                >
                  {" "}
                  <motion.div
                    className="w-full h-full frt_prdct_flsh relative upcmvs__crd"
                    initial={false}
                    animate={{ rotateY: isFlipped ? 180 : 360 }}
                    transition={{ duration: 0.6, animationDirection: "normal" }}
                    onAnimationComplete={() => setIsAnimating(false)}
                    onMouseEnter={cardFlip}
                  >
                    <div className="w-full h-full flex justify-center bg-[#f5f5f5] absolute upcmvs__frt">
                      <img
                        src={item.img}
                        alt="product-image"
                        className=" w-full h-full object-contain"
                      />
                    </div>
                    <div className="w-full h-full flex justify-center bg-[#f5f5f5] absolute upcmvs__bck">
                      <h1>{item.title}</h1>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default UpcomingMovies;