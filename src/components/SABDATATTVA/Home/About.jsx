import React, { useEffect } from "react";
import { Typography, Box, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import SwiperCore, { EffectCards, Mousewheel } from "swiper";
import Heading from "../../shared/Heading";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../../../styles/SABDATATTVA/about.module.css"
// SwiperCore.use([EffectCards, Mousewheel]);

const About = () => {
  return (
    <section id="about">
      <Stack
        className={styles.content}
        flexDirection={{ md: "row", xs: "column-reverse" }}
      >
        <Box className={styles.info}>
          <Heading heading={"About us"} />
          <Typography variant="body1" fontFamily="comfortaa,cursive" >
          <span className={styles.movie_night}>Sabdattatva2.0</span>
          {' '}under the magical theme of snow, presents 
            extraordinary events designed to inspire and engage.Immerse 
            yourself in the beauty of words carved like snowflakes, 
            unique and timeless. Sabda Tattva, our literary fest, 
            embraces the theme of winter as a metaphor for reflection,
            storytelling, and introspection. Let the chill of the 
            season ignite your creativity as we celebrate the art of 
            writing, reading, and expression. Be ready to walk through 
            a frosted trail of retro literature on the, where every 
            story glows like the warmth of a winter fire.
          </Typography>
          {/* <button className="btn">Join</button> */}
        </Box>
        <Swiper className={styles.swiper}>
          <div className={styles.swiper_wrapper}>
            <SwiperSlide className={styles.swiper_slide} style={{height:"100%"}}></SwiperSlide>
          </div>
        </Swiper>
      </Stack>
    </section>
  );
};

export default About;
