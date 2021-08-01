let lista = document.querySelector('select#list')
let num = document.querySelector('input#num')
let res = document.querySelector('div#res')
let vetores = []

function add() {
    if (num.value.length == 0 || num.value > 100 || num.value < 0) {
        window.alert('Valor inválido ou já encontrado na lista')
    } else {
        let numadd = document.createElement('option')
        numadd.text = `Valor ${num.value} adicionado `
        numadd.value = `list`
        list.appendChild(numadd)
        vetores.push(num.value)
        window.alert(vetores)
    }
}

function analyze() {
    if (vetores.values.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    }
}







// Adicionar elementos básicos no HTML
// Executar as seguintes validações:
//- Ao clicar em adicionar com um valor repetido ou sem preencher o imput: //Valor inválido ou já encontrado na lista
//- Ao clicar em finalizar sem nenhum dado na lista: Adicione valores antes de finalizar!
// Transferir dados digitados no imput para o select
// Contar os números cadastrados e exibi-los
// Exibir o maior e o menor
// Exibir a soma e a média
