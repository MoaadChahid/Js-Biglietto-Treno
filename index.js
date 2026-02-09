//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

const utentekm = parseInt(prompt("Quanti chilometri vuoi percorrere?"))
const età = prompt("Quanti anni hai?")

//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)

const PrezzoPerChilometro = 0.21;

let PrezzoBiglietto = PrezzoPerChilometro * utentekm;

let scontoMinorenne = ""
let scontoOver65 = ""

//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.

if (età < 18) {

    let scontoMinorenne = PrezzoBiglietto * 0.8;

    console.log(`Il prezzo del biglietto è di` `${scontoMinorenne}`);
} else if (età > 65) {
    let scontoOver65 = PrezzoBiglietto * 0.6;

    console.log(`Il prezzo del biglietto è di` `${scontoOver65}`);
} else {
    console.log(PrezzoBiglietto)
};

