**Aprenda sobre programação funcional**

**A programação funcional é um estilo de programação em que as soluções são funções simples e isoladas, sem quaisquer efeitos colaterais fora do escopo da função: `INPUT -> PROCESS -> OUTPUT`**

**A programação funcional é sobre:**

1. **Funções isoladas - não há dependência do estado do programa, que inclui variáveis globais que estão sujeitas a alterações**
2. **Funções puras - a mesma entrada sempre dá a mesma saída**
3. **Funções com efeitos colaterais limitados - quaisquer alterações ou mutações no estado do programa fora da função são cuidadosamente controladas**

---

**Acontece que os membros do freeCodeCamp adoram chá.**

**No editor de código, as funções `prepareTea`e `getTea`já estão definidas para você. Chame a `getTea`função para obter 40 xícaras de chá para a equipe e armazene-as na `tea4TeamFCC`variável.**

// Function that returns a string representing a cup of green tea

const prepareTea = () => 'greenTea';



Given a function (representing the tea type) and number of cups needed, the

following function returns an array of strings (each representing a cup of

a specific type of tea).

- /

const getTea = (numOfCups) => {

const teaCups = [];

for(let cups = 1; cups <= numOfCups; cups += 1) {

const teaCup = prepareTea();

teaCups.push(teaCup);

}

return teaCups;

};

// Only change code below this line

const tea4TeamFCC = getTea(40);

// Only change code above this line

**Entenda a terminologia de programação funcional**

**A equipe FCC mudou de humor e agora quer dois tipos de chá: chá verde e chá preto. Fato Geral: As oscilações de humor do cliente são bastante comuns.**

**Com essas informações, precisaremos revisar a `getTea`função do último desafio para lidar com vários pedidos de chá. Podemos modificar `getTea`para aceitar uma função como parâmetro para poder mudar o tipo de chá que prepara. Isso torna `getTea`mais flexível e dá ao programador mais controle quando as solicitações do cliente são alteradas.**

**Mas, primeiro, vamos cobrir algumas terminologias funcionais:**

***Retornos de* chamada são as funções que são transferidas ou passadas para outra função para decidir a invocação dessa função. Você pode tê-los visto passados para outros métodos, por exemplo `filter`, em , a função de retorno de chamada informa ao JavaScript os critérios de como filtrar um array.**

**Funções que podem ser atribuídas a uma variável, passadas para outra função ou retornadas de outra função como qualquer outro valor normal, são chamadas de funções de *primeira classe* . Em JavaScript, todas as funções são funções de primeira classe.**

**As funções que recebem uma função como argumento ou retornam uma função como um valor de retorno são chamadas de funções de *ordem superior* .**

**Quando as funções são passadas ou retornadas de outra função, essas funções que foram passadas ou retornadas podem ser chamadas de *lambda* .**

---

**Prepare 27 xícaras de chá verde e 13 xícaras de chá preto e armazene-as em `tea4GreenTeamFCC`e `tea4BlackTeamFCC`variáveis, respectivamente. Observe que a `getTea`função foi modificada, portanto, agora ela assume uma função como o primeiro argumento.**

**Nota: os dados (o número de xícaras de chá) são fornecidos como o último argumento. Discutiremos isso mais em lições posteriores.**

// Function that returns a string representing a cup of green tea

const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea

const prepareBlackTea = () => 'blackTea';



Given a function (representing the tea type) and number of cups needed, the

following function returns an array of strings (each representing a cup of

a specific type of tea).

- /

const getTea = (prepareTea, numOfCups) => {

const teaCups = [];

for(let cups = 1; cups <= numOfCups; cups += 1) {

const teaCup = prepareTea();

teaCups.push(teaCup);

}

return teaCups;

};

// Only change code below this line

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);

const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

// Only change code above this line

console.log(

tea4GreenTeamFCC,

tea4BlackTeamFCC

);

**Evite mutações e efeitos colaterais usando programação funcional**

**Se você ainda não descobriu, o problema no desafio anterior era com a `splice`chamada na `tabClose()`função. Infelizmente, `splice`muda o array original em que é chamado, então a segunda chamada para ele usou um array modificado e deu resultados inesperados.**

**Este é um pequeno exemplo de um padrão muito maior - você chama uma função em uma variável, array ou objeto, e a função altera a variável ou algo no objeto.**

**Um dos princípios básicos da programação funcional é não mudar as coisas. Mudanças levam a bugs. É mais fácil evitar bugs sabendo que suas funções não mudam nada, incluindo os argumentos da função ou qualquer variável global.**

**O exemplo anterior não teve nenhuma operação complicada, mas o `splice`método mudou o array original e resultou em um bug.**

**Lembre-se de que, na programação funcional, mudar ou alterar coisas é chamado de *mutação* e o resultado é chamado de *efeito colateral* . Uma função, idealmente, deve ser uma *função pura* , o que significa que ela não causa efeitos colaterais.**

**Vamos tentar dominar essa disciplina e não alterar nenhuma variável ou objeto em nosso código.**

---

**Preencha o código da função `incrementer`para que ela retorne o valor da variável global `fixedValue`acrescido de um.**

