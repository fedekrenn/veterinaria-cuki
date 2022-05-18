const botonSuscripcion = document.getElementById("btn-info");
botonSuscripcion.addEventListener("click", activarSuscripcion);

function activarSuscripcion() {
    Swal.fire({
        title: 'Ups!',
        text: 'Las suscripciones se habilitarán pronto. ¿Desea dejar una consulta online?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si! Vamos allá',
        cancelButtonText: 'No',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location = './pages/contacto.html'
        }
      })
}