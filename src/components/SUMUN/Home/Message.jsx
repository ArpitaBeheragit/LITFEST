import React from "react";
import styles from "../../../styles/SUMUN/message.module.css"; // Import your CSS file
import SgImage from "../../../assets/sg.jpg";
import Heading from "../../shared/Heading";
import { Grid, Box, Container, Typography, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "../../../styles/SUMUN/about.css";
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
        position: 'relative'
      }}
      
    >
      <Grid
        container
        maxWidth={"lg"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgb(0,6,1)",
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
          <Heading heading={"Message From Secretariat"} />
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
            sm={9}
            sx={{
              textAlign: "justify",
              padding: "5vh 2vw",
              lineHeight: '1.1rem',
              fontFamily:"comfortaa,cursive"
            }}
          >
            <Typography variant="body1" fontFamily="comfortaa,cursive">
            "Reverberating the domain with indomitable resolutions", SITMUN has, since time immemorial believed in such similar notions and has henceforth conducted the most exciting and intriguing debating competitions of all time. Despite the pandemic in 2021 or let it be the dire market conditions in 2022, the unassailable psyche that drove us, bought the greatest of the interests and most of the minds in a conglomeration to build this event. This time in the forthcoming and exhilarating year of 2023, we bring forth the 5th edition of SITMUN. We believe that the world needs a revolution, it demands individualistic mindsets to articulate a new pathway, join us this February 2023 to build the future and clash our words for a new understanding!"
            </Typography>
            <Typography variant="body1" textAlign={"right"} paddingTop={"2vh"} color={"rgb(65 161 166)"} fontWeight={"bold"} fontFamily="comfortaa,cursive">
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
