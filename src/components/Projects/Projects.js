import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/tourism.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/todo.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Social Chatbox"
              description="Created a platform where one can express thoughts anonymously, and showcase 100+ pictures and much more on a single website. Post, edit, or delete 100+ posts at the convenience of just a few touches.
              Based on popular social media this project lets anonymity add  5+ special features."
              ghLink="https://github.com/SubhamRakshit97/Twitter_Clone"
              demoLink="https://twitterclone.subhamrakshit97.repl.co/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Daily To-Do-Task App"
              description="An App that outlines the key deliverables, milestones, activities, and timelines for a project or initiative. It is important to develop a clear and concise task description so that all stakeholders have a shared understanding of the work that needs to be accomplishe"
              ghLink="https://github.com/SubhamRakshit97/react-to-do"
              demoLink="https://react-to-do-main.subhamrakshit97.repl.co/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Fake Shop"
              description="An ecommerce website which fetches data from an API and displays it using redux principles"
              ghLink="https://github.com/SubhamRakshit97/Fake_shop"
              demoLink="https://fakeshop.subhamrakshit97.repl.co/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="European Tourism"
              description="
              A phenomenal tourism app should offer augmented reality and virtual tour features that enable travelers to explore their destinations in a unique and immersive way. These features allow travelers to experience their destination from a different perspective, adding an extra layer of excitement and wonder to their trip."
              ghLink="https://github.com/SubhamRakshit97/European_Tourists"
              demoLink="https://europeantourismgdfrontend.subhamrakshit97.repl.co/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
