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

const SecGenMsg = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <div className={styles.heading}>
          <Heading heading={"Message From secretary general"} />
        </div>
        <Grid container>
          <Grid item xs={6} sm={6} className={styles.content} fontFamily="comfortaa,cursive">
            <p>
              "My name is Namrata Mishra, and it is with distinct honour that I
              welcome you all to the 6th iteration of the SIT Model United
              Nations conference! I have been a part of SITMUN as a Delegate,
              Coordinator, and OC Member, and it is now my privilege to lead the
              Secretariat as Secretary General for the conference. With my
              incredible team, I am confident that this year’s conference will
              surpass all expectations for SITMUN and redefine what our
              conference has historically delivered. SITMUN's mission is simple;
              we strive to provide young leaders a stimulating platform to
              debate, discuss, and resolve critical global issues by promoting
              equity, creativity, and diplomacy. At SITMUN, Model United Nations
              is more than a simulation of the UN, but rather, it is a space for
              delegates to delve into the world of international issues and
              develop stronger public speaking, communication, critical
              thinking, and diplomacy skills. Whether you are the most
              passionate and knowledgeable political thinker or, perhaps, are
              someone foreign to the world of diplomacy, SITMUN is for you. To
              my delegates— SITMUN is your space to collaborate, engage and
              debate the world of today, to lead the world of tomorrow. The
              legacy of SITMUN is established by a long line of predecessors who
              have established our conference as one of the best in the circuit.
              This year is no exception, as the 6th iteration of SITMUN could
              not be possible without the contributions of my hard-working,
              passionate, and dedicated Secretariat and OC members. They are,
              genuinely, one of the most brilliant individuals I know, and I
              have no doubt that their talents and efforts will reflect in your
              SITMUN experience. I am thrilled to see what SITMUN 2024 will
              bring, and I am incredibly excited to welcome you all to the
              conference this March."
            </p>
          </Grid>
          <Grid item xs={6} sm={6} className={styles.imageContainer}>
            {/* <div className={styles.signature}>
              <div className={styles.dance}>Namrata Mishra</div>
              <div className={styles.sec}>
                <b>Secretary General,SITMUN 2024</b>
              </div>
            </div> */}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

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
          backgroundImage: "linear-gradient(90deg, rgba(0,6,1,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 68%, rgba(5,37,8,1) 100%);",
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
          <Heading heading={"Message From Seceratary General"} />
        </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            sx={{
              background: `url(${SgImage})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              height: "50vh",
              width: '100%'
            }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={9}
            sx={{
              textAlign: "center",
              padding: "5vh 2vw",
              lineHeight: '1.1rem',
              fontFamily:"comfortaa,cursive"
            }}
          >
            <Typography variant="body1" fontFamily="comfortaa,cursive">
            "Reverberating the domain with indomitable resolutions", SITMUN has, since time immemorial believed in such similar notions and has henceforth conducted the most exciting and intriguing debating competitions of all time. Despite the pandemic in 2021 or let it be the dire market conditions in 2022, the unassailable psyche that drove us, bought the greatest of the interests and most of the minds in a conglomeration to build this event. This time in the forthcoming and exhilarating year of 2023, we bring forth the 5th edition of SITMUN. We believe that the world needs a revolution, it demands individualistic mindsets to articulate a new pathway, join us this February 2023 to build the future and clash our words for a new understanding!
            </Typography>
            <Typography variant="body1" textAlign={"right"} paddingTop={"2vh"} color={"rgb(120, 190, 100)"} fontWeight={"bold"} fontFamily="comfortaa,cursive">
              - Namrata Mishra
            </Typography>
            <Typography variant="body1" textAlign={"right"} color={"rgb(170, 210, 210)"} fontFamily="comfortaa,cursive">
              Secretary General
            </Typography>
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