// The global variable

var fixedValue = 4;

function incrementer () {

// Only change code below this line

return fixedValue + 1;

// Only change code above this line

}

incrementer();

console.log(fixedValue);

**Passe argumentos para evitar dependência externa em uma função**

**O último desafio foi um passo mais perto dos princípios de programação funcional, mas ainda há algo faltando.**

**Não alteramos o valor da variável global, mas a função `incrementer`não funcionaria sem a variável global `fixed**Value`estar lá.

**Outro princípio da programação funcional é sempre declarar suas dependências explicitamente. Isso significa que se uma função depende da presença de uma variável ou objeto, passe essa variável ou objeto diretamente para a função como um argumento.**

**Existem várias boas consequências desse princípio. A função é mais fácil de testar, você sabe exatamente qual entrada ela recebe e não vai depender de mais nada em seu programa.**

**Isso pode lhe dar mais confiança ao alterar, remover ou adicionar novo código. Você saberia o que pode ou não pode mudar e você pode ver onde estão as armadilhas potenciais.**

**Finalmente, a função sempre produziria a mesma saída para o mesmo conjunto de entradas, não importa que parte do código a execute.**

---

**Vamos atualizar a `incrementer`função para declarar claramente suas dependências.**

**Escreva a `incrementer`função de forma que receba um argumento e, em seguida, retorne um resultado após aumentar o valor em um.**

// The global variable

var fixedValue = 4;

// Only change code below this line

function incrementer (value) {

value = fixedValue + 1;

return value

// Only change code above this line

}

**Passe argumentos para evitar dependência externa em uma função**

O último desafio foi um passo mais perto dos princípios de programação funcional, mas ainda há algo faltando.

Não alteramos o valor da variável global, mas a função `incrementer`não funcionaria sem a variável global `fixedValue`estar lá.

Outro princípio da programação funcional é sempre declarar suas dependências explicitamente. Isso significa que se uma função depende da presença de uma variável ou objeto, passe essa variável ou objeto diretamente para a função como um argumento.

Existem várias boas consequências desse princípio. A função é mais fácil de testar, você sabe exatamente qual entrada ela recebe e não vai depender de mais nada em seu programa.

Isso pode lhe dar mais confiança ao alterar, remover ou adicionar novo código. Você saberia o que pode ou não pode mudar e você pode ver onde estão as armadilhas potenciais.

Finalmente, a função sempre produziria a mesma saída para o mesmo conjunto de entradas, não importa que parte do código a execute.

---

Vamos atualizar a `incrementer`função para declarar claramente suas dependências.

Escreva a `incrementer`função de forma que receba um argumento e, em seguida, retorne um resultado após aumentar o valor em um.

// The global variable

var fixedValue = 4;

// Only change code below this line

function incrementer (value) {

value = fixedValue + 1;

return value;

// Only change code above this line

}

**Refatorar Variáveis Globais Fora de Funções**

**Até agora, vimos dois princípios distintos para a programação funcional:**

1. **Não altere uma variável ou objeto - crie novas variáveis e objetos e retorne-os se necessário de uma função. Dica: usar algo como `var newArr = arrVar`, onde `arrVar`é um array simplesmente criará uma referência à variável existente e não uma cópia. Portanto, alterar um valor em `newArr`alteraria o valor em `arrVar`.**
2. **Declare os parâmetros da função - qualquer cálculo dentro de uma função depende apenas dos argumentos passados para a função, e não de qualquer objeto ou variável global.**

**Adicionar um a um número não é muito empolgante, mas podemos aplicar esses princípios ao trabalhar com matrizes ou objetos mais complexos.**

---

**Reescreva o código para que a matriz global `bookList`não seja alterada em nenhuma das funções. A `add`função deve adicionar o dado `bookName`ao final do array passado a ela e retornar um novo array (lista). A `remove`função deve remover o dado `bookName`do array passado para ela.**

**Nota: Ambas as funções devem retornar uma matriz e quaisquer novos parâmetros devem ser adicionados antes do `bookName`parâmetro.**

// The global variable

var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line

function add (originalBook, bookName) {

let newBookList = [...originalBook]

newBookList.push(bookName);

return newBookList;

// Change code above this line

}

// Change code below this line

function remove (originalBook, bookName) {

let newerBookList = [...originalBook]

var book_index = newerBookList.indexOf(bookName);

if (book_index >= 0) {

newerBookList.splice(book_index, 1);

return newerBookList;

// Change code above this line

}

}

var newBookList = add(bookList, 'A Brief History of Time');

var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');

var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

**Use o método do mapa para extrair dados de uma matriz**

**Até agora, aprendemos a usar funções puras para evitar efeitos colaterais em um programa. Além disso, vimos que o valor de ter uma função depende apenas de seus argumentos de entrada.**

**Este é apenas o começo. Como o próprio nome sugere, a programação funcional é centrada em uma teoria das funções.**

**Faria sentido poder passá-los como argumentos para outras funções e retornar uma função de outra função. Funções são consideradas *objetos de primeira classe* em JavaScript, o que significa que podem ser usadas como qualquer outro objeto. Eles podem ser salvos em variáveis, armazenados em um objeto ou passados como argumentos de função.**

