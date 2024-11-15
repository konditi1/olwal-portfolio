
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardWrapper = styled(motion.div)`
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    color: #555555;
    margin-bottom: 1rem;
  }

  a {
    color: #3498db;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function ProjectCard({project}) {
  return (
    <CardWrapper
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {project.image && <img src={project.image} alt={`${project.title} screenshot`} />}
      
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </CardWrapper>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string, // Image is now optional
  }).isRequired,
};

export default ProjectCard;
