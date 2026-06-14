import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';

const roles = ['Frontend Developer', 'React Developer', 'TypeScript Developer'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 80;

    if (!deleting && charIndex === current.length) {
      setTimeout(() => setDeleting(true), 1800);
      return;
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (deleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <span className="hero-hello">HELLO!</span>
        <h1 className="hero-heading">
          I Am <span className="hero-typed">{roles[roleIndex].substring(0, charIndex)}</span>
          <span className="hero-cursor">|</span>
        </h1>
        <p className="hero-description">
          Frontend developer with 1+ year of commercial experience building
          and shipping React/TypeScript applications, from design to deployment.
        </p>
        <div className="hero-buttons">
          <a href="#projects">
            <Button label="View Work" className="btn-primary" />
          </a>
          <a href="#contacts">
            <Button label="Hire Me" className="btn-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
