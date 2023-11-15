// generare due numeri da 1 a 6
// assegnare i numeri uno a un giocatore e uno al pc
// stabilire il vincitore a chi fa il punteggio più alto

let numeroGiocatore = Math.round(Math.random() * 100)
let numeroPc = Math.round(Math.random() * 100)


console.log(numeroGiocatore,numeroPc)

if (numeroGiocatore < numeroPc) {
    console.log('I Pc sono i migliori, presto governeremo  il mondo')
} else if (numeroGiocatore > numeroPc) {
    console.log('Zitta sciocca macchina, sono il tuo padrone')
}