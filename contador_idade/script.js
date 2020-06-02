function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var sexo = document.getElementsByName('rediosex')
    var verificar = document.getElementById('verificar')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var res = document.getElementById('res')
    var idade = ano - Number(fano.value)
    var genero = ""
    if (fano.value.length == 0 || Number(fano.value>ano) ){
        window.alert('Verifique o Ano Digitado')
    }
    else {
      if (sexo[0].checked){
         genero = "Masculino"
          if (idade >= 0 && idade < 5){
             img.setAttribute('src','babeboy.png')
             //criança
          }else if( idade < 12){
            img.setAttribute('src','menino.png')

         }else if (idade <20){
            img.setAttribute('src','jovemhomem.png')
             //jovem
         }else if( idade < 60){
            img.setAttribute('src','adulto.png')
           //adulto
         }else{
             //Melhor idade
             img.setAttribute('src','adultomais.png')
         }
        
             
     }else if (sexo[1].checked){
         genero = "Feminino"
         if (idade >= 0 && idade < 5){
            img.setAttribute('src','babegirl.png')
            //criança
        }else if( idade < 12){
            img.setAttribute('src','menina.png')
              
         }else if (idade <21){
            img.setAttribute('src','jovemmulher.png')
            //jovem
        }else if( idade < 60){
            img.setAttribute('src','adulta.png')
          //adulto
        }else{
            img.setAttribute('src','adultamais.png')
            //Melhor idade
        }
      

     }
     res.innerHTML = `Detectamos pessoa do sexo ${genero} com ${idade} anos de idade `
     res.appendChild(img)
    }
 
}
