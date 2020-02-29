class Interfaz{

    constructor(){
        this.init();
    }
    init(){
        this.construirSelect();
    }

    construirSelect(){
        cotizador.obtenerMonedasAPI()
        .then(moneda => {
        
            const arrayMoneda = moneda.monedas;
            const select = document.getElementById('criptomoneda');
         
            arrayMoneda.forEach(Money => {
                
                const option = document.createElement('option');//createElement('option');
                option.value = Money.id;
                option.appendChild(document.createTextNode(Money.name))
                select.appendChild(option);
            });

        });
    }

    mostrarMensaje(mensajes, clases){
        const div = document.createElement('div')
        div.className = clases;
        div.appendChild(document.createTextNode(mensajes));

        const divMensaje  = document.querySelector('.mensajes');
        divMensaje.appendChild(div);

        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }

    mostrarResultados(resultado , moneda){
        // console.log(resultado);
        // console.log(moneda);
        const resultadoAnterior = document.querySelector('#resultado > div')

        if(resultadoAnterior){
            resultadoAnterior.remove();
        }

        this.mostrarSpinner();
        const hora = new Date(resultado.last_updated * 1000);
        const horaActualizada = `${hora.getHours()}:${hora.getMinutes()}`;
        const etiquetaMoneda = `price_${moneda}`;
        const valor = resultado[etiquetaMoneda];

        const MonedaUpper = moneda.toUpperCase();

        let templateHTML = '';

        templateHTML += `
            <div class ="card cyan darken-3">
                <div class ="card-content white-text">
                    <span class ="card-tittle"> Resultado:</span>
                    <p>El precio de ${resultado.name} a moneda: ${MonedaUpper} es de: ${valor}</p>
                    <p>Ultima Hora ${resultado.percent_change_1h}</p>
                    <p>Ultimas 24 Horas ${resultado.percent_change_24h}</p>
                    <p>Ultimos 7 dias ${resultado.percent_change_7d}</p> 
                    <p>Ultima actualización ${horaActualizada} horas</p>                 
                </div>
            </div>
        `

        setTimeout(() => {
            document.querySelector('#resultado').innerHTML = templateHTML;
            document.querySelector('.spinner img').remove();
        }, 3000);
     
    }

    mostrarSpinner(){
        const spinner = document.createElement('img')
        spinner.src = 'img/spinner.gif'
        document.querySelector('.spinner').appendChild(spinner);
    }
};