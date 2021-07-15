//  chiedere il nome cognome colore eta
var Name = prompt("Dimmi il tuo nome?");

var Surname = prompt("Dimmi il tuo cognome?");

var Color = prompt("Dimmi il tuo colore preferito?");

var Year = prompt("Quanti anni hai?");

var d = 2021 - Year;

document.getElementById ("info").innerHTML =  "Ciao " + Name + " " + Surname; 

document.getElementById ("colore").innerHTML = "Il tuo colore prederito é il " + Color;

document.getElementById ("anno").innerHTML = "e hai " + Year + " anni";

document.getElementById ("nascita").innerHTML = "e sei nato nel " + d;