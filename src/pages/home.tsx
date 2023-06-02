import { ReactElement } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { Technology } from '../components/TechnologyCard';
import * as Projects from '../projectList';
import * as Stack from '../stackList';
import { Header } from '../components/Header';

export function Home(): ReactElement {
  return (
    <div>
      <Header />
      <main>
        <section className="hero homepage-section">
          <div className="homepage-card card-one title-card">
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
                  <button className="hero-card-button button-color">
                    GitHub{' '}
                    <img
                      src="/assets/icons/github.svg"
                      className="button-icon"
                    />
                  </button>
                </a>
                <a href="/contact">
                  <button className="hero-card-button button-color">
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
        <section className="homepage-section">
          <div className="homepage-stack-container">
            <div className="homepage-card title-card tech-card">
              <div className="homepage-card-inner">
                <h1 className="smaller-h1">Skills &#128218;</h1>
              </div>
            </div>
            <Technology tech={Stack.html} />
            <Technology tech={Stack.css} />
            <Technology tech={Stack.javascript} />
            <Technology tech={Stack.typescript} />
            <Technology tech={Stack.react} />
            <Technology tech={Stack.node} />
            <Technology tech={Stack.express} />
            <Technology tech={Stack.mongo} />
            <Technology tech={Stack.git} />
            <Technology tech={Stack.linux} />
          </div>
        </section>
        <section className="homepage-section">
          <div className="homepage-divider homepage-card title card">
            <h1>Personal projects &#128296;</h1>
          </div>
          <div className="project-cards-wrapper">
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
          </div>
        </section>
      </main>
    </div>
  );
}
