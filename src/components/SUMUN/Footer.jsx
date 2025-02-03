import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Instagram, WhatsApp } from "@mui/icons-material";
import { Box, Stack, TextField, Button } from "@mui/material";
import Logo from "../../assets/logo.png";

import { useState } from "react";

import "../../styles/SUMUN/about.css";
import "../../styles/SUMUN/footer.css";

export default function Footer() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = () => {
    const recipient = "events.litfest25@silicon.ac.in";
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
        background: "rgb(4,56,14)",
        backgroundImage: "linear-gradient(90deg, #031D40 0%, #0648A4 50%, #61C7D9 100%)",
        p: 6,
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
        color: "#7DEFF1",
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
            <img src={Logo} alt="" style={{ maxWidth: "8rem" }} />
            <Stack justifyContent={"center"} alignItems={"center"}>
              <Typography variant="h3" fontFamily="Montserrat, sans-serif" color="#61C7D9">LITFEST 25</Typography>
              <Typography variant="subtitle1" color={"#7DEFF1"} textAlign={"center"} fontFamily="Inter, sans-serif">
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
            <Stack spacing={1} justifyContent={"center"} alignItems={"center"} display={{xs: 'none', sm: 'flex'}}>
              <Typography variant="h5" fontWeight={"bold"} fontFamily="Montserrat, sans-serif" color="#61C7D9">
                Links
              </Typography>
              <Stack
                direction={"row"}
                spacing={2}
                sx={{
                  "& a": {
                    textDecoration: "none",
                    color: "#7DEFF1",
                  },
                  "& a:hover": {
                    cursor: "pointer",
                    color: "white",
                  },
                }}
              >
                <Link to="/">Home</Link>
                <Link to="/events">Events</Link>
                <Link to="/about">About</Link>
                <a href="https://registration-link-for-litfest25" target="_blank">Register</a>
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <Typography variant="h5" fontWeight={"bold"} fontFamily="Montserrat, sans-serif" color="#61C7D9">
                Follow Us On
              </Typography>
              <Stack
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <a href="https://www.instagram.com/litfest25" target="_blank">
                  <Instagram style={{color: "#7DEFF1"}} />
                </a>
                <a href="https://wa.me/+911234567890" target="_blank">
                  <WhatsApp style={{color: "#7DEFF1"}} />
                </a>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography variant="h5" fontWeight={"bold"} fontFamily="Montserrat, sans-serif" color="#61C7D9">
              Contact us
            </Typography>
            <Stack direction={"column"} spacing={0} alignItems={"center"}>
              <Typography variant="body1" color={"#7DEFF1"} fontFamily={"Inter, sans-serif"}>
                Event Coordinator
              </Typography>
              <Typography variant="body1" color={"#7DEFF1"} fontFamily={"Inter, sans-serif"}>
                LITFEST 25
              </Typography>
              <Typography variant="body1" color={"#7DEFF1"} fontFamily={"Inter, sans-serif"}>
                Silicon Institute of Technology
              </Typography>
              <Typography variant="body1" color={"#7DEFF1"} fontFamily={"Inter, sans-serif"}>
                Email:- events.litfest25@silicon.ac.in
              </Typography>
              <Typography variant="body1" color={"#7DEFF1"} fontFamily="Inter, sans-serif">
                Phone:- +91 1234567890
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          spacing={3}
          width={"100%"}
          padding={"3vh 3vw"}
          sx={{
            background: "#0648A455",
            borderRadius: "2rem",
            backdropFilter: "blur(30px)",
            zIndex: "10",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <Typography variant="h3" textAlign={"center"} fontFamily="Montserrat, sans-serif" color="#61C7D9">
            Contact Us
          </Typography>
          <Stack spacing={1}>
            <TextField
              id="name-input"
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
              sx={{
                '& .MuiInputLabel-root': { color: '#7DEFF1' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#61C7D9' },
                  '&:hover fieldset': { borderColor: '#7DEFF1' },
                },
                '& .MuiInputBase-input': { color: '#7DEFF1' }
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
                '& .MuiInputLabel-root': { color: '#7DEFF1' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#61C7D9' },
                  '&:hover fieldset': { borderColor: '#7DEFF1' },
                },
                '& .MuiInputBase-input': { color: '#7DEFF1' }
              }}
            />
          </Stack>
          <Button
            sx={{
              color: "#031D40",
              fontFamily: "Montserrat, sans-serif",
              transition: "all 0.5s ease-out",
              background: "#61C7D9",
              "&:hover": {
                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                borderRadius: "3rem",
                background: "#7DEFF1"
              },
            }}
            onClick={sendEmail}
          >
            Send
          </Button>
        </Stack>
      </Stack>
      <center><hr className="hr"/></center>
      <div className="copy"><p>&copy; Copyright 2025 LITFEST.</p></div>
    </Box>
  );
}