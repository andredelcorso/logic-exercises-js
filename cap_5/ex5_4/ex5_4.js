let list = ''
const carros = []

function calcular () { 

    list = '' // Reset the list variable

    let text = document.getElementById('inputText').value
    let inputPrice = document.getElementById('inputPrice')
    let price = Number(inputPrice.value)

    carros.push({text, price}) // adding the price and models inside vector

    if (text == "" || price == "") { 
        alert('Favor, inserir valores válidos') // validating data

    } else { 

        for (let contador = 0; contador < carros.length; contador++) {
            list += (`${carros[contador].text} - R$${carros[contador].price}\n`);
    }

    }
}

    let add = document.getElementById('addBtn')
    add.addEventListener('click', calcular)

    function lista () { 
    
        resposta.textContent = list

    }

    let listar = document.getElementById('btnList') 
    listar.addEventListener('click', lista)

    function filter() { 

        let list = ''

        let maximo = Number(prompt('Qual valor máximo que você gostaria de pagar no carro?'))

        if (maximo == 0 || isNaN(maximo)) { 
            return;
        }


        for (let contador = 0; contador < carros.length; contador ++) {
            if (carros[contador].price == maximo) {
                list += carros[contador].text + "- R$: " + carros[contador].price.toFixed(2) + "\n"
            }
        }

        let outLista = document.getElementById('outLista')

        if (list == "") {
            outLista.textContent = "Não há carros com preço até R$ " + maximo.toFixed(2)
        } else { 
            outLista.textContent = "Carros até R$ " + maximo.toFixed(2) + "\n" +  list + 
                "\n-----------------------------------------------------\n" 
        }
                  
    }

        let btFiltrar = document.getElementById('filterBtn')
        btFiltrar.addEventListener('click', filter)