/* //!ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

//*RISPOSTA 1
/* let me = {
  name: 'Joh',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.skills.pop();
console.log(me); */


/* //!ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.
 */

//* RISPOSTA 2

/* let array = [];
for (let index = 0; index <= 100 ; index++) {
  if (index % 2)array.push(index)
}
console.log(array) */


/* //!ESERCIZIO 3
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */

//* RISPOSTA 3
/* let array = [];
for (let index = 0; index <=10; index++) {
  array.push(Math.floor(Math.random() * 100))
}
console.log(array) */

/* //!ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

//* RISPOSTA 4

/* let array = [];
for (let index = 0; index <=50; index++) {
  array.push(Math.floor(Math.random() * 100))
}
for (let a = 0; a<=50 ; a++) {
  if (array[a] % 2 === 0) {
    console.log(array[a])
  }
} */

/* //!ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.
 */

//*RISPOSTA 5
/* let array = [];
for (let index = 0; index <=4; index++) {
  array.push(Math.floor(Math.random() * 100))
}
console.log(array);

let somma = 0;
for (let a = 0; a <=4; a++) {
  somma += array[a];
}
console.log(somma); */


/* //!ESERCIZIO 6
  Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.
*/

//*RISPOSTA 6

/* let array = [];
for (let index = 0; index <=4; index++) {
  array.push(Math.floor(Math.random() * 100))
}
console.log(array);

let arrayPlusOne = [];
for (let a = 0; a <=4; a++) {
  arrayPlusOne.push(array[a]+1)
}
console.log(arrayPlusOne) */

/* //!ESERCIZIO 7 (EXTRA)
  Scrivi del codice per eliminare solo i valori PARI da un array.
*/

//*RISPOSTA 7

/* let array = [];
for (let index = 0; index <=5; index++) {
  array.push(Math.floor(Math.random() * 100))
}
console.log(array);
for (let a=0 ; a<array.length; a++) {
  if (array[a] % 2 === 0) {
    array.splice(a,1);
    a--;
  }
}
console.log(array); */

/* //!ESERCIZIO 8
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

//*RISPOSTA 8

/* let array = [];
let randomN = 0;
for (let index = 0; index <=9; index++) {
  randomN = (Math.floor(Math.random() * 10));
  if (array.includes(randomN)) {
    index--;
  } else {array.push(randomN)}
}
console.log(array) */


/* //!ESERCIZIO 9
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

//*RISPOSTA 9
/* let array = ["EPICODE", "is", "great"];
for (let index = 0; index < array.length; index++) {
  array[index]=array[index].length;
}
console.log(array); */


/* //!ESERCIZIO 10
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

//*RISPOSTA 10
/* let array = [1, 3, 5, 7, 9];
let arrayBack = [];
for (let index = array.length-1; index >= 0; index--) {
  arrayBack.push(array[index])
}
console.log(arrayBack) */

/* //!ESERCIZIO 11
  Scrivi del codice per estrarre il massimo valore numerico da un array.
*/

//*RISPOSTA 11

/* let array = [];
let max = 0;
for (let index = 0; index <= 9; index++) {
  array.push(Math.floor(Math.random()*100));
}
console.log(array);
for (let index = 0; index < array.length; index++) {
  if (array[index]>max) {
    max = array[index];
  }
}
console.log(max); */



/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
let movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* //!ESERCIZIO 12
  Scrivi del codice per trovare il film più vecchio nell'array fornito.
*/

//*RISPOSTA 12

/* let older=9999;
let oldPos;
for (let index = 0; index < movies.length; index++) {
  if (parseInt(movies[index].Year)<older) {
    older = parseInt(movies[index].Year);
    oldPos = index
  }
}
console.log("Il film più vecchio è: " + movies[oldPos].Title + " del " + older) */



/* //!ESERCIZIO 13
  Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.
*/

//*RISPOSTA 13
/* console.log("Nel catalogo ci sono " + movies.length + " film"); */

/* //*!ESERCIZIO 14
  Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

//*RISPOSTA 14
/* console.log("Lista dei film nel catalogo:")
for (let index = 0; index < movies.length; index++) {
  console.log(movies[index].Title) 
} */

/* //!ESERCIZIO 15
  Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

//*RISPOSTA 15
/* console.log("I film usciti nel millenio corrente sono: ");
for (let index = 0; index < movies.length; index++) {
  if (parseInt(movies[index].Year)>1999) {
    console.log(movies[index].Title);
  }
} */

/* //!ESERCIZIO 16
  Scrivi del codice per ottenere dall'array fornito il film con il seguente id.
*/
//*RISPOSTA 16 
/* let id = 'tt0355702'
for (let index = 0; index < movies.length; index++) {
  if(movies[index].imdbID === id) console.log("Il film corrispondente all'id inserito è: " + movies[index].Title)
} */


/* //!ESERCIZIO 17
  Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
//*RISPOSTA 17
/* let yearSum = 0;
for (let index = 0; index < movies.length; index++) {
  yearSum += parseInt(movies[index].Year)
}
console.log("La somma degli anni di uscita dei film in catalogo è: " + yearSum) */


/* //!ESERCIZIO 18
  Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/

//*RISPOSTA 18
/* let question=0;
let input = window.prompt("Inserisci una parola");
console.log("Nel catalogo ci sono i seguenti film che contengono la parola: " + input);
for (let index = 0; index < movies.length; index++) {
  if (movies[index].Title.toLowerCase().includes(input.toLowerCase())) {
    console.log(movies[index].Title);
    question++;
  } 
} 
if (question === 0) console.log("Nessuno"); */

