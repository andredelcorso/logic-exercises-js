function Tabuada () {
    
    let num = window.document.getElementById('numero')
    let number = Number(num.value)
    let tabuadaString = ("")

    for (let tabuada = 1; tabuada <= 10; tabuada++) {

        tabuadaString += `${number} x ${tabuada} = ${number * tabuada}`
        

    }   

   
    window.document.getElementById('resposta').textContent = tabuadaString 
}


    const calcTabuada = window.document.getElementById('calcTabuada')
    calcTabuada.addEventListener('click', Tabuada)