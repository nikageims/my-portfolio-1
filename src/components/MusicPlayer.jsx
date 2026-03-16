import { useState, useRef, useEffect } from 'react';
import bgMusic from '../assets/nikmax.mp3';

const MusicPlayer = ({ initialVolume }) => {
  const [volume, setVolume] = useState(initialVolume);
  const [isMuted, setIsMuted] = useState(false);
  const [lastVolume, setLastVolume] = useState(initialVolume);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      audioRef.current.play().catch(err => console.error("Audio playback failed:", err));
    }
  }, []);

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
    if (newVolume > 0) setIsMuted(false);
  };

  const toggleMute = () => {
    if (volume > 0) {
      setLastVolume(volume);
      setVolume(0);
      setIsMuted(true);
      if (audioRef.current) audioRef.current.volume = 0;
    } else {
      const restoredVolume = lastVolume || 50;
      setVolume(restoredVolume);
      setIsMuted(false);
      if (audioRef.current) audioRef.current.volume = restoredVolume / 100;
    }
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} src={bgMusic} loop />
      <div id="volume-icon" onClick={toggleMute}>
        {volume === 0 ? <i className="fas fa-volume-mute"></i> : 
         volume < 50 ? <i className="fas fa-volume-down"></i> : 
         <i className="fas fa-volume-up"></i>}
      </div>
      <input
        type="range"
        id="volume-slider"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
};

export default MusicPlayer;
