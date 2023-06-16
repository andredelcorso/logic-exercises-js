function idade () { 

    const idade = [12, 16, 15, 17, 14]

    let maiores = false

    for (let contador = 0; contador < idade.length; contador++) {
        if (idade[contador] >= 18) { 
            let resposta = window.document.getElementById('resposta').textContent = alert(idade[contador])
            maiores = true
        }
    }

    if (!maiores) {
        alert("Não há nenhuma idade maior ou igual a 18 anos na lista.")
    }
}

    let verify = window.document.getElementById('verifyBtn')
    verify.addEventListener('click', idade)