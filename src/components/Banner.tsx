// Import necessary dependencies
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Banner component
const Banner = () => {
  const roundedCornerSize = "15px";

  return (
    <>
      <div className=" overflow-hidden relative">
        {/* Swiper component with circular pagination */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination", // Specify the CSS selector for pagination
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          className="mySwiper z-0"
          style={{
            borderRadius: roundedCornerSize,
            overflow: "hidden",
            width: "90%", // Adjust the width as needed
            height: "270px", // Adjust the height as needed
            top: "65px",
          }}
        >
          {/* First Swiper slide */}
          <SwiperSlide>
            <a>
              <img
                src="/banner-1.png"  // Assuming banner-1.png is in the public folder
                className="lg:min-h-[170px] max-h-[170px] lg:max-h-[170px] bg-gray-500 w-full"
                style={{
                  maxWidth: "100%",
                  borderRadius: roundedCornerSize, // Make sure 'roundedCornerSize' is defined
                }}
                width={300} // Adjust the width as needed
                height={150} // Adjust the height as needed
                loading="lazy" // Optionally add the loading attribute for lazy loading
              />
            </a>
          </SwiperSlide>

          {/* Second Swiper slide */}
          <SwiperSlide>
            <a>
              <img
                src="/banner-1.png"  // Assuming banner-2.png is in the public folder
                className="lg:min-h-[170px] max-h-[170px] lg:max-h-[170px] bg-gray-500 w-full"
                style={{
                  maxWidth: "100%",
                  borderRadius: roundedCornerSize, // Make sure 'roundedCornerSize' is defined
                }}
                width={300} // Adjust the width as needed
                height={150} // Adjust the height as needed
                loading="lazy" // Optionally add the loading attribute for lazy loading
              />
            </a>
          </SwiperSlide>

          {/* Add more SwiperSlides as needed */}

        </Swiper>
        {/* Circular pagination */}
        <div className="swiper-pagination" style={{ color: '#2D4356', opacity: "0.5" }}></div>
      </div>
    </>
  );
}

export default React.memo(Banner);
