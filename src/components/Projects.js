import React from 'react';

const projects = [
  {
    title: 'Online-store',
    description: 'A modern online store with product browsing, shopping cart, and order management.',
    icon: 'pi pi-shopping-cart',
    link: 'https://market.skamvolrog.dev/',
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-heading">
        MY <span className="accent">PROJECTS MEOW MEOW</span>
      </h2>
      <div className="section-divider" />
      <div className="projects-grid">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-icon">
              <i className={p.icon} />
            </div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
