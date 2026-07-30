import React from 'react';

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'React', level: 88 },
      { name: 'HTML / CSS', level: 90 },
      { name: 'Bootstrap / MUI / shadcn ui / Tailwind CSS', level: 80 },
      { name: 'Recharts', level: 75 },
    ],
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js / NestJS', level: 70 },
      { name: 'REST API Design', level: 75 },
      { name: 'PostgreSQL / MongoDB / SQL', level: 70 },
    ],
  },
  {
    category: 'Tools & Workflow',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Postman / Figma', level: 80 },
      { name: 'ClickUp / Cursor / Claude', level: 78 },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-heading">
        MY <span className="accent">SKILLS</span>
      </h2>
      <div className="section-divider" />
      <div className="skills-groups">
        {skillGroups.map((group, gi) => (
          <div key={gi} className="skills-group">
            <h3 className="skills-group-title">{group.category}</h3>
            <div className="skills-list">
              {group.skills.map((s, i) => (
                <div key={i} className="skill-row">
                  <div className="skill-info">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-pct">{s.level}%</span>
                  </div>
                  <div className="skill-track">
                    <div className="skill-fill" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
