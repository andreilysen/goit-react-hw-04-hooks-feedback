import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistic.module.css";

const Statistics = ({ total, goodPercentage, good, neutral, bad }) => {
  return (
    <>
      <ul>
        <li className={styles.item}>good : {good}</li>
        <li className={styles.item}>neutral : {neutral}</li>
        <li className={styles.item}>bad : {bad}</li>
        <li className={styles.item}>Total : {total}</li>
        <li className={styles.item}>Positive feedback : {goodPercentage} %</li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  goodPercentage: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;
