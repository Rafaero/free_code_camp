**Soma todos os números em um intervalo**

**Vamos passar a você uma matriz de dois números. Retorne a soma desses dois números mais a soma de todos os números entre eles. O número mais baixo nem sempre virá primeiro.**

**Por exemplo, `sumAll([4,1])`deve retornar `10`porque a soma de todos os números entre 1 e 4 (ambos inclusivos) é `10`.**

function sumAll(arr) {

let total = 0;

let a = arr[0];

let b = arr[1];

if(a < b){

for(let i = a; i <= b; i++){

total = total + i;

}

}else{

for(let i = b; i <= a; i++){

total = total + i;

}

}

console.log(total)

return total;

}

sumAll([1, 4]);

**Diff Two Arrays**

**Compare duas matrizes e retorne uma nova matriz com quaisquer itens encontrados apenas em uma das duas matrizes fornecidas, mas não em ambas. Em outras palavras, retorne a diferença simétrica das duas matrizes.**

**Nota: Você pode retornar a matriz com seus elementos em qualquer ordem.**

function diffArray(arr1, arr2) {

var newArr = [];

function onlyInFirst(first, second) {

// Looping through an array to find elements that don't exist in another array

for (var i = 0; i < first.length; i++) {

if (second.indexOf(first[i]) === -1) {

// Pushing the elements unique to first to newArr

newArr.push(first[i]);

}

}

}

onlyInFirst(arr1, arr2);

onlyInFirst(arr2, arr1);

return newArr;

}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

**Seek and Destroy**

