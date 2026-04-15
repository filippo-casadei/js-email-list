// Collego dal dom l'elemento tramite id

const lista = document.querySelector("#lista-email");

// Creo la funzione per fare richiesta API, then1 funzione che mi restituisce un risultato
// e lo trasforma in json (ho un oggetto con 2 proprietà success: ture e response: mail), 
// then2 funzione che stampa in console una singola mail (dato.response).

function richiestaApi() {
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")

    .then(function(risposta) {
        return risposta.json();
    })
    .then(function(dato) {
        console.log(dato.response)
    })
};

richiestaApi();