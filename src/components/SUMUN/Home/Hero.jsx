import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { NavLink } from "react-router-dom";
import { heroImgs } from "../../../data/sumunHero";

//css file
import styles from "../../../styles/SUMUN/sideBar.module.css";


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
            backgroundImage: ` linear-gradient(120deg, rgba(25, 26, 25, 0.9) 71%, rgb(30 66 81 / 80%) 97%),url(${heroImgs[imgUrlIdx]})`,
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
                      "100%": {
                        transform: "translateX(100%)",
                      }
                    },
                    animation: "hashtag-move 10s linear infinite",
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
              <Stack justifyContent={"center"} width={"100%"}>
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
                  textAlign="center"
                  color="rgb(65 161 166)"
                  sx={{
                    letterSpacing: "4px",
                    fontSize: { xs: "53px", sm: "55px", md: "100px" } // Responsive font sizes
                  }}
                  className={styles.sit}
                  data-aos="zoom-in"
                >
              <span style={{ color: "#a8e1e9"}} className={styles.sit}>
                SU
                  </span>
              MUN
                </Typography>
    
                <Typography
                  variant="h1"
                  fontWeight={600}
                  textAlign="center"
                  color="rgb(65 161 166)"
                  data-aos="zoom-in"
                  sx={{
                    fontSize: { xs: "53px", sm: "55px", md: "100px" }
                  }}
                  className={styles.sit}
                >
                  2025
                </Typography>
                <Stack
                  spacing={5}
                  justifyContent={"end"}
                  backgroundColor="#031D40"
                  width={{ xs: "100%", md: "4rem", sm: "100%" }}
                  maxWidth={{ xs: "150vw", md: "8rem" }}
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
                        color: "rgb(65 161 166) ",
                        fontWeight: "900",
                        textWrap: "nowrap",
                        letterSpacing: "2px",
                        "@keyframes hashtag-move": {
                          "0%": {
                            transform: "translateX(-100%)",
                          },
                          "100%": {
                            transform: "translateX(100%)",
                          }
                        },
                        animation: `hashtag-move 10s linear infinite`,
                      }}
                    >
                  REVOLUTION THROUGH RESOLUTION
                    </Typography>
                  </Box>
                </Stack>
                <Stack
                  marginTop={{ xs: 4, md: 6 }}
                  direction={"row"}
                  spacing={4}
                  justifyContent={"space-around"}
                  width={{sm:"60%",md:"80%",xs:"80%"}}
                  // maxWidth={{ md: "100%", sm: "450px", xs: "280px" }}
                  margin={"auto"}
                >
                  {/* <Button
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
                  </Button> */}
    
                  <Button
                    variant="contained"
                    sx={{
                      padding: { xs: "10px 10px", md: "12px 18px", sm: "10px" }, // Adjust padding for mobile
                      borderRadius: "28px",
                      fontSize: { xs: "11px", sm: "15px", md: "16px" }, // Responsive font size
                      fontWeight: "600",
                      fontFamily: "comfortaa, cursive",
                      width: { xs: "50%", sm: "50%", md: "fit-content" }, // Make buttons fit in mobile view
                      "@keyframes bounceEffect": {
                        "0%": { transform: "scale(1)" },
                        "50%": { transform: "scale(1.05)" },
                        "100%": { transform: "scale(1)" }
                      },
                      "&:hover": {
                        backgroundColor: "#4a90e2",
                        animation: "bounceEffect 0.4s ease-in-out"
                      }
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
                      // padding: "12px 18px",
                      padding: { xs: "10px 10px", md: "12px 18px", sm: "10px" }, // Smaller padding on mobile
                      width: { xs: "50%", sm: "50%", md: "fit-content" },
                      borderRadius: "28px",
                      fontSize: { xs: "11px", sm: "15px", md: "16px" },
                      fontWeight: "600",
                      fontFamily: "comfortaa,cursive",
                      "@keyframes bounceEffect": {
                        "0%": { transform: "scale(1)" },
                        "50%": { transform: "scale(1.05)" },
                        "100%": { transform: "scale(1)" }
                      },
                      "&:hover": {
                        backgroundColor: "#4a90e2",
                        animation: "bounceEffect 0.4s ease-in-out"
                      }
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
      <NavLink to={"/sumun"}>
        <Typography
          variant="h6"
          fontFamily={"comfortaa,cursive"}
          className={styles.navLink}
        >
          Home
        </Typography>
      </NavLink>

      

      <NavLink to={"/sumun/committee"}>
        <Typography
          variant="h6"
          fontFamily={"comfortaa,cursive"}
          className={styles.navLink}
        >
          Committee
        </Typography>
      </NavLink>
      <NavLink to={"https://docs.google.com/forms/d/e/1FAIpQLSeOBgCtipfvkAjE6VS2POttfI9tQx6x8WpZ3k3HXWn3UYpeFA/viewform"}>
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
