function verificar() {
    var now = new Date()
    var ano = now.getFullYear()
    var nasc = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (nasc.value.length == 0 || nasc.value > ano) {
        window.alert('[ERRO] Verifique os danos e tente novamente!')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)

        var img  = document.createElement('img')
        img.setAttribute('id', 'foto')

        var genero = sexo[0].checked ? 'Homem':'Mulher'
        if (genero == 'Homem') {
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'pictures/mchild.jpg')
            } else if (idade < 20) {
                //jovem
                img.setAttribute('src', 'pictures/mteenage.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'pictures/madult.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'pictures/mold.jpg')
            }
        }
        if (genero == 'Mulher') {
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'pictures/fchild.jpg')
            } else if (idade < 20) {
                //jovem
                img.setAttribute('src', 'pictures/fteenage.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'pictures/fadult.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'pictures/fold.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Genero: <strong>${genero}</strong> , Idade: <strong>${idade} anos</strong>`
        res.appendChild(img)
    }
}

