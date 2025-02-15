import React from "react";
import { Box, Typography, Grid, Container, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Heading from "../shared/Heading";
import styles from "../../styles/SABDATATTVA/sideBar.module.css";
import styles1 from "../../styles/LITFEST/about.module.css"
import { useNavigate } from "react-router-dom";
const MotionPaper = motion(Paper);

const About = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ bgcolor: "black", py: 8, px: 4 }}>
      <Container maxWidth="lg">
        {/* <Typography
          variant="h2"
          align="center"
          color="rgb(65 161 166)"
          mx={"auto"}
          className={styles.sit}
          sx={{ fontSize: "75px" }}
        >
          Silicon University Invites You
        </Typography> */}
      <Heading heading={"Silicon University Invites You"}/>
        <Typography
          variant="h6"
          align="center"
          color="white"
          sx={{ maxWidth: "800px", mx: "auto", mt: 2, fontFamily: "Comfortaa, cursive", textAlign: "justify" }}
        >
          Experience the perfect blend of creativity and diplomacy at our grand celebration
          of intellect and expression. This year, under the magical theme of snow,
          we present extraordinary events designed to inspire and engage.
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ py: 4 }}>
          <Grid item xs={12} md={6}>
            <MotionPaper
              sx={{ p: 3, borderRadius: 2, bgcolor: "#1e1e1e", cursor: "pointer" }}
              className={styles1.content}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate("/sabdatattva")}
            >
              <Heading heading={"Sabdatattva"}/>
              <Typography color="white" sx={{ fontFamily: "Comfortaa, cursive", textAlign: "justify" }}>
                Immerse yourself in the beauty of words carved like snowflakes, unique and timeless.
                Sabda Tattva, our literary fest, embraces the theme of winter as a metaphor for reflection,
                storytelling, and introspection. Let the chill of the season ignite your creativity as
                we celebrate the art of writing, reading, and expression.
              </Typography>
            </MotionPaper>
          </Grid>

          <Grid item xs={12} md={6}>
            <MotionPaper
              className={styles1.content}
              sx={{ p: 3, borderRadius: 2, bgcolor: "#1e1e1e", cursor: "pointer" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate("/sumun")}
            >
               <Heading heading={"SUMUN"} />
              <Typography color="white" sx={{ fontFamily: "Comfortaa, cursive", textAlign: "justify" }}>
                Amidst the icy backdrop of this season, diplomacy burns bright.
                SUMUN brings together thinkers, leaders, and diplomats to tackle pressing global issues.
                Through enriching workshops and engaging simulations, participants will step into the shoes
                of diplomats and shape the future.
              </Typography>
            </MotionPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
