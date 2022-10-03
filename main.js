const input = document.getElementById("input");
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

//Usando o teclado
input.addEventListener('keyup', function(elemento){

    if(operador == ''){
        for(let i = 0; i <= 9; i++){
            if(elemento.key == i){
                num1 += elemento.key
            }
        }
        if(elemento.key == "Backspace"){
            num1 = input.value        
        }
        input.value = num1
    }else{
        for(let i = 0; i <= 9; i++){
            if(elemento.key == i){
                num2 += elemento.key
            }
        }
        if(elemento.key == "Backspace"){
            num2 = input.value        
        }
        input.value = num2
    }
    if(elemento.key == "+" || elemento.key == "-" || elemento.key == "*" || elemento.key == "/"){
        operador = elemento.key
        console.log(operador)
    }
    if(elemento.key == "Enter"){
        calculo()
    }  
})

//evento de click no número desejado
for(let i = 0; i <= (numeros.length - 2); i++){   
    numeros[i].addEventListener('click', function(){
        const numero = numeros[i].textContent
        if(operador == ''){
            num1 += numero
            input.value = num1
        }else{
            num2 += numero
            input.value = num2
        }

    })
}

//evento de click no operador desejado
for(let i = 0; i <= (operadores.children.length - 1); i++){
    operadores.children[i].addEventListener('click', function(){        
        operador = operadores.children[i].textContent  
    })
}

//zerando sistema
Czerar.addEventListener('click', function(){
    num1 = ''
    num2 = ''
    operador = ''
    input.value = ''
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
    }else if(operador === '÷' || operador === '/'){
        resultado = parseInt(num1) / parseInt(num2)
    }else{
        resultado = parseInt(num1) * parseInt(num2)
    }

    num1 = parseFloat(resultado)
    num2 = ''
    operador = ''

    input.value = num1
}


// AFAZERES
//Acrescentar o chamar da funcao calculo pelo operador assim q todas variaveis ja forem preenchidas





