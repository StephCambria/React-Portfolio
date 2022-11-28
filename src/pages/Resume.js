import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GiSchoolBag } from "react-icons/gi";
import { IoIosSchool } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import "../styles/Resume.css";
// Resume will contain an extremely bare-bones resume
// For the sake of time

function Resume() {

  const download = () => {
      fetch("CambriaResume.pdf").then(response => {
        response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);

          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "CambriaResume.pdf";
          alink.click();
        })
      })
    }

  return (
    <div className="experience">
      <br></br>
      <h3 className="title">Resume</h3>
      <br></br>
      <VerticalTimeline lineColor="#C0D4DB">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009-2012"
          iconStyle={{ background: "#fff", color: "#C0D4DB" }}
          icon={ <GiSchoolBag /> }
        >
          <h5 className="vertical-timeline-element-title">Arlington Catholic High School, Arlington, MA</h5>
          <p>High School Diploma</p>

        </VerticalTimelineElement>
      </VerticalTimeline>

      <VerticalTimeline lineColor="#C0D4DB">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012-2016"
          iconStyle={{ background: "#fff", color: "#C0D4DB" }}
          icon={ <IoIosSchool /> }
        >
          <h5 className="vertical-timeline-element-title">Montserrat College of Art, Beverly, MA</h5>
          <h4 className="vertical-timeline-element-subtitle">Bachelors of Fine Art</h4>
          <p>Illustration</p>

        </VerticalTimelineElement>
        </VerticalTimeline>

        <VerticalTimeline lineColor="#C0D4DB">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-present"
          iconStyle={{ background: "#fff", color: "#C0D4DB" }}
          icon={ <FaLaptopCode /> }
        >
          <h5 className="vertical-timeline-element-title">University of New Hampshire</h5>
          <h4 className="vertical-timeline-element-subtitle">Certificate</h4>
          <p>Full-Stack Web Development</p>

        </VerticalTimelineElement>
      </VerticalTimeline>

      <br></br>

      <div className="skills">
        <ul className="list">
          <li className="list-item">
            <h4 className="title">Front-End Skills</h4>
            <span>ReactJS, HTML, CSS, Javascript, BootStrap, TailwindCSS</span>
          </li>

          <br></br>
          <li className="list-item">
            <h4 className="title">Back-End Skills</h4>
            <span>NodeJS, ExpressJS, MySQL, MongoDB</span>
          </li>
          <br></br>
          <li className="list-item">
            <h4 className="title">Supplemental Skills</h4>
            <span>Painting, Illustration, Graphic Design</span>
          </li>
        </ul>
        <br></br>
        <button className="btn" onClick={download}>Download</button>
      </div>
    </div>

    
  );
}

export default Resume;
