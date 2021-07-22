var now = new Date()
var diaSem = now.getDay()

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/
switch (diaSem) {
    case 1:
        diaSem = 'Segunda'
        break
    case 2:
        diaSem = 'Terça'
        break
    case 3:
        diaSem = 'Quarta'
        break
    case 4:
        diaSem = 'Quinta'
        break
    case 5:
        diaSem = 'Sexta'
        break
    case 6:
        diaSem = 'Sábado'
        break
    default:
        diaSem = 'Domingo'
        break
}
console.log(diaSem)