**Converter Celsius em Fahrenheit**

**O algoritmo para converter de Celsius para Fahrenheit é a temperatura em Celsius vezes `9/5`, mais `32`.**

**Você recebe uma variável que `celsius`representa a temperatura em Celsius. Use a variável `fahrenheit`já definida e atribua a ela a temperatura Fahrenheit equivalente à temperatura Celsius fornecida. Use o algoritmo mencionado acima para ajudar a converter a temperatura Celsius em Fahrenheit.**

function convertToF(celsius) {

let fahrenheit;

fahrenheit = celsius * (9/5) + 32;

return fahrenheit;

}

convertToF(30);

**Reverse a String**

**Reverse the provided string.**

**You may need to turn the string into an array before you can reverse it.**

**Your result must be a string.**

function reverseString(str) {

let newArray = [];

let arr = Array.from(str);

for(let i = arr.length - 1; i >= 0; i-- ){

newArray = newArray + arr[i];

}

console.log(newArray)

return newArray;

}

reverseString("hello");

**Factorialize a Number**

**Return the factorial of the provided integer.**

**If the integer is represented with the letter `n`, a factorial is the product of all positive integers less than or equal to `n`.**

**Factorials are often represented with the shorthand notation `n!`**

**For example: `5! = 1 * 2 * 3 * 4 * 5 = 120`**

**Only integers greater than or equal to zero will be supplied to the function.**

function factorialize(num) {

let total = 1;

for (let i = num; i > 0; i-- ){

total = total * i;

}

console.log(total);

return total;

}

factorialize(10);

**Find the Longest Word in a String**

**Return the length of the longest word in the provided sentence.**

**Your response should be a number.**

function findLongestWordLength(str) {

let longestWord = "";

let words = str.split(" ");

for (let i = 0; i < words.length; i ++){

let individualWord = words[i];

if(individualWord.length > longestWord.length ){

longestWord = individualWord;

}

}

return longestWord.length;

}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

**Return Largest Numbers in Arrays**

**Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.**

**Remember, you can iterate through an array with a simple for loop, and access each member with array syntax `arr[i]`.**

function largestOfFour(arr) {

let result = [];

for (let i = 0; i < arr.length; i++){

let individualArr = arr[i];

let maiorNum = -Infinity;

for(let j = 0; j < individualArr.length; j++){

if(maiorNum < individualArr[j]){

maiorNum = individualArr[j];

console.log(maiorNum);

}

}

result.push(maiorNum);

}

return result;

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

**Confirm the Ending**

**Check if a string (first argument, `str`) ends with the given target string (second argument, `target`).**

**This challenge *can* be solved with the `.endsWith()` method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.**

function confirmEnding(str, target) {

let targetLength = target.length;

let targetToMatch = str.slice(str.length - targetLength, str.length)

if(targetToMatch == target){

return true;

}else

{

return false;

}

}

console.log(confirmEnding("Bastian", "n"));

**Repeat a String Repeat a String**

**Repeat a given string `str` (first argument) for `num` times (second argument). Return an empty string if `num` is not a positive number. For the purpose of this challenge, do *not* use the built-in `.repeat()` method.**

function repeatStringNumTimes(str, num) {

let stringArray = "";

if(num >= 0){

for(let i = 0; i < num; i++){

stringArray = stringArray + str;

}

}else{

return stringArray;

}

return stringArray;

}

console.log(repeatStringNumTimes("*", 3));

**Truncate a String**

**Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a `...` ending.**

function truncateString(str, num) {

let strPhrase = "";

let lettersSeparate = [];

lettersSeparate = str.split("")

if(num >= str.length){

return str;

}else{

for(let i = 0; i < num; i++){

strPhrase = strPhrase + lettersSeparate[i];

}

}

return strPhrase + "...";

}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", ));

**Finders Keepers**

**Create a function that looks through an array `arr` and returns the first element in it that passes a 'truth test'. This means that given an element `x`, the 'truth test' is passed if `func(x)` is `true`. If no element passes the test, return `undefined`.**

function findElement(arr, func) {

let num = 0;

for (let i = 0; i < arr.length; i++){

if(func(arr[i]) === true){

num = arr[i];

return num;

}

}

}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));

