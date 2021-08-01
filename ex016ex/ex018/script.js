let lista = document.querySelector('select#list')
let num = document.querySelector('input#num')
let res = document.querySelector('div#res')
let vetores = []
let c = 0

function add() {
    if (num.value.length == 0 || num.value > 100 || num.value < 0) {
        window.alert('Valor inválido ou já encontrado na lista')
    } else {
        let numadd = document.createElement('option')
        numadd.text = `Valor ${num.value} adicionado `
        numadd.value = `list`
        list.appendChild(numadd)
        vetores.push(num.value)
        document.querySelector('input#num').value = ""
    }
}

num.value = ''

function analyze() {
    if (vetores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        count()
        maxMin()
    }
}

function count() {
    for (c = 0; c <= vetores.length; c++) {
        res.innerHTML = `Ao todo temos ${c} números cadastrados.<br>`
    }
}

function maxMin() {
    vetores.sort()
    res.innerHTML += `O maior valor digitado foi ${vetores[vetores.length - 1]}.<br>`
    res.innerHTML += `O menor valor digitado foi ${vetores[0]}.<br>`
}

function sum() {
    
}




// Adicionar elementos básicos no HTML
// Executar as seguintes validações:
//- Ao clicar em adicionar com um valor repetido ou sem preencher o imput: //Valor inválido ou já encontrado na lista
//- Ao clicar em finalizar sem nenhum dado na lista: Adicione valores antes de finalizar!
// Transferir dados digitados no imput para o select
// Contar os números cadastrados e exibi-los
// Exibir o maior e o menor
// Exibir a soma e a média
