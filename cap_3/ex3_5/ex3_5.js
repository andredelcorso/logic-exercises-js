function RaizQ () { 

    // Get the number from the input field
    const squareNumber = window.document.getElementById('numero_raiz').value

    if (isNaN(squareNumber || squareNumber < 0)) {
        alert('Entre com um valor válido.')
    }
    // Calculate the square root using the Math.sqrt() method
    const sqrt = Math.sqrt(squareNumber) 
    
    if (sqrt != Math.floor(sqrt)) {
        const resp = window.document.getElementById('resposta').textContent = (`Não há raíz quadrada exata para este número.`)
    } else {
        const resp = window.document.getElementById('resposta').textContent = (`Raiz quadrada de ${squareNumber} é igual a ${sqrt}:`) 
    }

}


    const calculateSQRT = window.document.getElementById('calcular')
    calculateSQRT.addEventListener('click', RaizQ)