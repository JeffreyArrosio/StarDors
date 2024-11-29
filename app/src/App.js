import logo from './logo.svg';
import './App.css';
import React from 'react';

export default function App({ mensaje }) {
  const text = mensaje
  const handleSpeak = () => {
    if (text.trim() !== '') {
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
