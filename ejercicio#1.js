/* 
1) Programa que sume los valores de un array y que muestre el valor menor mas cercano o igual
al numero K.
*/

//let num =[3,3];
//let num =[3,4,5];
let num =[2,7,11,15];
const k =9;
const original = num.reduce ((a,b) => a + b);
let mitad = Math.floor(num.length / 2);
let inicio = num.splice(0, mitad);
const total = inicio.reduce ((a,b) => a + b);
const total2 = num.reduce ((a,b) => a + b);



// console.log(inicio); //primera parte, extraída
// console.log(num); //original sin inicio
// console.log(total);
// console.log(total2);

function program () {
    if (original === k) {
        alert(`El numero original(${original}) es igual a k =${k}`);
    } else {
        while ((total <= k ) && (total2 >k)) {
            if (total <= k) {
                alert(`El valor mas cercano a ${k} es ${total}`);
                break;    
            } else {
                alert(`El valor no es menor o igual a ${k}`);
                break;
            }    
        }
        
        
        while ((total2 <= k) && (total != k)) {
            if (total2 <= k) {
                alert(`El valor mas cercano a ${k} es ${total2}`);
                break;    
            } else {
                alert(`El valor no es menor o igual a ${k}`);
                break;  
            }
        }
    }
    
}

program();