import React, { useState } from "react";
import "../../../styles/SUMUN/faq.css";
import Accordion from "../../shared/Accordion";
import fee from '../../../assets/FEES.png';
import { allFaq } from "../../../data/faq";
import Heading from "../../shared/Heading";

const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

function openBrochure() {
  window.open(fee);
}

const Faq = () => {

  return (
    <div className="faq">
      <Heading heading={"HAVE  A  QUESTION?"} />
      <div className="faq-div">
        <div>
          {allFaq.map((faq) => (
            <Accordion
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;