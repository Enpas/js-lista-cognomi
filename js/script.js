// creo un array con dei cognomi;
var surnameList = [
  "Orsi",
  "Parma",
  "Auditore",
  "Lupi",
  "Kenway",
  "Cormac",
  "Borgia"
];

// contemporaneamente chiedo all'utente il suo cognome e lo pusho nell'array;
var userSurname = prompt("Inserisci il tuo cognome:");
surnameList.push(userSurname);
/* console.log(userSurname) */

// creo un array duplicato dal primo e metto in ordine alfabetico la lista dei cognomi;
var ordList = surnameList.slice();
ordList.sort();
/* console.log(ordList); */

// creo un ciclo for che misura gli elementi dell'array e li stampa nell'html;
for (var i = 0; i < ordList.length; i++) {
  var surname = ordList[i];
  var previousItem = document.getElementById("list").innerHTML;

// sommo previousItem a se stesso + l'indice + surname;
document.getElementById("list").innerHTML = previousItem +  "<li> n. " + (i + 1) + ": " + surname + "</li>"

 // quando il cognome corrisponde a quello inserito dall'utente, stampo un messaggio di avviso;
 if (surname === userSurname) {
  document.getElementById("allert").innerHTML = "L'utente " + userSurname + " è nella posizione n. " + (i + 1);
  } 

}
  