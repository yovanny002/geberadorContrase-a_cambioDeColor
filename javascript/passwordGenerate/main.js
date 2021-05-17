const boton = document.getElementById('btn');

boton.addEventListener('click', () =>{
    let chars = "0123456789abcdefghijklmnopqrstuvwxtzabcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?¿><:{}[]";
    let longitudContrasenas = 16;
    let password = "";
 
     for(let i = 0; i <longitudContrasenas; i++){
        let numerosAleatorios = Math.floor(Math.random() * chars.length);
         password += chars.substring(numerosAleatorios, numerosAleatorios + 1);
     }
     document.getElementById('generate').value = password
})