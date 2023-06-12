
// Declaring the global variable for the patient names 
   let paciente = []
 
function Atender() { 

    // Creating a HTML reference 
    let nameBox = document.getElementById('txtNome')

    // Transforming what the user typed in smth visible on browser
    let nomeCaixa = nameBox.value

    // Verifying if there's something valid already typed
    if (nomeCaixa === '') { 
        alert('Por favor, colocar um valor válido!')
        nomeCaixa.focus()
        return
    }

    // Adding the name as the last string in the vector
    paciente.push(nomeCaixa)
    // Acumulating the names 
    let list = paciente.join('' + "\n")


    for (let contador = 0; contador < paciente.length; contador++) {
        outLista.textContent = list 
    }

 
}

    let addButton = document.getElementById('addBtn')
    addButton.addEventListener('click', Atender)

function Urgencia () { 


     // Creating a HTML reference 
     let nameBox = document.getElementById('txtNome')
 
     // Transforming what the user typed in smth visible on browser
     let nomeCaixa = nameBox.value
 
     // Verifying if there's something valid already typed
     if (nomeCaixa === '') { 
         alert('Por favor, colocar um valor válido!')
         nomeCaixa.focus()
         return
     }

     // Bringing the last input to the first place
     paciente.unshift(nomeCaixa)

    // Acumulating the names 
    let list = paciente.join('' + "\n")

     for (let contador = 0; contador < paciente.length; contador++) {
        outLista.textContent = list 
        
     }

}

    let Urgency = document.getElementById('urgencyBtn')
    Urgency.addEventListener('click', Urgencia)

function ComplyEvent () { 

    // Creating a HTML reference 
     let nameBox = document.getElementById('txtNome')
 
     // Transforming what the user typed in smth visible on browser
     let nomeCaixa = nameBox.value
 
     // Verifying if there's something valid already typed
     if (nomeCaixa === '') { 
         alert('Por favor, colocar um valor válido!')
         nomeCaixa.focus()
         return
    
     }

    let atender = paciente.shift()
    OutAtendimento.textContent = atender 

     // Acumulating the names 
     let list = paciente.join('' + "\n")
     outLista.textContent = list

}

    let Comply = document.getElementById('complyBtn')
    Comply.addEventListener('click', ComplyEvent)
