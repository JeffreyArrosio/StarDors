import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

export default function App() {
  const text = "Turbo mamagu evo";

  const handleSpeak = () => {
    if (text.trim() !== '') {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div>
      <h1>Texto a Voz</h1>
      <div
      onMouseOver={handleSpeak}
      >{text}</div>
    </div>
  );
}
