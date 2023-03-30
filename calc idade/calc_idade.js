function verificar(){
    var data = new Date()
    var ano= data.getFullYear()
    var fano = window.document.getElementById('textano')
    var res = window.document.getElementById('res')
    if (fano.value.lengh == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else if(fano.value <= 1900){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homen'
            if(idade > 0 && idade <= 15){
                //garoto
                img.setAttribute('src', 'garoto.png')
                genero = 'um garoto'
            }else if (idade < 50){
                //homem
                img.setAttribute('src', 'homem.png')
                genero = 'um homem'
            }else{
                //idoso
                img.setAttribute('src', 'idoso.png')
                genero = 'um idoso'
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade > 0 && idade <= 15){
                //garota
                img.setAttribute('src', 'garota.png')
                genero = 'uma garota'
            }else if (idade < 50){
                //mulher
                img.setAttribute('src', 'mulher.png')
                genero = 'uma mulher'
            }else{
                //idosa
                img.setAttribute('src', 'idosa.png')
                genero = 'uma idosa'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
    

    
