import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { NavLink } from "react-router-dom";
import { heroImgs } from "../../../data/hero";

//css file
import "../../../styles/SUMUN/sideBar.css";


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
        backgroundImage: `linear-gradient(120deg, rgba(25,26,25,0.9) 71%, rgba(30,81,40,0.8) 97%), url(${heroImgs[imgUrlIdx]})`,
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
        {/* <SideBar /> */}
        <Stack
          spacing={5}
          justifyContent={"end"}
          backgroundColor="#4d9f3d78"
          width={{ md: "4rem", xs: "2rem" }}
          display={{ md: "flex", xs: "none" }}
          overflow={"hidden"}
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
                color: "#37be52",
                fontWeight: "900",
                textWrap: "nowrap",
                letterSpacing: "2px",
                animation: `hashtag-move 10s linear infinite`,
              }}
            >
              &nbsp;REVOLUTION THROUGH RESOLUTION
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
              color={"#D8E9A8"}
              sx={{ letterSpacing: "4px" }}
              className="sit"
              data-aos="zoom-in"
              
            >
              <span style={{ color: "#4E9F3D" }} className="sit">
                SIT
              </span>
              MUN
            </Typography>
            <Typography
              variant="h1"
              // fontFamily={"comfortaa,cursive"}
              className="sit"
              fontWeight={600}
              textAlign={"center"}
              color={"#D8E9A8"}
              data-aos="zoom-in"
            >
              2024
            </Typography>

            <Stack
              spacing={5}
              justifyContent={"end"}
              backgroundColor="#4E9F3D"
              width={{ md: "4rem", xs: "100vw" }}
              display={{ md: "none", xs: "block" }}
              margin={"4rem 0"}
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
                  }}
                >
                  REVOLUTION THROUGH RESOLUTION
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
                className="herbtn"
                href="https://docs.google.com/forms/d/e/1FAIpQLSc1RWEL-wyxqGATGtESWUhJFOZ3xCQ89nWzZLWG7Bhow337Bg/viewform"
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
                  className="herbtn"
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
      <NavLink to={"/"}>
        <Typography
          variant="h6"
          fontFamily={"comfortaa,cursive"}
          className="navLink"
        >
          Home
        </Typography>
      </NavLink>

      <NavLink to={"/teams"}>
        <Typography
          variant="h6"
          fontFamily={"comfortaa,cursive"}
          className="navLink"
        >
          Teams
        </Typography>
      </NavLink>

      <NavLink to={"/committee"}>
        <Typography
          variant="h6"
          fontFamily={"comfortaa,cursive"}
          className="navLink"
        >
          Committee
        </Typography>
      </NavLink>
    </Stack>
  );
};
