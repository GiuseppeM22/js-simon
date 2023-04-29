//stampiamo in console 5 numeri ccasuali
    
let numeriGenerati = []     //creiamo una variabile in cui conservare l'array di numeri casuali generati dalla funzione
let numeriUtente = []      //creiamo una variabile in cui conserare un array dei numeri scritti dall'utente nel prompt
console.log(numeriUtente)

function numeriCasuali() {     // creiamo una funzione in grado di generare numeri casuali da 1 a 100
    return Math.floor(Math.random() * 100 +1);
  }


  for (let i = 0; i < 5; i++) {   // cicliamo sulla funzione precedente per poter creare almeno 5 numeri da 1 a 100
    let numeroCasuale;            
    numeroCasuale = numeriCasuali();
    numeriGenerati.push(numeroCasuale) // li pushamo nella variabile in alto per formare un array di 5 numeri
    
}
alert("memorizza questi numeri in pagina in maniera ordinata")   // a questo punto chiediamo all'utente di memorizzare i dati presenti in pagina...verra eseguita al caricamento della pagina
document.getElementById("numeri_casuali").innerText = numeriGenerati

setTimeout(numeriScomparsa, 10 * 1000);

function numeriScomparsa (){  // alll'interno di questa funzione stabiliamo quello che avverrà dopo i 30 secondi
   document.getElementById("numeri_casuali").classList.add("nascondi")
}
    

setTimeout(uscitaPrompt, 11 * 1000); // creiamo una funzione tempo in cui settiamo un timing di 30 sec

function uscitaPrompt (){  // alll'interno di questa funzione stabiliamo quello che avverrà dopo i 30 secondi
       
    for (let i = 0; i < numeriGenerati.length; i++) {  // cicliamo sui numeri generati prima per poterli estrapolare singolarmente
        let domanda = prompt("Ricordi qualche numero?")  // facciamo continuare a chiedere il prompt per 5 volte ovvelo la lunghezza dell'array di numeri generati
        if(domanda==numeriGenerati[i]){  // confrontiamo i due valori,
            numeriUtente.push(domanda)  // se il numero scritto dall'utente nel prompt e uguale a uno dei valori in numeri generati, lo pushamo nell'array sopra
        }
    }
    alert("hai indovinato i seguenti numeri " + numeriUtente)  // avvisiamo l'utente di quali numeri ha indovinato
}