**Vamos começar com algumas funções de array simples, que são métodos no protótipo do objeto de array. Neste exercício, estamos olhando `Array.prototype.map()`, ou mais simplesmente `map`.**

**O `map`método itera sobre cada item em uma matriz e retorna uma nova matriz contendo os resultados da chamada da função de retorno de chamada em cada elemento. Ele faz isso sem alterar a matriz original.**

**Quando o retorno de chamada é usado, três argumentos são passados. O primeiro argumento é o elemento atual sendo processado. O segundo é o índice desse elemento e o terceiro é a matriz na qual o `map`método foi chamado.**

**Veja abaixo um exemplo de uso do `map`método na `users`matriz para retornar uma nova matriz contendo apenas os nomes dos usuários como elementos. Para simplificar, o exemplo usa apenas o primeiro argumento do retorno de chamada.**

```
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names);

```

**O console exibiria o valor `[ 'John', 'Amy', 'camperCat' ]`.**

---

**A `watchList`matriz contém objetos com informações sobre vários filmes. Use `map`on `watchList`para atribuir uma nova matriz de objetos com apenas as chaves `title`e `rating`para a `ratings`variável. O código no editor atualmente usa um `for`loop para fazer isso, portanto, você deve substituir a funcionalidade de loop pela sua `map`expressão.**

// The global variable

var watchList = [

{

"Title": "Inception",

"Year": "2010",

"Rated": "PG-13",

"Released": "16 Jul 2010",

"Runtime": "148 min",

"Genre": "Action, Adventure, Crime",

"Director": "Christopher Nolan",

"Writer": "Christopher Nolan",

"Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",

"Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",

"Language": "English, Japanese, French",

"Country": "USA, UK",

"Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",

"Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",

"Metascore": "74",

"imdbRating": "8.8",

"imdbVotes": "1,446,708",

"imdbID": "tt1375666",

"Type": "movie",

"Response": "True"

},

{

"Title": "Interstellar",

"Year": "2014",

"Rated": "PG-13",

"Released": "07 Nov 2014",

"Runtime": "169 min",

"Genre": "Adventure, Drama, Sci-Fi",

"Director": "Christopher Nolan",

"Writer": "Jonathan Nolan, Christopher Nolan",

"Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",

"Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",

"Language": "English",

"Country": "USA, UK",

"Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",

"Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",

"Metascore": "74",

"imdbRating": "8.6",

"imdbVotes": "910,366",

"imdbID": "tt0816692",

"Type": "movie",

"Response": "True"

},

{

"Title": "The Dark Knight",

"Year": "2008",

"Rated": "PG-13",

"Released": "18 Jul 2008",

"Runtime": "152 min",

"Genre": "Action, Adventure, Crime",

"Director": "Christopher Nolan",

"Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",

"Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",

"Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",

"Language": "English, Mandarin",

"Country": "USA, UK",

"Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",

"Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",

"Metascore": "82",

"imdbRating": "9.0",

"imdbVotes": "1,652,832",

"imdbID": "tt0468569",

"Type": "movie",

"Response": "True"

},

{

"Title": "Batman Begins",

"Year": "2005",

"Rated": "PG-13",

"Released": "15 Jun 2005",

"Runtime": "140 min",

"Genre": "Action, Adventure",

"Director": "Christopher Nolan",

"Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",

"Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",

"Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",

"Language": "English, Urdu, Mandarin",

"Country": "USA, UK",

"Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",

"Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",

"Metascore": "70",

"imdbRating": "8.3",

"imdbVotes": "972,584",

"imdbID": "tt0372784",

"Type": "movie",

"Response": "True"

},

{

"Title": "Avatar",

"Year": "2009",

"Rated": "PG-13",

"Released": "18 Dec 2009",

"Runtime": "162 min",

"Genre": "Action, Adventure, Fantasy",

"Director": "James Cameron",

"Writer": "James Cameron",

"Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",

"Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",

"Language": "English, Spanish",

"Country": "USA, UK",

"Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",

"Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",

"Metascore": "83",

"imdbRating": "7.9",

"imdbVotes": "876,575",

"imdbID": "tt0499549",

"Type": "movie",

"Response": "True"

}

];

// Only change code below this line

var ratings = watchList.map(movie =>

{

return {

title: movie.Title,

rating: movie.imdbRating

};

});

// Only change code above this line

console.log(JSON.stringify(ratings));

**Implementar mapa em um protótipo**

**Como você viu na aplicação `Array.prototype.map()`, ou simplesmente `map()`anteriormente, o `map`método retorna um array do mesmo comprimento daquele em que foi chamado. Ele também não altera o array original, desde que sua função de retorno de chamada não altere.**

**Em outras palavras, `map`é uma função pura e sua saída depende exclusivamente de suas entradas. Além disso, leva outra função como argumento.**

**Você pode aprender muito sobre o `map`método se implementar sua própria versão dele. É recomendável usar um `for`loop ou `Array.prototype.forEach()`.**

---

**Escreva o seu próprio `Array.prototype.myMap()`, que deve se comportar exatamente como `Array.prototype.map()`. Você não deve usar o `map`método embutido . A `Array`instância pode ser acessada no `myMap`método usando `this`.**

