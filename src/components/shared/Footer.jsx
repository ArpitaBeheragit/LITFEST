import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Instagram, WhatsApp } from "@mui/icons-material";
import { Box, Stack, TextField, Button } from "@mui/material";
import Logo from "../../assets/litfestlogo.png";
import { useState } from "react";
import styles from "../../styles/SUMUN/footer.module.css";

export default function Footer() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = () => {
    const recipient = " meta.academics@silicon.ac.in ";
    const subject = "LITFEST 25 Query";
    const name = `${name}`; 
    const message = `${message}`; 

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=Name: ${encodeURIComponent(
      name
    )}%0D%0A%0D%0AMessage: ${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <Box
      component="footer"
      sx={{
        background: "#000000",
        backgroundImage: "linear-gradient(90deg, rgba(0, 6, 1, 1) 0%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 68%, rgb(5 31 37) 100%)",
        py: 6,
        px:4,
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
        color: "white",
        position: "relative",
      }}
    >
      <Stack
        direction={{ sm: "row", xs: "column" }}
        justifyContent={"center"}
        sx={{
          zIndex: 10,
        }}
        spacing={2}
      >
        <Stack spacing={4} width={"100%"} justifyContent={"center"} zIndex={10}>
          <Stack
            direction={{sm: "row", xs: 'column'}}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img src={Logo} alt="" style={{ maxWidth: "8rem" ,paddingBottom:"20px"}} />
            <Stack justifyContent={"center"} alignItems={"center"} >
              <Typography variant="h3" fontFamily="comfortaa,cursive" color="white">LITFEST</Typography>
              <Typography variant="subtitle1" color={"#00b2df"} textAlign={"center"} fontFamily="comfortaa,cursive">
               WORDS. WINTER. WONDER.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={{sm: "row", xs: 'column'}}
            spacing={3}
          >
            <Stack spacing={1} justifyContent={"center"} alignItems={"center"} display={{xs: 'flex', sm: 'flex'}}>
              <Typography variant="h5" fontWeight={"bold"} fontFamily="comfortaa,cursive" color="white">
                Links
              </Typography>
              <Stack
                direction={"row"}
                spacing={2}
                sx={{
                  "& a": {
                    textDecoration: "none",
                    color: "#00b2df",
                  },
                  "& a:hover": {
                    cursor: "pointer",
                    color: "white",
                  },
                }}
              >
                <Link to="/sumun">SUMUN</Link>
                <Link to="/sabdatattva">Sabdatattva</Link>
                <a href="https://registration-link-for-litfest25" target="_blank">Register</a>
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <Typography variant="h5" fontWeight={"bold"} fontFamily="comfortaa,cursive" color="white">
                Follow Us On
              </Typography>
              <Stack
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <a href="https://www.instagram.com/litfest25" target="_blank">
                  <Instagram style={{color: "#00b2df"}} />
                </a>
                <a href="https://wa.me/+918328939633" target="_blank">
                  <WhatsApp style={{color: "#00b2df"}} />
                </a>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography variant="h5" fontWeight={"bold"} fontFamily="comfortaa,cursive" color="white">
              Contact us
            </Typography>
            <Stack direction={"column"} spacing={0} alignItems={"center"}>
              <Typography variant="body1" color={"#00b2df"} fontFamily={"comfortaa,cursive"}>
                Event Coordinator
              </Typography>
              <Typography variant="body1" color={"#00b2df"} fontFamily={"comfortaa,cursive"}>
                Silicon University
              </Typography>
              <Typography variant="body1" color={"#00b2df"} fontFamily={"comfortaa,cursive"}>
                Email:-  meta.academics@silicon.ac.in 
              </Typography>
              <Typography variant="body1" color={"#00b2df"} fontFamily="comfortaa,cursive">
                Phone:- +91 8328939633
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          spacing={3}
          width={"100%"}
          padding={"3vh 3vw"}
          sx={{
            background: "rgba(220, 221, 220, 0.333)",
            borderRadius: "2rem",
            backdropFilter: "blur(30px)",
            zIndex: "10",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <Typography variant="h3" textAlign={"center"} fontFamily="comfortaa,cursive" color={"white"}>
            Contact Us
          </Typography>
          <Stack spacing={1}>
            <TextField
              id="name-input"
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
              sx={{
                '& .MuiInputLabel-root': { color: 'black' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#608088' },
                  '&:hover fieldset': { borderColor: 'white' },
                },
                '& .MuiInputBase-input': { color: 'black' }
              }}
            />
            <TextField
              id="message-input"
              label="Message"
              variant="outlined"
              multiline
              rows={5}
              onChange={(e) => setMessage(e.target.value)}
              sx={{
                '& .MuiInputLabel-root': { color: 'black' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#608088' },
                  '&:hover fieldset': { borderColor: 'white' },
                },
                '& .MuiInputBase-input': { color: 'black' }
              }}
            />
          </Stack>
          <Button
            sx={{
              // background: "rgb(0, 180, 0)",
              color: "white",
              fontFamily:"comfortaa,cursive",
              transition: "all 0.5s ease-out",
              background: "rgb(17,19,17)",
                backgroundImage: "linear-gradient(90deg, rgba(17, 19, 17, 1) 0%, rgba(2, 22, 6, 1) 48%, rgb(4 38 56) 95%)",
              "&:hover": {
                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                
                borderRadius: "3rem",
              },
            }}
            onClick={sendEmail}
            
          >
            Send
          </Button>
        </Stack>
      </Stack>
      <center><hr className={styles.hr}/></center>
      <div className={styles.copy}><p>&copy; Copyright 2025 LITFEST.</p></div>
    </Box>
  );
}