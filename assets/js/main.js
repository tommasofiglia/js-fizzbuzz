//Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

//Creo un array vuoto e lo riempio di numeri che vanno da uno a 100, sostituendo però ai multipli dei numeri richiesti dall'esercizio, le diciture "Fizz" , "Buzz" e "FizzBuzz" attraverso un ciclo for con la condizione if

var numbers = [];
for (var i = 1; i <= 100; i++) {

  if ( (i %3 == 0) && (i %5 == 0)){
    numbers.push( i + " FizzBuzz");
  }else if (i %3 == 0) {
     numbers.push( i + " Fizz");
  } else if (i %5 == 0){
    numbers.push( i + " Buzz");
  } else {
    numbers.push(i);
  }

}

//Creo un altro ciclo for, una volta che l'array è pieno dei suoi elementi descritti precedentemente, per fare in modo che ogni elemento sia stampato a schermo in una lista non ordinata

for (var i = 0; i < numbers.length; i++) {
  var numbersElement = numbers[i];

  var numberList = document.getElementById('stampa-schermo').innerHTML;
  document.getElementById('stampa-schermo').innerHTML = numberList + "<li>" + numbersElement + "</li>";
}
