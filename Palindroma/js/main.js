/* Palidroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma.
 */


//--------------------------- Main --------------------------------
let parolaTest;
do{
    parolaTest = prompt("Inserisci la parola da testare! un numero non è idoneo.");
}while(!isNaN(parolaTest));

console.log(palindromoCheck(parolaTest));
alert(palindromoCheck(parolaTest));

//-----------------------------------------------------------------









//------------------------ FUNZIONI -------------------------------


function palindromoCheck(parola){

    let reversedParola = "";
    parola = parola.toLowerCase();
    for(i=parola.length-1 ; i >= 0 ; i--){
        reversedParola += parola.charAt(i);
    }
    if(parola == reversedParola){return "La parola data è palindroma";}
    else{return "La parola data non è palindroma";}

}