import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect } from "react";
import Logo from "../../assets/SABDATATTVA.png";

import { Button } from "@mui/material";

//useNavigate
import { Link, useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const pages = [
  { name: "Home", location: "/sabdatattva" },
  { name: "Events", location: "/sabdatattva/events" },
  { name: "Register", location: "https://linktr.ee/litfest_2025" },
];

export default function Navbar({ order, setOrder, selectList = false }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();
  const handleMenuClick = (location) => {
    if (location.startsWith("http")) {
      // External link
      window.open(location, "_blank");
    } else {
      // Internal link
      console.log(location);
      
      navigate(location);
    }
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState("");
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleChange = (event) => {
    setAge(Number(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = document.documentElement.scrollTop || window.scrollY;
      setScrollPosition(position);
      console.log("Scroll Position:", position); // Debug log
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <Container
      sx={{
        flexGrow: 0,
        "& .MuiPaper-root": {
          maxHeight: "100vh",
        },
      }}
      maxWidth="lg"
    >
      <AppBar
        position="fixed"
        sx={{
          background:scrollPosition < 100 ? "transparent" : "#1c548a61",
          boxShadow: "none",
          color: "black",
          backdropFilter: scrollPosition > 100 ? "blur(20px)" : "none",
          transition: "all 0.15s linear",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            sx={{
              paddingLeft: "3vw",
            }}
          >
            <Link to="/">
              <img src={Logo} alt="" width={scrollPosition > 100 ? "60vw": "80px"} />
            </Link>
          </Button>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
          >
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleOpenUserMenu}
              sx={{ marginLeft: "auto", color: "white" }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
        <Box
          sx={{
            background: "transparent",
          }}
        >
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            sx={{
              py: 0,
              flexGrow: 0.3,
              "& .MuiList-root": {
                minWidth: { xs: "80vw", sm: "40vw", md: "25vw" },
              },
              "& .MuiPaper-root": {
                border: "2px solid ff3cac !important",
                borderRadius: ".75rem !important",
                background: "rgb(0, 6, 6)",
                backgroundImage: "linear-gradient(90deg, rgb(0, 6, 5) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 68%, rgb(5, 37, 37) 100%);",
              },
            }}
          >
            <Stack
              direction={"column"}
              spacing={2}
              sx={{
                p: "1rem",

                "& li": {
                  p: ".5rem",
                },
                "& li:hover": {
                  p: ".5rem",
                  "& > h6": {
                    color: " rgb(65 161 166)",
                    fontWeight: "bolder",
                  },
                  borderRadius: ".5rem",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              {pages.map((setting, i) => (
                <MenuItem
                  key={i}
                  onClick={() => handleMenuClick(setting.location)}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: "center",
                      color: "#fff",
                      fontWeight: 500,
                      width: "100%",
                      fontFamily:"comfortaa,cursive"
                    }}
                  >
                    {setting.name}
                  </Typography>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Box>
      </AppBar>
    </Container>
  );
}