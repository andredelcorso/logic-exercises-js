function Calcular() {
  let quantasChinchilas = document.getElementById('QtdChinchilas');
  let quantosAnos = document.getElementById('QtdAnos');

  let Chinchilas = Number(quantasChinchilas.value);
  let Anos = Number(quantosAnos.value);

  if (Chinchilas == 0 || Chinchilas < 2 || isNaN(Chinchilas) || Anos == 0 || isNaN(Anos)) {
    alert('Favor, verificar os dados. Obs.: O número inicial de Chinchilas deve ser igual ou superior a 02');
    return; // Exit the function if the data is invalid
  }

    resposta = "" // Reset the resposta variable

    for (let contador = 1; contador <= Anos; contador++) {    
            resposta += contador + "º Ano: " + Chinchilas + " Chinchilas\n"
            Chinchilas = Chinchilas * 3
    }

    document.getElementById('resposta').textContent = resposta
}

    let btnVerify = document.getElementById('verifyButton')
    btnVerify.addEventListener('click', Calcular)