function contador() {
    var start = document.getElementById('start')
    var nstart = Number(start.value)
    var end = document.getElementById('end')
    var nend = Number(end.value)
    var step = document.getElementById('step')
    var nstep = Number(step.value)

    var res = document.getElementById('res')
    res.innerText = ``

    for (nstart; nend >= nstart; nstart += nstep) {
        res.innerHTML += ` \u{1F449} ${nstart}`
    }
    res.innerHTML += ` \u{1F3C1}`
}



//Validações:
//Impossível contar (Sem início)
//Passo inválido! Considerando PASSO 1 (passo 0 ou maior que o fim)