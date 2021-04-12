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
surnameList.push(prompt("Inserisci il tuo cognome:"));

// metto in ordine alfabetico la lista dei cognomi;
var surnameList = surnameList.sort();
/* console.log(surnameList); */

// creo un ciclo for che misura gli elementi dell'array e li stampa nell'html;
for (var i = 0; i < surnameList.length; i++) {
  var surname = surnameList[i];
  var previousItem = document.getElementById("list").innerHTML;

// sommo previousItem a se stesso + l'indice + l'elemento della surnameList e lo visualizzo;
document.getElementById("list").innerHTML = previousItem +  "<li> n. " + (i + 1) + ": " + surname + "</li>"
console.log("Surname number " + (i + 1) + ": " + surnameList[i])
}
  