import React, { useState } from "react";
import { FiArrowDown } from "react-icons/fi";

const Accordion = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(null);
  return (
    <div className="accoridon">
      <div
        className={`question ${showAnswer ? "q-dark" : "q-light"} ${showAnswer === null && "q-light-start"
          }`}
        onClick={() =>
          showAnswer ? setShowAnswer(false) : setShowAnswer(true)
        }
      >
        <h3>{question}</h3>
        {/* <p>{showAnswer ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/> }</p> */}
        <p>
          <FiArrowDown />
        </p>
      </div>
      {showAnswer !== null && (
        <div className={`answer ${showAnswer ? "active" : "inactive"}`}>
          <p dangerouslySetInnerHTML={{ __html: answer }}></p>
        </div>
      )}
    </div>
  );
};

export default Accordion;