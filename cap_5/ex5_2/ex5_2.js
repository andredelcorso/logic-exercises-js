let erros = []

let sorte = Math.floor(Math.random() * 100) + 1 

const chances = 6 

function apostar() {

    let number = document.getElementById('txtNumero')
    num = Number(number.value)

    if (num == "" || num <= 0 || num > 100) { 
        alert('Favor, inserir um valor válido')
    }

    // Referenciando espaços das saídas de dados 

    let OutDicas = document.getElementById('OutDicas')
    let OutErros = document.getElementById('OutErros')
    let OutChances = document.getElementById('OutChances')

    if (num == sorte) { 

        alert('Você Acertou. Parabéns!')
        betButton.disabled = true 
        playButton.className = "exibe"
        OutDicas.textContent = "Parabéns! Número sorteado: " + sorte 

    } else { 

        if (erros.indexOf(num) >= 0) {
            alert ("Você já apostou o número " + num + ". Tente outro...")
        } else { 
            erros.push(num) // adiciona numero ao vetor
            let numErros = erros.length // Obtém tamanho do vetor
            let numChances = chances - numErros // Calcula nº de chances 
            // exibe nº de erros, conteúdo do vetor de nº de chances 
            OutErros.textContent = "Erros: " + numErros + " (" +erros.join(",") + ")"
            OutChances.textContent = "Chances: " + numChances

            if (numChances == 0) { 
                alert("Suas chances acabaram...")
                betButton.disabled = true
                playButton.className = "exibe"
                OutDicas.textContent = "Game Over :( // Número sorteado foi o nº" + sorte 

            } else { 
                // usa operador ternário (condicional) para mensagem da dica 
                let dica = num < sorte ? "maior" : "menor"
                    OutDicas.textContent = "Dica: Tente um número " + dica + " que " + num
            }
        }
    }

    // limpa campo de entrada e posiciona cursor neste campo 

}

    let betButton = document.getElementById('betButton')
    betButton.addEventListener('click', apostar)

    
    function playAgain () { 

        location.reload()
    }

    
    let playButton = document.getElementById('playButton') 
    playButton.addEventListener('click', playAgain)