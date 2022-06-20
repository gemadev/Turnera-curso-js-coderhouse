const listado = (JSON.parse(locaStorageExists()));
drawTurnosTable();

if (listado.length === 0){document.getElementById("Turnos").innerHTML = "NO HAY TURNOS CARGADOS"};

function getNewId() {
    let lastId = localStorage.getItem("ids") || "-1";
    let newId = JSON.parse(lastId) + 1;
    localStorage.setItem("ids", JSON.stringify(newId))
    return newId;
}

function redirectToShiftList(){
    event.preventDefault();
    const DateTime = luxon.DateTime;
    const time = DateTime.now();

    const formulario = {
        nombre: document.getElementById("nombre").value,
        especialidad: document.getElementById("cargo").value,
        fecha: time.toLocaleString(DateTime.DATETIME_SHORT),
        itemId: getNewId()
    }
    addToLocalStorage(formulario);
}

function drawTurnosTable(){
    let tbody = document.querySelector('#turnosTable tbody');

    tbody.innerHTML = '';
    
    
    for (let i = 0; i < listado.length; i++){
    let itemsArray = JSON.parse(localStorage.getItem("items"));
    let idArray = itemsArray[i].itemId
    const button = document.createElement("button");
    button.className = "btn btn-danger btn-block";
    button.type = `button ${i}`; 
    button.innerText = `borrar turno`;  
    let row = tbody.insertRow(i);
    row.setAttribute("id", idArray )
    let nameCell = row.insertCell(0),
        specialistCell = row.insertCell(1),
        timeCell = row.insertCell(2);
        boton = row.insertCell(3);
    
    nameCell.innerHTML = listado[i].nombre;
    specialistCell.innerHTML = listado[i].especialidad;
    timeCell.innerHTML = listado[i].fecha;
    boton.appendChild(button);
    
    tbody.appendChild(row);
    button.addEventListener("click", function () {
        let row = event.target.parentNode.parentNode;
        let id = row.getAttribute("id");
        console.log(id)
        row.remove();
        deleteItemsObj(id);
    });
}
}

function deleteItemsObj(id) {
    let itemsObjArr = JSON.parse(localStorage.getItem("items"));
    let itemIndexInArray = itemsObjArr.findIndex(element => element.itemId == id);
    itemsObjArr.splice(itemIndexInArray, 1);
    let itemsArrayJSON = JSON.stringify(itemsObjArr);
    localStorage.setItem("items", itemsArrayJSON);
}

