import React from 'react';

export default function Hidden({ clase, titulo, mensaje }) {
    const text = mensaje
    const title = titulo
    let image, video
    const handleSpeak = () => {
        if (window.global === 1) {
            const utterance = new SpeechSynthesisUtterance(text);
            const utteranceTitle = new SpeechSynthesisUtterance(title);
            window.speechSynthesis.speak(utteranceTitle);
            window.speechSynthesis.speak(utterance);
        }
    };
    if (clase === 'azul') {
        image = <img src="Images/obiwan.jpg" alt="" />
        video = <iframe width="560" height="315" src="https://www.youtube.com/embed/_V97ESHV2RA?si=xe-_lbomdQthHuG0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    } else if (clase === 'rojo') {
        image = <img src="Images/vader.webp" alt="" />
        video = <iframe width="560" height="315" src="https://www.youtube.com/embed/9Z8mgkqjq90?si=UENJ0rjP6nzTTqWL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    }
    else if (clase === 'verde') {
        image = <img src="Images/yoda.webp" alt="" />
        video = <iframe width="560" height="315" src="https://www.youtube.com/embed/PAAOpq20ohc?si=DSqVU6VoPluv3T-3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    }
    else {
        image = <img src="Images/windu.jpg" alt="" />
        video= <iframe width="560" height="315" src="https://www.youtube.com/embed/D4RQEEyTZWU?si=xxBA2eE1X0UqQlXO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    }

    return (
        <div className={`container mx-auto ${clase} display`}>
            <h2 className="text-white aumentar restaurar mb-2 "
                onMouseOver={handleSpeak}>
                {titulo}</h2>
            <div className="text-white aumentar restaurar mb-2"
                onMouseOver={handleSpeak}
            >{text}</div>
            <div className='image mx-auto mt-4'>{image}</div>
            <div className='flex items-center justify-center mb-4'>{video}</div>
        </div>
    );
}