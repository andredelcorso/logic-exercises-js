    function clear() { 

        // Assim você limpa o conteúdo dos elementos 
        window.document.getElementById('namePerson').value = ""
        window.document.getElementById('masc').checked = false
        window.document.getElementById('fem').checked = false
        window.document.getElementById('heightPerson').value = ""

        // Posiciona o fofo no elemento 'namePerson' 
        window.document.getElementById('namePerson').focus()

    }

    let clearButton = window.document.getElementById('buttonLimpar')
    clearButton.addEventListener('click', clear)

    function idealPeso () {

    //Variáveis que fazem referências aos campos criados em HTML (Nota: .checked é importante em um type="radio" pois quando eu lançar uma condição, preciso ver se o que eu escolhi está checado OU não.)
        let nomePessoa = window.document.getElementById('namePerson').value
        let genderMan = window.document.getElementById('masc').checked
        let genderWoman = window.document.getElementById('fem').checked
        let heightP = window.document.getElementById('heightPerson').value


    //Condição para detectar se algum campo deixou de ser preenchido ou se não houve check no gênero. Caso positivo para um OU outro, alerta na tela. 
    if (nomePessoa == "" || genderMan == false && genderWoman == false) {
        window.alert('[ERRO] Por favor, verifique se os dados foram inseridos corretamente.')
    }

    // se altura vazio (0) ou Not a Number (um texto for informado, por exemplo), alerta na tela.
    if (heightP == 0 || isNaN(heightP)) {
        
        window.alert('[ERRO] Por favor, informe a altura corretamente')
        heightP.focus(); 
        return;
    }
    // Se FEMININO (if genderWoman == true)
    if (genderWoman) { 

        let pesoFem = parseFloat((Number(21) * Math.pow(heightP, 2))).toFixed(1)
        let resposta = window.document.getElementById('resposta').textContent = (`${nomePessoa}: seu peso ideal é ${pesoFem}`)
    
    } else {
        
        let pesoMasc = parseFloat((Number(22) * Math.pow(heightP, 2))).toFixed(1)

        //Apresenta a resposta na tela do navegador.
        let resposta = window.document.getElementById('resposta').textContent = (`${nomePessoa}: seu peso ideal é ${pesoMasc}`)

    }
}

    let buttonPeso = window.document.getElementById('buttonCalcular')
    buttonPeso.addEventListener('click', idealPeso) 
