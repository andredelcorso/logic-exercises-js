function weightM() { 

    //Referencia os elementos HTML e os linka
    let price = window.document.getElementById('priceMeal').value
    let weight = window.document.getElementById('weightMeal').value

    // funções a fim de fazer o calculo do determinado programa
    let quiloTogram = weight / 1000
    let total = quiloTogram * price 

    // Faz a resposta aparecer na tela após clicar no botão
    let resposta = window.document.getElementById('resposta').textContent = (`Valor total a ser pago. R$${total}.`)


}
    //Referencia o botão Total com id='calcularValor' 
    let total = window.document.getElementById('calcularValor')

    //Botão referenciado fará a função clique, a fim de mostrar o valor
    total.addEventListener('click', weightM)