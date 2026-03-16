import { useState, useEffect } from 'react';
import spyglass from '../assets/spyglass.png';

const ScrollUI = ({ isVisible }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <>
      <button className={`back-to-top ${showBackToTop ? 'show' : ''}`} onClick={scrollToTop}>
        <div className="back-to-top-arrows">
          <i className="fas fa-chevron-up btt-arrow btt-arrow1"></i>
          <i className="fas fa-chevron-up btt-arrow btt-arrow2"></i>
          <i className="fas fa-chevron-up btt-arrow btt-arrow3"></i>
        </div>
        <img src={spyglass} alt="Back to Top" className="back-to-top-spyglass" />
      </button>
    </>
  );
};

export default ScrollUI;
