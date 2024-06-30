/** @format */

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css/navigation';
// import styles bundle
import "swiper/css/bundle";
import { useEffect, useState } from "react";

const Slider = () => {
  const [teas, setTeas] = useState();

  useEffect( () => {
    fetch('http://localhost:5000/teas')
    .then(res => res.json())
    .then(data => setTeas(data))
  },[])
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        pagination={{
            dynamicBullets: true,
          }}
        navigation={true} modules={[Navigation, Pagination]}
        className="mySwiper">
        {
            teas?.slice(0,3).map(tea => (
                <SwiperSlide key={tea._id}>
                    <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${tea.photo})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} className="h-[80vh]">
                        <div className="h-full ">
                        <div className="text-white space-y-2  text-center pt-10 w-1/2 mx-auto">
                            <h1 className="text-6xl  font-bold">Welcome to Our <br />Tea Store!</h1>
                            <p >Discover a world of exquisite teas sourced from the finest gardens across the globe. Enjoy a curated selection of premium black, green, white, oolong, and herbal teas to elevate your tea experience.</p>
                            <button className="py-2 px-5 rounded hover:bg-[#562e26] bg-[#331A15] text-white">Explore</button>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))
        }
        
      </Swiper>
    </div>
  );
};

export default Slider;
