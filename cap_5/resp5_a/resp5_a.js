let list = '' // creating a list in a global scope

const equipes = [] // creating the vector

function adicionar () { 

    list = '' // Reseting the list inside the function (YOU DON'T NEED TO DECLARE ANOTHER VARIABLE. JUST CALL THE LIST.)
    // Creating the HTML references 

    let clube = document.getElementById('clubeBox').value
    
    equipes.push({clube})

    if (equipes == "") {
        alert('Favor, inserir um valor válido') // Validating if the data input is correct 

    } else { 
        for (let contador = 0; contador < equipes.length; contador++) {
        list += (`${equipes[contador].clube} \n`) // generating a loop to add how many teams i want to 
        }
    }
}

    let add = document.getElementById('addBtn') 
    add.addEventListener('click', adicionar)

    function listar () { 

        resposta.textContent = list 

    }

    let listando = document.getElementById('listBtn')
    listando.addEventListener('click', listar)

    function formarJogos () { 
        if (equipes.length % 2 !== 0) {
            alert('Número de equipes deve ser par para formar jogos!')
        }

        // Clear any previous content 
        resposta.textContent = ''

        // Create pairs of teams 

        const pairs = [] 

        for (contador = 0; contador < equipes.length / 2; contador ++) {

            const team1 = equipes[contador].clube
            const team2 = equipes[equipes.length - 1 - contador].clube // It's here that I can make the first one with the last one, the second with the third and so on...

            pairs.push({team1, team2})

        }

        const table = document.createElement('table')
        for (const pair of pairs) {
                    
            const row = document.createElement('tr')
            const cell1 = document.createElement('td')
            const cell2 = document.createElement('tr')
        
            cell1.textContent = pair.team1
            cell2.textContent = pair.team2

            row.appendChild (cell1)
            row.appendChild (cell2) 
            table.appendChild(row)
        }

            resposta.appendChild(table)
    }
    
        let formarJogosBtn = document.getElementById('organizeBtn')
        formarJogosBtn.addEventListener('click', formarJogos)