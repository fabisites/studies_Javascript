function faztabuada(){
    
   var digitado = document.getElementById('num')
   var valordigitado = Number(digitado.value)
   var result = document.getElementById('resultado')
   var tabuada = document.getElementById('tabuada')
   //var mul = ""
   tabuada.innerHTML = ``
   if (digitado.value.length == 0 ){
   
    window.alert('Preencha o campo com um número válido')
    var item = document.createElement('option')
    item.text = `Digite um número acima`
    item.id = "frase"
    tabuada.appendChild(item)

  }else
  
  for (vezes = 1; vezes<=10 && vezes != 0 ; vezes++){
   
    var item = document.createElement('option')
    item.text = `${valordigitado}  X ${vezes} = ${valordigitado*vezes}`
    tabuada.appendChild(item)
    
    
    
    
  }

  digitado.value = ' '
  digitado.focus()
      
  
}
 