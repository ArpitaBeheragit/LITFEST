import React, { useEffect, useState } from "react";
import { Box, FormControl, Select, MenuItem, OutlinedInput } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; 
import styles from "../../styles/SUMUN/Team.module.css";
import { teamdata } from "../../data/team";
import Heading from "../shared/Heading";
import { useMediaQuery } from "@mui/material"; // Import useMediaQuery to handle responsive behavior

const Team = () => {
  const isMobileOrTablet = useMediaQuery("(max-width:768px)");
  const [order, setorder] = useState("Core Secretariat");
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  useEffect(()=>{
    if(isMenuOpen){
      const handleScroll=()=>{
        setIsMenuOpen(false);
      };
      window.addEventListener('scroll',handleScroll,true);
      return () => window.removeEventListener('scroll',handleScroll,true)
    }
  },[isMenuOpen])
  return (
    <div className={styles.container}>
      {/* Header with heading centered and filter dropdown at the top-right */}
      <Box sx={{ position: "relative", textAlign: "center", mb: 2 }}>
        <Heading heading={order} style={{  margin: "40px 0px 14px 0px" }} />

        {/* Dropdown positioned in the top-right corner */}
        <FormControl
          sx={{
            position: {xs:"static",md:"absolute"},
            top: "50%", 
            right: 40,
            backgroundColor: "black",
            borderRadius: 1,
            width: 180,
            color: "white",
          }}
          size="small"
        >
          <Select
            value={order}
            open={isMenuOpen}
            onOpen={()=>setIsMenuOpen(true)}
            onClose={()=>setIsMenuOpen(false)}
            onChange={(e) => setorder(e.target.value)}
            input={<OutlinedInput sx={{ color: "white", border: "1px solid white" }} />}
            IconComponent={(props) => (
              <ExpandMoreIcon 
                {...props}
                sx={{
                  right:isMobileOrTablet?"-50px":"7px",
                  color: "white",
                  fontSize: isMobileOrTablet ? 15:15, // Adjust size based on screen size
                  transform: isMenuOpen ? "rotate(180deg)" : "rotate(0deg)", // Rotate on open
                  transition: "transform 0.3s ease-in-out", // Smooth transition
                }} 
              />
            )}
            sx={{
              color: "white",
              "& .MuiSvgIcon-root": { color: "white" },
              fontSize: isMobileOrTablet ? 15 : 15,
              width:{sx:"30px"}
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: "black", // Dropdown background color
                  color: "white", // Text color
                  mt:"0.5"
                },
              },
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "left",
              },
              disablePortal:true,
              disableScrollLock:true
            }}
          >
            {[
              "Core Secretariat",
              "Delegate Affairs",
              "Public Relations",
              "Web Development",
              "Hospitality",
              "Finance",
              "Sponsorship",
              "Video Editing",
              "Creativity & Designing",
              "Logistics",
              "EB Affairs",
            ].map((dept) => (
              <MenuItem key={dept} value={dept} sx={{ color: "white" }}>
                {dept}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <div className={styles.cardrow}>
        <div className={styles.body}>
          {teamdata
            ?.filter((item) => item.dept === order)
            .map((item, id) => (
              <div className={styles.row} key={id}>
                <div className={styles.col}>
                  <div className={styles.card}>
                    <div className={styles.cardshape}>
                      <img src={item.url} alt={item.name} />
                    </div>
                    <div className={styles.cardbody}>
                      <span className={styles.__rect}></span>
                      <p className={styles.Name}>{item.name}</p>
                      <p className={styles.desig}>{item.desig}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
