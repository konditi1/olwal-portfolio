
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const ProjectsWrapper = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;

  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const projects = [
  {
    title: 'Groupie Tracker',
    description:
      'A web app that allows users to track their favorite music groups.',
    link: 'https://github.com/konditi1/Groupie-Tracker-Visualization.git',
    image: '/groupie-tracker.png',
  },
  {
    title: 'ASCII Art',
    description:
      'A creative project that generates ASCII art from text.',
    link: 'https://github.com/konditi1/ascii-art-web-export-file.git',
    image: '/ascii-art.png',
  },
];

function Projects() {
  return (
    <ProjectsWrapper>
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
        />
      ))}
    </ProjectsWrapper>
  );
}

export default Projects;
