import React from 'react';

const projects = [
    {
      id: 1,
      image: "./images/pethubprev.png",
      name: "PetHub",
      gitLink: 'https://github.com/thossain30/Project-Pet-Shelter',
      deployLink: 'https://pet-shelter-g6.herokuapp.com/'
    },
    {
      id: 2,
      image: './images/weatherPrev.png',
      name: "Weather Dashboard",
      gitLink: 'https://github.com/thossain30/WeatherDashboard',
      deployLink: 'https://thossain30.github.io/WeatherDashboard/'
    },
    {
      id: 3,
      image: './images/logoprev.png',
      name: "SVG Generator",
      gitLink: 'https://github.com/thossain30/SVGMaker',
    },
    {
      id: 4,
      image: './images/techblogpreview.png',
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
          <li className="list-group-item" key={project.id}>
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;