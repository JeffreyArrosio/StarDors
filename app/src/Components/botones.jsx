import React, { useEffect, useState } from 'react';
window.global = 1

function Botones() {
    useEffect(() => {
        const aumento = document.querySelector('#aumentar')
        const restauro = document.querySelector('#restaurar')
        const mute = document.querySelector("#mute")
        const light = document.querySelector("#light")

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
            window.speechSynthesis.cancel()
        }
        const handleLight = () => {
            const body = document.querySelector("body")
            if (isActiveLight) {
                body.style.backgroundImage = "url('Images/nubes.webp')"
                body.style.color = "black"
            }else{
                body.style.backgroundImage = ""
                body.style.color = ""
            }
        }

        if (aumento)
            aumento.addEventListener('click', handleAumentar)
        if (restauro)
            restauro.addEventListener('click', handleRestaurar)
        if (mute)
            mute.addEventListener('click', handleMute)
        if(light)
            light.addEventListener('click',handleLight)

        return () => {
            aumento.removeEventListener('click', handleAumentar)
            restauro.removeEventListener('click', handleRestaurar)
            mute.removeEventListener('click', handleMute)
            light.removeEventListener('click',handleLight)
        };
    })

    const [isActive, setIsActive] = useState(false);
    const [isActiveLight, setisActiveLight] = useState(true);

    return (
        <div>
            <div className='flex mb-5 container mx-auto'>
                <button onClick={() => setIsActive(!isActive)} id="mute" className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400">
                    {!isActive ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                        </svg>
                    }
                </button>
                <button id="aumentar" className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400">Aumentar Letra</button>
                <button id="restaurar" className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400">Restaurar Letra</button>
                <button onClick={() => setisActiveLight(!isActiveLight)} id="light" className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400">
                    {!isActiveLight ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    }
                </button>

            </div>
        </div>
    );
}

export default Botones