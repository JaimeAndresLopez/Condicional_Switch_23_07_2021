// const data = '1';
// switch (data) {
//     case true:
//         console.log(`Estamos en la opcion ${data} Booleano`)
//         break;
//     case 1:
//         console.log(`Estamos en la opcion ${data}.`);
//         break;
//     case "1":
//         console.log(`Estamos en la options ${data} STRING`)
//         break;
//     case 2:
//         console.log(`Estamos en la opcion ${data}.`);
//         break;

//     default:
//         console.log(`La opcion ${data} no existe.`)
//         break;
// }

// let data = 5;
// switch (data<=5) {
//     case true:
//         console.log(`El numero ${data} es menor o igual que 5.`);
//         break;
//     case false:
//         console.log(`El numer ${data} no es menor o igual a 5.`);
//     default:
//         console.log(`La opcion ${data} no existe.`);
//         break;
// }
var foo = 10;
var output = 'Salida: ';
switch (foo) {
  case 10:
    output += '¿Y ';
  case 1:
    output += 'Cuál ';
    output += 'Es ';
  case 2:
    output += 'Tu ';
  case 3:
    output += 'Nombre';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Por favor, selecciona un valor del 1 al 6.');
}