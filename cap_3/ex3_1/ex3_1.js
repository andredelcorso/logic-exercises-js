function calcMedia () { 

    let nameAlumni = window.document.getElementById('alunoNome').value
    let n1 = window.document.getElementById('nota1').value
    let n2 = window.document.getElementById('nota2').value

    let media = parseFloat(((Number(n1) + Number(n2))) / 2).toFixed(1)

    let answer = window.document.getElementById('resposta').textContent = (`Média das notas: ${media}`)

    if (media >= 5) {
        let answer2 = window.document.getElementById('resposta2').textContent = (`Parabéns, ${nameAlumni}. Você foi APROVADO!`)
    } else {
        let answer2 = window.document.getElementById('resposta2').textContent += (`Poxa, não foi dessa vez. ${nameAlumni}, você precisa ESTUDAR MAIS!`)
        
    }
    
}

    let mediaBtn = window.document.getElementById('mediaButton')

    mediaBtn.addEventListener('click', calcMedia)