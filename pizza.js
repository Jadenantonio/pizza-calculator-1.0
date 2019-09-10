//Jaden Muller, opdracht: pizza calculator
var S = prompt("Hoeveel S pizza's wilt u?","Aantal"); //vraagt aantal S pizza's
var prijs1 = 4.95; //variable instellen voor standaart S prijs
document.write("Totaal Small pizza: €", S*prijs1,"<br/>"); //rekent prijs totaal S pizza's uit

var M = prompt("Hoeveel M pizza's wilt u?","Aantal"); //vraagt aantal M pizza's
var prijs2 = 6.95; //variable instellen voor standaart M prijs
document.write("Totaal Medium pizza: €", M*prijs2,"<br/>"); //rekent prijs totaal M pizza's uit

var L = prompt("Hoeveel L pizza's wilt u?","Aantal"); //vraagt aantal L pizza's
var prijs3 = 8.50; //variable instellen voor standaart L prijs
document.write("Totaal Large pizza: €", L*prijs3,"<br/>"); //rekent prijs totaal L pizza's uit

var totaal1 = S*prijs1; //-
var totaal2 = M*prijs2; //- variable maken voor elk totaalprijs
var totaal3 = L*prijs3; //-

document.write("Eindtotaal: €",totaal1+totaal2+totaal3); //hier word de uiteindelijke totaalprijs uitgerekend