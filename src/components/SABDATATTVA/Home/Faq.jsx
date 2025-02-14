import React, { useState } from "react";
import "../../../styles/SABDATATTVA/faq.css";
import Accordion from "../../shared/Accordion";
import fee from '../../../assets/FEES.pdf';
import { allFaq } from "../../../data/faq_sabdattatva";
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
          {allFaq.map((faq_sabdattatva) => (
            <Accordion
              key={faq_sabdattatva.id}
              question={faq_sabdattatva.question}
              answer={faq_sabdattatva.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;