import React from "react";
import Heading from "../../shared/Heading";
import { Grid, Box, Container, Typography, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "../../../styles/SUMUN/about.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Message = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
        padding: "10vh 5vw",
        position: 'relative',
      }}
      
    >
      <Grid
        container
        maxWidth={"lg"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // background: "rgb(0,6,1)",
          background: "linear-gradient(90deg, rgba(0, 6, 0, 1) 21%, rgba(0, 6, 1, 1) 79%, rgb(1 42 46) 100%) !important",
          backdropFilter: 'blur(30px)',
          borderRadius: '2rem',
          padding: '2vh 0',
          zIndex: 10,
          boxShadow: '0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset, 0 1px 0 0 rgba(255, 255, 255, 0.66) inset, 0 4px 16px rgba(0, 0, 0, 0.12)'
        }}
        // className="msg"
      >
        <Grid
          item
          xs={12}
          sx={{
            padding: "3vh 0",
          }}
        >
          <Heading heading={"Message From Core Secretariat"} />
        </Grid>
          {/* <Grid
            item
            xs={12}
            sm={3}
            sx={{
              // background: `url(${SgImage})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              height: "50vh",
              width: '100%'
            }}
          ></Grid> */}
          <Grid
            item
            xs={12}
            sm={10}
            sx={{
              textAlign: "justify",
              // padding: "5vh 2vw",
              lineHeight: '1.1rem',
              fontFamily:"comfortaa,cursive"
            }}
          >
            <Typography variant="body1" fontFamily="comfortaa,cursive" color="white">
            We are honored to welcome you to the 7th edition of Silicon University Model United Nations (SUMUN 2025) ! As a team that has been instrumental in shaping the SUMUN experience, we are proud to lead the conference this year.
Having been a part of SUMUN's journey, we have witnessed its growth into a premier Model UN conference. With SUMUN 2025, we aim to surpass all expectations and set new standards. Our mission remains steadfast: to provide a dynamic platform for young leaders to engage in meaningful debates, discussions, and resolutions of pressing global issues, while fostering creativity, diplomacy, and equity.
The legacy of SUMUN is built upon the tireless efforts of our predecessors, who have established our conference as a benchmark for excellence in the circuit. This year's conference would not have been possible without the dedication and hard work of our team members.
We are thrilled to see what SUMUN 2025 will bring, and we are excited to welcome you all to the conference. Get ready for an unforgettable experience!
            </Typography>
            <Typography variant="h6" textAlign={"right"} paddingTop={"2vh"} color={"white"} fontFamily="comfortaa,cursive">
              - Core Secretariat
            </Typography>
            {/* <Typography variant="body1" textAlign={"right"} color={"rgb(170, 210, 210)"} fontFamily="comfortaa,cursive">
              Secretary General
            </Typography> */}
          </Grid>
      </Grid>

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
    </Box>
  );
};

export default Message;
