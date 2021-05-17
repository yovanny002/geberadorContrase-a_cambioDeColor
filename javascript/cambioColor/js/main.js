const bg = document.getElementById('bg');
const btn = document.getElementById('cambio');

let colorAleatorio = () => {
    return Math.floor(Math.random() * 255);
}

btn.addEventListener('click', () => {
    bg.style.backgroundColor = 'rgba('+colorAleatorio()+', '+colorAleatorio()+','+colorAleatorio()+')'
}); 