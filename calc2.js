// 1 capturar los ingresos numericos -> variable
// 2 capturar los/el ingreso de operaciones -> variable
// 3 ruta del DOM del resultado o visor
// 4 eventos en los botones -> recolectar 1 y 2

const display = document.getElementById("visor");
let numero1 = document.querySelector("#n1").value;
let numero2 = document.getElementById("n2").value;
let numero3 = document.getElementById("n3").value;
let numero4 = document.getElementById("n4").value;
let numero5 = document.getElementById("n5").value;
let numero6 = document.getElementById("n6").value;
let numero7 = document.getElementById("n7").value;
let numero8 = document.getElementById("n8").value;
let numero9 = document.getElementById("n9").value;
let suma = document.getElementById("suma").innerHTML;

function operacion (op, n1, n2){
    if (op=="+"){
        return parseInt(n1) + parseInt( n2);
    }
}

console.log(n1, n2, suma)
console.log (operacion(suma, numero1, numero2));

display.textContent = (operacion(suma,numero1,numero2));

console.log (display);

let botonesMenu = document.querySelectorAll(".btn");

console.log(botonesMenu)

botonesMenu.forEach((btnn)=>{
    btnn.addEventListener("click", )
})

