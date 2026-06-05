import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Automation Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">US Foods</h4>
            <span className="vertical-timeline-element-location">Chicago, IL</span>
            <p>
              End-to-end test automation across API, database, and UI workflows;
              CI/CD pipeline development;
              MySQL/MongoDB validation;
              JavaScript-based test scripting;
              collaboration with Product Owners, QA/dev leads, and cross-functional teams on planning, design, and delivery.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Quality Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">US Foods</h4>
            <span className="vertical-timeline-element-location">Chicago, IL</span>
            <p>
              Manual testing across API, database, and UI workflows;
              test case creation and execution;
              defect tracking and regression validation;
              MySQL/MongoDB data verification; collaboration with Product Owners, QA/dev leads, and cross-functional teams on planning, design, and release support.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Purdue University Graduate</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor of Science in Computer Science, May 2025</h4>
            <span className="vertical-timeline-element-location">Lafayette, IN</span>
            <p>
              Concentration in Security, Software Engineering, and AI
              <br></br>
              Relevant coursework: Systems Programming, 
              Operating Systems, 
              Cryptography, 
              Computer Security, 
              Information Systems, 
              Artificial Intelligence, 
              Computer Architecture, 
              Data Structures and Algorithms
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;