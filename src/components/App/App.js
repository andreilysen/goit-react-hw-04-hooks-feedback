import React, { Component } from "react";
import Section from "../Section";
import FeedbackOptions from "../ButtonFeedback";
import Statistics from "../Statistics";
import Notification from "../Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  Increment = (e) => {
    this.setState((prevState) => {
      return { [e.target.name]: prevState[e.target.name] + 1 };
    });
    // if (e.target.name === "good") {
    //   this.setState((prevState) => ({
    //     good: prevState.good + 1,
    //   }));
    // }
    // if (e.target.name === "neutral") {
    //   this.setState((prevState) => ({
    //     neutral: prevState.neutral + 1,
    //   }));
    // }
    // if (e.target.name === "bad") {
    //   this.setState((prevState) => ({
    //     bad: prevState.bad + 1,
    //   }));
    // }
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.Increment}
          />
        </Section>

        <Section title={"Statistics"}>
          {this.countTotalFeedback() ? (
            <Statistics
              total={this.countTotalFeedback()}
              goodPercentage={this.countPositiveFeedbackPercentage()}
              good={good}
              neutral={neutral}
              bad={bad}
            />
          ) : (
            <Notification message={"No feedback given"} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
