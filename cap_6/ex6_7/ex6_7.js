function change () { 

    let texto = document.getElementById('txtBox')
    let txt = texto.value 

    let newStr = txt.replace(" ", "")
    let newStr2 = newStr.replace(/ /g, "").toLowerCase()
    let newStr3 = newStr2.replace(/o/g, "X")
    let newStr4 = newStr3.replace(/a/g, "Y")

    


    let resposta = document.getElementById('resposta').textContent = newStr4

}

function showF () { 
    let texto = document.getElementById('txtBox')
    let txt = texto.value 

    let resposta = document.getElementById('resposta').textContent = txt 
}