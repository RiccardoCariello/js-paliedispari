/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */



//---------------------------------- Main -------------------------------------------


let playerChoose = "";
let playerNum = 0;
let computerNum = 0;


//qui chiedo almeno una volta un prompt, rendo tutte le sue lettere minuscole e poi verifico che sia uguale a "even oppure a "odd, altriumenti lo richiede

do{
    playerChoose = prompt("choose \"even\" or \"odd\"?");
    playerChoose = playerChoose.toLowerCase();
}while(playerChoose !== "even" && playerChoose !== "odd");


//qui accetto un numero dall'utente e lo converto in int, se questo numero è effettivamente un numero ed è+ compreso tra 1 e 5 allora va bene

do{
    playerNum = prompt("Scegli il tuo numero da 1 a 5");
    playerNum = parseInt(playerNum);
}while( (playerNum < 1 || playerNum > 5) || isNaN(playerNum));


// qui avviene una somma tra il prompt dell'utente ed un numero random compreso tra 1 e 5 
computerNum = randomGenerator1_5();
console.log("numero del computer" + computerNum)


let somma = playerNum + computerNum;
console.log("risultato somma" + somma);

console.log(isEvenOrOdd(somma));

//ora scopriamo chi ha vinto
if( playerChoose == isEvenOrOdd(somma)){
    console.log("Hai vinto!");
    alert("Hai vinto!");
}else{
    console.log("Hai perso!");
    alert("Hai perso!");
}


//-----------------------------------------------------------------------------------







//---------------------------------- Funzione ---------------------------------------

function randomGenerator1_5(){
    return Math.floor(Math.random() * 5) + 1;
}


function isEvenOrOdd(sum){
    if(sum % 2 == 0){
        return "even";
    }else return "odd";
}
//--------------1---------------------------------------------------------------------