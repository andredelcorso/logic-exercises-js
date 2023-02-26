function validateBtn() { 

    let nameProduct = window.document.getElementById('productName').value
    let priceProduct = window.document.getElementById('productPrice').value


    let promotionPrice = parseFloat((priceProduct * 3) - (priceProduct * (50/100))).toFixed(2)

    let resposta = window.document.getElementById('resposta').textContent = (`${nameProduct} - Promoção: leve 3 unidades por R$${promotionPrice}`)

}

    let pressBtn = window.document.getElementById('validateButton')

    pressBtn.addEventListener('click', validateBtn)