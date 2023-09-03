let listaCandidatos = [] // Declaring the vector 
let lista = '' // Creating the list


// In this function I will add all the candidates whose made the exam
function adicionarCandidato () { 
    
    // Creating references to the HTML elements 
    let inNome = document.getElementById('txtNome')
    let inAcertos = document.getElementById('txtNum')

    // making the variables whose was transformed from the HTML elements into valid data into my output
    let acertos = Number(inAcertos.value)
    let nome = inNome.value

    // condition to verify if there's some blank space or something wrong with the data before I store them
    if (nome == "" || acertos == "" || isNaN(acertos)) { 
        alert('Favor, adicionar um valor válido')
        inNome.focus ()
        return
    // If the first condition is okay, the data will be stored into a list and organized in the vector
    } else { 
        listaCandidatos.push({nome: nome, acertos: acertos})
    }
}

    // Transforming the HTML referenc into a functional button 

    let add = document.getElementById('addBtn')
    add.addEventListener('click', adicionarCandidato)

// with this function, the user will be allowed to list all the candidates who was recently added 
function listarTodos () {
     

    // I don't know why but I need to reset the list inside the function to work correctly
    let lista = ''

    // creating a loop to add everybody in the list and show it in the browser 
    for (let contador = 0; contador < listaCandidatos.length; contador ++) {
        lista += listaCandidatos[contador].nome + " - " + listaCandidatos[contador].acertos + " acertos \n"
    }

    // showing the content in the screen
    document.getElementById('resposta').textContent = lista
}

    // Transforming the HTML referenc into a functional button 
    let list = window.document.getElementById('listBtn')
    list.addEventListener('click', listarTodos)

function ordenarAprovados () { 

    // Checking if some data was set
    if (listaCandidatos == 0) { 
        alert('Nenhum candidato adicionado! Por favor, verifique.')
        return
    }

    // This part of the code let you decide how much points the candidates need to be approved. 
    let notaCorte = Number(prompt('Nota mínima para aprovação: '))

    // Simple condition to avoid a number equal a zero or Not A Number (NaN)
    if (notaCorte === 0 || isNaN(notaCorte)) {
        alert('Valor inválido. Favor, adicionar uma nota maior que 0.')
    }

    // Creating a copy from original list
    let copia = listaCandidatos.slice() 

    // Ordering the number of hits by person 
    copia.sort(function (a, b) {return a.acertos - b.acertos})

    // Turning the order a reverse list 
    copia.reverse

    let aprovados = "" // Contatenating the list

    for (let contador = 0; contador < copia.length; contador++) { 
        if (copia[contador].acertos >= notaCorte) { 
            aprovados += copia[contador].nome + " - " + copia[contador].acertos
        }
    }

    // Basic conditions to show who was approved 
    if (aprovados == "") {
        resposta.textContent = alert('Não há aprovados.')
    } else { 
        resposta.textContent = aprovados
    }


}
    // Transforming the HTML referenc into a functional button 
    let approved = document.getElementById('approvedBtn')
    approved.addEventListener('click', ordenarAprovados)