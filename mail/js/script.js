// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (createvi una piccola lista di email),
// stampa un messaggio appropriato sull’esito del controllo.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// creare una lista di email
// creare pulsante in html per far inserire l'email all'utente
// per ogni volta l'utente inserisce la sua email controllare che l'email sia presente in una di quelle all'interno della lista
// far apparire un messaggio che l'utente è nella lista




let listaEmail = ['andrea@mail.com', 'laura@mail.com', 'robert@mail.com', 'gina@mail.com', 'gino@mail.com', 'giuseppina@mail.com' ];
console.log(listaEmail);

let buttonElement = document.querySelector('button');

buttonElement.addEventListener('click', function() {

let emailUtente = document.getElementById('email-utente').value;

let trovata = false;

for (let i = 0; i < listaEmail.length; i++){
    console.log(listaEmail[i]);

    /* if (emailUtente != listaEmail[i]) {
        alert('email inserita non presente nella lista')
    } else if (emailUtente === listaEmail[i]) {
        alert('complimenti, fai parte della lista')
    } */

    if (emailUtente === listaEmail[i]) {
        trovata = true;
    } 
    
}


if(trovata === true ) {
    alert('la mail è stata trovata');
} else {
    alert('email non trovata')
}
})


