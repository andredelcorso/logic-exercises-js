function badgeVerify () { 

    let nome = document.getElementById('nameGen')
    let name = nome.value
    let resposta = document.getElementById('outBadge')

    if (name == "" || name.indexOf(" ") == -1) { 
        alert('Informe o nome completo do participante...')
        name.focus()
        return
    }

    let firstName = name.indexOf(" ")
    let lastName = name.lastIndexOf(" ")

    let cracha = name.substr(0, firstName) + name.substr(lastName)

    resposta.textContent = (`Crachá: ${cracha}`)
}