// The global variable

var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {

var newArray = [];

// Only change code below this line

for( let i = 0; i < this.length; i++){

newArray.push(callback(this[i]))

}

// Only change code above this line

return newArray;

};

var new_s = s.myMap(function(item) {

return item * 2;

});

**Use o método de filtro para extrair dados de uma matriz**

**Outra função de array útil é `Array.prototype.filter()`, ou simplesmente `filter()`.**

`**filter`chama uma função em cada elemento de uma matriz e retorna uma nova matriz contendo apenas os elementos para os quais essa função retorna `true`. Em outras palavras, ele filtra o array, com base na função transmitida a ele. Por exemplo `map`, ele faz isso sem a necessidade de modificar o array original.**

**A função de retorno de chamada aceita três argumentos. O primeiro argumento é o elemento atual sendo processado. O segundo é o índice desse elemento e o terceiro é a matriz na qual o `filter`método foi chamado.**

**Veja abaixo um exemplo de uso do `filter`método na `users`matriz para retornar uma nova matriz contendo apenas os usuários com idade inferior a 30 anos. Para simplificar, o exemplo usa apenas o primeiro argumento do retorno de chamada.**

```
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30);

```

**O console exibiria o valor `[ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]`.**

---

**A variável `watchList`contém uma série de objetos com informações sobre vários filmes. Use uma combinação de `filter`e `map`on `watchList`para atribuir uma nova matriz de objetos com apenas as teclas `title`e `rating`. A nova matriz deve incluir apenas objetos onde `imdbRating`é maior ou igual a 8,0. Observe que os `rating`valores são salvos como strings no objeto e você pode precisar convertê-los em números para realizar operações matemáticas neles.**

// The global variable

var watchList = [

{

"Title": "Inception",

"Year": "2010",

"Rated": "PG-13",

"Released": "16 Jul 2010",

"Runtime": "148 min",

"Genre": "Action, Adventure, Crime",

"Director": "Christopher Nolan",

"Writer": "Christopher Nolan",

"Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",

"Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",

"Language": "English, Japanese, French",

"Country": "USA, UK",

"Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",

"Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",

"Metascore": "74",

"imdbRating": "8.8",

"imdbVotes": "1,446,708",

"imdbID": "tt1375666",

"Type": "movie",

"Response": "True"

},

{

"Title": "Interstellar",

"Year": "2014",

"Rated": "PG-13",

"Released": "07 Nov 2014",

"Runtime": "169 min",

"Genre": "Adventure, Drama, Sci-Fi",

"Director": "Christopher Nolan",

"Writer": "Jonathan Nolan, Christopher Nolan",

"Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",

"Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",

"Language": "English",

"Country": "USA, UK",

"Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",

"Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",

"Metascore": "74",

"imdbRating": "8.6",

"imdbVotes": "910,366",

"imdbID": "tt0816692",

"Type": "movie",

"Response": "True"

},

{

"Title": "The Dark Knight",

"Year": "2008",

"Rated": "PG-13",

"Released": "18 Jul 2008",

"Runtime": "152 min",

"Genre": "Action, Adventure, Crime",

"Director": "Christopher Nolan",

"Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",

"Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",

"Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",

"Language": "English, Mandarin",

"Country": "USA, UK",

"Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",

"Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",

"Metascore": "82",

"imdbRating": "9.0",

"imdbVotes": "1,652,832",

"imdbID": "tt0468569",

"Type": "movie",

"Response": "True"

},

{

"Title": "Batman Begins",

"Year": "2005",

"Rated": "PG-13",

"Released": "15 Jun 2005",

"Runtime": "140 min",

"Genre": "Action, Adventure",

"Director": "Christopher Nolan",

"Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",

"Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",

"Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",

"Language": "English, Urdu, Mandarin",

"Country": "USA, UK",

"Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",

"Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",

"Metascore": "70",

"imdbRating": "8.3",

"imdbVotes": "972,584",

"imdbID": "tt0372784",

"Type": "movie",

"Response": "True"

},

{

"Title": "Avatar",

"Year": "2009",

"Rated": "PG-13",

"Released": "18 Dec 2009",

"Runtime": "162 min",

"Genre": "Action, Adventure, Fantasy",

"Director": "James Cameron",

"Writer": "James Cameron",

"Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",

"Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",

"Language": "English, Spanish",

"Country": "USA, UK",

"Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",

"Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",

"Metascore": "83",

"imdbRating": "7.9",

"imdbVotes": "876,575",

"imdbID": "tt0499549",

"Type": "movie",

"Response": "True"

}

];

// Only change code below this line

var filteredList;

var filteredList = watchList

.map(movie => {

return {

title: movie.Title,

rating: movie.imdbRating

};

}).filter(movie => {

// return true it will keep the item

// return false it will reject the item

return parseFloat(movie.rating) >= 8.0;

});

// Only change code above this line

console.log(filteredList);

**Implementar o método de filtro em um protótipo**

**Você pode aprender muito sobre o `filter`método se implementar sua própria versão dele. É recomendável usar um `for`loop ou `Array.prototype.forEach()`.**

---

