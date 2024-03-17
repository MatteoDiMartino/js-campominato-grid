// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// creo bottone e base griglia
// creo dei box che verranno generati con il ciclo per creare nel concreto delle celle


// seleziono la griglia
    // seleziono il bottone che tramite click creerà le celle
        // dopo averlo selezionato e aver creato la funzione, gli inserisco un ciclo che genera tutte 100 celle
            // creo la variabile che identifica lo span 
                // quindi creerò degli span con la classe rispettiva ed il valore valore I progressivo del ciclo al suo interno
                    // e butterò tutto all'interno del div con l'id della griglia
                        // ovvero il valore I 

let grid =  document.querySelector('#msBox');

let btn = document.querySelector('#genBtn');
btn.addEventListener('click', function() {
    for (let i = 1; i < 101; i++) {
        let contentSpan = document.createElement('span');
        console.log(contentSpan);
        contentSpan.classList.add('inside-box')
        contentSpan.innerHTML = i;
        grid.append(contentSpan);

        contentSpan.addEventListener ('click', function() {
            contentSpan.classList.add('bg-danger');
            console.log(contentSpan);
        })
    }
})
let reset = document.querySelector('#resBtn');
console.log (reset);

// rimuovi elementi con classe inside box ed i rispettivi figli

reset.addEventListener('click', function () {
    let spanList = document.querySelectorAll('.inside-box');
    for (let i = 0; i < spanList.length; i++) {
        grid.removeChild(spanList[i]);
    }
})



















