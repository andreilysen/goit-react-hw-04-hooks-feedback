import React, { useState } from "react";
import Section from "../Section";
import FeedbackOptions from "../ButtonFeedback";
import Statistics from "../Statistics";
import Notification from "../Notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Increment = (e) => {
    const { name } = e.target;
    switch (name) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={Increment}
        />
      </Section>

      <Section title={"Statistics"}>
        {countTotalFeedback() ? (
          <Statistics
            total={countTotalFeedback()}
            goodPercentage={countPositiveFeedbackPercentage()}
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
};

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   Increment = (e) => {
//     this.setState((prevState) => {
//       return { [e.target.name]: prevState[e.target.name] + 1 };
//     });
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div>
//         <Section title={"Please leave feedback"}>
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.Increment}
//           />
//         </Section>

//         <Section title={"Statistics"}>
//           {this.countTotalFeedback() ? (
//             <Statistics
//               total={this.countTotalFeedback()}
//               goodPercentage={this.countPositiveFeedbackPercentage()}
//               good={good}
//               neutral={neutral}
//               bad={bad}
//             />
//           ) : (
//             <Notification message={"No feedback given"} />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

export default App;
