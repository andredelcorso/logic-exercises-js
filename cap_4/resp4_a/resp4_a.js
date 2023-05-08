function Calcular () {

    // Creating the HTML reference 
    let nameFruit = window.document.getElementById('nameFruit')
    let inputNumber = window.document.getElementById('inputNumber')

    // Get number value 
    let insereNumero = Number(inputNumber.value)
    let nomeFruta = nameFruit.value

    if (nomeFruta == "" || insereNumero == 0 || isNaN(insereNumero)) {
        alert('Favor, verificar preenchimento de dados...')
    }

    let preenchimento = ""

    for (let contador = 1; contador <= insereNumero; contador++) {
            preenchimento += nomeFruta
            preenchimento += "*"
    }

    let resposta = document.getElementById('resposta').textContent = (`${preenchimento}`)
}
    // Creating the HTML button reference 
    let btnVerify = window.document.getElementById('verifyButton')
    btnVerify.addEventListener('click', Calcular)