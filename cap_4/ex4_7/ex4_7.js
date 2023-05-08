function Calcular () {
    
    // Creating the HTML references 
    let insereNum = window.document.getElementById('insereNum')

    //Get the number value 

    let insertNumber = Number(insereNum.value)

    if (insertNumber == 0 || isNaN (insertNumber)) { 
        alert('Favor, digitar um valor válido...')
    }

    // Variable that will put the stars and lines 
    let estrelas = ""

    //Laço de repetição de 1 em 1 até o número informado
    for (let contNum = 1; contNum <= insertNumber; contNum++ ) {
        if (contNum % 2 == 1) {
        estrelas = estrelas + "*"
    } else {
        estrelas = estrelas + "-"
    }

    let resposta = window.document.getElementById('resposta').textContent = (`${estrelas}`)
}

}

    let btnFill = window.document.getElementById('buttonFill')
    btnFill.addEventListener('click', Calcular)