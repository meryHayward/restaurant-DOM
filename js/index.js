const mesas = [];///instancias de la clase mesa
const productos = [];

class Mesa {
    constructor(nroMesa) {
        this.nroMesa = nroMesa;
    }
}

class Producto {
    constructor(id, producto, precio) {
        this.id = id;
        this.producto = producto;
        this.precio = precio;
    }
}

const button = document.querySelector("#agregarMesa");
button.addEventListener("click", event => {
    const input = document.querySelector("#nroMesa").value;/// esto agarra lo que la persona le llena, como un promt
    const tbody = document.querySelector("#tbody-1");//// A partir de aqui se crean todos los demas
    const mesa = new Mesa(input);//// por aca ingreso a la nva instacia de mesa el nro
    mesas.push(mesa);


    ///// CREO ELEMENTOS AL HACERLE CLICK AL BOTON
    const tr = document.createElement("tr");/// fila
    const td1 = document.createElement("td");/// columna
    const td2 = document.createElement("td");/// columna
    const td3 = document.createElement("td");/// columna
    const btnCerrarMesa = document.createElement("button");/// es el boton que se crea en la fial cdo aparece el prod
    btnCerrarMesa.type = "button";
    btnCerrarMesa.id = "btnCerrarMesa";
    //// agregandole valores
    btnCerrarMesa.innerText = "Cerrar"
    td1.innerText = input;
    td2.innerText = "0";
    //// agregando al html
    td3.appendChild(btnCerrarMesa);
    tr.appendChild(td1);/// a la izq
    tr.appendChild(td2);
    tr.appendChild(td3);/// mas a la derecha (importa como lo cargas)
    tbody.appendChild(tr);

    document.querySelector("#nroMesa").value = "";/// input.value=""/// esto es para que se reinicie el input y no haya ningun valor previo
    const borrar = event => {
        const eliminar = event.target.parentElement.parentElement;/// el target te dice el btn dde estas haciendo la accion, quien es el bton
        eliminar.remove();
    }
    btnCerrarMesa.addEventListener("click", borrar);

    //// aqui comienza el select, ya que si la mesa esta vacia no hay select

    actualizarSelect();

});

const actualizarSelect = () => {
    const select = document.querySelector("#NroMesaDropDown");
    select.innerHTML = "";/// se reseteam las options para crear desde cero
    for (let mesa of mesas) {//// mesa es cada uno d elos indices del array mesa
        const option = document.createElement("option");
        select.appendChild(option);
        option.innerText = mesa.nroMesa;
        option.value = mesa.nroMesa;
    }
}

let id = 01;

const button2 = document.querySelector("#agregarProducto");
button2.addEventListener("click", event => {
    const input2 = document.querySelector("#producto").value;
    const input3 = document.querySelector("#precio").value;
    const producto = new Producto(id, input2, input3);//// por aca ingreso a la nva instacia de producto
    productos.push(producto);
    /*    id++; */


    const tbody = document.querySelector("#tbody-2");
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const btnEliminarProducto = document.createElement("button");
    btnEliminarProducto.type = "button";
    btnEliminarProducto.id = "btnEliminarProducto";


    ////// AGREGAR VALORES////
    btnEliminarProducto.innerText = "Eliminar"

    /* td1.innerText = input; */
    td1.innerText = id++;
    td2.innerText = input2;
    td3.innerText = input3;

    ////// AGREGAR AL HTML
    td4.appendChild(btnEliminarProducto);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tbody.appendChild(tr);

    //// ACCION BORRAR

    document.querySelector("#producto").value = "";/// input.value=""
    document.querySelector("#precio").value = "";
    const borrar = event => {
        const eliminar = event.target.parentElement.parentElement;
        eliminar.remove();
    }
    btnEliminarProducto.addEventListener("click", borrar);
    agregarProducto();
});

const agregarProducto = () => {
    const tbody = document.querySelector("#tbody-3");
    tbody.innerHTML = "";/// se reseteam las options para crear desde cero
    for (let producto of productos) {//// mesa es cada uno d elos indices del array mesa
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const input = document.createElement("input");
        input.type = "number";

        td2.appendChild(input);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);

        td1.innerText = producto.producto;
        td1.value = producto.producto;//// producto que es el indice y producto que es la propiedad de la instancia
    }

}