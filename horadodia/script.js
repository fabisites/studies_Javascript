
function carrega() {
    var msg = document.getElementById('mensagem')
    var bom = document.getElementById('bom')
    var fotoamanhecer = document.getElementById('imagem')
    var hoje = new Date()
    var horadodia = hoje.getHours()
    var minutos = hoje.getMinutes()
    //var horadodia = 15
    msg.innerHTML = `Agora são ${horadodia} horas e ${minutos} minutos!`
    bom.innerHTML = "Bom Dia!"
    if (horadodia >= 0 && horadodia < 12){
        img.src = "imagens/amanhecer.png"
        bom.innerHTML = "Bom Dia!"
        document.body.style.backgroundColor= "#FEB166 "} 
        
        else if (horadodia >=12 && horadodia < 18){
            img.src = "imagens/entardecer.png"
            bom.innerHTML = "Boa Tarde!"
            document.body.style.backgroundColor= "#ACD3F5 "
        }else{
            img.src = "imagens/anoitecer.png"
            bom.innerHTML = "Boa Noite!"
            document.body.style.backgroundColor= "#4F3731 "
        }
    }
