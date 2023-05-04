function Calcular () { 
    const moeda = window.document.getElementById('valueCoin')
    const custo1 = 1
    const custo2 = 1.75
    const custo3 = 3.00
  

    const coin = Number(moeda.value)
    const troco = parseFloat(Number(coin) - Number(custo1)).toFixed(2)
    const troco2 = parseFloat(Number(coin) - Number(custo2)).toFixed(2)
    const troco3 = parseFloat(Number(coin) - Number(custo3)).toFixed(2)

    if (coin === 0 || isNaN(coin)) {
        alert('Favor, inserir um valor válido!')
    }
    
    if (coin === 1) {

        const resposta = window.document.getElementById('tempo').textContent = (`Tempo - 30 minutos`)
    }
        if (coin > 1 && coin < 1.75) {
        const resposta = window.document.getElementById('tempo').textContent = (`Tempo - 30 minutos`)
        const resposta2 = window.document.getElementById('troco').textContent = (`Troco - R$: ${troco}`)
    }

    if (coin === 1.75) { 
        const resposta = window.document.getElementById('tempo').textContent = (`Tempo - 60 minutos`)
    }
        if (coin > 1.75 && coin < 3) {
            const resposta = window.document.getElementById('tempo').textContent = (`Tempo - 60 minutos`) 
            const resposta2 = window.document.getElementById('troco').textContent = (`Troco - R$: ${troco2}`)
        }
        
    if (coin === 3) {
        const resposta = window.document.getElementById('tempo').textContent = (`Tempo - 120 minutos`)
    }
        if(coin > 3) { 
            const resposta = window.document.getElementById('tempo').textContent = (`Tempo - 120 minutos`)
            const resposta2 = window.document.getElementById('troco').textContent = (`Troco - R$: ${troco3}`)
        }
}
    

    const confirmed = window.document.getElementById('confirmValue')
    confirmed.addEventListener('click', Calcular)