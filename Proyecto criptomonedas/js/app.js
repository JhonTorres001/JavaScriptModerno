


const cotizador = new Cotizador();
const ui = new Interfaz();
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const monedaSelect = document.getElementById('moneda').value;
    // const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
    const criptoMonedaSelect = document.getElementById('criptomoneda').value;

    if (monedaSelect === '' || criptoMonedaSelect === '' ) {
        ui.mostrarMensaje('los dos campos son obligatorios', 'deep-orange darken-4 card-panel');
    }
    else{
        cotizador.mostrarValores(monedaSelect,criptoMonedaSelect)
            .then(resultado => {

                ui.mostrarResultados(resultado.resultado[0], monedaSelect.toLowerCase());
               
            })
     }
});
