import Head from 'next/head';
import Header from '../components/Header';
import projects from '../data/projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Asik Syed | QA Automation Engineer</title>
        <meta
          name="description"
          content="Asik Syed portfolio: QA Automation Engineer with expertise in Selenium, Java, Appium, Cucumber, TestNG, and API testing."
        />
      </Head>

      <div className="page-shell">
        <Header />

        <main className="container">
          <section className="hero reveal">
            <div className="hero-copy">
              <p className="eyebrow">QA Automation Engineer</p>
              <h1>
                Building <span>reliable automation</span> for modern products.
              </h1>
              <p className="lead">
                Hi, I’m <strong>Asik Syed</strong> — a QA automation engineer focused on Java-based testing,
                Selenium, Cucumber, Appium, API validation, and scalable regression solutions.
              </p>

              <div className="actions">
                <a href="https://github.com/AsikSyed" target="_blank" rel="noreferrer" className="btn primary">
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/asik-syed-code-lover321/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn secondary"
                >
                  LinkedIn
                </a>
              </div>

              <ul className="stats">
                <li>
                  <strong>8+</strong>
                  <span>Projects</span>
                </li>
                <li>
                  <strong>Java</strong>
                  <span>Core stack</span>
                </li>
                <li>
                  <strong>Selenium</strong>
                  <span>Automation</span>
                </li>
              </ul>
            </div>

            <div className="hero-card">
              <img
                src="https://avatars.githubusercontent.com/u/77289022?v=4"
                alt="Asik Syed"
              />
              <div className="card-badge">
                <span>Available for</span>
                <strong>Automation roles</strong>
              </div>
            </div>
          </section>

          <section className="section reveal" id="about">
            <div className="section-heading">
              <p className="mini-label">About me</p>
              <h2>Quality-first engineering for real-world products.</h2>
            </div>

            <div className="two-col">
              <div className="panel">
                <p>
                  I am a QA automation-focused engineer with hands-on experience in Selenium WebDriver,
                  Java-based test automation, Cucumber BDD, Appium mobile testing, TestNG, and API validation.
                </p>
                <p>
                  My goal is to build stable, maintainable test systems that reduce regression risk and raise confidence
                  in every release.
                </p>
              </div>

              <div className="panel">
                <h3>Quick profile</h3>
                <ul className="check-list">
                  <li>Java + Selenium Automation</li>
                  <li>Postman / Newman API testing</li>
                  <li>Cucumber BDD workflows</li>
                  <li>Appium mobile automation</li>
                  <li>Regression and release confidence</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="section reveal" id="projects">
            <div className="section-heading">
              <p className="mini-label">Projects</p>
              <h2>Featured work</h2>
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

          <section className="section reveal" id="skills">
            <div className="section-heading">
              <p className="mini-label">Skills</p>
              <h2>My toolkit</h2>
            </div>

            <div className="skills-grid">
              <div className="panel">
                <h3>Languages</h3>
                <div className="chips">
                  <span>Java</span>
                  <span>JavaScript</span>
                  <span>HTML</span>
                  <span>C++</span>
                </div>
              </div>

              <div className="panel">
                <h3>Automation</h3>
                <div className="chips">
                  <span>Selenium</span>
                  <span>JUnit</span>
                  <span>TestNG</span>
                  <span>Cucumber</span>
                  <span>Appium</span>
                </div>
              </div>

              <div className="panel">
                <h3>API & QA</h3>
                <div className="chips">
                  <span>Postman</span>
                  <span>Newman</span>
                  <span>REST API</span>
                  <span>Regression Testing</span>
                </div>
              </div>
            </div>
          </section>

          <section className="section reveal" id="contact">
            <div className="section-heading">
              <p className="mini-label">Contact</p>
              <h2>Let’s build better quality together.</h2>
            </div>

            <div className="contact-panel panel">
              <div className="contact-item">
                <span>Email</span>
                <a href="mailto:asiksyed321@gmail.com">asiksyed321@gmail.com</a>
              </div>
              <div className="contact-item">
                <span>GitHub</span>
                <a href="https://github.com/AsikSyed" target="_blank" rel="noreferrer">
                  github.com/AsikSyed
                </a>
              </div>
              <div className="contact-item">
                <span>LinkedIn</span>
                <a href="https://www.linkedin.com/in/asik-syed-code-lover321/" target="_blank" rel="noreferrer">
                  linkedin.com/in/asik-syed-code-lover321
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
