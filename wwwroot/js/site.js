let palabra = document.getElementById("palabra").value.toUpperCase();
let contenedor = document.getElementById("contenedor");
let mensaje = document.getElementById("mensaje");
let intentosRestantes = document.getElementById("intentosRestantes");
let palabraOculta="";
cantidadEspacios();
let letras = [];
let intentos = 10;

        

function cantidadEspacios()
{
    console.log(palabra)
    for(item of palabra)
        {
        contenedor.innerHTML += " _ ";
        
        }
}
function verificarPalabra()
{
    contenedor.innerHTML = "";

    let letra = document.getElementById("letra").value.toUpperCase();

    letras.push(letra);
    console.log(letra);
    console.log("letras:");
    for(const item of letras)
    {
        console.log(item);
    }
    let x = false;

    for(const item of palabra)
    {
        let letraPalabra = item.toUpperCase();

        if(letras.includes(letraPalabra))
        {
            contenedor.innerHTML += letraPalabra + " ";
        }
        else
        {
            contenedor.innerHTML += " _ ";
        }

        if(letra === letraPalabra)
        {
            x = true;
        }
    }

    if(!x)
    {
        for(let i = letras.length - 1; i >= 0; i--)
        {
            if(letras[i] === letra)
            {

                console.log("letra borrada:" + letras[i]);
                letras.splice(i, 1);
            }
        }

        intentos--;

        intentosRestantes.innerHTML = "Intentos restantes: " + intentos;
            
    }

    if(intentos <= 0)
    {
        console.log("perdio");
        mensaje.innerHTML =   "Perdiste, volvé a intentarlo";
          
    }
    else if(!contenedor.innerHTML.includes("_"))
    {
        console.log("gano")
        mensaje.innerHTML =  "Ganaste, felicidades";
           
    }

    
}
