import React, {useEffect, useState} from 'react';


export default function HireMe() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section  className={`hire-me ${scrolled ? 'navbar--scrolled' : ''}`} key="#contacts">
            <h2 className="section-heading">I Am Available For Freelancer !</h2>
            <a href="#contacts" className="btn-primary">Hire me</a>
        </section>
    );
}