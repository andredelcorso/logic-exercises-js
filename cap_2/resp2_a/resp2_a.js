function remedyDiscount() { 

    //Linkando HTML no JS com variáveis let nomeRemedio e let precoRemedio (.value no final para não dar NaN)
    let nomeRemedio = window.document.getElementById('remedyName').value
    let precoRemedio = window.document.getElementById('remedyPrice').value

    // Variável com fórmula para me dar o valor do medicamento sem os centavos
    let entirePrice = Math.floor(parseFloat(precoRemedio)).toFixed(2)

    // Variável informando que o desconto foi dos centavos do valor total
    let discount = parseFloat(precoRemedio % 1).toFixed(2)

    // Resposta que aparece quando clico no botão
    let resposta = document.getElementById('resposta').textContent = (`Total do desconto: R$${discount}. Compre DUAS unidades de ${nomeRemedio} por R$${entirePrice*2}`)

}

    // Linkando a function remedyDiscount()
    let showUp = document.getElementById('giveDiscount')

    showUp.addEventListener('click', remedyDiscount)