window.global = 1
function addEventos() {
    const aumento = document.querySelector('#aumentar')
    const restauro = document.querySelector('#restaurar')
    const mute = document.querySelector("#mute")
    if (aumento)
        aumento.addEventListener('click', () => {
            const divs = document.querySelectorAll(".aumentar")
            divs.forEach(e => {
                let currSize = window.getComputedStyle(e).fontSize
                const newSize = parseInt(currSize) + 2
                if (newSize <= 40)
                    e.style.fontSize = newSize + 'px'
            });
        })
    if (restauro)
        restauro.addEventListener('click', () => {
            const divs = document.querySelectorAll(".restaurar")
            divs.forEach(e => {
                e.style.fontSize = '16px'
            });
        })
    if (mute)
        mute.addEventListener('click', () => {
            window.global === 1 ? window.global = 0 : window.global = 1
            console.log(window.global);
        })

    return () => {
        aumento.removeEventListener('click', () => {
            const divs = document.querySelectorAll(".aumentar")
            divs.forEach(e => {
                let currSize = window.getComputedStyle(e).fontSize
                const newSize = parseInt(currSize) + 2
                if (newSize <= 40)
                    e.style.fontSize = newSize + 'px'
            });
        });
        restauro.removeEventListener('click', () => {
            const divs = document.querySelectorAll(".restaurar")
            divs.forEach(e => {
                e.style.fontSize = '16px'
            });
        });
        mute.removeEventListener('click',  () => {
            window.global === 1 ? window.global = 0 : window.global = 1
            console.log(window.global);
        });
    };
}


export default addEventos;