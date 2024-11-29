import React from 'react';

export default function Hidden({ titulo, mensaje}) {
    const text = mensaje
    const handleSpeak = () => {
        if (window.global === 1) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        }
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-white aumentar restaurar mb-2 display">{titulo}</h2>
            <div className="text-white aumentar restaurar mb-2 display"
                onMouseOver={handleSpeak}
            >{text}</div>
        </div>
    );
}