let bairroEntrega = prompt ('Bairro de entrega: ')
let taxaEntrega
switch (bairroEntrega) {
    case "Casa Branca":
    taxaEntrega = 7
    break
    case "Colorado":
    taxaEntrega = 15
    break
    case "Vila Figueira":
    taxaEntrega = 20
    break 
    default: 
    taxaEntrega = 8 

}

    alert ("Taxa R$: " + taxaEntrega.toFixed(2))