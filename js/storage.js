const storagePath = "items"

function locaStorageExists(){
    if (localStorage.getItem(storagePath) === null){
        localStorage.setItem(storagePath, JSON.stringify([]));
    }
    return localStorage.getItem(storagePath);
    
}

function addToLocalStorage(formulario){
    const stringStorage = locaStorageExists(); 
    const storage = JSON.parse(stringStorage);
    document.getElementById("nombre").value == "" ? (
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Agrege un nombre!'
    })
    ) : (
    storage.push(formulario),
    console.log(storage),
    localStorage.setItem(storagePath, JSON.stringify(storage)),
Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'Turno agregado',
    showConfirmButton: false,
    timer: 2000
    })
        );
}



