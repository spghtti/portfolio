import { ReactElement } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import * as Projects from '../projectList';
import { Header } from '../components/Header';

export function Home(): ReactElement {
  return (
    <div>
      <Header />
      <main>
        <section className="homepage-section first-section">
          <div className="homepage-card card-one">
            <div className="homepage-card-inner">
              <h1>
                Hey,<span className="emoji wave-emoji">&#x1F44B;</span>I'm Matt.
              </h1>
              <h2>
                I'm a <span className="inline-block">web developer</span> based
                in Boston.
              </h2>
              <div className="hero-card-buttons-container">
                <a href="https://github.com/spghtti">
                  <button className="hero-card-button">
                    GitHub{' '}
                    <img
                      src="/assets/icons/github.svg"
                      className="button-icon"
                    />
                  </button>
                </a>
                <a href="/contact">
                  <button className="hero-card-button">
                    Contact{' '}
                    <img
                      src="/assets/icons/envelope.svg"
                      className="button-icon"
                    />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <img
            src="/assets/images/me.jpeg"
            className="homepage-picture-img"
            alt="Matt squatting next to a small cactus"
          />
        </section>
        <section className="homepage-cards-wrapper">
          <ProjectCard
            project={{ ...Projects.projectOne }}
            backgroundColorPrimary={'rgba(255, 165, 0, .8)'}
            backgroundColorSecondary={'rgba(255, 165, 0, .6)'}
          />
          <ProjectCard
            project={{ ...Projects.projectTwo }}
            backgroundColorPrimary={'rgba(204, 153, 255, .8)'}
            backgroundColorSecondary={'rgba(204, 153, 255, .6)'}
          />
        </section>
        <section className="homepage-section">
          <ProjectCard
            project={{ ...Projects.projectThree }}
            backgroundColorPrimary={'rgba(255, 127, 80, .8)'}
            backgroundColorSecondary={'rgba(255, 127, 80, .6)'}
          />
          <ProjectCard
            project={{ ...Projects.projectFour }}
            backgroundColorPrimary={'rgba(154, 205, 50, .8)'}
            backgroundColorSecondary={'rgba(154, 205, 50, .6)'}
          />
        </section>
      </main>
    </div>
  );
}
