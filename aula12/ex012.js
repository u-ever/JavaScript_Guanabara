var now = new Date()
var hora = now.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12 && hora > 4) {
    console.log('Tenha um bom dia')
} else if (hora > 12 && hora < 18) {
    console.log('Tenha uma boa tarde')
} else {
    console.log('Tenha uma boa noite')
}

