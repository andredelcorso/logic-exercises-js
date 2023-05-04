function Calcular () { 

    // Creating a reference to the HTML Elements

    const speedMax = window.document.getElementById('maxSpeed')
    const dSpeed = window.document.getElementById('driverSpeed')

    //Turning the references into numbers

    const speed = Number(speedMax.value)
    const driver = Number(dSpeed.value)

    if (driver === speed) { 
        const resposta = window.document.getElementById('resposta').textContent = 'Sem Multa'
    } else if (driver <= speed * 1.2 && driver > speed) {
        const resposta = window.document.getElementById('resposta').textContent = 'Multa Leve'
    } else { 
        const resposta = window.document.getElementById('resposta').textContent = 'Multa Grave'
    }

}

    // Creating a reference to the Button HTML Element

    const btnCalc = window.document.getElementById('calcButton')
    btnCalc.addEventListener('click', Calcular)