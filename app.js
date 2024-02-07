let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; //Esta lista tiene como proposito el almacenar el rango de números
let numeroMaximo = 10;

console.log(numeroSecreto)

function asignarTextoElemento(elemento, texto){  //Esta función sirve para establecer parametros "Elemento y texto" ambas son varibles.
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return; //Se usa en funciones para retornar algo en especifico, en este caso no retorna nada por ser texto simple.
}  

/*Las funciones se ejecutan primero que las variables*/ 
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);//Este input representa la cajita blanca de texto en el juego
    
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento(`p`, `Acertaste el número en ${intentos} ${(intentos === 1) ? `vez` : `veces`}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);//
    } else {
        //El usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento(`p`, `El número secreto es menor`);
        } else{
            asignarTextoElemento(`p`, `El número secreto es mayor`);
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){//Esta función limpia el dato ingressdo por el usuario.
    document.querySelector(`#valorUsuario`).value = ``;
    
}

//Esta función determina el número de manera aleatorio
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1; //Entre 1 y 10
    //Si el numero generado esta incluido en la lista se hace la operación, de lo contrario realiza otra.
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los números 
    if(listaNumerosSorteados.length == numeroMaximo){// Este "if" funciona como validador, de comprobar si todos los números fueron sorteados.
        asignarTextoElemento(`p`,`Ya se sortearon todos lo números posibles`);
    } else{

         if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
         } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
         }

    }
    //el método includes realiza el chequeo de la lista de elementos en la lista. 
}

function condicionesIniciales(){
    asignarTextoElemento(`p`,`Indica un número del 1 al ${numeroMaximo}`);
    asignarTextoElemento(`h1`, `Juego del número secreto!`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos;
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector(`#reiniciar`).setAttribute(`disabled`,`true`);
    
}

condicionesIniciales();


