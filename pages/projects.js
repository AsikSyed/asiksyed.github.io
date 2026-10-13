import Head from 'next/head';
import Header from '../components/Header';
import projects from '../data/projects';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Asik Syed</title>
      </Head>

      <div className="page-shell">
        <Header />

        <main className="container">
          <section className="section reveal">
            <div className="section-heading">
              <p className="mini-label">Portfolio</p>
              <h2>All projects</h2>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article key={project.name} className="project-card">
                  <span className="project-tag">{project.language}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    View project →
                  </a>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
