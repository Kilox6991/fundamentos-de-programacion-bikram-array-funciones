//1 Ejercicio//
var arrayVacio= [];

//2 Ejercicio//
var arrayNumeros= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//3 Ejercicio//
var arrayNumerosPares= [0, 2, 4, 6, 8];

//4 Ejercicio//
var arrayBidimensional= [[0, 1, 2], ['a', 'b', 'c']];

//5 Ejercicio//
function suma(n1,n2){
    return n1 + n2;
}

//6 Ejercicio//
function potenciacion(n1,n2){
    return Math.pow(n1, n2);
}

//Ejercicio 7//
function separarPalabras(string){
    return string.split(" ")
}

//Ejercicio 8//
function repetirString(string,n){
    return string.repeat(n)
}

//Ejercicio 9//
function esPrimo(num){
  for (let i = 2; i < num; i++) {
    if ( num %i === 0)
    return false
  }
  return true;
}

//10//
function ordenarArray (arrayNumeros){
    return arrayNumeros.sort()
};

//11//
function obtenerPares (arrayNumeros){
        let arrayPares= [];
        for (const numero of arrayNumeros) {
            if (numero %2 == 0) {
                arrayPares.push(numero)
            }
        }
        return arrayPares
    }
//12//

const  pintarArray = (array) => {
    srt = ""
    for (let index = 0; index < array.length -1; index++) {
        srt += `${array[index]}, `   
    }
    srt= "[" + srt + array[array.length-1] + "]"
    return srt
}
//13//
function pintarMapi(array, funarray) {
    return array.map (funarray);
}
//14//
function eliminarDuplicados (array) {
    return array.filter(function (valor, indice){
        return array.indexOf(valor) == indice;
    });
}
//15//
const arrayNumerosNeg= [0,-1,-2,-3,-4,-5,-6,-7,-8,-9]

//16//
const holaMundo = ["Hola", "Mundo"]

//17//
const loGuardoTodo = ["hola", "que", 23, 42.33, "tal"]

//18//
const arrayDeArrays = [[756, "nombre"],[225, "apellido"], [298, "direccion"]]

//19//
function multiplicacion (n1, n2){
    return n1 * n2;
}

//20//
function division (n1, n2){
    return n1 / n2;
}

//21//
function esPar(num){
    return num % 2 === 0; 
}

//22//
function suma(n1, n2){
    return n1 + n2;
}
function resta(n1, n2){
    return n1 - n2;
}
function multiplicacion(n1, n2){
return n1 * n2;
}
let arrayFunciones = [suma, resta, multiplicacion];
//23//
function ordenarArray2(arrayNum) {
    return arrayNum.sort(function(a, b){
        return b - a;});
}
// 24//
  function obtenerImpares(array) {
    let impares = array.filter(function (numero) {
      return numero % 2 !== 0;
    });

    return impares;
  }
// 25 //

  function sumarArray(arrayNum) {
    let sumaArray = 0;
    for (let i in arrayNum) {
      sumaArray += arrayNum[i];
    }
    return sumaArray;
  }
// 26 
  function multiplicarArray(arrayNum) {
    let multiplicacion = 1;

    for (let i = 0; i < arrayNum.length; i++) {
      multiplicacion *= arrayNum[i];
    }

    return multiplicacion;
  }


