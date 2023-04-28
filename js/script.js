//stampiamo in console 5 numeri ccasuali
    
let numeriGenerati = []

function numeriCasuali() {
    return Math.floor(Math.random() * 100 +1);
  }


  for (let i = 0; i < 5; i++) {
    let numeroCasuale;
    numeroCasuale = numeriCasuali();
    numeriGenerati.push(numeroCasuale)
    
}
alert("memorizza questi numeri in pagina")
document.getElementById("numeri_casuali").innerText = numeriGenerati
console.log(numeriGenerati.length)

setTimeout(fineTempo, 2 * 1000);

function fineTempo (){
    let domanda;
    do
    domanda = prompt("inserisci i numeri a schermo") 
    while (domanda <= numeriGenerati.lenght);

    
}

