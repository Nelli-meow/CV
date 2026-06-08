import React from 'react';

const projects = [
  {
    title: 'Pet Store E-commerce',
    description: 'Full-stack online pet store built from scratch based on client requirements. React, Node.js, PostgreSQL.',
    icon: 'pi pi-shopping-cart',
    link: '#',
  },
  {
    title: 'Dashboard & Analytics',
    description: 'Interactive dashboards and data visualizations built with Recharts + React + TypeScript.',
    icon: 'pi pi-chart-bar',
    link: '#',
  },
  {
    title: 'UI Component Library',
    description: 'Reusable component library based on shadcn/ui with design tokens for product consistency.',
    icon: 'pi pi-palette',
    link: '#',
  },
  {
    title: 'REST API Service',
    description: 'Backend service on NestJS with authentication, validation, and MongoDB integration.',
    icon: 'pi pi-server',
    link: '#',
  },
  {
    title: 'Portfolio Landing',
    description: 'This website — a personal portfolio landing page built with React + PrimeReact.',
    icon: 'pi pi-globe',
    link: '#',
  },
  {
    title: 'Coming Soon...',
    description: 'New projects are in progress. Stay tuned for updates!',
    icon: 'pi pi-code',
    link: '#',
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
