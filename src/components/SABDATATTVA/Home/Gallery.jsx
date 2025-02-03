import React, { useState, useEffect, useRef } from "react";
import styles from "../../../styles/SABDATATTVA/Gallery.module.css";
import ReactDOM from "react-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { galleryData } from "../../../data/gallery";
import { Typography } from "@mui/material";
import Heading from "../../shared/Heading";
const Gallery = () => {
  // const [galleryData, setGalleryData] = useState({ gallery1: [], gallery2: [] });

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    pauseOnHover: true,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings1 = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    pauseOnHover: true,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log(galleryData);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res1 = await fetch("http://localhost:4000/gallery1");
  //       const res2 = await fetch("http://localhost:4000/gallery2");
  //       const data1 = await res1.json();
  //       const data2 = await res2.json();
  //       setGalleryData({ gallery1: data1, gallery2: data2 });
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className={styles.main}>
      <Heading heading={"Gallery"}/>
      <div>
        <Slider {...settings} className={styles.slider} ref={sliderRef1}>
          {galleryData?.map((item, id) => {
            if (id % 2 == 0) {
              return (
                <div key={id} className={styles.sliderItem}>
                  <img
                    src={item.url}
                    alt={`Image ${id}`}
                    className={styles.sliderimg}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </Slider>
        <Slider {...settings1} className={styles.slider1} ref={sliderRef2}>
          {galleryData?.map((item, id) => {
            if (id % 2 != 0) {
              return (
                <div key={id} className={styles.sliderItem}>
                  <img
                    src={item.url}
                    alt={`Image ${id}`}
                    className={styles.sliderimg}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
