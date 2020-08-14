//VENDEDORAS
const vendedoras = [ "Ada" , "Grace" , "Hedy" , "Sheryl" ];

//VENTAS
const ventas = [
[ 100000000 , 4 , 2 , 2019 , 'Grace' , 'Centro' , [ 'Monitor GPRS 3000' ,
'Motherboard ASUS 1500' ] ],
[ 100000001 , 1 , 1 , 2019 , 'Ada' , 'Centro' , [ 'Monitor GPRS 3000' ,
'Motherboard ASUS 1500' ] ],
[ 100000002 , 2 , 1 , 2019 , 'Grace' , 'Caballito' , [ 'Monitor ASC 543' ,
'Motherboard MZI' , 'HDD Toyiva' ] ],
[ 100000003 , 10 , 1 , 2019 , 'Ada' , 'Centro' , [ 'Monitor ASC 543' ,
'Motherboard ASUS 1200' ] ],
[ 100000004 , 12 , 1 , 2019 , 'Grace' , 'Caballito' , [ 'Monitor GPRS 3000' ,
'Motherboard ASUS 1200' ] ],
[ 100000005 , 21 , 3 , 2019 , 'Hedy' , 'Caballito' , [ 'Monitor ASC 543' ,
'Motherboard ASUS 1200' , 'RAM Quinston' ] ]
]

//PRECIOS
const precios = [
[ 'Monitor GPRS 3000' , 200 ],   
[ 'Motherboard ASUS 1500' , 120 ], 
[ 'Monitor ASC 543' , 250 ],
[ 'Motherboard ASUS 1200' , 100 ],
[ 'Motherboard MZI' , 30 ],
[ 'HDD Toyiva' , 90 ],
[ 'HDD Wezter Dishital' , 75 ],
[ 'RAM Quinston' , 110 ],
[ 'RAM Quinston Fury' , 230 ]
];

//SUCURSALES
const sucursales = [ 'Centro' , 'Caballito' ];

//------------------------------------------------------------------------//
///FUNCIONES
//1 - terminado
const precioMaquina = componentes => { 
    let resultado = 0;
    let sumaComponentes = 0;
    for(let i = 0; i < componentes.length; i++){ /*Nota: Retorna todo el arreglo*/
        resultado = precios.find(componente => componente[0] == componentes[i])
        sumaComponentes += resultado[1]
        console.log(`El precio del componente ${componentes[i]} es ${resultado[1]}`);
    }
        return sumaComponentes;
    };

//-----------------------------------------------------------------------//
//2

const cantidadVentasComponente = componente => {

        let totalVentas = 0;
        for (let i = 0; i < ventas.length; i++) {
            let venta = ventas[i].flat();
            if(venta.includes(componente)) {
                totalVentas+= 1;
            }     
        }
        return totalVentas
};

//-----------------------------------------------------------------------//
//3
const ventasVendedora = nombre => {
    //buscar vendedoras
    const buscarVentasDeVendedora = ventas.filter(vendedora => vendedora[4] === nombre)
            console.log(buscarVentasDeVendedora); 

    let resultadoVentasVendedora = [] ;

    for(let i = 0; i < buscarVentasDeVendedora.length; i++){
        let obtenerComponentes = buscarVentasDeVendedora[i].slice(6);
        console.log(obtenerComponentes);
        resultadoVentasVendedora.push(obtenerComponentes.flat());
           }
        console.log(resultadoVentasVendedora);
        return precioMaquina(resultadoVentasVendedora.flat());
};

//------------------------------------------------------------------------//
//4
const componenteMasVendido = () => {

    let mayor = 0;
    let componenteDeMasVentas ="";
    precios.forEach(componente => {
      let numero = cantidadVentasComponente(componente[0]);
      if(mayor < numero) {
        mayor = numero;
        componenteDeMasVentas = componente[0];
      }
  });
    return componenteDeMasVentas;
  };

//-------------------------------------------------------------------------//  
//5 // no nos da el mismo resultado que fede
const ventasSucursal = sucursal => {
    const buscarSucursal = ventas.filter(sucursales => sucursales[5] === sucursal)
    console.log(buscarSucursal); 

    let resultadoComponentes = [] ;

    for(let i = 0; i < buscarSucursal.length; i++){
        let obtenerComponentes = buscarSucursal[i].slice(6);
        console.log(obtenerComponentes);
        resultadoComponentes.push(obtenerComponentes.flat());
           }
        console.log(resultadoComponentes);
        return precioMaquina(resultadoComponentes.flat());
    };
//--------------------------------------------------------------------------//
//6
const mejorVendedora = () => {
    
    let mayor = 0;
    let mayorVendedora;
    for(let i = 0; i < vendedoras.length; i++){
        if(mayor < ventasVendedora(vendedoras[i])){
            mayor = ventasVendedora(vendedoras[i]);
            mayorVendedora = vendedoras[i];
              };
            };
              return mayorVendedora;
          }; 

//--------------------------------------------------------------------------//
//7
const ventaPromedio = () => {

    let ventasTotales = [] ;

    for(let i = 0; i < ventas.length; i++){
        let obtenerComponentes = ventas[i].slice(6);
        console.log(obtenerComponentes);
        ventasTotales.push(obtenerComponentes.flat());
           }
        console.log(ventasTotales);
        const resultado = precioMaquina(ventasTotales.flat())/ventas.length;
        return Math.floor(resultado);

};
//------------------------------------------------------------------------//

//8
const obtenerIdVenta = () => {
        let max = 999999999;
        let min = 100000000;
        const resultado = Math.random() * (max - min) + min;
        return Math.round(resultado);
      };

      //floor para abajo
      //round entero mas cercano

//----------------------------------------------------------------------//
//9
const agregarVenta = (dia, mes, anio, vendedora, sucursal, componentes) => {

    let nuevaVenta = [];

    nuevaVenta.push(obtenerIdVenta(), dia, mes, anio, vendedora, sucursal, componentes);
    ventas.push(nuevaVenta);

    return nuevaVenta;
    
};

/*const stringConvertarray = (string) => {
    let array = string.split(",");
    return array;
};

const agregarVenta = (dia, mes, año, vendedora, sucursal, componentes) => {
    let lastID = obtenerIdVenta(); //Por ahora...Con ej 8. se utilizara lastId obtenerIdVenta()/
    let arrComp = stringConvertarray(componentes);
    let nuevaVenta = [lastID, Number(dia), Number(mes), Number(año), vendedora, sucursal, arrComp];
    console.log("Agregando venta");
    ventas.push(nuevaVenta);
    console.log("Venta agregada. La lista de ventas actualizada es:");
    console.log(ventas);
};
*/

