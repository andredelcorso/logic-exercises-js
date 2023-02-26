function totalPay () { 

    let tempoPreco = window.document.getElementById('timePrice').value
    let tempoUsado = window.document.getElementById('timeUsed').value

    let Price = Math.floor(parseFloat((tempoUsado / 15))) * tempoPreco
    let Price2 = Math.floor(parseFloat((Price / tempoPreco)))
    let totalPrice = Math.floor(parseFloat((Price + Price2)))

    let resposta = window.document.getElementById('resposta').textContent = (`Valor a pagar: R$${totalPrice}`)
}

    let buttonTotalPay = window.document.getElementById('payPrice')

    buttonTotalPay.addEventListener('click', totalPay)