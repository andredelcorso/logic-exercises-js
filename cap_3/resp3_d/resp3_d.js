function Calcular() { 
    const sideOne = window.document.getElementById('sideOne')
    const sideTwo = window.document.getElementById('sideTwo')
    const sideThree = window.document.getElementById('sideThree')

    const ladoUm = Number(sideOne.value)
    const ladoDois = Number(sideTwo.value)
    const ladoTres = Number(sideThree.value)

    if (ladoUm == ladoDois && ladoDois == ladoTres && ladoTres == ladoUm) { 
        const resposta = window.document.getElementById('resposta1').textContent = (`Lados Podem Formar um Triângulo`)
        const resposta2 = window.document.getElementById('resposta2').textContent = (`Tipo: Equilatero`)
    } else if (ladoUm == ladoDois && ladoDois !== ladoTres || ladoDois == ladoTres && ladoTres !== ladoUm || ladoTres == ladoUm && ladoUm !== ladoDois) { 
        const resposta = window.document.getElementById('resposta1').textContent = (`Lados Podem Formar um Triângulo`)
        const resposta2 = window.document.getElementById('resposta2').textContent = (`Tipo: Isósceles`)
    } else {
        const resposta = window.document.getElementById('resposta1').textContent = (`Lados Podem Formar um Triângulo`)
        const resposta2 = window.document.getElementById('resposta2').textContent = (`Tipo: Escaleno`)
    }
}

    const btnVerify = window.document.getElementById('verifyButton')
    btnVerify.addEventListener('click', Calcular)