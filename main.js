// ESERCIZIO 1 : Gestione del Carrello: Hai un array carrello = ["Mela", "Pane", "Latte"]. Aggiungi i seguenti articoli alla fine del carrello in un'unica operazione: "Uova" e "Formaggio". Stampa il carrello aggiornato.

// let carrello = ["Mela", "Pane", "Latte"]

// carrello.push("Uova" , "Formaggio");

// console.log(carrello);



// ESERCIZIO 2 : Tracciamento dei Lavori: Hai un array lavoriCompletati = ["Tetto", "Fondamenta", "Parete Est", "Parete Ovest"].
// L'ultimo lavoro registrato (Parete Ovest) è stato un errore e deve essere rimosso. devi rimuoverlo e memorizza l'elemento rimosso in una variabile chiamata erroreRimosso. Stampa sia l'array aggiornato che erroreRimosso.

// lavoriCompletati = ["Tetto", "Fondamenta", "Parete Est", "Parete Ovest"]

// let erroreRimosso = "Parete Ovest"

// lavoriCompletati.pop()
// console.log(lavoriCompletati);
// console.log(erroreRimosso);


// ESERCIZIO  3 : Coda di Messaggi: Hai un array codaMessaggi = ["Messaggio 1 (Importante)", "Messaggio 2", "Messaggio 3"] . Rimuovi e Stampa il primo messaggio dell'array  coda messaggi e  conservalo dentro una variabile chiamata messaggioLetto.

// let codaMessaggi = ["Messaggio 1 (Importante)", "Messaggio 2", "Messaggio 3"];

// let messaggioLetto = "Messaggio 1 (Importante)";

// codaMessaggi.shift();

// console.log(codaMessaggi);
// console.log(messaggioLetto);


// ESERCIZIO 4 : Messaggi di Allerta: Hai un array di notifiche notifiche = ["Nuovo utente", "Aggiornamento profilo"]. Devi aggiungere il messaggio "Allerta Sistema!" all'inizio della lista perché è la priorità più alta. Stampa la lista di notifiche aggiornata.

// let notifiche = ["Nuovo utente", "Aggiornamento profilo"]

// notifiche.unshift("Allerta Sistema!")


// console.log(notifiche);



// ESERCIZIO 5 : Cronologia del Documento: Hai una cronologia di revisioni nell'ordine in cui sono state eseguite: revisioni = [1.0, 1.1, 2.0, 3.5]. Inverti l'ordine per visualizzare le revisioni dalla più recente alla più vecchia. Stampa l'array invertito.


// let revisioni = [1.0, 1.1, 2.0, 3.5]

// revisioni.reverse()

// console.log(revisioni);


// ESERCIZIO 6 : Galleria d'Arte: Hai una lista di dipinti dipinti = ["Monet", "Van Gogh", "Picasso", "Da Vinci", "Klimt"]. Usa IL  per rimuovere "Picasso" e "Da Vinci" (2 elementi) partendo da.. e sostituirli con "Warhol" e "Pollock" nella stessa operazione. Stampa l'array dipinti risultante.

// let dipinti = ["Monet", "Van Gogh", "Picasso", "Da Vinci", "Klimt"];

// dipinti.splice(2, 2, "Warhol", "Pollock");

// console.log(dipinti);


// ESERCIZIO 7 : Classifica dei Punteggi: Hai un array di punteggi punteggi = [105, 42, 200, 18, 90]. Ordina l'array dal punteggio più alto al più basso (ordine decrescente). Suggerimento: devi usare una funzione di confronto personalizzata per l'ordinamento numerico. Stampa l'array ordinato.

// let punteggi = [105, 42, 200, 18, 90];

// punteggi.sort( (a , b)=> b - a);

// console.log(punteggi);

// ESERCIZIO 8 : Calcolo del Totale: Hai un array di prezzi di articoli: prezzi = [4.50, 12.99, 0.75, 22.00]. Usa ... per calcolare il totale complessivo di tutti i prezzi e memorizzarlo nella variabile totaleSpesa. Stampa totaleSpesa.

// let prezzi = [4.5, 12.99, 0.75, 22.00];

// let totaleSpesa = prezzi.reduce( (acc , prezzo)=> acc + prezzo); 
// console.log(totaleSpesa);


// ESERCIZIO 9 : Conversione Unità: Hai un array di lunghezze in metri: metri = [10, 5, 25, 100]. Usa ... per creare un nuovo array chiamato centimetri, dove ogni valore è convertito nella sua equivalente in centimetri (moltiplicato per 100). Stampa il nuovo array.

// let metri = [10, 5, 25, 100];

// let centimetri = metri.map( (metro)=> metro * 100):

// console.log(centimetri);


// ESERCIZIO 10 : Prezzi Scontati: Hai un array di prezzi di prodotti: prezzi = [50, 15, 85, 30, 10]. Usa .filter() per creare un nuovo array chiamato prezziAlti che contiene solo i prezzi che sono strettamente maggiori di 40. Stampa l'array prezziAlti.

// let prezzi = [50, 15, 85, 30, 10];

// let prezziAlti = prezzi.filter( (prezzo)=> prezzo > 40)

// console.log(prezziAlti);

// ESERCIZIO 11 : Visualizzazione del Menù: Hai un array di voci di menù: menu = ["Antipasto", "Primo", "Secondo", "Dolce"]. Usa ... per stampare in console ogni voce di menù, preceduta dalla frase: "Voce disponibile: ".

menu = ["Antipasto", "Primo", "Secondo", "Dolce"];

let MenuCompleto = menu.forEach( (pasto)=> {console.log("Voce disponibile: " + pasto)});



