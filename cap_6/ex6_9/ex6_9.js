function diferenceAges () { 

    let hoje = new Date () 
    let nascimento = prompt('Em que ano você nasceu?')
    let ano_atual = hoje.getFullYear()

    alert('Então você tem ' + (ano_atual - nascimento) + ' anos!')
}

diferenceAges()