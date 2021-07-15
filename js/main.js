/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)

va applicato uno sconto del 20% per i minorenni

va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
*/

var numero_km = parseInt(prompt("Quanti Kilometri devi percorrere?"));

console.log("Km da percorrere " + numero_km);

var prezzo_biglietto = numero_km * 0.21;

console.log("il biglietto costa Euro " + prezzo_biglietto);

var eta = parseInt(prompt("inserisci età"));

console.log(eta);

var sconto_18 = Math.round((prezzo_biglietto * 0.80) * 100) / 100;

var sconto_65 = prezzo_biglietto * 0.60;

console.log(sconto_18);

console.log(sconto_65);

if (eta <= 18)
{
    console.log("Il tuo biglietto under 18 costa Euro " + sconto_18);
}
else if (eta >= 65)
{
    console.log("Il tuo biglietto over 65 costa Euro " + sconto_65);
}
else 
{
    console.log("Il tuo biglietto costa Euro " + prezzo_biglietto);
}
