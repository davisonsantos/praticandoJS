function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    if(inicio.value.length   == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Você não digitou todos os valores'
    } else {
        res.innerHTML = 'Contando...'
        let ini = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo invalido! Considerando Passo 1')
            p = 1
        }
        if(ini < f){
            for(let c = ini; c <= f; c += p){
            res.innerHTML += `${c} `
                }
        }else if (ini > f){
            for (let c = ini; c >= f; c -= p){
            res.innerHTML += `${c} `
            }
        }
    }
}
