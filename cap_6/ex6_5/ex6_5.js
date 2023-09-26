function generateEmail () {

    let empresa = prompt('Qual o nome da empresa?')
    let name = window.document.getElementById('employeeTxt')
    let nome = name.value 
    let resposta = window.document.getElementById('resposta')
    let divide = nome.split(" ")

    if (nome == "" || nome.indexOf(" ") == -1) { 
        alert('Favor, verifique novamente e insira os dados corretamente...')
        nome.focus()
        return
    }

    let email = "" 

    let tamanho = divide.length

    for (contador = 0; contador < tamanho-1; contador ++) { 
        email += divide[contador].charAt(0)
    }

    email += divide[tamanho-1] + "@"+empresa+".com.br"

    resposta.textContent = "E-mail: " + email.toLowerCase()

}