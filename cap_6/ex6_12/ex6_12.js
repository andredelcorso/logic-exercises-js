let quantidadeParcelas = prompt('Você quer parcelar suas compras em quantas vezes? ')

function parcelas () {

    let list = ''

        function oneMoreDigit (digit) { 
            if (digit < 10) { 
                return ('0' + digit)
            } else { 
                return (digit)
            }
        }

        let p = document.getElementById('txtPrice')
        let price = Number(p.value)
        let resposta = document.getElementById('resposta')
        let hoje = new Date () 

        

        for (let contador = 1; contador <= quantidadeParcelas; contador++) { 

            hoje.setMonth(hoje.getMonth() +1)
            day = hoje.getDate()
            month = hoje.getMonth() +1 
            year = hoje.getFullYear()

            let priceDivision = price/quantidadeParcelas

            listPrice = (`Valor a ser parcelado: R$${price.toFixed(2)}. Parcelas de R$${priceDivision.toFixed(2)}.`)
        
            list += (`\nData da ${contador}ª Parcela: ${(oneMoreDigit(day))}/${(oneMoreDigit(month))}/${year}`)
        }

        resposta2.textContent = listPrice
        resposta.textContent = list



}

