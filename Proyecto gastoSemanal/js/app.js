//varaibles
const presupuestoUsuario = prompt('Ingrese su presupuesto');
const formulario = document.querySelector('#agregar-gasto')
let cantidadPresupuesto;

//clases
class Presupuesto{   
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }

    presupuestoRestante(cantidad = 0){
        return this.restante -= cantidad
    }
}

class Interfaz{
    insertarPresupuesto(cantidad){
        const labelRestante = document.getElementById('restante');
        const lableTotal = document.getElementById('total');

        labelRestante.textContent = `${cantidad}`;
        lableTotal.textContent = `${cantidad}`;
    }

    imprimirMensaje(mensaje, tipo){

        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert')
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger')
        }
        else{
            divMensaje.classList.add('alert-success')
        }
        divMensaje.appendChild(document.createTextNode(mensaje))
        document.querySelector('.primario').insertBefore(divMensaje,formulario)

        setTimeout(() => {
            divMensaje.remove();
            formulario.reset();
        }, 3000);
    }

    agregarGastosListado(nombre, cantidad){
        const ul =document.querySelector('#gastos ul')
        
        const li = document.createElement('li')
        li.className = 'list-group-item d-flex justify-content-between aling-item-center';
        li.innerHTML= `
            ${nombre}
           <span class="badge badge-primary badge-pill" >$ ${cantidad} </span>
        `;  
        ul.appendChild(li);
    }
    presupuestoRestante(cantidad){

        const restante = document.querySelector('#restante');
        const preRestnUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);
        restante.innerHTML = `${preRestnUsuario}`;
       
    }
}

//eventListeners
document.addEventListener('DOMContentLoaded', function(e){
    if (presupuestoUsuario == null || presupuestoUsuario == '') {
        window.location.reload();
    }else{
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
        // console.log(cantidadPresupuesto.restarPresupuesto('10000'));
        
        const ui = new Interfaz(cantidadPresupuesto); 
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto)   
    }
});

document.addEventListener('submit', function(e){
   const txtGasto = document.querySelector('#gasto').value;
   const txtCantidad = document.querySelector('#cantidad').value;
   
    const ui = new Interfaz();

    if (txtGasto === '' || txtCantidad === '' ) {
        ui.imprimirMensaje('hubo un error', 'error');
    }else{
        ui.imprimirMensaje('Correcto', 'correcto');
        ui.agregarGastosListado(txtGasto, txtCantidad );
        ui.presupuestoRestante(txtCantidad);
    }
});

//Funciones


