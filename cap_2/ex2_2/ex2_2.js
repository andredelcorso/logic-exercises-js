function converterFilme () {

    let filme = window.document.getElementById('nome_filme').value
    let duracao = window.document.getElementById('duracao_filme').value

    // Arredonda pra baixo o valor da divisão
    let hours = Math.floor(duracao / 60)

    //Pega o resto da divisão entre os números. Esses são os seus minutos que estão FORA dos 60 minutos. Entendeu? 
    let minutes = duracao % 60

    let resposta = window.document.getElementById('res').textContent = (`Título do Filme: ${filme} | `)
    let resposta2 = window.document.getElementById('res').textContent += (`Duração: ${hours} hora(s) e ${minutes} minuto(s).`)

}

    // cria uma referência ao elemento id="converterButton"
    let convert = window.document.getElementById('converterButton')

    // registra um evento associado ao botão, para carregar uma função 
    convert.addEventListener('click', converterFilme)