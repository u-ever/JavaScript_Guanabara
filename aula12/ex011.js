var idade = 15
if (idade < 16) {
    console.log('não Vota')
} else if (idade < 18 || idade > 65) {
    console.log('voto facultativo')
} else {
    console.log('Voto obrigatório')
}