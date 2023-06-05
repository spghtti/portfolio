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
      className="homepage-card project"
      // style={{
      //   backgroundImage: `linear-gradient(to bottom right, ${backgroundColorPrimary}, ${backgroundColorSecondary}) `,
      // }}
    >
      <div className="project-card-inner">
        <div className="project-card-headline-container">
          <div>
            <h2 className="project-card-headline highlight">{project.title}</h2>
            <ul className="project-card-stack">
              {project.stack.map((item: String, index) => (
                <li key={index}>{item}.</li>
              ))}
            </ul>
          </div>
          <div className="project-card-buttons icon-only">
            <a href={project.github_link} className="button-link">
              <button className="button-color">
                <img
                  src="../../assets/icons/github.svg"
                  className="button-icon"
                />
              </button>
            </a>
            <a href={project.live_link} className="button-link">
              <button className="button-color">
                <img
                  src="../../assets/icons/globe.svg"
                  className="button-icon"
                />
              </button>
            </a>
          </div>
        </div>
        <p className="project-card-description">{project.description}</p>
        <img
          src={`/assets/images/${project.image}`}
          className="project-image"
        />
      </div>
    </div>
  );
};
