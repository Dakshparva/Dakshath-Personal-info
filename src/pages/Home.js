import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
 <p> Hi, My Name is </p>
    <h2>Dakshath Kumar N</h2>
        <div className="prompt">
          <p>Assistant Engineer at Sandvik Mining and Rock Technology.</p>
          <a href="https://www.linkedin.com/in/dakshath-kumar-n-4a2a66114"><LinkedInIcon  /></a>
          <a href="https://www.instagram.com/art_by_daksh_parva/"><InstagramIcon /></a>
         
        </div>
      </div>
      <div className="skills">
        <h1> Hobbies</h1>
        <ol className="list">
          <li className="item">
            <span>
             Sketching,Painting,Wall Painting,
             Glass Painting,Dance,Lyrics Writing,
             listening Music            </span>
          </li>
          <li className="item">
            <h2>Event-Management 
              done by Me</h2>
            <a href="https://dakshparva.github.io/eventmanagement1/">
              EventmanagementApp</a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
