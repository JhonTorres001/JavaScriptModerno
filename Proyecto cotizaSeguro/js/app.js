/*
Variables
*/
const selectAnios = document.querySelector('#anio')
const formulario = document.getElementById("cotizar-seguro")
const max = new Date().getFullYear();
const min =  max - 20;
/*
Evetlistener
*/
cargarEventlistener();

/*
Funciones
*/
function cargarEventlistener(){

    formulario.addEventListener('submit' , cotizar)
}
function Interfaz(){
}

/* 
Constructor del seguri
*/
function Seguro(marca, anio, tipo){
    this.marca =marca;
    this.anio = anio;
    this.tipo = tipo
}


function cotizar(e){
    
    e.preventDefault();
    const marca = document.getElementById('marca')
    const marcaSelecccionada = marca.options[marca.selectedIndex].value;
    const anioSeleccionado  = selectAnios.options[selectAnios.selectedIndex].value;
    const tipoSeleccionado = document.querySelector('input[name="tipo"]:checked').value;

    const interfaz = new Interfaz();

    if (marcaSelecccionada === '' || anioSeleccionado === '' || tipoSeleccionado === '') {
        interfaz.mostrarError('error faltan datos','error');
    }
    else{
         const resultado = document.querySelector('#resultado div');

         if (resultado != null) {
             resultado.remove();
         }

        const seguro = new Seguro(marcaSelecccionada,anioSeleccionado,tipoSeleccionado);
        cantidad = seguro.cotizarSeguro(seguro);
        interfaz.mostrarResultado(seguro, cantidad);
    }
}

for (var index = max; index >= min; index--) {
    const elemento = document.createElement('option');
    elemento.value = index;
    elemento.textContent =index
    selectAnios.appendChild(elemento);
}

Seguro.prototype.cotizarSeguro = function(informacion){


    let cantidad;
    const base = 200;

    switch (this.marca) {
        case "1":   
            cantidad = base * 1.15
            break;
        case "2":     
            cantidad = base * 1.05
            break;
        case "3":  
            cantidad = base * 1.35
            break;   
        default:
            break;
    }
    const aniosDiferencia = new Date().getFullYear() - this.anio;
    cantidad -= (cantidad * (aniosDiferencia * 3)) /100;

    if (this.tipo ==="basico") {
        cantidad *= 1.30
    }else{
        cantidad *= 1.50
    }
    return cantidad;
};


Interfaz.prototype.mostrarError = function(mensaje, tipo){

    const div = document.createElement('div')
    if (tipo === "error") {
        div.classList.add('mensaje', 'error')
    }else{
        div.classList.add('mensaje', 'correcto')
    }
    div.innerHTML =`${mensaje}`;
    formulario.insertBefore(div, document.querySelector('.form-group'));

    setTimeout(function() {
        document.querySelector('.mensaje').remove();;
    }, 3000);
}

Interfaz.prototype.mostrarResultado = function(seguro, total){
    const resultado = document.getElementById('resultado');
    let  marca;
    switch (seguro.marca) {
        case '1':
            marca = 'Americano'
            break;
        case '2':
            marca = 'Asiatico'
            break;
        case '3':
             marca = 'Europeo'
            break;
        default:
            break;
    }

    const div = document.createElement('div');
    div.innerHTML = `
       <p class='header'> Tu resumen:
       <p> Marca: ${marca} </p>
       <p> Año: ${seguro.anio} </p>
       <p> Tipo: ${seguro.tipo} </p>
       <p> Total: ${total} </p>
    `

    const spinner = document.querySelector('#cargando img')
    spinner.style.display = 'block';

    setTimeout(function() {
         spinner.style.display = 'none';
        resultado.appendChild(div);
    }, 3000);
  
}
