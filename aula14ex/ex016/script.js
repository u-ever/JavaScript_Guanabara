function contador() {
    let start = document.getElementById('start')
    let nstart = Number(start.value)
    let end = document.getElementById('end')
    let nend = Number(end.value)
    let step = document.getElementById('step')
    let nstep = Number(step.value)

    let res = document.getElementById('res')
    res.innerText = ``


    if ( start.value.length == 0 || end.value.length == 0 || step.value.length == 0 ) {
        window.alert('[ERRO] Campo vazio detectado! Digite novamente!')
    } else if (nstep == 0) {
        window.alert('Passo inválido! Considerando PASSO = 1')
        nstep = 1
    } else {
        if (nstart > nend) {
            for (nstart; nend <= nstart; nstart -= nstep) {
                res.innerHTML += ` \u{1F449} ${nstart}`
            }
            res.innerHTML += ` \u{1F3C1}`
        } else {
            for (nstart; nend >= nstart; nstart += nstep) {
                res.innerHTML += ` \u{1F449} ${nstart}`
            }
            res.innerHTML += ` \u{1F3C1}`
        }
    }   
}
