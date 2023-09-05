function contarString () { 

    let anuncio = prompt('Nome do anúncio: ')
    let tam = anuncio.length
    let numPalavras = 0
   

    for (let contador = 0; contador < tam; contador++ ) {
        if (anuncio.charAt(contador) == " ") {
            numPalavras++
        }
            
 
    }

    alert("Anúncio: " + anuncio + "\nNº Palavras: " + (numPalavras + 1))
    
}

    let count = document.getElementById('countBtn')
    count.addEventListener('click', contarString)

   