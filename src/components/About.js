import React from 'react';
import { Button } from 'primereact/button';
import photo from "../assets/photo.jpg";
import cv from '../assets/CV.pdf';

const details = [
  { label: 'Name', value: 'Nelli Gorlova' },
  { label: 'Role', value: 'Frontend Developer' },
  { label: 'Stack', value: 'React · TypeScript' },
  { label: 'Email', value: 'nelli7035@gmail.com' },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-photo">
          <div className="about-photo-placeholder">
            {/*<i className="pi pi-user" />*/}
              <img src={photo} alt="#"/>
          </div>
        </div>
        <div className="about-info">
          <h2 className="about-heading">
            I Am <span className="accent">Web Developer</span>
          </h2>
          <p className="about-text">
            I write clean, maintainable code and care about how things work under the hood,
            not just whether they work. Fast learner, good team player, and ready to take on
            more responsibility for features and technical decisions. Comfortable picking up
            unfamiliar codebases, reading documentation, and figuring things out independently.
          </p>
          <div className="about-details">
            {details.map((d, i) => (
              <div key={i} className="about-detail-row">
                <span className="about-detail-label">{d.label}:</span>
                <span className="about-detail-value">{d.value}</span>
              </div>
            ))}
          </div>
            <Button
                label="Download CV"
                icon="pi pi-download"
                className="btn-primary"
                onClick={() => {
                    const link = document.createElement('a');
                    link.href = cv;
                    link.download = 'CV.pdf';
                    link.click();
                }}
            />
        </div>
      </div>
    </section>
  );
}
