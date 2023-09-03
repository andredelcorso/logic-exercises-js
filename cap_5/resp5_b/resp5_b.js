let listNumber = '' //Adding numbers into a list

let numerico = [] // creating the vector  

function addNumber() {

    let n = document.getElementById('inputNumber');
    let number = Number(n.value);
    
    if (isNaN(number) || number === 0 || numerico.includes(number)) { 
        alert('Favor, adicionar um valor válido e não repetido!');
        n.focus();
        return;

    } else {
        numerico.push(number);
    }
    
    document.getElementById('resposta').textContent = numerico.join('\n');
    n.value = '';
    n.focus();
}

    let add = document.getElementById('addBtn')
    add.addEventListener('click', addNumber)

    function organizeNum() {
        if (numerico.length === 0) {
            alert('Não há números na lista!');
            return;
        }
    
        let outOrdem = window.document.getElementById('outOrdem');
        let ordem = true;
    
        for (let index = 1; index < numerico.length; index++) {
            if (numerico[index] < numerico[index - 1]) {
                ordem = false;
                break;
            }
        }
    
        outOrdem.textContent = ordem ? "Ok! Números estão em ordem crescente" : "Atenção... Números não estão em ordem crescente";
    }
    
    let organize = document.getElementById('organizeBtn');
    organize.addEventListener('click', organizeNum);