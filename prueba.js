
let historial=[];
let conversion;
let pesos;
let dolar;
let precioDolar = 1300;
let fecha = new Date().toDateString();




function dolaresaPesos(pesos) {

    if (pesos < 10) {
        console.log("No puede ingresar menos de 0 pesos");
        return 0;
    }
    else {
        return pesos / precioDolar;
    }

}
do{

conversion = prompt(`1.Convertir Pesos a Dolares\n 2.Salir`);

switch (conversion) {
    case "1":
        pesos = prompt(`Ingrese la cantidad de pesos que desee convertir en dolares`);
        dolaresaPesos(pesos);
        alert("El monto en USD es: " + dolaresaPesos(pesos).toFixed(2) + " USD.");

        historial.push({
            tipo: "divisa",
            entrada: pesos + " ARS",
            salida: dolaresaPesos(pesos).toFixed(2) + " USD",
            fecha: new Date().toLocaleString()
        })
        break;

    case "2":
        alert(`Que tenga un lindo dia`);
        break;

    default:
        alert(`Ha ingresado mal un dato`);
}
console.log(historial);

}while (conversion!="2");