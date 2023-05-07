// Variáveis globais  
let numContas = 0 
let valTotal = 0 

let resposta = ""

function Contador () { 

    //
    let describeBill = window.document.getElementById('descriConta')
    let totalPrice = window.document.getElementById ('valorTotal')
    let outListBill = window.document.getElementById ('outListaContas')
    let outTotalPrice = window.document.getAnimations('outTotalValor')

    //Obtém o conteúdo dos campos 

    let descricao = describeBill.value 
    let tPrice = Number(totalPrice.value)

    if (descricao == "" || tPrice == 0 || isNaN(tPrice)) { 
        alert('Favor, preencher os campos corretamente...')
        descricao.focus()
        return;
    }

    numContas++
    valTotal = valTotal + tPrice

    resposta = resposta + descricao + " - R$:" + tPrice.toFixed(2) + "\n"
    outListBill.textContent = resposta + "---------------------------------"
    outTotalPrice.textContent = resposta + numContas + " Conta(s) - Total R$: " + valTotal.toFixed(2)
}

    const buttonRegistrar = window.document.getElementById('registrarConta')
    buttonRegistrar.addEventListener('click', Contador)