let palabra = document.getElementById("palabra").value;
let contenedor = document.getElementById("contenedor");
let mensaje = document.getElementById("mensaje").value;
let intentosRestantes = document.getElementById("intentosRestantes");
let palabraOculta="";
cantidadEspacios();
let letras = [];

        

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
    let intentos= 10;
    contenedor.innerHTML = "";
    letras.push(document.getElementById("letra").value.toUpperCase());
    let letra = document.getElementById("letra").value.toUpperCase();
    let x = false;
    console.log("letras:")
    for(const item of letras)
        {
            console.log(item);
        }
    //letra.push(document.getElementById("letra").value);    
    for(const item of palabra)
        {
            if(letras.includes(item))
            {
                contenedor.innerHTML += item.toUpperCase() + " ";

            }else
                {
                    contenedor.innerHTML += " _ " ;
                }

                if(letra === item){
                    x= true;
                }
        }
        if(!x){
            for(let i = letras.length -1 ; i>= 0, i--;)
                {

                    if(letras[i] === letra)
                        {
                            console.log("letra borrada"+ letras[i]);
                            letras.splice(i,1);
                        }
                }
            intentos--;
            intentosRestantes.innerHTML = "Intentos restantes" + intentos;
        }
        if(intentosRestantes == 0 && palabra.indexOf("_") >=0)
    {
        mensaje.innerHTML("Perdiste, volve a intentarlo");
        
    } else
        mensaje.innerHTML("Ganaste, felicidades");

    
}