import { useState } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about');

  const sections = ['about', 'portfolio', 'contact', 'resume'];

  return (
    <nav>
      <ul>
        {sections.map(section => (
          <li
            key={section}
            className={activeSection === section ? 'active' : ''}
            onClick={() => setActiveSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
