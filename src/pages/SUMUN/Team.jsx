import React,{ useEffect, useState, useRef } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import styles from "../../styles/SUMUN/Team.module.css";
// import IconButton from "@mui/material/IconButton";
import { heroTeam } from "../../data/heroTeam";

const Navbar = React.lazy(() => import("../../components/SUMUN/Navbar"));
const HeroTeam = React.lazy(() => import ("../../components/SUMUN/Home/HeroTeam"));
const Footer = React.lazy(()=> import("../../components/SUMUN/Footer"));

import { teamdata } from "../../data/team";
const Team = () => {
  const props = { Heading: "MEET OUR TEAM" };
  const [order, setorder] = useState("Core Secretariat");
  const [imgUrlIdx, setImgUrlIdx] = useState(0);

  useEffect(() => {
    const changeImgUrl = () => {
      setImgUrlIdx((idx) => (idx == heroTeam.length - 1 ? 0 : idx + 1));
    };
    const intrval = setInterval(changeImgUrl, 2000);
    return () => {
      clearInterval(intrval);
    };
  }, []);
  return (
    <div>
      <Navbar order={order} setOrder={setorder} selectList={true} />
      <div className={styles.container}>
        <HeroTeam heading={order} order={order} setOrder={setorder} selectList={true} />
        {/* <div className={styles.head}>
          <div className={styles.head2}>
          <Box
      sx={{
        height: "70vh",
        width: "100%",
        // background: `url(${HeroImg}),linear-gradient(#4e9f3d, #4E9F3D)`,
        backgroundImage: `linear-gradient(120deg, rgba(25,26,25,0.9) 71%, rgba(30,81,40,0.8) 97%),url(${heroTeam[imgUrlIdx]})`,
        
        backgroundSize: "cover",
        objectFit:"cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
        transition: "backgroundImage ease-in",
      }}
   />
          </div>
          
              
            
        </div> */}
        {/* <div className={styles.heading}>
          <h1>{order}</h1>
        </div> */}
        <div className={styles.cardrow}>
          <div className={styles.body}>
            {teamdata?.map((item, id) => {
              if (item.dept === order) {
                return (
                  <div className={styles.row} key={id}>
                    <div className={styles.col}>
                      <div className={styles.card}>
                        <div className={styles.cardshape}>
                          <img src={item.url} alt="" />
                        </div>
                        <div className={styles.cardbody}>
                          <span className={styles.__rect}></span>
                          <p className={styles.Name}>{item.name}</p>
                          <p className={styles.desig}>{item.desig}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
