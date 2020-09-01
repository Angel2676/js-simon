// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla
// volta i numeri che ha visto precedentemente. Dopo che
// sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati

// *********+SVOLIGEMNTO ESERCIZIO*************

// 1 Step - Alert con 5 numeri casuali

var numCas = [];
var numGen;


for (var i = 0; i < 5; i++) {
 numGen = generaRandom(1,100);
 numCas.push(numGen);
};

alert(numCas);

// 2 Step - Da li parte un timer di 30 secondi.
var arrUt = [];
var numUt;
var pez = [];
setTimeout(function(){
    for (var i = 0; i < 5; i++) {
        numUt = prompt("Inserisci i numeri che hai visto");
        if (trovaElemento(pez,numUt) == false) {
        pez.push(numUt);
        } else if (trovaElemento(pez,numUt) == true) {
        alert("Inserisci un altro numero")
        } if (trovaElemento(numCas,numUt) == true && trovaElemento(arrUt,numUt) == false) {
        arrUt.push(numUt);
        } else if (numUt < 0 || numUt > 100) {
        alert("Inserisci solo numeri da 1 a 100")
        } else if (isNaN(numUt)) {
        alert("Puoi inserire solo numeri")
        }


    }
    console.log(arrUt);
        if(arrUt.length == 0){
        document.getElementById('testo').innerHTML= "Mi spiace hai perso non hai trovato nessuna combinazione";
        } else if (arrUt.length == 1) {
        document.getElementById('testo').innerHTML= "Hai trovato " + arrUt.length + " combinazione vincente e il numero fortunato è " + arrUt;
        } else if (arrUt.length > 1) {
        document.getElementById('testo').innerHTML= "Hai trovato " + arrUt.length + " combinazioni vincenti e i numeri fortunati sono " + arrUt;

        }

},2000);







// ********FUNZIONI**********

function generaRandom(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}


function trovaElemento(lista,elemento) {
    var trovato = false;
    for (var i = 0; i < lista.length; i++) {
        if(elemento == lista[i]){
            trovato = true;
        }

    }
    return trovato;
 }
