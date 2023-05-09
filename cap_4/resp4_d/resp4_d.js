function Calcular () { 

    let insereNumero = window.document.getElementById('inputNumber')
    let numero = Number(insereNumero.value)
    let estrelas = ""


    if (numero == 0 || numero == "" || isNaN(numero)) {
        alert('Favor, verificar dados...')
    }


    for (let contador = 1; contador <= numero; contador++) {
            for (let acumulador = 1; acumulador <= contador; acumulador++) {
                estrelas += "*"
            }

        estrelas += '\n'            
    }   

    


    let resposta = document.getElementById('resposta').textContent = estrelas
}
    let btnVerify = document.getElementById('buttonVerify')
    btnVerify.addEventListener('click', Calcular)