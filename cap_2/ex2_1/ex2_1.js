
// Declara a função mostrarOla 
function mostrarNome() {

    // obtém o conteúdo do campo (com id=) nome
    let nome = window.document.getElementById('txtnome').value

    // exibe a resposta no campo determinado
    let resposta = window.document.getElementById('res').textContent = "Olá, " + nome
    
}

    // cria uma referência ao botão (com id=) mostrar
    let show = window.document.getElementById('mostrar')

    //Criando um registro para o botão mostrar com um ouvinte para o evento click,
    //Que ao ser clicado irá chamar a função mostrarOla 
    show.addEventListener('click', mostrarNome)
