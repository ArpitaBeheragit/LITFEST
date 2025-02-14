import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { NavLink } from "react-router-dom";
import { heroImgs } from "../../../data/Sabdahero";

//css file
import styles from "../../../styles/SABDATATTVA/sideBar.module.css";


const Hero = () => {
  const [imgUrlIdx, setImgUrlIdx] = useState(0);

  useEffect(() => {
    const changeImgUrl = () => {
      setImgUrlIdx((idx) => (idx == heroImgs.length - 1 ? 0 : idx + 1));
    };
    const intrval = setInterval(changeImgUrl, 2000);
    return () => {
      clearInterval(intrval);
    };
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        // background: `url(${HeroImg}),linear-gradient(#4e9f3d, #4E9F3D)`,
        backgroundImage: ` url(${heroImgs[imgUrlIdx]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow:
          "rgba(0, 0, 0, 0.3) 0px 30px 50px, rgba(0, 0, 0, 0.22) 0px 20px 15px",
        transition: "backgroundImage ease-in",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        width={"100%"}
        height={"100%"}
      >
        <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8))",
        }}
      />
        {/* <SideBar /> */}
        <Stack
          spacing={5}
          justifyContent={"end"}
          backgroundColor="#031D40 "
          width={{ md: "4rem", xs: "2rem" }}
          display={{ md: "flex", xs: "none" }}
          // overflow={"hidden"}
          sx={{
            backdropFilter: 'blur(30px)',
            color: '#fafafa'
          }}
        >
          <Box sx={{ transform: "rotate(-90deg)" }}>
            <Typography
              fontFamily={"Anton"}
              textTransform={"capitalize"}
              fontSize={{ md: "42px", xs: "24px" }}
              sx={{
                width: "100vh",
                color: "rgb(65 161 166) ",
                fontWeight: "900",
                textWrap: "nowrap",
                letterSpacing: "2px",
                "@keyframes hashtag-move": {
        "0%": {
          transform: "translateX(-100%)",
        },
        "100%":{
          transform: "translateX(100%)",
        }
      },
                animation: "hashtag-move 10s linear infinite",
              }}
            >
              &nbsp;INSPIRE THROUGH WORDS
            </Typography>
          </Box>
        </Stack>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack justifyContent={"center"}>
            {/* <Stack
              spacing={5}
              justifyContent={"end"}
              backgroundColor="#4E9F3D"
              width={{ md: "4rem", xs: "100vw" }}
              display={{ md: "none", xs: "block" }}
              margin={"2rem 0"}
              overflow={"hidden"}
            >
              <Box>
                <Typography
                  fontFamily={"Anton"}
                  textTransform={"capitalize"}
                  fontSize={{ md: "42px", xs: "24px" }}
                  sx={{
                    color: "#1E5128",
                    fontWeight: "900",
                    textWrap: "nowrap",
                    letterSpacing: "2px",
                    animation: `hashtag-move 10s linear infinite`,
                    animationDelay: "5s"
                  }}
                >
                  #REVOLUTIONTHROUGHRESOLUTION
                </Typography>
              </Box>
            </Stack> */}

            <Typography
              variant="h1"
              fontWeight={900}
              textAlign={"center"}
              color={" rgb(65 161 166)"}
              sx={{ letterSpacing: "4px" }}
              className={styles.sit}
              data-aos="zoom-in"
              
            >
              <span style={{ color: "#a8e1e9"}} className={styles.sit}>
              SABDA
              </span>
              TATTVA
            </Typography>
            <Typography
              variant="h1"
              // fontFamily={"comfortaa,cursive"}
              className={styles.sit}
              fontWeight={600}
              textAlign={"center"}
              color={"rgb(65 161 166)"}
              data-aos="zoom-in"
            >
              2025
            </Typography>

            <Stack
              spacing={5}
              justifyContent={"end"}
              backgroundColor="#031D40" 
              width={{ md: "4rem", xs: "100vw" }}
              display={{ md: "none", xs: "block" }}
              margin={"4rem 0"}
              // overflow={"hidden"}
            >
              <Box>
                <Typography
                  fontFamily={"Anton"}
                  textTransform={"capitalize"}
                  fontSize={{ md: "42px", xs: "24px" }}
                  sx={{
                    color: "rgb(65 161 166) ",
                    fontWeight: "900",
                    textWrap: "nowrap",
                    letterSpacing: "2px",
                    "@keyframes hashtag-move": {
        "0%": {
          transform: "translateX(-100%)",
        },
        "100%":{
          transform: "translateX(100%)",
        }
      },
                    animation: `hashtag-move 10s linear infinite`,
                  }}
                >
                  INSPIRE THROUGH WORDS
                </Typography>
              </Box>
            </Stack>
            <Stack
              marginTop={{xs:4, md: 6}}
              direction={"row"}
              spacing={4}
              justifyContent={"space-around"}
              // maxWidth={{ md: "100%", sm: "450px", xs: "280px" }}
              margin={"auto"}
            >
              <Button
                variant="contained"
                sx={{
                  padding: "12px 18px",
                  borderRadius: "28px",
                  fontSize: 16,
                  fontWeight: "600",
                  fontFamily:"comfortaa,cursive"
                }}
                className={styles.herbtn}
                href="https://linktr.ee/litfest_2025"
                target="_blank"
              >
                Register Now
              </Button>
              
                <Button
                  variant="contained"
                 
                  sx={{
                    padding: "12px 18px",
                    borderRadius: "28px",
                    fontSize: 16,
                    fontWeight: "600",
                    fontFamily:"comfortaa,cursive"
                  }}
                  // color="success"
                  className={styles.herbtn}
                  href="#about"
                >
                  Know More
                </Button>
              
            </Stack>
          </Stack>
        </Box>
        <Box width={"4rem"} display={{ md: "block", xs: "none" }}></Box>
      </Stack>
    </Box>
  );
};

export default Hero;

export const SideBar = () => {
  return (
    <Stack
      direction={"column-reverse"}
      height={"100%"}
      justifyContent={"space-around"}
      fontFamily={"comfortaa,cursive"}
      sx={{ display: { md: "flex", sm: "none", xs: "none" } }}
    >
      <NavLink to={"/sabdatattva"}>
        <Typography
          variant="h6"
          fontFamily={"comfortaa,cursive"}
          className={styles.navLink}
        >
          Home
        </Typography>
      </NavLink>

     

      <NavLink to={"/sabdatattva/events"}>
        <Typography
          variant="h6"
          fontFamily={"comfortaa,cursive"}
          className={styles.navLink}
        >
          Events
        </Typography>
      </NavLink>

      <NavLink to={"/https://linktr.ee/litfest_2025"}>
        <Typography
          variant="h6"
          fontFamily={"comfortaa,cursive"}
          className="navLink"
        >
          Register
        </Typography>
      </NavLink>
    </Stack>
  );
};
