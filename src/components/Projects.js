import React from 'react';

const projects = [
  {
    title: 'Online-store',
    description: 'A modern online store with product browsing, shopping cart, and order management.',
    icon: 'pi pi-shopping-cart',
    link: 'https://market.skamvolrog.dev/',
    gitLink: 'https://github.com/Nelli-meow/online-shop',
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-heading">
        MY <span className="accent">PROJECTS</span>
      </h2>
      <div className="section-divider" />
        <div className="projects-grid">
            {projects.map((p, i) => (
                <div key={i} className="project-card">
                    <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-main-link"
                    >
                        <div className="project-icon">
                            <i className={p.icon} />
                        </div>

                        <h3 className="project-title">{p.title}</h3>
                        <p className="project-desc">{p.description}</p>
                    </a>

                    <a
                        href={p.gitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-git"
                    >
                        <i className="pi pi-github" /> ссылка GitHub
                    </a>
                </div>
            ))}
        </div>
    </section>
  );
}
