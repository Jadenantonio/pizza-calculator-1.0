//Jaden Muller, opdracht: pizza calculator
var pizzaSmall = prompt("Hoeveel S pizza's wilt u?","Aantal"); //vraagt aantal S pizza's
var prijsSmall = 4.95; //variable instellen voor standaart S prijs
document.write("Totaal Small pizza's: €", S*prijs1,"<br/>"); //rekent prijs totaal S pizza's uit

var pizzaMedium = prompt("Hoeveel M pizza's wilt u?","Aantal"); //vraagt aantal M pizza's
var prijsMedium = 6.95; //variable instellen voor standaart M prijs
document.write("Totaal Medium pizza's: €", M*prijs2,"<br/>"); //rekent prijs totaal M pizza's uit

var pizzaLarge = prompt("Hoeveel L pizza's wilt u?","Aantal"); //vraagt aantal L pizza's
var prijsLarge = 8.50; //variable instellen voor standaart L prijs
document.write("Totaal Large pizza's: €", L*prijs3,"<br/>"); //rekent prijs totaal L pizza's uit

var totaalSmall = pizzaSmall*prijsSmall; //|
var totaalMedium = pizzaMedium*prijsMedium; //|> variable maken voor elk totaalprijs
var totaalLarge = pizzaLarge*prijsLarge; //|

document.write("Eindtotaal: €",totaalSmall+totaalMedium+totaalLarge); //hier word de uiteindelijke totaalprijs uitgerekend