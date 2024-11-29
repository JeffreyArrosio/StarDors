import React, { useEffect } from 'react';
window.global = 1

function Botones() {
    useEffect(() => {
        const aumento = document.querySelector('#aumentar')
        const restauro = document.querySelector('#restaurar')
        const mute = document.querySelector("#mute")

        const handleAumentar = () => {
            const divs = document.querySelectorAll(".aumentar")
                divs.forEach(e => {
                    let currSize = window.getComputedStyle(e).fontSize
                    const newSize = parseInt(currSize) + 2
                    if (newSize <= 40)
                        e.style.fontSize = newSize + 'px'
                });
        }
        const handleRestaurar = () => {
            const divs = document.querySelectorAll(".restaurar")
            divs.forEach(e => {
                e.style.fontSize = '16px'
            });
        }
        const handleMute = () => {
            window.global === 1 ? window.global = 0 : window.global = 1
            console.log(window.global);
        }
        if (aumento)
            aumento.addEventListener('click', handleAumentar)
        if (restauro)
            restauro.addEventListener('click', handleRestaurar)
        if (mute)
            mute.addEventListener('click', handleMute)

        return () => {
            aumento.removeEventListener('click',handleAumentar)
            restauro.removeEventListener('click', handleRestaurar)
            mute.removeEventListener('click', handleMute)
        };
    })

    return (
        <div>
            <div className='flex mb-5'>
                <button id="mute" className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>
                </button>
                <button id="aumentar" className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400">Aumentar Letra</button>
                <button id="restaurar" className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400">Restaurar Letra</button>
            </div>
        </div>
    );
}

export default Botones