//Jaden Muller, opdracht: pizza calculator
var pizzaSmall = prompt("Hoeveel S pizza's wilt u?","Aantal"); //vraagt aantal S pizza's
var prijsSmall = 4.95; //variable instellen voor standaart S prijs
var totaalPrijs = pizzaSmall*prijsSmall;
document.write(pizzaSmall," Small pizza's: €", totaalPrijs.toFixed(2),"<br/>"); //rekent prijs totaal S pizza's uit

var pizzaMedium = prompt("Hoeveel M pizza's wilt u?","Aantal"); //vraagt aantal M pizza's
var prijsMedium = 6.95; //variable instellen voor standaart M prijs
var totaalPrijs = pizzaMedium*prijsMedium;
document.write(pizzaMedium," Medium pizza's: €", totaalPrijs.toFixed(2),"<br/>"); //rekent prijs totaal M pizza's uit

var pizzaLarge = prompt("Hoeveel L pizza's wilt u?","Aantal"); //vraagt aantal L pizza's
var prijsLarge = 8.50; //variable instellen voor standaart L prijs
var totaalPrijs = pizzaLarge*prijsLarge;
document.write(pizzaLarge," Large pizza's: €", totaalPrijs.toFixed(2),"<br/>"); //rekent prijs totaal L pizza's uit

var totaalSmall = pizzaSmall*prijsSmall; //|
var totaalMedium = pizzaMedium*prijsMedium; //|> variable maken voor elk totaalprijs
var totaalLarge = pizzaLarge*prijsLarge; //|
var eindTotaal = totaalSmall+totaalMedium+totaalLarge;

document.write("Eindtotaal: €",eindTotaal.toFixed(2)); //hier word de uiteindelijke totaalprijs uitgerekend