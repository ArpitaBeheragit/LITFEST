import React, { useState, useEffect } from "react";
import { Box, Typography, Container,Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { heroImgs } from "../../data/LitfestHero";
import styles from "../../styles/SUMUN/about.module.css"

const Hero = ({ onScrollToNext }) => {
  const [imgUrlIdx, setImgUrlIdx] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setImgUrlIdx((idx) => (idx === heroImgs.length - 1 ? 0 : idx + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Letter Animation Variants
  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: index * 0.15},
    }),
  };

  // Function to animate text letter by letter
  const animateText = (text) =>
    text.split("").map((char, index) => (
      <motion.span
        key={index}
        custom={index}
        variants={letterAnimation}
        initial="hidden"
        animate="visible"
        style={{
          display: "inline-block",
          fontFamily: "'Tilt Prism', cursive",
        //   letterSpacing: char === " " ? "10px" : "4px", // 🔹 Extra space for "SUMUN 2025"
          whiteSpace: char === " " ? "pre" : "normal", // 🔹 Ensure space is rendered
        }}
      >
        {char}
      </motion.span>
    ));
  

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        bgcolor: "#031D40",
        color: "white",
        position: "relative",
        overflow: "hidden",
        backgroundImage: `linear-gradient(120deg, rgba(25, 26, 25, 0.9) 71%, rgb(30 66 81 / 80%) 97%), url(${heroImgs[imgUrlIdx]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      {/* <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8))",
        }}
      /> */}

      {/* Main Content */}
      <Container
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        {/* Animated Text */}
        <Typography
        //   variant="h2"
          sx={{
            fontSize:{xs:"40px",md:"80px",sm:"55px"},
            fontFamily: "'Tilt Prism', cursive",
            color: "#7DEFF1",
            cursor: "pointer",
            "&:hover": { transform: "translateY(-5px)", transition: "0.3s" },
          }}
          onClick={() => navigate("/sumun")}
        >
          {animateText("SUMUN 2025")}
        </Typography>

        <Typography
        //   variant="h2"
          sx={{
            fontSize:{xs:"40px",md:"80px",sm:"55px"},
            fontFamily: "'Tilt Prism', cursive",
            color: "#7DEFF1",
            mt: 1,
          }}
        >
          {animateText("X")}
        </Typography>

        <Typography
        //   variant="h2"
          sx={{
            fontSize:{xs:"40px",md:"80px",sm:"55px"},
            fontFamily: "'Tilt Prism', cursive",
            color: "#7DEFF1",
            cursor: "pointer",
            "&:hover": { transform: "translateY(-5px)", transition: "0.3s" },
          }}
          onClick={() => navigate("/sabdatattva")}
        >
          {animateText("SABDATATTVA")}
        </Typography>
      </Container>

      {/* Left Vertical Text */}
      <Stack
  spacing={5}
  justifyContent="end"
  className="hashtag-move" // Apply the CSS animation
  sx={{
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#031D40",
    width: { md: "4rem", xs: "2rem" },
    display: { md: "flex", xs: "none" },
    backdropFilter: "blur(30px)",
    color: "#fafafa",
    zIndex: 20,
  }}
>
  <Box sx={{ transform: "rotate(-90deg)" }}>
    <Typography
      fontFamily="Anton"
      textTransform="capitalize"
      fontSize={{ md: "42px", xs: "24px" }}
      sx={{
        width: "100vh",
        color: "rgb(65 161 166)",
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
      animation: "hashtag-move 10s linear infinite"
      }}
    >
      &nbsp;LITFEST - THE LITERARY CARNIVAL
    </Typography>
  </Box>
</Stack>
<Stack
  sx={{
    display:{xs:"flex", md:"none"},
    position:"absolute",
    bottom:"20%",
    width:"100%",
    height:"40px",
    overflow:"hidden",
    zIndex:20,
    backgroundColor:"#031D40",
    alignItems:"center",
  }}
>
  <Box
  sx={{
    width:"100%",
    animation:"hashtag-move 10s linear infinite",
    display:"flex",
    alignItems:"center",
    height:"100%"
  }}
  >
  <Typography
      fontFamily="Anton"
      textTransform="capitalize"
      sx={{
       fontSize:"24px",
       fontWeight: "900",
        color: "rgb(65 161 166)",
        whiteSpace:"nowrap",
        display:"inline-block"
      }}
    >
      &nbsp;LITFEST - THE LITERARY CARNIVAL
    </Typography>
  </Box>
</Stack>
    </Box>
  );
};

export default Hero;
