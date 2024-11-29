
function addEventos() {
    const aumento = document.querySelector('#aumentar')
    const restauro = document.querySelector('#restaurar')
    if(aumento)
    aumento.addEventListener('click', () => {
        const divs = document.querySelectorAll(".aumentar")
        divs.forEach(e => {
            let currSize = window.getComputedStyle(e).fontSize
            const newSize = parseInt(currSize) + 2
            e.style.fontSize = newSize + 'px'
        });
    })
    if(restauro)
    restauro.addEventListener('click', () => {
        const divs = document.querySelectorAll(".restaurar")
        divs.forEach(e => {
            e.style.fontSize = '16px'
        });
    })
}


export default addEventos;