**Escreva o seu próprio `Array.prototype.myFilter()`, que deve se comportar exatamente como `Array.prototype.filter()`. Você não deve usar o `filter`método embutido . A `Array`instância pode ser acessada no `myFilter`método usando `this`.**

// The global variable

var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {

// Only change code below this line

var newArray = [];

for(let i = 0; i < this.length; i++){

if (callback(this[i]) === true) {

newArray.push(this[i]);

}

}

// Only change code above this line

return newArray;

};

var new_s = s.myFilter(function(item) {

return item % 2 === 1;

});

**Retornar parte de uma matriz usando o método de fatia**

**O `slice`método retorna uma cópia de certos elementos de uma matriz. Pode receber dois argumentos, o primeiro fornece o índice de onde começar a fatia, o segundo é o índice de onde terminar a fatia (e não é inclusivo). Se os argumentos não forem fornecidos, o padrão é começar do início do array até o final, que é uma maneira fácil de fazer uma cópia de todo o array. O `slice`método não altera o array original, mas retorna um novo.**

**Aqui está um exemplo:**

```
var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);

```

`**newArray`teria o valor `["Dog", "Tiger"]`.**

---

**Use o `slice`método na `sliceArray`função para retornar parte da `anim`matriz, dados os índices `beginSlice`e fornecidos `endSlice`. A função deve retornar uma matriz.**

function sliceArray(anim, beginSlice, endSlice) {

// Only change code below this line

return anim.slice(beginSlice, endSlice);

// Only change code above this line

}

var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

sliceArray(inputAnim, 1, 3);

**Remover elementos de uma matriz usando fatia em vez de emenda**

**Um padrão comum ao trabalhar com matrizes é quando você deseja remover itens e manter o resto da matriz. JavaScript oferece o `splice`método para isso, que leva argumentos para o índice de onde começar a remover itens e, em seguida, o número de itens a serem removidos. Se o segundo argumento não for fornecido, o padrão é remover os itens até o final. No entanto, o `splice`método altera o array original em que é chamado. Aqui está um exemplo:**

```
var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);

```

**Aqui, `splice`retorna a string `London`e a exclui do array cities. `cities`terá o valor `["Chicago", "Delhi", "Islamabad", "Berlin"]`.**

**Como vimos no último desafio, o `slice`método não altera o array original, mas retorna um novo que pode ser salvo em uma variável. Lembre-se de que o `slice`método usa dois argumentos para os índices começarem e terminarem a fatia (o final não é inclusivo) e retorna esses itens em uma nova matriz. Usar o `slice`método em vez de `splice`ajuda a evitar quaisquer efeitos colaterais de mutação de array.**

---

**Reescreva a função `nonMutatingSplice`usando em `slice`vez de `splice`. Ele deve limitar a `cities`matriz fornecida a um comprimento de 3 e retornar uma nova matriz com apenas os três primeiros itens.**

**Não modifique a matriz original fornecida para a função.**

function nonMutatingSplice(cities) {

// Only change code below this line

return cities.slice(0,3);

// Only change code above this line

}

var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

nonMutatingSplice(inputCities);

**Combine Dois Arrays Usando o Método Concat**

***Concatenação* significa juntar itens de ponta a ponta. JavaScript oferece o `concat`método para strings e arrays que funcionam da mesma maneira. Para arrays, o método é chamado em um e, em seguida, outro array é fornecido como o argumento para `concat`, que é adicionado ao final do primeiro array. Ele retorna uma nova matriz e não altera nenhuma das matrizes originais. Aqui está um exemplo:**

```
[1, 2, 3].concat([4, 5, 6]);

```

**A matriz retornada seria `[1, 2, 3, 4, 5, 6]`.**

---

**Use o `concat`método na `nonMutatingConcat`função para concatenar `attach`até o final de `original`. A função deve retornar a matriz concatenada.**

function nonMutatingConcat(original, attach) {

// Only change code below this line

return original.concat(attach);

// Only change code above this line

}

var first = [1, 2, 3];

var second = [4, 5];

console.log(nonMutatingConcat(first, second));

**Adicionar elementos ao final de uma matriz usando concat em vez de push**

**A programação funcional trata de criar e usar funções não mutantes.**

**O último desafio introduziu o `concat`método como uma forma de combinar arrays em um novo sem alterar os arrays originais. Compare `concat`com o `push`método. `push`adiciona um item ao final do mesmo array em que é chamado, o que altera esse array. Aqui está um exemplo:**

```
var arr = [1, 2, 3];
arr.push([4, 5, 6]);

```

`**arr`teria um valor modificado de `[1, 2, 3, [4, 5, 6]]`, que não é a forma de programação funcional.**

`**concat` oferece uma maneira de adicionar novos itens ao final de uma matriz sem quaisquer efeitos colaterais mutantes.**

---

**Altere a `nonMutatingPush`função para que seja usada `concat`para adicionar `newItem`ao final de em `original`vez de `push`. A função deve retornar uma matriz.**

function nonMutatingPush(original, newItem) {

// Only change code below this line

return original.concat(newItem);

// Only change code above this line

}

var first = [1, 2, 3];

var second = [4, 5];

nonMutatingPush(first, second);

