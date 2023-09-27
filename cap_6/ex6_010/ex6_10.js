//Variable to count the taxes
const taxaMulta = 2/100
const taxaJuros = 0.33/100

function payBills() {

    let pay = document.getElementById('payBtn')

    // Creating the DOM references
    let txt = document.getElementById('txtBox')
    let dataVenc = txt.value
    let priceValue = document.getElementById('priceValue')
    let price = Number(priceValue.value)

    // Creating a reference to the output
    let multa = document.getElementById('valorMulta')
    let juros = document.getElementById('valorJuros')
    let total = document.getElementById('resposta')

    // Creating the variable new Date() to set the nowadays date and the bill due date to turn easier some operations
    let hoje = new Date()
    let vencto = new Date()
    
    //Verifying if my data are correct and if something is missing. 
    if (dataVenc == "" || isNaN(price)) {
        alert('Erro. Favor verificar os dados. Tente mais tarde.')
    }

    // seting the date to appear like yyyy-mm-dd
    let partes = dataVenc.split("-")
    vencto.setDate(Number(partes[2]))
    vencto.setMonth(Number(partes[1]-1))
    vencto.setFullYear(Number(partes[0]))

    let atraso = hoje - vencto // Calculating the diference between the dates (em miliseconds)

    //initializing the TAXES variables with 0 
    let penalidade = 0 
    let fees = 0 

    if (atraso > 0) { 

        let days = Math.round(atraso/86400000)

        penalidade = price * taxaMulta 
        fees = (price * taxaJuros) * days 
    }

    let apanhado = price + penalidade + fees 

    multa.textContent = (`Valor da multa. R$:${penalidade.toFixed(2)}`)
    juros.textContent = (`Valor dos juros. R$:${fees.toFixed(2)}`)
    total.textContent = (`Valor total. R$:${apanhado.toFixed(2)}`)

}