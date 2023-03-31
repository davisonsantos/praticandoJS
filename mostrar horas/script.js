function carregar(){
    //var hora = 12
    var agora= new Date()
    var hora = agora.getHours()
    var texto = window.document.getElementById('texto')
    var header = window.document.getElementById('header')
    var footer = window.document.getElementById('baixo')
    var imagem = window.document.getElementById('imagem')
    let sec = document.getElementById('secao')
    texto.innerHTML = `Agora são ${hora} Horas.`
    if ( hora >= 5 && hora < 12 ){
        imagem.innerHTML = `<img src="manha.png" alt="">`
        footer.innerText = 'manhã'
        document.body.style.background = '#db9ff5'
        header.style.color = '#3c2c42'
        footer.style.color = '#3c2c42'
        sec.style.background = '#efd4fa'
        }else if (hora >= 12 && hora < 18){
        imagem.innerHTML = `<img src="tarde.png" alt=""></img>`
        footer.innerText = 'tarde'
        document.body.style.background = '#6c92a6'
        sec.style.background = '#cee7f5'
        }else{
        imagem.innerHTML = `<img src="noite.png" alt=""></img>`
        footer.innerText = 'noite'
        document.body.style.background = '#062129'
        sec.style.background = '#1b4b66'
        sec.style.color= 'white'
    }
}