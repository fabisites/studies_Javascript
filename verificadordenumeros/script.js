var num = document.getElementById('numero')
var caixa = document.getElementById('caixa')
var resposta = document.getElementById('resum')
var lista = []


function tanalista(n, l ){
  if (l.indexOf(Number(n)) != -1 ){
    return true //repedido
  }else{
    return false //inedito
  }
}

function numerovalido(n){
  if (Number(n) >= 1 && Number(n)<= 100){
    return true //valido
  }else{
    return false // invalido
  }
}


function addnumero(){

  if ( numerovalido(num.value) && !tanalista(num.value , lista) ){
    lista.push(Number(num.value))
    var item = document.createElement('option')
    item.text = `O Valor ${num.value} foi Adicionado`
    caixa.appendChild(item)
    
    
  
     }

  else {
        window.alert('Número inválido ou repetido')
        
      }

     num.value = ' '
     num.focus()
    }
   
   


function analizar(){
 

  if (lista.length == 0){
    window.alert('Digite os números antes de finalizar')
  }else
    
var tot = lista.length
var maior = lista[0]
var menor = lista [0]
var soma = 0
var media = 0
for (let pos in lista){
  soma += lista[pos]
  if (lista[pos] > maior)
  maior = lista[pos]
  if (lista[pos]< menor)
  menor = lista[pos]
}
media = soma / tot
resposta.innerHTML = ` `
resposta.innerHTML += `<p>Temos ${tot} elementos cadastrados</p>`
resposta.innerHTML += `<p>O Maior valor encontrado é ${maior}` 
resposta.innerHTML += `<p>O Menor elemento encontrado é ${menor} </p>`
resposta.innerHTML += `<p> A soma dos valores é ${soma} </p>`
resposta.innerHTML += `<p> A Média dos valores é ${media} </p>`

}



