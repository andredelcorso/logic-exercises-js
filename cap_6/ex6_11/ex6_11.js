function showDate () { 

    function OneMoreDigit (digit) {
        if (digit < 10) { 
            return ('0' + digit)
        } else {
            return (digit)
        }
    }
    today = new Date () 

    day = today.getDate()
    month = today.getMonth()
    year = today.getFullYear()

    alert (OneMoreDigit(day) + "/" + OneMoreDigit(month) + "/" + year)

}

showDate() 