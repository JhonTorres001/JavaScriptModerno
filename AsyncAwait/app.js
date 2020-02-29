//Async Await

async function obtenerClientes(){
    //Crear Promise

    const clientes = new  Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`clientes descargados...`)
        }, 10000);
    });

    const error = false;

    if (!error) {
        const respuesta = await clientes;
        return respuesta;
    }
    else{
        await Promise.reject('hubo un error...')
    }

}

obtenerClientes()
    .then(res => console.log(res))
    .catch(res => console.log(res))

    console.log('test')