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