**You will be provided with an initial array (the first argument in the `destroyer` function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.**

**Note: You have to use the `arguments` object.**

**Portanto és**

**Faça uma função que examine uma matriz de objetos (primeiro argumento) e retorne uma matriz de todos os objetos que possuem pares de nome e valor correspondentes (segundo argumento). Cada par de nome e valor do objeto de origem deve estar presente no objeto da coleção se for incluído no array retornado.**

**Por exemplo, se o primeiro argumento for `[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]`e o segundo argumento for `{ last: "Capulet" }`, você deve retornar o terceiro objeto da matriz (o primeiro argumento), porque ele contém o nome e seu valor, que foi passado como o segundo argumento.**

function whatIsInAName(collection, source) {

// "What's in a name? that which we call a rose

// By any other name would smell as sweet.”

// -- by William Shakespeare, Romeo and Juliet

var srcKeys = Object.keys(source);

// filter the collection

return collection.filter(function(obj) {

for (var i = 0; i < srcKeys.length; i++) {

if (

!obj.hasOwnProperty(srcKeys[i]) ||

obj[srcKeys[i]] !== source[srcKeys[i]]

) {

return false;

}

}

return true;

});

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

**Spinal Tap Case**

**Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.**

function spinalCase(str) {

// Create a variable for the white space and underscores.

var regex = /\s+|_+/g;

// Replace low-upper case to low-space-uppercase

str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

// Replace space and underscore with -

return str.replace(regex, "-").toLowerCase();

}

// test here

spinalCase("This Is Spinal Tap");

**Porco latino**

**Pig Latin é uma maneira de alterar as palavras em inglês. As regras são as seguintes:**

- **Se uma palavra começa com uma consoante, pegue a primeira consoante ou encontro consonantal, mova-o para o final da palavra e acrescente `ay`**

    **a ele.**

- **Se uma palavra começar com vogal, basta adicionar `way`**

    **no final.**

---

**Traduza a string fornecida para Pig Latin. As strings de entrada são garantidamente palavras em inglês, todas em minúsculas.**

function translatePigLatin(str) {

let consonantRegex = /^[^aeiou]+/;

let myConsonants = str.match(consonantRegex);

return myConsonants !== null

? str

.replace(consonantRegex, "")

.concat(myConsonants)

.concat("ay")

: str.concat("way");

}

translatePigLatin("consonant");

**Pesquisar e substituir**

**Faça uma pesquisa e substitua a frase usando os argumentos fornecidos e retorne a nova frase.**

**O primeiro argumento é a frase para realizar a busca e substituição.**

**O segundo argumento é a palavra que você substituirá (antes).**

**O terceiro argumento é o que você substituirá o segundo argumento por (depois).**

**Nota: Preserve a caixa do primeiro caractere na palavra original ao substituí-lo. Por exemplo, se você pretende substituir a palavra `Book`pela palavra `dog`, ela deve ser substituída como`Dog`**

function myReplace(str, before, after) {

// Find index where before is on string

var index = str.indexOf(before);

// Check to see if the first letter is uppercase or not

if (str[index] === str[index].toUpperCase()) {

// Change the after word to be capitalized before we use it.

after = after.charAt(0).toUpperCase() + after.slice(1);

} else {

// Change the after word to be uncapitalized before we use it.

after = after.charAt(0).toLowerCase() + after.slice(1);

}

// Now replace the original str with the edited one.

str = str.replace(before, after);

return str;

}

// test here

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

**Emparelhamento de DNA**

**A fita de DNA está sem o elemento de emparelhamento. Pegue cada caractere, obtenha seu par e retorne os resultados como uma matriz 2d.**

[**Os pares de bases](http://en.wikipedia.org/wiki/Base_pair) são um par de AT e CG. Combine o elemento ausente com o caractere fornecido.**

**Retorne o caractere fornecido como o primeiro elemento em cada matriz.**

**Por exemplo, para a entrada `GCG`, retorne`[["G", "C"], ["C","G"], ["G", "C"]]`**

**O personagem e seu par são emparelhados em uma matriz, e todas as matrizes são agrupadas em uma matriz de encapsulamento.**

function pairElement(str) {

// Return each strand as an array of two elements, the original and the pair.

var paired = [];

// Function to check with strand to pair.

var search = function(char) {

switch (char) {

case "A":

paired.push(["A", "T"]);

break;

case "T":

paired.push(["T", "A"]);

break;

case "C":

paired.push(["C", "G"]);

break;

case "G":

paired.push(["G", "C"]);

break;

}

};

// Loops through the input and pair.

for (var i = 0; i < str.length; i++) {

search(str[i]);

}

return paired;

}

// test here

pairElement("GCG");

**Cartas desaparecidas**

**Encontre a letra que falta no intervalo de letras passado e devolva-a.**

**Se todas as letras estiverem presentes no intervalo, retorne `undefined`.**

---

**Execute os testes**

**Redefinir todos os códigos**

**Obter ajuda**

function fearNotLetter(str) {

for (var i = 0; i < str.length; i++) {

/* code of current character */

var code = str.charCodeAt(i);

/* if code of current character is not equal to first character + no of iteration

hence character has been escaped */

if (code !== str.charCodeAt(0) + i) {

/* if current character has escaped one character find previous char and return */

return String.fromCharCode(code - 1);

}

}

return undefined;

}

// test here

fearNotLetter("abce");

**União Classificada**

**Escreva uma função que receba duas ou mais matrizes e retorne uma nova matriz de valores exclusivos na ordem das matrizes originais fornecidas.**

**Em outras palavras, todos os valores presentes de todas as matrizes devem ser incluídos em sua ordem original, mas sem duplicatas na matriz final.**

**Os números exclusivos devem ser classificados por sua ordem original, mas a matriz final não deve ser classificada em ordem numérica.**

**Verifique os testes de asserção para exemplos.**

function uniteUnique(arr1, arr2, arr3) {

// Creates an empty array to store our final result.

var finalArray = [];

// Loop through the arguments object to truly make the program work with two or more arrays

// instead of 3.

for (var i = 0; i < arguments.length; i++) {

var arrayArguments = arguments[i];

// Loops through the array at hand

for (var j = 0; j < arrayArguments.length; j++) {

var indexValue = arrayArguments[j];

// Checks if the value is already on the final array.

if (finalArray.indexOf(indexValue) < 0) {

finalArray.push(indexValue);

}

}

}

return finalArray;

}

// test here

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

**Converter entidades HTML**

**Converter os caracteres `&`, `<`, `>`, `"`(aspas duplas), e `'`(apóstrofo), em uma seqüência às suas entidades HTML correspondentes.**

function convertHTML(str) {

// Split by character to avoid problems.

var temp = str.split("");

// Since we are only checking for a few HTML elements, use a switch

for (var i = 0; i < temp.length; i++) {

switch (temp[i]) {

case "<":

temp[i] = "&lt;";

break;

case "&":

temp[i] = "&amp;";

break;

case ">":

temp[i] = "&gt;";

break;

case '"':

temp[i] = "&quot;";

break;

case "'":

temp[i] = "&apos;";

break;

}

}

temp = temp.join("");

return temp;

}

//test here

convertHTML("Dolce & Gabbana");

**Soma todos os números ímpares de Fibonacci**

**Dado um número inteiro positivo `num`, retorna a soma de todos os números ímpares de Fibonacci que são menores ou iguais a `num`.**

**Os primeiros dois números na sequência de Fibonacci são 1 e 1. Cada número adicional na sequência é a soma dos dois números anteriores. Os primeiros seis números da sequência de Fibonacci são 1, 1, 2, 3, 5 e 8.**

**Por exemplo, `sumFibs(10)`deve retornar `10`porque todos os números ímpares de Fibonacci menores ou iguais a `10`são 1, 1, 3 e 5.**

function sumFibs(num) {

let prevNumber = 0;

let currNumber = 1;

let result = 0;

while (currNumber <= num) {

if (currNumber % 2 !== 0) {

result += currNumber;

}

currNumber += prevNumber;

prevNumber = currNumber - prevNumber;

}

return result;

}

// test here

sumFibs(4);

**Soma todos os primos**

**Um *número primo* é um número inteiro maior que 1 com exatamente dois divisores: 1 e ele mesmo. Por exemplo, 2 é um número primo porque só é divisível por 1 e 2. Em contraste, 4 não é primo, pois é divisível por 1, 2 e 4.**

**Reescreva `sumPrimes`para que retorne a soma de todos os números primos menores ou iguais a num.**

function sumFibs(num) {

let prevNumber = 0;

let currNumber = 1;

let result = 0;

while (currNumber <= num) {

if (currNumber % 2 !== 0) {

result += currNumber;

}

currNumber += prevNumber;

prevNumber = currNumber - prevNumber;

}

return result;

}

// test here

sumFibs(4);

**Soma todos os primos**

**Um *número primo* é um número inteiro maior que 1 com exatamente dois divisores: 1 e ele mesmo. Por exemplo, 2 é um número primo porque só é divisível por 1 e 2. Em contraste, 4 não é primo, pois é divisível por 1, 2 e 4.**

**Reescreva `sumPrimes`para que retorne a soma de todos os números primos menores ou iguais a num.**

function sumPrimes(num) {

// Helper function to check primality

function isPrime(num) {

for (let i = 2; i <= Math.sqrt(num); i++) {

if (num % i == 0)

return false;

}

return true;

}

// Check all numbers for primality

let sum = 0;

for (let i = 2; i <= num; i++) {

if (isPrime(i))

sum += i;

}

return sum;

}

**Menor Múltiplo Comum**

**Encontre o menor múltiplo comum dos parâmetros fornecidos que pode ser dividido igualmente por ambos, bem como por todos os números sequenciais no intervalo entre esses parâmetros.**

**O intervalo será uma matriz de dois números que não necessariamente estarão em ordem numérica.**

**Por exemplo, se for dado 1 e 3, encontre o menor múltiplo comum de 1 e 3 que também seja igualmente divisível por todos os números *entre* 1 e 3. A resposta aqui seria 6.**

function smallestCommons(arr) {

// Setup

const [min, max] = arr.sort((a, b) => a - b);

const numberDivisors = max - min + 1;

// Largest possible value for SCM

let upperBound = 1;

for (let i = min; i <= max; i++) {

upperBound *= i;

}

// Test all multiples of 'max'

for (let multiple = max; multiple <= upperBound; multiple += max) {

// Check if every value in range divides 'multiple'

let divisorCount = 0;

for (let i = min; i <= max; i++) {

// Count divisors

if (multiple % i === 0) {

divisorCount += 1;

}

}

if (divisorCount === numberDivisors) {

return multiple;

}

}

}

smallestCommons([1, 5]);

**Largue**

**Dado o array `arr`, itere e remova cada elemento começando pelo primeiro elemento (o índice 0) até que a função `func`retorne `true`quando o elemento iterado passar por ele.**

**Em seguida, retorne o restante do array assim que a condição for satisfeita, caso contrário, `arr`deve ser retornado como um array vazio.**

function dropElements(arr, func) {

while (arr.length > 0 && !func(arr[0])) {

arr.shift();

}

return arr;

}

// test here

dropElements([1, 2, 3, 4], function(n) {

return n >= 3;

});

**Rolo compressor**

**Achate uma matriz aninhada. Você deve levar em consideração os vários níveis de aninhamento.**

function steamrollArray(arr) {

const flattenedArray = [];

// Loop over array contents

for (let i = 0; i < arr.length; i++) {

if (Array.isArray(arr[i])) {

// Recursively flatten entries that are arrays

//  and push into the flattenedArray

flattenedArray.push(...steamrollArray(arr[i]));

} else {

// Copy contents that are not arrays

flattenedArray.push(arr[i]);

}

}

return flattenedArray;

};

// test here

steamrollArray([1, [2], [3, [[4]]]]);

**Agentes Binários**

**Retorne uma frase traduzida em inglês da string binária passada.**

**A string binária será separada por espaço.**

function binaryAgent(str) {

var biString = str.split(" ");

var uniString = [];

/*using the radix (or base) parameter in parseInt, we can convert the binary

number to a decimal number while simultaneously converting to a char*/

for (var i = 0; i < biString.length; i++) {

uniString.push(String.fromCharCode(parseInt(biString[i], 2)));

}

// we then simply join the string

return uniString.join("");

}

// test here

binaryAgent(

"01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"

);

**Tudo seja verdade**

**Verifique se o predicado (segundo argumento) é *verdadeiro* em todos os elementos de uma coleção (primeiro argumento).**

**Em outras palavras, você recebe uma coleção de matriz de objetos. O predicado `pre`será uma propriedade do objeto e você precisa retornar `true`se seu valor for `truthy`. Caso contrário, volte `false`.**

**Em JavaScript, os `truthy`valores são valores que se traduzem em `true`quando avaliados em um contexto booleano.**

**Lembre-se de que você pode acessar as propriedades do objeto por meio de notação de ponto ou `[]`notação.**

function truthCheck(collection, pre) {

// Create a counter to check how many are true.

var counter = 0;

// Check for each object

for (var c in collection) {

// If it is has property and value is truthy

if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {

counter++;

}

}

// Outside the loop, check to see if we got true for all of them and return true or false

return counter == collection.length;

}

// test here

truthCheck(

[

{ user: "Tinky-Winky", sex: "male" },

{ user: "Dipsy", sex: "male" },

{ user: "Laa-Laa", sex: "female" },

{ user: "Po", sex: "female" }

],

"sex"

);

**Argumentos Opcionais**

**Crie uma função que some dois argumentos. Se apenas um argumento for fornecido, retorne uma função que espera um argumento e retorna a soma.**

**Por exemplo, `addTogether(2, 3)`deve retornar `5`e `addTogether(2)`deve retornar uma função.**

**Chamar essa função retornada com um único argumento retornará a soma:**

```
var sumTwoAnd = addTogether(2);

```

`**sumTwoAnd(3)`retorna `5`.**

**Se algum dos argumentos não for um número válido, retorna indefinido.**

function addTogether() {

// Function to check if a number is actually a number

function checkNum(num) {

return (typeof num === "number");

};

if (arguments.length === 2) {

// Check if we have two arguments and if they are numbers

// Return the sum if they are both numbers

let first = arguments[0];

let second = arguments[1];

if (checkNum(first) && checkNum(second)) {

return first + second;

} else {

return undefined;

}

} else if (arguments.length === 1) {

// If only one argument was found, return a new function

let first = arguments[0];

if (checkNum(first)) {

// Return function that expect a second argument.

function addSecond(second) {

// Check if the new argument is a number

if (checkNum(second)) {

return first + second;

} else {

return undefined;

}

};

return addSecond;

} else {

return undefined;

}

} else {

// Incorrect number of arguments found

return undefined;

}

}

// test here

addTogether(2, 3);

**Faça uma pessoa**

**Preencha o construtor de objeto com os seguintes métodos:**

```
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

```

**Execute os testes para ver a saída esperada para cada método. Os métodos que recebem um argumento devem aceitar apenas um argumento e deve ser uma string. Esses métodos devem ser os únicos meios disponíveis de interação com o object.**

var Person = function(firstAndLast) {

var fullName = firstAndLast;

this.getFirstName = function() {

return fullName.split(" ")[0];

};

this.getLastName = function() {

return fullName.split(" ")[1];

};

this.getFullName = function() {

return fullName;

};

this.setFirstName = function(name) {

fullName = name + " " + fullName.split(" ")[1];

};

this.setLastName = function(name) {

fullName = fullName.split(" ")[0] + " " + name;

};

this.setFullName = function(name) {

fullName = name;

};

};

var bob = new Person("Bob Ross");

bob.getFullName();

**Mapeie os destroços**

**Retorne uma nova matriz que transforma a altitude média dos elementos em seus períodos orbitais (em segundos).**

**A matriz conterá objetos no formato `{name: 'name', avgAlt: avgAlt}`.**

**Você pode ler sobre os períodos orbitais [na Wikipedia](http://en.wikipedia.org/wiki/Orbital_period) .**

**Os valores devem ser arredondados para o número inteiro mais próximo. O corpo orbitado é a Terra.**

**O raio da Terra é 6.367,4447 quilômetros, e o valor GM da Terra é 398600,4418 km 3 s -2 .**

function orbitalPeriod(arr) {

var GM = 398600.4418;

var earthRadius = 6367.4447;

var a = 2 * Math.PI;

var newArr = [];

var getOrbPeriod = function(obj) {

var c = Math.pow(earthRadius + obj.avgAlt, 3);

var b = Math.sqrt(c / GM);

var orbPeriod = Math.round(a * b);

// create new object

return {name: obj.name, orbitalPeriod: orbPeriod};

};

for (var elem in arr) {

newArr.push(getOrbPeriod(arr[elem]));

}

return newArr;

}

// test here

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);