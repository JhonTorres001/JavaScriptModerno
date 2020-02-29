class Cotizador{

       async  obtenerMonedasAPI(){
        // Fetch a la API
        const urlObtenerMonedas = await fetch('https://api.coinmarketcap.com/v1/ticker/');
        // respuesta en JSON de las monedas
        const monedas = await urlObtenerMonedas.json();
        return {
             monedas
        }
       }
       
       async mostrarValores(moneda, criptomoneda){
               
            const urlConvertir = await fetch(`https://api.coinmarketcap.com/v1/ticker/${criptomoneda}/?convert=${moneda}`);
       
            const resultado = await urlConvertir.json();
            return {
                resultado
            }
        }
       

};

