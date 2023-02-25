function makePromo () { 

    //Liga o HTML do campo "Nome do Veículo" ao JS
    let modeloVeiculo = window.document.getElementById('nameVehicle').value
    //Liga o HTML no campo "Valor do veículo" ao JS
    let valorVeiculo = window.document.getElementById('valueVehicle').value

    //Variáveis para calcular os valores de entrada e as parcelas restantes do veículo
    let entrada = parseFloat((valorVeiculo) * (50/100)).toFixed(2)
    let parcela = parseFloat(entrada / 12).toFixed(2) 

    //Aqui as respostas aparecerão quando o botão de id="viewPromo" for clicado
    let answer = window.document.getElementById('resposta').textContent = (`Promoção: ${modeloVeiculo}.`)

    let answer2 = window.document.getElementById('resposta2').textContent = (`Valor de entrada: R$${entrada}`)

    let answer3 = window.document.getElementById('resposta3').textContent = (`+ 12 parcelas de R$${parcela}`)
}

    //Cria uma referência ao campo botão pela id="viewPromo"
    let Promo = window.document.getElementById('viewPromo')

    // registra um evento associado ao botão para carregar a função makePromo()
    Promo.addEventListener('click', makePromo)