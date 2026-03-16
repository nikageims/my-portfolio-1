import { useState, useEffect } from 'react';
import Background from './components/Background';
import Hero from './components/Hero';
import EnterScreen from './components/EnterScreen';
import MusicPlayer from './components/MusicPlayer';
import ScrollUI from './components/ScrollUI';
import VideosSection from './components/VideosSection';

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [volume, setVolume] = useState(50);
  const [showScrollUI, setShowScrollUI] = useState(false);

  useEffect(() => {
    if (hasEntered) {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
      setShowScrollUI(true);
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [hasEntered]);

  return (
    <div className="app-container">
      <Background />
      
      {!hasEntered ? (
        <EnterScreen onEnter={() => setHasEntered(true)} />
      ) : (
        <>
          <MusicPlayer initialVolume={volume} />
          <Hero />
          <VideosSection />
          <ScrollUI isVisible={showScrollUI} />
        </>
      )}
    </div>
  );
}

export default App;
