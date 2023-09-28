function cripto() { 

    let m = document.getElementById('txtBox')
    let msg = m.value 
    

    let outResp = ''
    let tamanho = msg.length

    for (let contador = 1; contador < tamanho; contador = contador+2) {
        outResp += msg.charAt(contador)
    }

    for (let contador = 0; contador < tamanho; contador = contador + 2) {
        outResp += msg.charAt(contador)
    }

    let resposta = document.getElementById('resposta').textContent = outResp
}