let list = '' // Creating a list into a global scope

const kids = [] // Creating the 

function adicionar () { 

    let list = '' // Reseting the list inside the function

    // Creating the HTML references 
    let nome = document.getElementById('nomeBox').value 
    let idadeBox = document.getElementById('idadeBox')
    let idade = Number(idadeBox.value)

    kids.push({nome, idade}) // adding the names and their ages inside vector

    if (nome == "" || idade == "") { 
        alert('Favor, verificar se os dados foram inseridos corretamente e tente outra vez.') // Validating if the information inserted is correct
    } else { 
        for (let contador = 0; contador < kids.length; contador++) { 
            list += (`${kids[contador].nome}) - ${kids[contador].idade} anos.`) // generating a loop to add how many kids I want to add. 
        }
    }

}

    let add = document.getElementById('addBtn')
    add.addEventListener('click', adicionar) // linking the function with the HTML button "Adicionar".


    function lista () { 

        resposta.textContent = list 

    }

        let listB = document.getElementById('listBtn')
        listB.addEventListener('click', lista)