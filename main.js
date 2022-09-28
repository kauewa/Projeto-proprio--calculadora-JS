const input = document.getElementById('input');
const operadores = document.querySelector('.operators');
const secaoNumeros = document.querySelectorAll('.numbers');
const igual = document.getElementById('result');
const Czerar = document.getElementById('clear');
let numeros = [];
let num1 = '';
let num2 = '';
let operador = '';
let resultado = '';

//preenchendo a let numeros
secaoNumeros.forEach((elemento) => {
    for(let i = 0; i <= 2; i++) {
        numeros.push(elemento.children[i])
    }
})

//evento de click no número desejado
for(let i = 0; i <= (numeros.length - 2); i++){   
    numeros[i].addEventListener('click', function(){
        selecaoNumeros(numeros[i].textContent)
    })
}

//evento de click no operador desejado
for(let i = 0; i <= (operadores.children.length - 1); i++){
    operadores.children[i].addEventListener('click', function(){        
        operador = operadores.children[i].textContent  
        console.log(operador)
    })
}

//preenchimento das variáveis para calculo
function selecaoNumeros(numero){ 
    if(operador == ''){
        num1 += numero
        console.log(`numero 1: ${num1}`)
        input.textContent = num1
    }else{
        num2 += numero
        console.log(`numero 2: ${num2}`)
        input.textContent = num2
    }
}

//zerando sistema
Czerar.addEventListener('click', function(){
    num1 = ''
    num2 = ''
    operador = ''
    input.textContent = '0'
})

//click para trazer o resultado
igual.addEventListener('click', calculo, false)

//função do calculo
function calculo(){
    if(operador === ''){
        console.log('nenhum operador')
    }else if(operador === '+'){
        resultado = parseInt(num1) + parseInt(num2)
    }else if(operador === '-'){
        resultado = parseInt(num1) - parseInt(num2)
    }else if(operador === '÷'){
        resultado = parseInt(num1) / parseInt(num2)
    }else{
        resultado = parseInt(num1) * parseInt(num2)
    }

    num1 = parseFloat(resultado)
    num2 = ''
    operador = ''

    input.textContent = num1


    console.log(resultado)
}


// AFAZERES
//Falta adicionar o pressionar das teclas para preencher as variaveis de calculo
//Acrescentar o chamar da funcao calculo pelo operador assim q todas variaveis ja forem preenchidas





