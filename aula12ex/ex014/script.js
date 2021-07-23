function loading() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var now = new Date()
    var hora = now.getHours()
    msg.innerText = `Agora são ${hora} horas.`
    if (hora <= 12) {
        //'Bom dia!'
        img.innerHTML = '<img src="morning.jpg" alt="Foto">'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora <= 18) {
       //'Boa tarde!'
       img.innerHTML = '<img src="tarde1.jpg" alt="Foto">'
       document.body.style.backgroundColor = '#b9846f'
    } else {
        //'Boa noite!'
        img.innerHTML = '<img src="night.jpg" alt="Foto">'
        document.body.style.backgroundColor = '#515154'
    }
}