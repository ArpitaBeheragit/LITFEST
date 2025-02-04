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
import "../../../styles/SABDATATTVA/about.css"
// SwiperCore.use([EffectCards, Mousewheel]);

const About = () => {
  return (
    <section id="about">
      <Stack
        className="content"
        flexDirection={{ md: "row", xs: "column-reverse" }}
      >
        <Box className="info">
          <Heading heading={"About us"} />
          <Typography variant="body1" fontFamily="comfortaa,cursive" >
            <span className="movie-night">SABDATATTVA</span> immerses your in the beauty of words carved like snowflakes, unique and timeless. Sabda Tattva, our literary fest, embraces the theme of winter as a metaphor for reflection, storytelling, and introspection. Let the chill of the season ignite your creativity as we celebrate the art of writing, reading, and expression. Be ready to walk through a frosted trail of retro literature on the, where every story glows like the warmth of a winter fire.
          </Typography>
          {/* <button className="btn">Join</button> */}
        </Box>
        <Swiper className="swiper">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide" style={{height:"100%"}}></SwiperSlide>
          </div>
        </Swiper>
      </Stack>
    </section>
  );
};

export default About;
