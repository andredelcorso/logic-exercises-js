function change () { 

    let texto = document.getElementById('txtBox')
    let txt = texto.value 

    let newStr = txt.replace(/A/g, "X").toLowerCase()


    let resposta = document.getElementById('resposta').textContent = newStr

}

function showF () { 
    let texto = document.getElementById('txtBox')
    let txt = texto.value 

    let resposta = document.getElementById('resposta').textContent = txt 
}