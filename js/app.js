console.log('Preventivo Boolean')

//recupero il form dal DOM
const formElement = document.getElementById ('form-preventivo')
console.log(formElement)


//elementi che non cambiano come traccia esercizio ore di lavoro = 10
const oreLavoro = 10


//ascoltiamo l'elemento submit e quando premiamo il pulsante di calcolo con type=submit blocchiamo l'invio del form 

formElement.addEventListener('submit', function (event) {    //siccome è un form blocco l'invio dei dati quando lo compilo in modo tale da non refreshare la pagina tramite event.preventDefault()
    event.preventDefault()


    //prendo gli elementi del form tipologia del lavoro e codice promozionale
    const tipoLavoro = document.getElementById('mansioni').value //.value se non inserisce questo dato l'utente non potrà andare avanti
    const codicePromo = document.getElementById('promo')


    //variabile con condizionali in base alla mansione scelta dall'utente
    let prezzoOrario = 0
    
    if (tipoLavoro === "backend") {
            prezzoOrario = 20.5
        } else if (tipoLavoro === "frontend") {
            prezzoOrario = 15.3
        } else if (tipoLavoro === "analysis") {
            prezzoOrario = 33.6
        } else {
            alert("Per favore seleziona un tipo di lavoro valido.")
            return;  //return per fermare l'esecuzione della funzione e restituire un valore al punto in cui la funzione è stata evocata
        }

    
        //risultato del prezzo della tipologia del lavoro X le ore di lavoro
        let prezzo = prezzoOrario * oreLavoro  //dichiarato con let perchè l'utente potrebbe inserire dei codici promozionali

        const codiciValidi = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24',]  // array di stringhe 

        //condizioni per verificare se il codice inserito è valido 
        if (codicePromo !== '') { //se codicePromo è diverso (!==) da un testo vuoto e quindi l'utente ha scritto qualcosa diciamo che (condizione annidata con if)
            if (codiciValidi.includes(codicePromo)) {
                prezzo = (prezzo * 75) / 100 //formula per applicare lo sconto del 25% sul prezzo      
            } else {
                alert("Codice promozionale non valido. Controlla l'inserimento corretto. Verrà applicato il prezzo pieno.")
            }
        }



        // Formatto il prezzo finale con due decimali e la virgola usando Intl.NumberFormat come in lezione
        const prezzoFormattato = new Intl.NumberFormat ('it-IT' , {
            style: 'currency',
            currency: 'EUR'
        }).format(prezzo)

        //prendo l'elemento da HTML prezzoFinale e lo converto in prezzoFormattato 
        prezzoFinale.textContent = prezzoFormattato


})
