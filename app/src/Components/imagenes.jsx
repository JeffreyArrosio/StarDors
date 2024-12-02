import { useEffect } from "react";


function Imagenes() {
    useEffect(() => {
        const azul = document.getElementById("azul")
        const rojo = document.getElementById("rojo")
        const verde = document.getElementById("verde")
        const morado = document.getElementById("morado")
        const espadaAzul = document.querySelector(".azul")
        const espadaRojo = document.querySelector(".rojo")
        const espadaVerde = document.querySelector(".verde")
        const espadaMorado = document.querySelector(".morado")

        const handleAzul = () => {
            espadaAzul.classList.remove("display")
            if (!espadaRojo.classList.contains("display")) espadaRojo.classList.add("display")
            if (!espadaVerde.classList.contains("display")) espadaVerde.classList.add("display")
            if (!espadaMorado.classList.contains("display")) espadaMorado.classList.add("display")
        }
        const handleRojo = () => {
            espadaRojo.classList.remove("display")
            if (!espadaAzul.classList.contains("display")) espadaAzul.classList.add("display")
            if (!espadaVerde.classList.contains("display")) espadaVerde.classList.add("display")
            if (!espadaMorado.classList.contains("display")) espadaMorado.classList.add("display")
        }
        const handleVerde = () => {
            espadaVerde.classList.remove("display")
            if (!espadaRojo.classList.contains("display")) espadaRojo.classList.add("display")
            if (!espadaAzul.classList.contains("display")) espadaAzul.classList.add("display")
            if (!espadaMorado.classList.contains("display")) espadaMorado.classList.add("display")
        }
        const handleMorado = () => {
            espadaMorado.classList.remove("display")
            if (!espadaRojo.classList.contains("display")) espadaRojo.classList.add("display")
            if (!espadaVerde.classList.contains("display")) espadaVerde.classList.add("display")
            if (!espadaAzul.classList.contains("display")) espadaAzul.classList.add("display")
        }

        rojo.addEventListener('click', handleRojo)
        azul.addEventListener('click', handleAzul)
        verde.addEventListener('click', handleVerde)
        morado.addEventListener('click', handleMorado)

        return () => {
            rojo.removeEventListener('click', handleRojo)
            azul.removeEventListener('click', handleAzul)
            verde.removeEventListener('click', handleVerde)
            morado.removeEventListener('click', handleMorado)
        }
    })
    return (
        <div id='imagenes' className='flex container mx-auto'>
            <img id="azul" src="Images/azul.webp" alt="" />
            <img id="rojo" src="Images/rojo.webp" alt="" />
            <img id="verde" src="Images/verde.webp" alt="" />
            <img id="morado" src="Images/morado.webp" alt="" />
        </div>
    )
}

export default Imagenes