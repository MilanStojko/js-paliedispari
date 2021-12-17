

function somma (){ //atributi inutili
    let risultato = (userNum + cpuNum);
    return risultato;
}

let userChoice = '';
let userNum = 0;
let cpuNum = 0;
let sommaNum = 0;

userChoice = prompt("scegli Pari o Dispari");
if(userChoice == "Pari" || userChoice == "Dispari"){

    userNum = parseInt(prompt("inserisci un numero da 1 a 5"));
    cpuNum = parseInt(Math.floor(Math.random()*5 + 1 ));
    sommaNum = somma (userNum + cpuNum);

    console.log (userNum);
    console.log (cpuNum);
    console.log (sommaNum);

    if((userChoice == "Pari") && (sommaNum % 2 == 0)){

        console.log ("HAI VINTO!!! POG!!");

    }else if((userChoice == "Dispari") && (sommaNum % 2 !=0)){

        console.log ("HAI VINTO!!! POG!!");

    }else{

        console.log ("HAHA LOSER!! JK, FEELSBADMAN")
    }

    
}else{

    console.log ("IMPARA A LEGGERE LMAO");

}
