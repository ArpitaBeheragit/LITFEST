import React from 'react';
import "../../../styles/SUMUN/about.css";
import Image from "../../assets/sg.jpg"

const AboutEvent = ({ content, imageSrc }) => {
  return (
    <div className="about-event-container">
      <div className="about-main-container">
        <div className="text-container">
          <div className="heading"><h1>About this Event.........</h1></div>
          <p>
            Model United Nations is a simulation that imitates the procedures of the United Nations finding solutions for real-world problems, done through an academic simulation of the United Nations procedure. The MUN simulation consists of negotiation, discussion, and lively debates, which is the cornerstone of UN activity. Model UN aims to educate students about current events, international relations, diplomacy, and the United Nations agenda. Along with knowledge of the world we live in, participants develop skills including public speaking, presentation, persuasion, situation analysis, research, and critical thinking. SITMUN is an inter-collegiate conference conducted every year. Students from SiliconTech and other institutes across Odisha, participate as delegates in different committees. From each committee the best speakers are awarded.
          </p>
          {content}
        </div>
        <div className="about-image-container">
          <img src={Image} alt="Event Image" />
        </div>
      </div>
    </div>
  );
};

export default AboutEvent;
