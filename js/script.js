"use strict";

const parolaHTML = document.getElementById('parola');
const buttonHTML = document.querySelector('button');
const contBtnHTML = document.getElementById('cont-btn')
const buttonPlayHTML = document.getElementById('btn-play');
const optionHTML = document.getElementById('option');
const numeroHTML = document.getElementById('numero');
const risComputer = document.getElementById('ris-computer');
const risUtente = document.getElementById('ris-utente');
const risGioco = document.getElementById('ris-gioco');
const risSomma = document.getElementById('ris-somma');


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


function play() {
    let sceltaUtente = optionHTML.value;
    let numeroUtente = numeroHTML.value;
    let numeroComputer = randomNumber(1, 5);


    if (numeroUtente < 1 || numeroUtente > 5) {
        alert('devi inserire un numero tra 1 e 5')
        numeroHTML.value = '';
        window.location.reload();
        return
    }
    let somma = parseInt(numeroUtente) + parseInt(numeroComputer);
    risUtente.innerHTML = 'Il tuo numero:' + ' ' + numeroUtente;
    risComputer.innerHTML = 'Numero Computer:' + ' ' + numeroComputer;
    risSomma.innerHTML = 'La somma dei numeri è:' + ' ' + somma;


    if (sceltaUtente == 'pari') {
        if ((somma % 2) == 0) {
            risGioco.innerHTML = 'Hai vinto!';
        }
        else {
            risGioco.innerHTML = 'Hai Perso!';
        }
    }

    else if (sceltaUtente == 'dispari'){
        if (!(somma % 2) == 0) {
            risGioco.innerHTML = 'Hai vinto!';
        }
        else {
            risGioco.innerHTML = 'Hai Perso!';
        }

    }

}

buttonPlayHTML.addEventListener('click', play);
buttonHTML.addEventListener('click', isPalindromo);