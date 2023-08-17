let list = '' // Creating a list into a global scope

const kids = [] // Creating the vector

function adicionar () { 

    list = '' // Reseting the list inside the function (YOU DON'T NEED TO DECLARE ANOTHER VARIABLE. JUST CALL THE LIST.)

    // Creating the HTML references 
    let nome = document.getElementById('nomeBox').value 
    let idadeBox = document.getElementById('idadeBox')
    let idade = Number(idadeBox.value)

    kids.push({nome, idade}) // adding the names and their ages inside vector

    if (nome == "" || idade == "") { 
        alert('Favor, verificar se os dados foram inseridos corretamente e tente outra vez.') // Validating if the information inserted is correct
    } else { 
        for (let contador = 0; contador < kids.length; contador++) { 
            list += (`${kids[contador].nome} - ${kids[contador].idade} ano(s). \n   `) // generating a loop to add how many kids I want to add. 
        }
    }

}

    let add = document.getElementById('addBtn')
    add.addEventListener('click', adicionar) // linking the function with the HTML button "Adicionar".


    function lista () { 

        resposta.textContent = list // just showing the result of what i've already added 

    }

        let listB = document.getElementById('listBtn')
        listB.addEventListener('click', lista) // linking the function with the HTML button "Listar Todos"

        function percent () {
            if (kids.length == 0) { 
                alert('Não há crianças adicionadas na lista!')
            }

            let copy = kids.slice () // Creating a copy from the original vector

            copy.sort(function (a, b) {return a.idade - b.idade}) // Organizing the vector "idade" by ages. 

            let resumo = ""

            let auxiliar = copy[0].idade // 

            let names = [] // inserting the names for each age

            for (let contador = 0; contador < copia.length; copia++) {
                names.push(copia[contador].nome) 

            if (copy[contador].idade == auxiliar) {
                names.push(copy[contador].nome)

            } else { 
                resumo += auxiliar + "ano(s):" + names.length + "criança(s) - "
                resumo +=(names.length / copia.length * 100).toFixed(2) + "%\n"
                resumo += "(" + names.join(', ') + ")\n\n"
                auxiliar = copy[contador].idade
                names = []
                names.push(copy[contador].nome)
            }
        }

            resumo += auxiliar + " ano(s): " + nomes.length + " criança(s) - "
            resumo += (names.length / copia.length * 100).toFixed(2) + "%\n"
            resumo += "(" + names.join(', ') + ")\n\n"

            document.getElementById('outLista').textContent = resumo