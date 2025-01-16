import React from "react";
import styles from "../../styles/SUMUN/Header.module.css";
const Heading = ({ heading }) => {
  return (
    <div className={styles.head}>
      <h1>{heading}</h1>
    </div>
  );
};

export default Heading;
