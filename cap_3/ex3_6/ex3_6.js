function Calcular () {

    // Creating the HTML references 

    const inSaque = window.document.getElementById('valorSaque')
    const OutNotasCem = window.document.getElementById('outNotasCem')
    const OutNotasCinquenta = window.document.getElementById('outNotasCinquenta')
    const OutNotasDez = window.document.getElementById('outNotasDez')

    const saque = Number(inSaque.value)

    if (saque === 0) {
        alert('Informe um valor válido!')
        return
    }

    // Verifying if the number is not a multiple of 10 

    if (saque % 10 !== 0) { 
        alert("Valor indisponível. Favor, digitar valores múltiplos de 10.")
        inSaque.focus()
        return
    }

    const notasCem = Math.floor(saque/100)
    const restante = saque % 100
    const notasCinquenta = Math.floor(restante/50)
    const restante2 = restante % 50
    const notasDez = Math.floor(restante2/10) 

    if (notasCem > 0) {
        OutNotasCem.textContent = (`Notas de R$100: ${notasCem}`)
    }

    if (notasCinquenta > 0) { 
        OutNotasCinquenta.textContent = (`Notas de R$50: ${notasCinquenta}`)
    }

    if (notasDez > 0) {
        OutNotasDez.textContent = (`Notas de R$10: ${notasDez}`)
    }
}

    // Creating a reference to the buttonExibir

    const btnExibir = document.getElementById('buttonExibir')
    btnExibir.addEventListener('click', Calcular)