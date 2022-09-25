// 1 capturar los ingresos numericos -> variable
// 2 capturar los/el ingreso de operaciones -> variable
// 3 ruta del DOM del resultado o visor
// 4 eventos en los botones -> recolectar 1 y 2
function inicializa(resultado){
    numerosString = [];
    operandos = [];
    numeros = [];
    n1="";
    display.innerHTML=resultado;
}

const display = document.querySelector(".visor"); // ruta del display o visor
let numerosString = [];
let operandos = [];
let numeros = [];
let n1="";
let resultado="0";


inicializa(resultado);

let botonesCalc = document.querySelectorAll(".btn"); //nodo de botones de la calculadora
botonesCalc.forEach(boton=>{boton.addEventListener("click",() => operaciones(boton.innerHTML))})

function convierteStringANumero(numerosString){
    for (i of numerosString){
        n1+=i;            
        }
    return (parseInt(n1));
    }

function operaciones(boton){
    if (!(isNaN(boton))){
        numerosString.push(boton);
        if (numerosString.length==1){
            display.innerHTML = boton;
        }
        else display.innerHTML += boton;
    }
    
    else if (boton==="AC"){
        inicializa(resultado);
    }
    else if (boton==="+"){
        display.innerHTML+="+";
        operandos.push("+");
        numeros.push(convierteStringANumero(numerosString));
        n1="";
        numerosString=[];
    }
    
    else if (boton==="-"){
        display.innerHTML+="-";
        operandos.push("-");
        numeros.push(convierteStringANumero(numerosString));
        n1="";
        numerosString=[];
    }

    else if (boton==="*"){
        display.innerHTML+="*";
        operandos.push("*");
        numeros.push(convierteStringANumero(numerosString));
        n1="";
        numerosString=[];
    }
    else if (boton==="/"){
        display.innerHTML+="/";
        operandos.push("/");
        numeros.push(convierteStringANumero(numerosString));
        n1="";
        numerosString=[];
    }

    else if (boton==="="){
        numeros.push(convierteStringANumero(numerosString));
        n1="";
        numerosString=[];
        if (operandos[0]=="+"){
            resultado=numeros[0]+numeros[1];
            }
        else if (operandos[0]=="-"){
            resultado=numeros[0]-numeros[1];
            }
        else if (operandos[0]=="*"){
            resultado=numeros[0]*numeros[1];
            }
        else if (operandos[0]=="/"){
            resultado=numeros[0]/numeros[1];
            }
        inicializa(resultado);
        }
    else alert("es una operacion todavia no definida")
}
  
    