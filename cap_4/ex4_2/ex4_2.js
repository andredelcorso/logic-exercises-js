function Calcular () { 

    let insereNumero = window.document.getElementById('insertNumber')
    let insereNum = Number(insereNumero.value)
    let numberString = ""

    if (insereNum === 0 || isNaN(insereNum)) {
        alert('Insira um valor válido!')
        insereNum.focus()
        return
    }

    for (let contador = insereNum; contador >= 1; contador--) {

        if (contador == 1) {
            numberString += `\n${contador}.`
        } else { 
            numberString += `\n${contador}, ` 
        }
    }

    window.document.getElementById('resposta').textContent = numberString 
}

    let btnShow = window.document.getElementById('buttonShow')
    btnShow.addEventListener('click', Calcular)