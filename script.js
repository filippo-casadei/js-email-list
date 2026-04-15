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
       // lista.innerHTML = lista.innerHTML + "<li>" + dato.response + "</li>"
        const li = document.createElement("li");
        li.textContent = dato.response;

        lista.appendChild(li);
    })

    
};

// tramite un ciclo for chiedo di ciclarlo 10 volte, in console.log ho 10 mail stamapte
for (let i = 0; i < 10; i++) {
richiestaApi();
};

// PENSIERI DA CONDIVIDERE DURANTE LA CORREZIONE:
// Avrebbe avuto senso creare un array vuoto e pusharci dentro ogni nuova mail random?

// Avrebbe avuto senso creare un contatore che cresce da 0 a 10 per sapere quando le mail
// sono state tutte create? 