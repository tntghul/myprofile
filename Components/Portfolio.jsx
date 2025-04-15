import React from 'react';
import { Link } from 'react-router-dom';

// Card Component using Props
const PortfolioCard = ({ imageUrl, projectLink, projectName }) => {
  return (
    <div className="col-lg-3 mb-4">
      <div className="card img-fluid">
        <img className="card-img-top w-100" src={imageUrl} alt="Card image" />
        <div className="card">
          <Link to={projectLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            {projectName}
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
    },
    {
      imageUrl: 'https://i.pinimg.com/736x/29/95/50/299550146f8718b167570f53472cce51.jpg',
      projectLink: 'https://hospitalsan.netlify.app/',
      projectName: 'Hospital dashboard ',
    },
    {
      imageUrl: 'https://i1.sndcdn.com/avatars-000202688729-vqbq6s-t240x240.jpg',
      projectLink: 'https://tntghul.github.io/spotify-clone/',
      projectName: 'Spotify Clone',
    },
   
  ];

  return (
    <div className="container">
      <h1 className="mb-4 mt-5"><b>Portfolio</b></h1>
      <div className="row mt-3">
        {projects.map((project, index) => (
          <PortfolioCard 
            key={index} 
            imageUrl={project.imageUrl} 
            projectLink={project.projectLink} 
            projectName={project.projectName} 
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
