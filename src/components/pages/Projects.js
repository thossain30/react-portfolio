import React from 'react';
import logo from '../../images/logoprev.png'
import weather from '../../images/weatherPrev.png'
import pet from '../../images/pethubprev.png'
import blog from '../../images/techblogpreview.png'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import { Image, Card } from 'react-bootstrap';

const projects = [
    {
      id: 1,
      image: pet,
      name: "PetHub",
      gitLink: 'https://github.com/thossain30/Project-Pet-Shelter',
      deployLink: 'https://pet-shelter-g6.herokuapp.com/'
    },
    {
      id: 2,
      image: weather,
      name: "Weather Dashboard",
      gitLink: 'https://github.com/thossain30/WeatherDashboard',
      deployLink: 'https://thossain30.github.io/WeatherDashboard/'
    },
    {
      id: 3,
      image: logo,
      name: "SVG Generator",
      gitLink: 'https://github.com/thossain30/SVGMaker',
    },
    {
      id: 4,
      image: blog,
      name: "Tech Blog",
      gitLink: 'https://github.com/thossain30/tech-blog',
      deployLink: 'https://tech-blog-tzh.herokuapp.com/'
    }
  ];

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <ul className="list-group">
        {projects.map(project => (
          <Card
            style={{
              width: "20rem",
              margin: "20px 50px 20px 10px", backgroundColor: "#e5e8b6" 
            }}
            key={project.id} className="col-3"
          >
          <Card.Title style={{ margin: "15px", fontSize: "27px", color: "#586994"}}>
            {project.name}
          </Card.Title>
          <Card.Text className="mb-2 text-muted" style={{ fontSize: "15px", margin: "20px 0px 20px 10px" }}>{project.summary}</Card.Text>
        <Card.Img
          variant="top"
          src={project.image}
          width={343.08}
          height={200}
          alt={project.name}
          style={{ position: "relative" }}
        />
        <Card.Body style={{ backgroundColor: "#e5e8b6"}}>
          <Card.Text style={{ fontSize: "17px" }} className="text-muted">
            {"Click below to check out the app"}
            <Card.Text style={{ fontSize: "15px" }} className="text-muted">{project.technologies}</Card.Text>
          </Card.Text>
        </Card.Body>
        <Card.Footer
          style={{
            backgroundColor: "#e5e8b6",
            padding: "5px 20px 5px 20px",
          }}
        >
          <a href={project.gitLink} target="_blank" rel="noreferrer" className="card-text">
            <FaGithub style={{ fontSize: "50px" }}/>
          </a>
          <a
            href={project.deployLink}
            target="_blank" rel="noreferrer"
            className="card-text"
          >
            <FaExternalLinkAlt style={{ fontSize: "50px", marginLeft:"50px" }}/>
          </a>
        </Card.Footer>
      
        </Card>
        ))}
      </ul>
    </div>
  );
}

export default Projects;