**Use o método de redução para analisar dados**

`**Array.prototype.reduce()`, ou simplesmente `reduce()`, é a mais geral de todas as operações de array em JavaScript. Você pode resolver quase todos os problemas de processamento de array usando o `reduce`método.**

**O `reduce`método permite formas mais gerais de processamento de array e é possível mostrar que ambos `filter`e `map`podem ser derivados como aplicações especiais de `reduce`. O `reduce`método itera sobre cada item em uma matriz e retorna um único valor (ou seja, string, número, objeto, matriz). Isso é obtido por meio de uma função de retorno de chamada que é chamada em cada iteração.**

**A função de retorno de chamada aceita quatro argumentos. O primeiro argumento é conhecido como o acumulador, ao qual é atribuído o valor de retorno da função de retorno de chamada da iteração anterior, o segundo é o elemento atual sendo processado, o terceiro é o índice desse elemento e o quarto é a matriz sobre a qual `reduce`é chamado.**

**Além da função de retorno de chamada, `reduce`possui um parâmetro adicional que leva um valor inicial para o acumulador. Se este segundo parâmetro não for usado, a primeira iteração é ignorada e a segunda iteração passa o primeiro elemento da matriz como o acumulador.**

**Veja abaixo um exemplo usando `reduce`na `users`matriz para retornar a soma de todas as idades dos usuários. Para simplificar, o exemplo usa apenas o primeiro e o segundo argumentos.**

```
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges);

```

O console exibiria o valor `64`.

Em outro exemplo, veja como um objeto pode ser retornado contendo os nomes dos usuários como propriedades com suas idades como valores.

```
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj);

```

**O console exibiria o valor `{ John: 34, Amy: 20, camperCat: 10 }`.**

---

**A variável `watchList`contém uma série de objetos com informações sobre vários filmes. Use `reduce`para encontrar a classificação IMDB média dos filmes dirigidos por `Christopher Nolan`. Lembre-se de desafios anteriores como obter `filter`dados e `map`sobre eles para extrair o que você precisa. Você pode precisar criar outras variáveis e retornar a classificação média da `getRating`função. Observe que os valores de classificação são salvos como strings no objeto e precisam ser convertidos em números antes de serem usados em quaisquer operações matemáticas.**

// The global variable

var watchList = [

{

"Title": "Inception",

"Year": "2010",

"Rated": "PG-13",

"Released": "16 Jul 2010",

"Runtime": "148 min",

"Genre": "Action, Adventure, Crime",

"Director": "Christopher Nolan",

"Writer": "Christopher Nolan",

"Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",

"Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",

"Language": "English, Japanese, French",

"Country": "USA, UK",

"Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",

"Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",

"Metascore": "74",

"imdbRating": "8.8",

"imdbVotes": "1,446,708",

"imdbID": "tt1375666",

"Type": "movie",

"Response": "True"

},

{

"Title": "Interstellar",

"Year": "2014",

"Rated": "PG-13",

"Released": "07 Nov 2014",

"Runtime": "169 min",

"Genre": "Adventure, Drama, Sci-Fi",

"Director": "Christopher Nolan",

"Writer": "Jonathan Nolan, Christopher Nolan",

"Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",

"Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",

"Language": "English",

"Country": "USA, UK",

"Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",

"Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",

"Metascore": "74",

"imdbRating": "8.6",

"imdbVotes": "910,366",

"imdbID": "tt0816692",

"Type": "movie",

"Response": "True"

},

{

"Title": "The Dark Knight",

"Year": "2008",

"Rated": "PG-13",

"Released": "18 Jul 2008",

"Runtime": "152 min",

"Genre": "Action, Adventure, Crime",

"Director": "Christopher Nolan",

"Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",

"Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",

"Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",

"Language": "English, Mandarin",

"Country": "USA, UK",

"Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",

"Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",

"Metascore": "82",

"imdbRating": "9.0",

"imdbVotes": "1,652,832",

"imdbID": "tt0468569",

"Type": "movie",

"Response": "True"

},

{

"Title": "Batman Begins",

"Year": "2005",

"Rated": "PG-13",

"Released": "15 Jun 2005",

"Runtime": "140 min",

"Genre": "Action, Adventure",

"Director": "Christopher Nolan",

"Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",

"Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",

"Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",

"Language": "English, Urdu, Mandarin",

"Country": "USA, UK",

"Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",

"Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",

"Metascore": "70",

"imdbRating": "8.3",

"imdbVotes": "972,584",

"imdbID": "tt0372784",

"Type": "movie",

"Response": "True"

},

{

"Title": "Avatar",

"Year": "2009",

"Rated": "PG-13",

"Released": "18 Dec 2009",

"Runtime": "162 min",

"Genre": "Action, Adventure, Fantasy",

"Director": "James Cameron",

"Writer": "James Cameron",

"Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",

"Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",

"Language": "English, Spanish",

"Country": "USA, UK",

"Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",

"Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",

"Metascore": "83",

"imdbRating": "7.9",

"imdbVotes": "876,575",

"imdbID": "tt0499549",

"Type": "movie",

"Response": "True"

}

];

