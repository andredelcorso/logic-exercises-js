function apostar() {

    let number = document.getElementById('txtNumero')
    num = Number(number.value)

    if (num == "" || isNaN(num)) { 
        alert('Favor, inserir um valor válido')
    }
}