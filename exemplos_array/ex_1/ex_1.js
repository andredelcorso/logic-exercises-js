function mostrar () { 

    let carros = []

    carros.push ({modelo: "Fusca", preco: 6500})

    carros.push ({modelo: "Escort", preco: 7800})

    for (let contador = 0; contador < carros.length; contador++) { 
        let resposta = window.document.getElementById('resposta').textContent += (`\n ${carros[contador].modelo} ` + `- R$${carros[contador].preco} `)
    }

}

    let reveal = document.getElementById('revealBtn')
    reveal.addEventListener('click', mostrar)
