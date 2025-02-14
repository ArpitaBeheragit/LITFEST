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

import styles from "../../../styles/SUMUN/about.module.css";

// SwiperCore.use([EffectCards, Mousewheel]);

const About = () => {
  return (
    <div className={styles.section} id="about">
      <Stack
        className={styles.content}
        flexDirection={{ md: "row", xs: "column-reverse" }}
      >
        <Box className={styles.info}>
          <Heading heading={"About us"} />
          <Typography variant="body1" fontFamily="comfortaa,cursive" >
          <span className={styles.movie_night}>Model United Nations</span> is a dynamic simulation of the United Nations, designed to find solutions to real-world problems through academic discussions that mirror UN procedures. It revolves around negotiation, discussion, and vibrant debates, fostering a deep understanding of current events, international relations, diplomacy, and the United Nations agenda. Participants develop essential skills such as public speaking, presentation, persuasion, research, situation analysis, and critical thinking. SUMUN 2025 is an inter-collegiate conference held annually, attracting students from Silicon University and other institutes across Odisha who participate as delegates in various committees, with the best speakers recognized and awarded. SUMUN invites you on an unparalleled journey into the world of diplomacy, debate, and global change. Whether you're a seasoned delegate or a first-time participant, SUMUN offers the perfect stage to explore negotiation, leadership, and collaboration.
          </Typography>
          {/* <button className="btn">Join</button> */}
        </Box>
        <Swiper className={styles.swiper}>
          <div className={styles.swiper_wrapper}>
            <SwiperSlide className={styles.swiper_slide} style={{height:"100%"}}></SwiperSlide>
          </div>
        </Swiper>
      </Stack>

      {/* <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> */}
    </div>
  );
};

export default About;