**Boo who**

**Check if a value is classified as a boolean primitive. Return `true` or `false`.**

**Boolean primitives are `true` and `false`.**

function booWho(bool) {

if(bool === false | bool === true){

return true;

}else{

return false

}

}

console.log(booWho([1, 2, 3]));

**Title Case a Sentence**

**Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.**

**For the purpose of this exercise, you should also capitalize connecting words like `the` and `of`.**

function titleCase(str) {

let arr = str.toLowerCase().split(" ");

let string = "";

for(let i = 0; i < arr.length; i++){

string += arr[i].slice(0,1).toUpperCase() + arr[i].slice(1,arr[i].length) + " ";

}

return string.slice(0, string.length-1);

}

console.log(titleCase("I'm a little tea pot"));

**Slice and Splice**

**You are given two arrays and an index.**

**Copy each element of the first array into the second array, in order.**

**Begin inserting elements at index `n` of the second array.**

**Return the resulting array. The input arrays should remain the same after the function runs.**

function frankenSplice(arr1, arr2, n) {

let result = [];

result.push(...arr2.slice(0, n))

result.push(...arr1);

result.push(...arr2.slice(n, arr2.length));

return result;

}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));

**Falsy Bouncer**

**Remove all falsy values from an array.**

**Falsy values in JavaScript are `false`, `null`, `0`, `""`, `undefined`, and `NaN`.**

**Hint: Try converting each value to a Boolean.**

function bouncer(arr) {

let result = [];

for(let i = 0; i < arr.length; i++){

let individualValue = arr[i];

if(individualValue){

result.push(arr[i]);

}

}

return result;

}

bouncer([7, "ate", "", false, 9]);

**Onde eu pertenço**

**Retorna o índice mais baixo no qual um valor (segundo argumento) deve ser inserido em uma matriz (primeiro argumento), uma vez que tenha sido classificado. O valor retornado deve ser um número.**

**Por exemplo, `getIndexToIns([1,2,3,4], 1.5)`deve retornar `1`porque é maior que `1`(índice 0), mas menor que `2`(índice 1).**

**Da mesma forma, `getIndexToIns([20,3,5], 19)`deve retornar `2`porque, uma vez que a matriz tenha sido classificada, ela terá a aparência `[3,5,20]`e `19`será menor que `20`(índice 2) e maior que `5`(índice 1).**

function getIndexToIns(arr, num) {

arr.sort(function(a, b){

return a - b;

})

for(let i = 0; i < arr.length; i++){

if (num <= arr[i]){

return i;

}

}

return arr.length;

}

getIndexToIns([40, 60], 50);

**Mutações**

**Retorne `true`se a string no primeiro elemento da matriz contiver todas as letras da string no segundo elemento da matriz.**

**Por exemplo `["hello", "Hello"]`,, deve retornar `true`porque todas as letras na segunda string estão presentes na primeira, ignorando maiúsculas e minúsculas.**

**Os argumentos `["hello", "hey"]`devem retornar `false`porque a string `hello`não contém um `y`.**

**Por último, `["Alien", "line"]`deve retornar `true`porque todas as letras em `line`estão presentes em `Alien`.**

function mutation(arr) {

let firstWord = arr[0].toLowerCase();

let secondWord = arr[1].toLowerCase();

for(let i = 0; i < secondWord.length; i++){

if(firstWord.indexOf(secondWord[i]) === -1)

return false

}

return true;

}

mutation(["hello", "hey"]);

**Macaco robusto**

**Escreva uma função que divide uma matriz (primeiro argumento) em grupos do comprimento de `size`(segundo argumento) e os retorna como uma matriz bidimensional.**

function chunkArrayInGroups(arr, size) {

let result = [];

for(let i = 0; i < arr.length; i += size){

result.push(arr.slice(i, i + size));

}

return result;

}

chunkArrayInGroups(["a", "b", "c", "d"], 2);