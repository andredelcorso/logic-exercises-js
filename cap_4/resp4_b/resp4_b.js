let numChinchilas = 0  
let numAnos = 0

let resposta = ""

function Calcular () { 

    let quantasChinchilas = document.getElementById('QtdChinchilas')
    let quantosAnos = document.getElementById('QtdAnos')
   

    let Chinchilas = Number(quantasChinchilas.value)
    let Anos = Number(quantosAnos.value)

    if (Chinchilas == 0 || Chinchilas < 2 || isNaN(Chinchilas) || Anos == 0 || isNaN(Anos)) {
        alert('Favor, verificar os dados. Obs.: O número inicial de Chinchilas deve ser igual ou superior a 02')
    }

    let reprodução = numChinchilas * 3 
    numAnos++
    numChinchilas + numChinchilas

    for (let contador = 1; contador <= Anos; contador ++) {
        totalAnos =+ reprodução
        let resposta = document.getElementById('resposta').textContent = (`${numAnos}º Ano: ${reprodução} Chinchilas`)
    
    }
    
    
}

    let btnVerify = document.getElementById('verifyButton')
    btnVerify.addEventListener('click', Calcular)