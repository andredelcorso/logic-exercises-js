function Calcular () { 
    //Creating the HTML reference 

    let insereNumero = document.getElementById('inputNumber')
    let Numero = Number(insereNumero.value)

    if (Numero === 0 || isNaN(Numero)) {
        alert('Favor, verificar os dados inseridos e tentar novamente...')
    }

    let divisores = "Divisores do " + Numero + ": 1"
    soma = 1 

    
    for (let contador = 2; contador <= Numero / 2; contador++) {
        if (Numero % contador == 0) { 
            divisores = divisores + ", " + contador
            soma = soma + contador
    }
}

    divisores = divisores + " (Soma: " + soma + ")"

    let resposta2 = window.document.getElementById('resposta2').textContent = divisores

    if (Numero == soma) {
        let resposta = window.document.getElementById('resposta').textContent = (`${Numero} é um número perfeito!`)
    } else { 
        let resposta = window.document.getElementById('resposta').textContent = (`${Numero} não é um número perfeito. `)
    } 
}
    
    let verifyBtn = document.getElementById('buttonVerify')
    verifyBtn.addEventListener('click', Calcular)