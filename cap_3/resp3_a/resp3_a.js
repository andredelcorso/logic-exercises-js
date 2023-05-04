function Calcular () { 

    //Creating a reference to the HTML Elements 
    const inputN = window.document.getElementById('inputNumber')

    // Transforming the value in a number
    const ParOuImpar = Number(inputN.value)

    // Simple condition to verify if the number is Even or Odd 
    if (ParOuImpar % 2 == 0) {
       const resposta = window.document.getElementById('resposta').textContent = (`Número ${ParOuImpar} é Par!`)
    } else {
        const resposta = window.document.getElementById('resposta').textContent = (`Número ${ParOuImpar} é Ímpar!`)
    }
}

    // Creating a reference to the HTML Input Button with the id "buttonVerify"
    const btnVerify = window.document.getElementById('buttonVerify')
    btnVerify.addEventListener('click', Calcular)
