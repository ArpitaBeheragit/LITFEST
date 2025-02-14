import React from "react";
import styles from "../../styles/SUMUN/Header.module.css";
const Heading = ({ heading,style = {} }) => {
  return (
    <div className={styles.head}>
      <h1 style={style}>{heading}</h1>
    </div>
  );
};

export default Heading;
