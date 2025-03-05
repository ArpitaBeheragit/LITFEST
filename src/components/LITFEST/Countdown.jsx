import React, { useState, useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import bgImage from "../../assets/bg.png"; // Add a space-themed background image
import styles from "../../styles/LITFEST/countdown.module.css"
const MotionBox = motion(Box);

const CountdownTimer = () => {
  const targetDate = new Date("2025-03-19T23:59:59").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const delta = Math.max(targetDate - now, 0);

    return {
      days: Math.floor(delta / (1000 * 60 * 60 * 24)),
      hours: Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((delta % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
    className={styles["countdown-wrapper"]}
      sx={{
        backgroundColor: "#191a19",
        // backgroundImage: `url(${bgImage})`,
        backgroundSize: "25%",
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        minHeight: {xs:"75vh",sm:"80vh", md:"100vh"},
        padding:{xs:"10px 0", sm:"20px 0" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="h2" fontFamily="Orbitron" letterSpacing={5} gutterBottom style={{color:"rgb(56 131 141)",fontFamily:"'Tilt Prism', cursive",fontWeight:"bold"}}>
          META ACADEMICS CELL
        </Typography>
        <Typography variant="h5" gutterBottom style={{fontFamily:"comfortaa,cursive", fontWeight:"bold"}}>
          Presents
        </Typography>
        <Typography variant="h1" fontFamily="Orbitron" letterSpacing={10} gutterBottom style={{fontFamily:"'Tilt Prism', cursive"}}>
          LITFEST
        </Typography>
        <Typography variant="h5" gutterBottom style={{fontFamily:"comfortaa,cursive", fontWeight:"bold"}}>
          Premiers in
        </Typography>

        <MotionBox
        className={styles["countdown-container"]}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection:{xs:"row",sm:"row"},
            gap:{xs:2,sm: 12, md:12},
            mt: 3,
            p: 3,
            border: "2px solid rgba(255, 255, 255, 0.5)",
            borderRadius: 3,
            backdropFilter: "blur(10px)",
          }}
        >
          {["days", "hours", "minutes", "seconds"].map((unit, index) => (
            <Box key={index} className={styles["countdown-box"]} sx={{ textAlign: "center" }}>
              <Typography variant="h2" fontFamily="comfortaa,cursive" className={styles["countdown-value"]}>
                {String(timeLeft[unit]).padStart(2, "0")}
              </Typography>
              <Typography variant="subtitle1" fontFamily="comfortaa,cursive" className={styles["countdown-label"]}>{unit.toUpperCase()}</Typography>
            </Box>
          ))}
        </MotionBox>
      </Container>
    </Box>
  );
};

export default CountdownTimer;
