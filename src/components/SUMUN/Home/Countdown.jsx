import React, { useState, useEffect } from "react";
import { zeroPad } from "react-countdown";
import styles from "../../../styles/SUMUN/Countdown.module.css";
import Heading from "../../shared/Heading";
const CalcTimeDelta = () => {
  const targetDate = "2024-03-27T11:59:59";
  // const targetDate = "2024-02-17T14:26:59";

  const calculateTimeDelta = () => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    let delta = target - now;
    if (delta < 0) {
      delta = 0; 
    }
    const days = Math.floor(delta / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((delta % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeDelta, setTimeDelta] = useState(calculateTimeDelta());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDelta(calculateTimeDelta());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <Heading 
          heading={"Live In"}
        />

        <div className={styles.cont}>
          <div className={styles.day}>
            <h1>{zeroPad(timeDelta.days)} </h1>
            <h5>days </h5>
          </div>
          <div className={styles.hour}>
            <h1>{zeroPad (timeDelta.hours)} </h1>
            <h5>hours </h5>
          </div>
          <div className={styles.min}>
            <h1> {zeroPad(timeDelta.minutes)} </h1>
            <h5>minutes </h5>
          </div>
          <div className={styles.sec}>
            <h1> {zeroPad(timeDelta.seconds)} </h1>
            <h5>seconds </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalcTimeDelta;
