
const buscador = document.getElementById('btnBuscar');

buscador.addEventListener('click', () => {
    let navigation = [
        { id: 1, name: 'categoria' },
        { id: 2, name: 'sobre' },
        { id: 3, name: 'nosotros' },
        { id: 4, name: 'nuestros' },
        { id: 5, name: 'contacto' },
    ];
    const input = document.getElementById('inputBuscar').value.toLowerCase().trim().split(' ')[0];

    if (input.length == 0) {
        Swal.fire({
            icon: 'warning',
            title: '¡Ingrese una palabra!',
            text: 'OPPS!'

        })


        return;
    }

    switch (input) {

        case navigation[0].name:
            window.scroll(
                {
                    top: 1000,
                    left: 0,
                    behavior: 'smooth'
                })
            break;
        case navigation[1].name:
            window.scroll(
                {
                    top: 1650,
                    left: 0,
                    behavior: 'smooth'
                })
            break;
        case navigation[2].name:
            window.scroll(
                {
                    top: 2000,
                    left: 0,
                    behavior: 'smooth'
                })
            break
        case navigation[3].name:
            window.scroll(
                {
                    top: 2250,
                    left: 0,
                    behavior: 'smooth'
                })
            break
        case navigation[4].name:
            window.scroll(
                {
                    top: 4500,
                    left: 0,
                    behavior: 'smooth'
                })
            break
        default:
           
            Swal.fire({
                icon: 'error',
                title: '¡Busqueda no encontrada!',
                text: 'Intenta con otra palabra'
               
            })
            

    }

        document.getElementById('inputBuscar').value = '';
    


});

inputBuscar.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        buscador.click();
    }
}
);

const btnChecked = document.getElementById('option1');
btnChecked.addEventListener('click', () => {
   console.log('Chechek1');
    const checked = document.getElementById('option1').checked;
    if (checked) {
        const body= document.getElementById("body")
        body.style.fontSize="27px"
        Swal.fire({
            icon: 'success',
            title: '¡Tamaño de letra cambiado!',
            text: '¡Disfruta de la lectura!'

        })

        return 
        
    }
 


});

const btnChecked2 = document.getElementById('option2');
btnChecked2.addEventListener('click', () => {
    console.log('Chechek2')
    const checked = document.getElementById('option2').checked;
    if (checked) {
        const body= document.getElementById("body")
        body.style.fontSize="1.6rem"
        Swal.fire({
            icon: 'success',
            title: '¡Tamaño de letra cambiado!',
            text: '¡Disfruta de la lectura!'
        })
        return    
    }
}
);

    const validateForm = (event) => {
        event.preventDefault();
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;
    if (correo === '' || mensaje === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos son obligatorios',
        })
            return;
        }
    Swal.fire({
        icon: 'success',
    title: 'Mensaje enviado',
    text: 'Gracias por contactarnos seras redireccionado a la pagina de inicio',
        })
    document.getElementById('correo').value = '';
    document.getElementById('mensaje').value = '';
        // redireccionar a otra pagina

            setTimeout(() => {
        window.location.href = 'index.html';
            }, 3000);

     
    }


