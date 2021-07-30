function tabuada(){
    let mult = document.getElementById('mult')
    let res = document.getElementById('tab')

    if (mult.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        res.innerHTML = ``
        let num = Number(mult.value)
        let c = 1
        for (c; c < 11; c++){
            let numx = document.createElement('option')
            numx.text = `${num} x ${c} = ${num * c}`
            numx.value = `tab${c}`
            tab.appendChild(numx)
        }
    }
}













// Mostrar uma taboada
// window.alert com "Por favor divige um número!"