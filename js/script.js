"use strict";

const parolaHTML = document.getElementById('parola');
const buttonHTML = document.querySelector('button');
const contBtnHTML = document.getElementById('cont-btn')

function isPalindromo() {
    //ripulisco il div che ho creato per stampare il risultato
    const resultToRemove = document.getElementById('my-div');
    if (resultToRemove) resultToRemove.remove();

    //prendo la parola dell'utente e ne faccio il reverse
    let parolaUtente = parolaHTML.value;
    let parRev = reverseString(parolaUtente);


    //controllo che non sia stata inserita una stringa vuota
    if (parolaUtente == '') {
        let result = createDivText('Devi inserire una parola!')
        contBtnHTML.append(result);
    }

    //controllo se la parola è palindroma e se lo è avviso l'utente
    else if (parolaUtente == parRev) {
        let result = createDivText('La parola inserita è palindroma!')
        contBtnHTML.append(result);
    }
    else {
        let result = createDivText('La parola inserita non è palindroma!')
        contBtnHTML.append(result);
    }
}

buttonHTML.addEventListener('click', isPalindromo);