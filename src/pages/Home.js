import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Tarun</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a
            href="https://www.linkedin.com/in/tarunaaditya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          {/* <a href="mailto:tarunaaditya98@gmail.com" target="_blank" rel="noopener noreferrer">
            <EmailIcon />
          </a> */}
          <a
            href="https://github.com/lordtarun2203"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, Flutter, NPM, BootStrap, MaterialUI,
              TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2> Back-End</h2>
            <span>
              NodeJS, Java Spring, ExpressJS, MySQL, MongoDB, DynamoDB, AWS S3
            </span>
          </li>
          <li className="item">
            <h2> Languages</h2>
            <span> JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
          <li className="item">
            <h2> ML Skills</h2>
            <span>
              Keras, Scikit-learn, Pandas, NumPy, Data Preprocessing, Model
              Evaluation, Regression, Classification, Clustering, Neural
              Networks
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
