console.log('JS OK');
// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente,
// nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Potete usare liste, input e bottoni non stilizzati, mettendo stampe di debug in console e risultato finale in un alert.
// Solo una volta finito, a piacere e facoltativamente, potete aggiungete lo stile.

// NOTA:  non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

// BONUS
// Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
// Consigli del giorno
// Pensate prima in italiano.
// Dividete in piccoli problemi la consegna.
// Individuate gli elementi di cui avete bisogno per realizzare il programma.
// Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"

//! Raccolta Dati
//  
// 

// //! Elaborazione 
// // Generatore1 di numeri casuali da 0 a 99
// const numbersGenerator1 = Math.random() * 99 ;
// // Generatore2 di numeri casuali da 0 a 99
// const numbersGenerator2 = Math.random() * 99 ;
// // Generatore3 di numeri casuali da 0 a 99
// const numbersGenerator3 = Math.random() * 99 ;
// // Generatore4 di numeri casuali da 0 a 99
// const numbersGenerator4 = Math.random() * 99 ;
// // Generatore5 di numeri casuali da 0 a 99
// const numbersGenerator5 = Math.random() * 99 ;

// // variabile1 che arrotonda per eccesso
// const intNum1 = Math.ceil(numbersGenerator1);
// console.log(intNum1)
// // variabile2 che arrotonda per eccesso
// const intNum2 = Math.ceil(numbersGenerator2);
// console.log(intNum2)
// // variabile3 che arrotonda per eccesso
// const intNum3 = Math.ceil(numbersGenerator3);
// console.log(intNum3)
// // variabile4 che arrotonda per eccesso
// const intNum4 = Math.ceil(numbersGenerator4);
// console.log(intNum4)
// // variabile5 che arrotonda per eccesso
// const intNum5 = Math.ceil(numbersGenerator5);
// console.log(intNum5)

// // Prompt per chiedere i numeri all'utente 
// // prompt('inserisci un numero da 0 a 99 ')

const = []


// Ciclo for
for (let i = 0; i <5; i++){
    const numbersGenerator = Math.random() * 99 ;
    const intNum = Math.ceil(numbersGenerator);
    console.log(intNum)   
}

// //! Output