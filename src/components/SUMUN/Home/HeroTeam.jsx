import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { heroComm } from "../../../data/heroComm";
import Heading from "../../shared/Heading";
import styles from "../../../styles/SUMUN/Team.module.css";
import styles1 from "../../../styles/SUMUN/sideBar.module.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const HeroTeam = ({ heading, order, setOrder, selectList }) => {
  const [imgUrlIdx, setImgUrlIdx] = useState(0);

  useEffect(() => {
    const changeImgUrl = () => {
      setImgUrlIdx((idx) => (idx == heroComm.length - 1 ? 0 : idx + 1));
    };
    const intrval = setInterval(changeImgUrl, 2000);
    return () => {
      clearInterval(intrval);
    };
  }, []);

  return (
    <div className={styles.head}>
      <div className={styles.head2}>
        <Box
          sx={{
            height: "80vh",
            width: "100%",
            // background: `url(${HeroImg}),linear-gradient(#4e9f3d, #4E9F3D)`,
            backgroundImage: `linear-gradient(120deg, rgba(25, 26, 25, 0.9) 71%, rgb(30 66 81 / 80%) 97%),url(${heroComm[imgUrlIdx]})`,

            backgroundSize: "cover",
            objectFit: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            transition: "backgroundImage ease-in",
          }}
        >
          
          <Typography
              variant="h1"
              fontWeight={900}
              textAlign={"center"}
              color={" rgb(65 161 166)"}
              sx={{ letterSpacing: "4px",fontSize: { xs: "47px", sm: "55px", md: "100px" } }}
              className={styles1.sit}
              data-aos="zoom-in"
              
            >
              COMMITTEE
            </Typography>
        </Box>
        {selectList && <ThemeProvider theme={theme}>
            <FormControl
              sx={{
                m: 1,
                minWidth: 120,
                color: "#fff",
                display: { xs: "flex", md: "none" },
                // backgroundColor: 'red',
                alignSelf: 'right'
              }}
              size="small"
            >
              <Box></Box>
              <Box sx={{display: "inline-block", marginLeft: 'auto'}}>
              <Select
                native
                value={order}
                onChange={(e) => setOrder(e.target.value)}
                input={
                  <OutlinedInput />
                }
                sx={{ color: "#fff" }}
              >
                <option value={"Core Secretariat"}>Core Secretariat</option>
                <option value={"Delegate Affairs"}>Delegate Affairs</option>
                <option value={"Public Relations"}>Public Relations</option>
                <option value={"Web Development"}>Web Development</option>
                <option value={"Hospitality"}>Hospitality</option>
                <option value={"Finance"}>Finance</option>
                <option value={"Sponsorship"}>Sponsorship</option>
                <option value={"Video Editing"}>Video Editing</option>
                <option value={"Creativity & Designing"}>
                  Creativity & Designing
                </option>
                <option value={"Logistics"}>Logistics</option>
                <option value={"EB Affairs"}>EB Affairs</option>
              </Select>
              </Box>
            </FormControl>
          </ThemeProvider>}
      </div>
    </div>
  );
};

export default HeroTeam;
