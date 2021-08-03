let lista = document.querySelector('select#list')
let num = document.querySelector('input#num')
let res = document.querySelector('div#res')
let vetores = []

/*verifica se um número foi digitado, se está no range de 0 a 100 e se já esta na lista, caso
as condições sejam atendidas adiciona o valor digitado na input num a lista vetores e cria um 
option na select list com o valor digitado. Após a inserção, deixa o input em branco*/
function add() {
    if (num.value.length == 0 || num.value > 100 || num.value < 0 || verif(num.value) == true) {
        window.alert('Valor inválido ou já encontrado na lista')
    } else {
        let numadd = document.createElement('option')
        numadd.text = `Valor ${num.value} adicionado `
        numadd.value = `list`
        list.appendChild(numadd)
        vetores.push(num.value)
        res.innerHTML = ''
    }
    num.value = ''
    num.focus()
}

//Verifica se o número digitado no input num já está no array vetores.
function verif(n) {
    if (vetores.indexOf(n) >= 0) {
        return true
    } else {
        return false
    }
}

/*verifica se existem números no array vetores, se positivo, realiza 5 verificações utilizando
as funções count() max() min() sum() e media() */ 
function analyze() {
    if (vetores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        res.innerHTML = `- Ao todo temos ${count()} números cadastrados<br>`
        res.innerHTML += `- O maior valor digitado foi ${max()}<br>`
        res.innerHTML += `- O menor valor digitado foi ${min()}<br>`
        res.innerHTML += `- A soma dos valores foi ${sum()}<br>`  
        res.innerHTML += `- A média dos valores foi ${media().toFixed(1)}`
    }
}

//conta quantos elementos existem no array vetores
function count() {
 /*   let cont = 0
    while (cont <= vetores.length) {
        cont += 1
    }
    return cont - 1*/
    let cont = vetores.length
    return cont
}

//Organiza os elementos do array vetores em ordem crescente e retorna o valor da ultima posição 
function max() {
    vetores.sort((a,b) => a-b)
    return vetores[vetores.length - 1]
}

//Organiza os elementos do array vetores em ordem crescente e retorna o valor da primeira posição
function min() {
    vetores.sort((a,b) => a-b)
    return vetores[0]
}

//Soma os valores do array vetores e retorna o resultado
function sum() {
    let soma = 0
    for (let s in vetores) {
        soma += Number(vetores[s])
    }
    return soma
}

/*Utiliza a função sum() para realizar uma divisão pelo numero total de elementos do 
array vetores e retorna o resultado*/
function media() {
    let m = sum()
    m /= Number(vetores.length)
    return m
}
