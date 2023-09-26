function clickBtn () { 

    let palavra = prompt('Qual é a palavra? ')
    let tamanho = palavra.length 
    document.getElementById('btnLer')

    let inverso = palavra.charAt(tamanho-1).toUpperCase()

    for (let contador = tamanho-2; contador >=0; contador--) {
        inverso += palavra.charAt(contador).toLowerCase()
    }

    alert('Palavra:' + palavra + "\nInvertida: " + inverso)

}