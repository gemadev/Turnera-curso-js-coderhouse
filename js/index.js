document.getElementById('disponibles').addEventListener('click', cargarJSON);
async function cargarJSON() {
  await fetch('especialistas.json')
      .then(function(res) {
          return res.json();
      })
      .then(function(especialistas){
          let html = '';
          especialistas.forEach(function(especialista){
              html += `
                  <li>${especialista.nombre} ${especialista.cargo}</li>
              `;
          })
          document.getElementById('resultado').innerHTML = html;
      })
      .catch(function(error) {
          console.log(error);
      });
}

let borrar = document.getElementById("borrar");
const borrarLista = () => {localStorage.clear()};

borrar.addEventListener("click", () => {
    Swal.fire({
        title: '¿esta seguro?',
        text: "No se va a poder revitir",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#28A745',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrarlo'
      }).then((result) => {
        if (result.isConfirmed) {
            borrarLista(),
          Swal.fire(
            'Borrado!',
            'La lista de turnos fue borrada',
            'finzalizado'
          )
        }
      })
})    