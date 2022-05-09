function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("textano")
    var res = document.querySelector("div#res")
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERR0] acho que algo de errado não está certo")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = "menino"
            if(idade >=0 && idade < 10){
                //criança
               img.setAttribute('src', 'image/calango.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'image/veado.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'image/catchoro.png')
            }else   {
                //idose
                img.setAttribute('src', 'image/gatinho.png')
            }
        } else if (fsex[1].checked){
            genero = "garota"
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'image/catchoro.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'image/galinha.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'image/gatinho.png')
            }else   {
                //idose
                img.setAttribute('src', 'image/calango.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Você tem ${idade} anos ${genero}`
        res.appendChild(img)
    }
}