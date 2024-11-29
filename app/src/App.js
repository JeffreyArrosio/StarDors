
import './App.css';
import React from 'react';

export default function App({ mensaje }) {
  const text = mensaje
  const handleSpeak = () => {
    if (window.global === 1) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div>
      <div className="text-white aumentar restaurar"
        onMouseOver={handleSpeak}
      >{text}</div>
    </div>
  );
}
