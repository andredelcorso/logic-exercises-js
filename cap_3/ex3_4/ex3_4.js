function calculaFuso () {

    let horaBrasil = window.document.getElementById('hourBrazil').value
    let horafranca = (Number(parseFloat((horaBrasil)) + Number(5))).toFixed(2)

    if (horafranca > 24) {
        horafranca = (Number(parseFloat((horafranca)) - Number(24))).toFixed(2)
    }
    
    let resposta = window.document.getElementById('resposta').textContent = (`Horário na França: 
    ${horafranca}`)
}

    let buttonHour = window.document.getElementById('showButton')
    buttonHour.addEventListener('click', calculaFuso)