function getRating(watchList){

**// Only change code below this line**

var count = 0;

var averageRating = watchList.reduce((sum,movie) =>  {

if (movie.Director == "Christopher Nolan") {

count+=1;

return sum + parseFloat(movie.imdbRating);

}

return sum;

}, 0) / count;

**// Only change code above this line**

return averageRating;

}

console.log(getRating(watchList));

**Use funções de ordem superior para mapear, filtrar ou reduzir para resolver um problema complexo**

**Agora que você tem trabalhado através de alguns desafios usando as funções de ordem superior como `map()`, `filter()`e `reduce()`, você agora começar a aplicá-los a resolver um desafio mais complexo.**

---

**Conclua o código para a `squareList`função usando qualquer combinação de `map()`, `filter()`e `reduce()`. A função deve retornar uma nova matriz contendo os quadrados *apenas de* inteiros positivos (números decimais não são inteiros) quando uma matriz de números reais é passada para ela. Um exemplo de uma matriz de números reais é `[-3, 4.8, 5, 3, -3.2]`.**

**Nota: Sua função não deve usar nenhum tipo de `for`ou `while`loops ou a `forEach()`função.**

const squareList = arr => {

// Only change code below this line

return arr

.filter(num => num > 0 && num % parseInt(num) === 0)

.map(num => Math.pow(num, 2));;

// Only change code above this line

};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);

console.log(squaredIntegers);

**Classifique uma matriz em ordem alfabética usando o método de classificação**

**O `sort`método classifica os elementos de uma matriz de acordo com a função de retorno de chamada.**

**Por exemplo:**

```
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);

```

**Isso retornaria o valor `[1, 2, 3, 4, 5]`.**

```
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);

```

**Isso retornaria o valor `['z', 's', 'l', 'h', 'b']`.**

**O método de classificação padrão do JavaScript é pelo valor do ponto Unicode da string, que pode retornar resultados inesperados. Portanto, é recomendável fornecer uma função de retorno de chamada para especificar como classificar os itens da matriz. Quando tal função de retorno de chamada, normalmente chamada `compareFunction`, é fornecida, os elementos do array são classificados de acordo com o valor de retorno de `compareFunction`: If `compareFunction(a,b)`retorna um valor menor que 0 para dois elementos `a`e `b`, então `a`virá antes `b`. Se `compareFunction(a,b)`retorna um valor maior que 0 para dois elementos `a`e `b`, então `b`virá antes `a`. Se `compareFunction(a,b)`retorna um valor igual a 0 para dois elementos `a`e `b`, então `a`e `b`permanecerá inalterado.**

---

**Use o `sort`método na `alphabeticalOrder`função para classificar os elementos `arr`em ordem alfabética.**

function alphabeticalOrder(arr) {

// Only change code below this line

return arr.sort(function(a, b) {

return a === b ? 0 : a < b ? -1 : 1;

});

// Only change code above this line

}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

**Retorne uma matriz classificada sem alterar a matriz original**

**Um efeito colateral do `sort`método é que ele altera a ordem dos elementos na matriz original. Em outras palavras, ele transforma o array no local. Uma maneira de evitar isso é primeiro concatenar um array vazio ao que está sendo classificado (lembre-se disso `slice`e `concat`retorne um novo array) e, em seguida, execute o `sort`método.**

---

**Use o `sort`método na `nonMutatingSort`função para classificar os elementos de uma matriz em ordem crescente. A função deve retornar uma nova matriz e não alterar a `globalArray`variável.**

var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {

// Only change code below this line

return [].concat(arr).sort(function (a, b){

return a - b;

})

// Only change code above this line

}

nonMutatingSort(globalArray);

**Dividir uma string em uma matriz usando o método de divisão**

**O `split`método divide uma string em uma matriz de strings. É necessário um argumento para o delimitador, que pode ser um caractere a ser usado para quebrar a string ou uma expressão regular. Por exemplo, se o delimitador for um espaço, você obtém uma matriz de palavras e, se o delimitador for uma string vazia, você obtém uma matriz de cada caractere da string.**

**Aqui estão dois exemplos que dividem uma string por espaços, depois outra por dígitos, usando uma expressão regular:**

```
var str = "Hello World";
var bySpace = str.split(" ");

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);

```

`**bySpace`teria o valor `["Hello", "World"]`e `byDigits`teria o valor `["How", "are", "you", "today"]`.**

**Como as strings são imutáveis, o `split`método torna mais fácil trabalhar com elas.**

---

**Use o `split`método dentro da `splitify`função para dividir `str`em um array de palavras. A função deve retornar a matriz. Observe que as palavras nem sempre são separadas por espaços e a matriz não deve conter pontuação.**

function splitify(str) {

**// Only change code below this line**

return str.split(/\W/);

**// Only change code above this line**

}

splitify("Hello World,I-am code");

**Combine uma matriz em uma string usando o método de junção**

**O `join`método é usado para juntar os elementos de um array para criar uma string. Leva um argumento para o delimitador que é usado para separar os elementos da matriz na string.**

**Aqui está um exemplo:**

```
var arr = ["Hello", "World"];
var str = arr.join(" ");

```

`**str`teria um valor da string `Hello World`.**

---

