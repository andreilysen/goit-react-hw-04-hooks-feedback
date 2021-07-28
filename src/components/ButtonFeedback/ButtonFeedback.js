import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          name={option}
          className={styles.button}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
      {/* <button type="button" name="good" onClick={onLeaveFeedback}>
        good
      </button>
      <button type="button" name="neutral" onClick={onLeaveFeedback}>
        neutral
      </button>
      <button type="button" name="bad" onClick={onLeaveFeedback}>
        bad
      </button> */}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
