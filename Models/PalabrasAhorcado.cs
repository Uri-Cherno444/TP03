public class PalabrasAhorcado{

    private List<string> palabras;

    public PalabrasAhorcado()
    {
        palabras = new List<string>();

        palabras.Add("Elefante");
        palabras.Add("Guitarra");
        palabras.Add("Cangrejo");
        palabras.Add("Pantalla");
        palabras.Add("Estrella");
        palabras.Add("Bicicleta");
        palabras.Add("Mariposa");
        palabras.Add("Cuaderno");
        palabras.Add("Invierno");
        palabras.Add("Avestruz");
    }

    public string ObtenerPalabra()
    {
        Random random = new Random();
        int numeroAleatorio = random.Next(1,11);
        return palabras[numeroAleatorio];
    }

}
