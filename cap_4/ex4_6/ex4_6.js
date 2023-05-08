function Calcular () { 

    // Creating a HTML reference 
    let insertNumber = window.document.getElementById('inputNumber')
    
    // Get number value 
    let insereNum = Number(insertNumber.value)

    if (insereNum === 0 || isNaN(insereNum)) {
        alert('Favor, digitar um número válido!')
    } 

    let  numDivisores = 0 // Declaring and initializing the counter 
    let temDivisor = 0 // Declaring and initializing the var flag 


    for (let contador = 2; contador <= insereNum / 2; contador++)

    // Verify if contador (1, 2, 3...) is a insereNum of "divisor"
    if (insereNum % contador == 0) {
        /* numDivisores++ */ // increase the counter if the answer is positive
        temDivisor = 1 // change the break flag
        break
    }
        /* if (numDivisores > 2) */
    if (insereNum > 1 && !temDivisor) {
        let resposta = window.document.getElementById('resposta').textContent = (`${insereNum} é primo.`)
    } else { 
        let resposta = window.document.getElementById('resposta').textContent = (`${insereNum} não é primo.`)
    } 
}

    // Creating a HTML Button reference with the function Calcular()
    let verificaBtn = window.document.getElementById('verifyPrimo')
    verificaBtn.addEventListener('click', Calcular)