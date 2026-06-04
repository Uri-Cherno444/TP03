let palabra = document.getElementById("palabra").value;
let contenedor = document.getElementById("encriptado").value;
let mensaje = document.getElementById("mensaje").value;
let palabraOculta="";
let intentosRestantes = 10;
 
        

function cantidadEspacios()
{
    for(let i = 0; i <= palabra.Lenght; i++)
        {
        contenedor.innerHTML += "_ ";
        
        }
}
function verificarPalabra()
{
    
    contenedor.innerHTML = "";
    letra.push(document.getElementById("letra").value);    
    for(const item of palabra)
        {
            if(letra.includes(item))
            {
                contenedor.innerHTML += item += " ";

            }else
                {
                    contenedor.innerHTML += "_ "
                }
        }

    intentosRestantes-= 1;
    
    
}
function crearMensaje()
{
    if(intentosRestantes == 0 && palabra.indexOf("_")>=0)
    {
        mensaje = "Perdiste, volve a intentarlo"
    } else
        mensaje = "Ganaste, felicidades";
}