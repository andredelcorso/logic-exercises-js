let manchetes = []
let manchetesList = ""

function listarNoticia () { 

    let m = document.getElementById('txtBox')
    let manchete = m.value

    if (manchete == "" || m.value == "") {
        alert('Nenhuma matéria foi adicionada. Por gentileza, verifique os dados novamente: ')

    } else { 
        manchetes.push(manchete)
    } 

    document.getElementById('resposta').textContent = manchetes.length

}
    let counter = document.getElementById('addBtn')
    counter.addEventListener('click', listarNoticia)


function mostrarNoticia () { 

    let quantidadeNoticias = Number(prompt('Quantas notícias você gostaria de mostrar?'))

    let totalNoticias = manchetes.length

    if (quantidadeNoticias == 0 || quantidadeNoticias == "" || quantidadeNoticias > totalNoticias) {
        alert('Valor inválido. Favor, colocar outro número.')
    } 

    let ultimas = quantidadeNoticias + " Últimas Notícias\n-------------------------------------------------\n";

    for (let contador = totalNoticias - 1; contador >= totalNoticias - quantidadeNoticias; contador--)
        ultimas += (contador + 1) + "º) " + manchetes[contador] + "\n"

        document.getElementById('resposta').textContent = ultimas

}

    let showButton = document.getElementById('showBtn')
    showButton.addEventListener('click', mostrarNoticia)