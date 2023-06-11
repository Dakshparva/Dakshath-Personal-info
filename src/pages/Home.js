import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h3> Hi, My Name is </h3>
        <h2>Dakshath Kumar N</h2>
        <div className="prompt">
          <p>Assistant Engineer at Sandvik Mining and Rock Technology.</p>
        </div>
      </div>
      <div className="skills">
        <h1> Hobbies</h1>
        <ol className="list">
          <li className="item">
            <span>
              Sketching,Painting,Wall Painting, Glass Painting,Dance,Lyrics
              Writing, listening Music{" "}
            </span>
          </li>
          <li className="item">
            <h2>Event-Management done by Me</h2>
            <a href="https://dakshparva.github.io/eventmanagement1/">
              <span>EventmanagementApp</span>
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
