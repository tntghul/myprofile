import React from 'react';
import { Link } from 'react-router-dom';

// Card Component using Props
const PortfolioCard = ({ imageUrl, projectLink, projectName, desc }) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4 d-flex">
      <div className="card w-100 shadow-sm">
        <img className="card-img-top" src={imageUrl} alt={projectName} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{projectName}</h5>
          {desc && <p className="card-text text-muted">{desc}</p>}
          <Link
            to={projectLink}
            className="btn btn-primary mt-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

// Main Portfolio Component
const Portfolio = () => {
  const projects = [
    {
      imageUrl: 'https://ezlogistics.in/wp-content/uploads/2022/05/truckwithman4-3-9-74.png',
      projectLink: 'https://tntghul.github.io/react-courier/',
      projectName: 'Courier Clone',
      desc: 'A Courier Tracking App that allows users to book and track deliveries in real-time made with react.',
    },
    {
      imageUrl: 'https://i.pinimg.com/736x/29/95/50/299550146f8718b167570f53472cce51.jpg',
      projectLink: 'https://hospitalsan.netlify.app/',
      projectName: 'Hospital Dashboard',
      desc: 'Full-stack Hospital Management System with doctor, patient, and appointment CRUD features. Built using React, Flask and api-calls.',
    },
    {
      imageUrl: 'https://i1.sndcdn.com/avatars-000202688729-vqbq6s-t240x240.jpg',
      projectLink: 'https://tntghul.github.io/spotify-clone/',
      projectName: 'Spotify Clone',
      desc: 'A responsive clone of Spotify with basic UI features using React and Bootstrap.',
    },
  ];

  return (
    <div className="container">
      <h1 className="mb-4 mt-5"><strong>Portfolio</strong></h1>
      <div className="row">
        {projects.map((project, index) => (
          <PortfolioCard
            key={index}
            imageUrl={project.imageUrl}
            projectLink={project.projectLink}
            projectName={project.projectName}
            desc={project.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
