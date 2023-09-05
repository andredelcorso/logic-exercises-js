function fruit () { 

    let fruitText = document.getElementById('txtFruit')
    let fruit = fruitText.value

    if (fruit == "") {
        alert('Informe uma fruta...')
        fruitText.focus()
        return
    } 

    let resposta = fruit.charAt(0)
    let star = "*"
    let len = fruit.length

    for (let counter = 1; counter < len; counter++) {
        if (fruit.charAt(counter) == fruit.charAt(0)) {
            resposta += fruta.charAt(0)
        } else { 
            resposta += "_"
        }
            star += "*"
        
            outDica.textContent = resposta
    fruitText.value = star 

    }

    
}

    let show = document.getElementById('showBtn')
    show.addEventListener('click', fruit)