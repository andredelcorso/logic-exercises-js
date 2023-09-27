let day = document.getElementById('getDay')
let month = document.getElementById('getMonth')
let year = document.getElementById('getYear')
let tod = document.getElementById('todayIS')

function getDate () { 

    function oneMoreDigit(digit) { 
        if (digit < 10) { 
            return ('0' + digit) 
            } else {
                return (digit)
            }
        }
    

    let hoje = new Date() 

    let d = hoje.getDay()
    let m = hoje.getMonth() + 1
    let y = hoje.getFullYear()
    let t = hoje.toLocaleDateString('pt-br', {weekday: 'long'})

    day.innerHTML = oneMoreDigit(d)
    month.innerHTML = oneMoreDigit(m)
    year.innerHTML = oneMoreDigit(y)
    tod.innerHTML = t

    let resposta = document.getElementById('resposta')

    let currentdate = date.format()
    resposta.textContent = currentdate
}

getDate()