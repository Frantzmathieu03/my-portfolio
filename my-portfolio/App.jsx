import { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';
import Footer from './components/Footer';

const App = () => {
  const [currentSection, setCurrentSection] = useState('about');

  const renderSection = () => {
    switch (currentSection) {
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <ContactForm />;
      case 'resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <>
      <Header />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </>
  );
};

export default App;
