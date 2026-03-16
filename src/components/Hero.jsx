import { useState, useEffect } from 'react';
import ytLogo from '../assets/yt_logo.png';
import spyglass from '../assets/spyglass.png';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'NikMax';
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(200);

  useEffect(() => {
    let timeout;
    const handleTyping = () => {
      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
        if (text === fullText) {
          setSpeed(2000);
          setIsDeleting(true);
        } else {
          setSpeed(200);
        }
      } else {
        setText(fullText.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setSpeed(500);
        } else {
          setSpeed(100);
        }
      }
    };

    timeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, speed]);

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="hero-wrapper">
      <main className="hero-container">
        <div className="character-box">
          <img src={ytLogo} alt="Character" className="mc-skin" />
        </div>

        <div className="content-box">
          <h3 className="hi-text">მაქსიმალური გამარჯობა</h3>
          <h1 className="main-title">
            მე ვარ <span>{text}</span>
            <span className="cursor"></span>
          </h1>
          <p className="description">
            CyberX-ის ერთ-ერთი დამფუძნებელი და Content Creator-ი, ასევე Minecraft სერვერის ადმინისტრატორი.
            ვცდილობ მაქსიმალურად გავაუმჯობესო ჩვენი სერვერის ხარისხი და მომხმარებლების გამოცდილება.
            ამ გვერდზე შეგიძლიათ ნახოთ ჩემი სოციალური ქსელები, ასევე შეგიძლიათ მიყუროთ სხვადასხვა პლატფორმაზე.
          </p>

          <div className="social-icons">
            <a href="https://www.youtube.com/@n1kmax" target="_blank" rel="noreferrer" className="social-link yt">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/_m1qeladze29_/" target="_blank" rel="noreferrer" className="social-link ig">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://discord.gg/dDn8mTg9wU" target="_blank" rel="noreferrer" className="social-link dc">
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </div>
      </main>

      <div className="scroll-indicator show" onClick={scrollToBottom}>
        <img src={spyglass} alt="Scroll Down" className="spyglass-icon" />
        <div className="arrows">
          <i className="fas fa-chevron-down arrow1"></i>
          <i className="fas fa-chevron-down arrow2"></i>
          <i className="fas fa-chevron-down arrow3"></i>
        </div>
      </div>
    </div>
  );
};

export default Hero;