**Use o `join`método (entre outros) dentro da `sentensify`função para fazer uma frase com as palavras na string `str`. A função deve retornar uma string. Por exemplo, `I-like-Star-Wars`seria convertido para `I like Star Wars`. Para este desafio, não use o `replace`método.**

function sentensify(str) {

// Only change code below this line

return str.split(/\W/).join(" ");

// Only change code above this line

}

console.log(sentensify("May-the-force-be-with-you"));

**Aplicar Programação Funcional para Converter Strings em URL Slugs**

**Os últimos vários desafios cobriram uma série de métodos úteis de array e string que seguem princípios de programação funcional. Também aprendemos sobre `reduce`, que é um método poderoso usado para reduzir problemas a formas mais simples. De calcular médias a classificação, qualquer operação de matriz pode ser alcançada aplicando-a. Lembre-se disso `map`e `filter`são casos especiais de `reduce`.**

**Vamos combinar o que aprendemos para resolver um problema prático.**

**Muitos sites de gerenciamento de conteúdo (CMS) têm os títulos de uma postagem adicionados a parte da URL para fins simples de bookmarking. Por exemplo, se você escrever uma postagem no Medium com o título `Stop Using Reduce`, é provável que o URL tenha alguma forma da string do título ( `.../stop-using-reduce`). Você já deve ter notado isso no site freeCodeCamp.**

---

**Preencha a `urlSlug`função para que ela converta uma string `title`e retorne a versão hifenizada para o URL. Você pode usar qualquer um dos métodos abordados nesta seção e não use `replace`. Aqui estão os requisitos:**

**A entrada é uma string com espaços e palavras com letras maiúsculas e minúsculas**

**A saída é uma string com os espaços entre as palavras substituídos por um hífen ( `-`)**

**A saída deve ser toda em letras minúsculas**

**A saída não deve ter espaços**

**// Only change code below this line**

function urlSlug(title) {

return title

.split(" ")

.filter(substr => substr !== "")

.join("-")

.toLowerCase();

}

**// Only change code above this line**

console.log(urlSlug("Winter Is Coming"))

**Use o método every para verificar se cada elemento em uma matriz atende a um critério**

**O `every`método funciona com matrizes para verificar se *cada* elemento passa em um teste específico. Ele retorna um valor booleano - `true`se todos os valores atenderem aos critérios, `false`caso contrário.**

**Por exemplo, o código a seguir verifica se cada elemento da `numbers`matriz é menor que 10:**

```
var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});

```

**O `every`método retornaria `false`aqui.**

---

**Use o `every`método dentro da `checkPositive`função para verificar se todos os elementos em `arr`são positivos. A função deve retornar um valor booleano.**

function checkPositive(arr) {

**// Only change code below this line**

let newArr = arr;

let validation;

newArr.every(function(num){

if(num >= 0){

return validation = true;

}else{

return validation = false;

}

})

return validation;

**// Only change code above this line**

}

console.log(checkPositive([1, 2, 3, -4, 5]));

**Use o método some para verificar se quaisquer elementos em uma matriz atendem a um critério**

**O `some`método funciona com matrizes para verificar se *algum* elemento passa em um teste específico. Ele retorna um valor booleano - `true`se algum dos valores atender aos critérios, `false`caso contrário.**

**Por exemplo, o código a seguir verifica se algum elemento da `numbers`matriz é menor que 10:**

```
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});

```

**O `some`método retornaria `true`.**

---

**Use o `some`método dentro da `checkPositive`função para verificar se algum elemento em `arr`é positivo. A função deve retornar um valor booleano.**

function checkPositive(arr) {

// Only change code below this line

let validation;

arr.some(function(currentValue){

validation = currentValue > 0;

})

return validation;

// Only change code above this line

}

console.log(checkPositive([1, 2, 3, -4, 5]));

**Introdução ao currying e aplicação parcial**

**A *aridade* de uma função é o número de argumentos que ela requer. *Criar* uma função significa converter uma função de N aridade em N funções de aridade 1.**

**Em outras palavras, ele reestrutura uma função para que receba um argumento e, em seguida, retorne outra função que receba o próximo argumento, e assim por diante.**

**Aqui está um exemplo:**

```
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2)

```

`**curried(1)(2)`voltaria `3`.**

**Isso é útil em seu programa se você não puder fornecer todos os argumentos para uma função de uma vez. Você pode salvar cada chamada de função em uma variável, que conterá a referência de função retornada que recebe o próximo argumento quando estiver disponível. Aqui está um exemplo usando a função curried no exemplo acima:**

```
var funcForY = curried(1);
console.log(funcForY(2)); // 3

```

**Da mesma forma, *a aplicação parcial* pode ser descrita como a aplicação de alguns argumentos a uma função por vez e o retorno de outra função que é aplicada a mais argumentos. Aqui está um exemplo:**

```
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13

```

---

**Preencha o corpo da `add`função para que ele usa currying adicionar parâmetros `x`, `y`e `z`.**

function add(x) {

**// Only change code below this line**

return function(y){

return function(z){

return x + y + z;

}

}

**// Only change code above this line**

}

console.log(add(10)(20)(10));