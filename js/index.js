const button = document.querySelector("#agregarMesa");
button.addEventListener("click", event => {
    const input = document.querySelector("#nroMesa").value;
    const tbody = document.querySelector("#tbody-1");
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const btnCerrarMesa = document.createElement("button");
    btnCerrarMesa.type = "button";
    btnCerrarMesa.id = "btnCerrarMesa";
    //// agregandole valores
    btnCerrarMesa.innerText = "Cerrar"
    td1.innerText = input;
    td2.innerText = "0";
    //// agregando al html
    td3.appendChild(btnCerrarMesa);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);

    document.querySelector("#nroMesa").value = "";/// input.value=""
    const borrar = event => {
        const eliminar = event.target.parentElement.parentElement;
        eliminar.remove();
    }
    btnCerrarMesa.addEventListener("click", borrar);
});

