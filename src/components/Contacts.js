import React from 'react';

const contacts = [
  { icon: 'pi pi-envelope', label: 'nelli7035@gmail.com', href: 'mailto:nelli7035@gmail.com' },
  { icon: 'pi pi-github', label: 'GitHub', href: 'https://github.com/Nelli-meow' },
  { icon: 'pi pi-send', label: 'Telegram', href: 'https://t.me/NifaNifa' },
  { icon: 'pi pi-linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
];

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <h2 className="section-heading">
        MY <span className="accent">CONTACTS</span>
      </h2>
      <div className="section-divider" />
      <div className="contacts-grid">
        {contacts.map((c, i) => (
          <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-item">
            <div className="contact-icon-wrap">
              <i className={c.icon} />
            </div>
            <span className="contact-text">{c.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
