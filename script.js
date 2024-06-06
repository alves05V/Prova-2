// questao 2

let NomedaPessoa = document.getElementById("NomePessoa");
let resposta = document.getElementById("resposta")

function Enviar()
{
    resposta.innerHTML = "Olá, " + NomedaPessoa.value + " tudo bem?"
}

//questao 3 

let metros = document.getElementById("metros")
let r1 = document.getElementById("Resolução")

function resulta()
{
    Resolução.innerHTML = (parseInt (metros.value) / 100) 
}

//questao 4

let numero = document.getElementById("numero");
let proximo = document.getElementById("anterior");
let anterior = document.getElementById("sucessor");

function Calcular()
{
    proximo.innerHTML = parseInt (numero.value) -1;
     anterior.innerHTML = parseInt (numero.value) +1;
}

//questao 5

let Maior = document.getElementById("maior")
let Menor = document.getElementById("menor");
let resp = document.getElementById("resp");

function adivinhe()
{
    if(Maior.value < Menor.value)
    {
        resp.innerHTML = Maior.value + " é maior"
    }
    else 
     {
        resp.innerHTML = Menor.value +  " é maior"
     }
}

//questao 6 

let valor = document.getElementById("valor")
let resolução = document.getElementById("resolução") 

function somar()
{
    if(valor > 1250)
        {
           
           resolução.innerHTML = "voce recebeu "  + (parseInt (valor.value) + (valor.value *10/100))
        }
        else (valor <= 1250)
        {
        
           resolução.innerHTML =  "voce recebeu"  + (parseInt (valor.value) + (valor.value *15/100))
        }
}



//questao 7

q7 = 1
while(q7 <= 100)
    {
        console.log(q7)
        q7 = q7 + 1;
    }
    

// questao 8 

q8 = 50
   while(q8 >= 0)
    {
      console.log(q8)
      q8 = q8 - 5;
    }  
    

// quetao 9

q9 = 100
   while(q9 >= 0)
    {
      console.log(q9)
      q9 = q9 - 10;
    }

