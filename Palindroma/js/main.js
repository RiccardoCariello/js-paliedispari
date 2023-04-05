/* Palidroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma.
 */


//--------------------------- Main --------------------------------
let parolaTest;

//faccio mettere l'input finchè non è valido
do{
    parolaTest = prompt("Inserisci la parola da testare! un numero non è idoneo.");
}while(!isNaN(parolaTest));
//invoco la funzione e stampo il risultato sia a console che nell'alert
console.log(palindromoCheck(parolaTest));
alert(palindromoCheck(parolaTest));

//-----------------------------------------------------------------









//------------------------ FUNZIONI -------------------------------


function palindromoCheck(parola){
    //istanzio una variabile momentanea che mi serve solo per il test
    let reversedParola = "";
    //normalizzo la stringa da testare
    parola = parola.toLowerCase();
    //partendo dalla fine immagazzino i caratteri uno per uno partendo dalla fine nella mia variabile d'appoggio
    for(i=parola.length-1 ; i >= 0 ; i--){
        reversedParola += parola.charAt(i);
    }
    //se le due parole sono uguali allora la stringa è palindroma
    if(parola == reversedParola){return "La parola data è palindroma";}
    else{return "La parola data non è palindroma";}

}

//------------------------------------------------------------------