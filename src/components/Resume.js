import React from 'react';

const experience = [
  {
    title: 'Frontend Developer',
    place: 'Quadrant · Remote',
    period: '2025 – Present',
    points: [
      'Build and maintain production frontend applications in React + TypeScript, delivering features end-to-end from design to deployment',
      'Develop reusable, accessible UI components with shadcn/ui and design tokens, improving consistency across the product',
      'Implement interactive data visualizations and dashboards using Recharts',
      'Collaborate closely with backend engineers on REST API contracts and integration',
      'Participate in code reviews, sprint planning, and technical discussions',
      'Diagnose and fix performance issues and bugs in existing features',
      'Read and understand unfamiliar parts of the codebase to deliver fixes and new features without breaking existing logic',
    ],
  },
  {
    title: 'Junior Developer, Training & Internship',
    place: 'IT Attractor · Bishkek',
    period: 'Apr 2024 – May 2025',
    points: [
      'Completed an intensive full-cycle web development program covering frontend, backend, and databases',
      'Worked on a 3-month team internship building a pet store e-commerce site from scratch based on client requirements',
      'Built React components and integrated them with REST APIs',
      'Developed backend services with Node.js and NestJS',
      'Worked with PostgreSQL and MongoDB databases',
      'Participated in regular code reviews and team standups using Git, Postman, and Figma',
    ],
  },
];

export default function Resume() {
  return (
    <section className="resume" id="resume">
      <h2 className="section-heading">
        MY <span className="accent">EXPERIENCE</span>
      </h2>
      <div className="section-divider" />
      <div className="experience-list">
        {experience.map((job, i) => (
          <div key={i} className="experience-card">
            <div className="experience-icon">
              <i className="pi pi-briefcase" />
            </div>
            <div className="experience-body">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{job.title}</h3>
                  <span className="experience-place">{job.place}</span>
                </div>
                <span className="experience-period">{job.period}</span>
              </div>
              <ul className="experience-points">
                {job.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
