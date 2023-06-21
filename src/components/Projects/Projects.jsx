import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calc from "../../Assets/Projects/calc.png";
import resumeBuilder from "../../Assets/Projects/resumeBuilder.png";
import flashcard from "../../Assets/Projects/flashcard.png";
import crypto from "../../Assets/Projects/crypto.png";
import myportfolio from "../../Assets/Projects/myportfolio.png";
import getYTS from "../../Assets/Projects/getYTS.png";
import myPlan from "../../Assets/Projects/myPlan.png";
import ecom from "../../Assets/Projects/ecom.jpg";
import textToVoice from "../../Assets/Projects/text-to-voice.png";
import moviex from "../../Assets/Projects/moviex.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Calibriya"
              description="This is an online learning platform for the students. This website offers the study material via online platform. Also this website offers the student the online notifications of upcoming hackathons and events under the event page. All the upcoming events will be lined up in this page , students just need to click the interested hackathon, and it will redirect it to the registration page.
              The aim is to just help students by satisfying their needs in one platform."
              ghLink="https://github.com/alishapiplani2001/Calibriya_Elearning"
              demoLink="https://calibriya-elearning.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviex}
              isBlog={false}
              title="Basic Banking System Website"
              description="Sparks Foundation Web Development Internship Project : Basic Banking System website. A web application used to tranfer virtual money between multiple users and also record the banking transactions/ activities."
              ghLink="https://github.com/alishapiplani2001/Basic_Banking_site"
              demoLink="https://basic-banking-site.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myportfolio}
              isBlog={false}
              title="My Portfolio"
              description="This is my portfolio app. I make this this app using create-react-app. I design this app using bootstrap framework. This is responsive app. In this app i tried to explained myself in breif. I have added my resume and all information about me. I added my all projects or recent work also. "
              ghLink="https://github.com/panku-chavan/my-portfolio"
              demoLink="https://panku-chavan.github.io/my-portfolio/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calc}
              isBlog={false}
              title="Simple Calculator"
              description="This is a Simple React App. This is a plain CSS project. All Mathematical operation works properly. Simple Calculator helps users to calculate simple calculations with great speed and accessibility. This makes it the best solution for quick and simple calculations."
              ghLink="https://github.com/alishapiplani2001/simple_calculator"
              demoLink="https://simple-calculator-opal-nine.vercel.app/"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
