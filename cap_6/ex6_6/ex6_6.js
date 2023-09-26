function passwordCheck () { 

    let pass = document.getElementById('passBox')
    password = pass.value

    let resposta = document.getElementById('resposta')


    let erros = []

    if (password.length < 8 || password.length > 15) { 
        erros.push("Possuir entre 8 e 15 caracteres")
    }

    if (password.match(/[0-9]/g) == null) { 
        erros.push('Possuir números entre 0 e 9 (pelo menos um)!')
    }

    if (!password.match(/[A-Z]/g) || password.match(/[A-Z]/g) == 1) { 
        erros.push('Deve possuir pelo menos DUAS letras maiúsculas.')
    }

    if (!password.match(/[a-z]/g)) { 
        erros.push('Deve possuir pelo menos uma letra minúscula.')
    }

    if (!password.match(/[\W|_]/g)) { 
        erros.push('Deve possuir pelo menos 1 símbolo!')
    }

    if (erros.length == 0) { 
        resposta.textContent = "Ok, senha válida."
    } else { 
        resposta.TextContent = "Problema encontrado. Refaça sua senha." + erros.join(" ,")
    }

}