import { FC } from 'react';
import ITech from '../interfaces/ITech';

interface Props {
  tech: ITech;
}

export const Technology: FC<Props> = ({ tech }) => {
  return (
    <div
      className="homepage-card tech-card"
      style={{ backgroundColor: `${tech.color}` }}
    >
      <img src={`assets/icons/tech/${tech.icon}`} className="tech-icon" />
      {tech.title}
    </div>
  );
};
