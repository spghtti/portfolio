import { FC } from 'react';
import Project from '../interfaces/Project';

interface Props {
  project: Project;
  backgroundColorPrimary: string;
  backgroundColorSecondary: string;
}

export const ProjectCard: FC<Props> = ({
  project,
  backgroundColorPrimary,
  backgroundColorSecondary,
}) => {
  return (
    <div
      className="homepage-card"
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${backgroundColorPrimary}, ${backgroundColorSecondary}) `,
      }}
    >
      <div className="homepage-card-inner">
        <div className="homepage-card-headline-container">
          <div>
            <h1 className="homepage-card-headline">{project.title}</h1>
            <ul className="homepage-card-stack">
              {project.stack.map((item: String, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="project-card-buttons icon-only">
            <a href={project.github_link} className="button-link">
              <button>
                <img
                  src="../../assets/icons/github.svg"
                  className="button-icon"
                />
              </button>
            </a>
            <a href={project.live_link} className="button-link">
              <button>
                <img
                  src="../../assets/icons/globe.svg"
                  className="button-icon"
                />
              </button>
            </a>
          </div>
        </div>
        <p className="homepage-card-description">{project.description}</p>
        <img
          src={`/assets/images/${project.image}`}
          className="project-image"
        />
      </div>
    </div>
  );
};
