**let:** declara uma variavel que não pode ser redeclarada, sendo muito mais consistente que a keyword var

**let**: É limitada ao escopo do bloco, sendo uma variável local

**const:** não pode ter seu valor reatribuido e deve ser declada com lestras maiúsculas e underline 

**const:** numa matriz seus valores podem ser alterados usando a posição dos elementos(indice)

**Object.freeze():** Proibi a reatribuição de valor

**funções de seta para funções anonimas concisas:**  

-Não iremos reutilizar em outra parte do codigo;

-Podemos emitir a palavra return e os colchetes para funções de retorno de uma linha;

const magic = () => new Date();

se tiver um único parâmetro, os parenteses que o envolve, podem ser omitidos.

Caso não seja passado um argumento, ele pode ser adicionado nos parâmetros da função:

const increment = (number, value) => number + value;

**const increment = (number, value = 1) => number + value;**

**Parametro Rest**: Permite passar um numero variavel de argumentos, esses argumentos são amarzenados em uma matriz que pode ser acessada posteriormente

const sum = (...args) => {

return args.reduce((a, b) => a + b, 0);

}

Copie todo o conteúdo de arr1em outro array arr2usando o operador **spread**.:

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

let arr2;

arr2 = [...arr1] ;  // Change this line

console.log(arr2);

**Substitua as duas atribuições por uma atribuição de desestruturação equivalente. Ele ainda deve atribuir as variáveis today e tomorrowos valores de today e tomorrow para o HIGH_TEMPERATURES objeto.**

const HIGH_TEMPERATURES = {

yesterday: 75,

today: 77,

tomorrow: 80

};

const {today, tomorrow }  = HIGH_TEMPERATURES;

**Substitua as duas atribuições por uma atribuição de desestruturação equivalente. Ele ainda deve atribuir as variáveis highToday e highTomorrow os valores de today e tomorrow para o HIGH_TEMPERATURES objeto.**

const HIGH_TEMPERATURES = {

yesterday: 75,

today: 77,

tomorrow: 80

};

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

**Substitua as duas atribuições por uma atribuição de desestruturação equivalente. Ele ainda deve atribuir as variáveis lowTodaye highTodayos valores de today.lowe today.highpara o LOCAL_FORECASTobjeto.**

const LOCAL_FORECAST = {

yesterday: { low: 61, high: 75 },

today: { low: 64, high: 77 },

tomorrow: { low: 68, high: 80 }

};

const {today:{low : lowToday}} = LOCAL_FORECAST;

const {today:{high: highToday}} = LOCAL_FORECAST;

**Use a atribuição de desestruturação para trocar os valores de a e de b forma que a receba o valor armazenado em b e b receba o valor armazenado em a.**

let a = 8, b = 6;

let newArray = [b, a] = [a, b];

**Use a atribuição de desestruturação com o parâmetro rest para realizar um efeito de Array.prototype.slice() modo que arr seja uma submatriz da matriz original source com os primeiros dois elementos omitidos.**

const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) {

const [a, b, ...arr] = list;

return arr;

}

const arr = removeFirstTwo(source);

**Use a atribuição de desestruturação dentro do argumento para a função half para enviar apenas max e min dentro da função.**

const stats = {

max: 56.78,

standard_deviation: 4.34,

median: 34.54,

mode: 23.87,

min: -0.75,

average: 35.85

};

half(stats);

const half = ({max, min}) => (max + min) / 2.0;

**Use a sintaxe literal do modelo com crases para criar uma matriz de `li`strings de elemento de lista ( ). O texto de cada elemento da lista deve ser um dos elementos do array da `failure`propriedade no `result`objeto e ter um `class`atributo com o valor `text-warning`. A `makeList`função deve retornar a matriz de strings do item da lista.**

**Use um método iterador (qualquer tipo de loop) para obter a saída desejada (mostrado abaixo).**

```
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
```

const result = {

success: ["max-length", "no-amd", "prefer-arrow-functions"],

failure: ["no-var", "var-on-top", "linebreak"],

skipped: ["no-extra-semi", "no-dup-keys"]

};

function makeList(arr) {

const failureItems = [];

for(let i = 0; i < arr.length; i++){

failureItems[i] = `<li class="text-warning">${arr[i]}</li>`

}

return failureItems;

}

const failuresList = makeList(result.failure);

**Use objeto propriedade estenográfica com literais de objeto para criar e retornar um objeto com name, age e gender propriedades.**

const createPerson = (name, age, gender) => {

return {

name,

age,

gender };

};

**Refatore a função setGear dentro do objeto bicycle para usar a sintaxe abreviada descrita acima.**

const bicycle = {

gear: 2,

setGear(newGear) {

this.gear = newGear;

}

};

bicycle.setGear(3);

console.log(bicycle.gear);

**Use a `class`palavra - chave e escreva um `constructor`para criar a `Vegetable`classe.**

**A `Vegetable`classe permite que você crie um objeto vegetal com uma propriedade `name`que é passada para o `constructor`.**

class Vegetable{

constructor(vegetable){

this.name = vegetable;

}

}

const carrot = new Vegetable('carrot');

console.log(carrot.name); // Should display 'carrot'

**Use the `class` keyword to create a `Thermostat` class. The `constructor` accepts a Fahrenheit temperature.**

**In the class, create a `getter` to obtain the temperature in Celsius and a `setter` to set the temperature in Celsius.**

**Remember that `C = 5/9 * (F - 32)` and `F = C * 9.0 / 5 + 32`, where `F` is the value of temperature in Fahrenheit, and `C` is the value of the same temperature in Celsius.**

**Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.**

**This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.**

**In other words, you are abstracting implementation details from the user.**

class Thermostat{

constructor(fahrenheit){

this._fahrenheit = fahrenheit;

}

get temperature(){

return 5/9 * (this._fahrenheit - 32);

}

set temperature(celsius){

this._fahrenheit = celsius * 9.0 / 5 + 32;

}

}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale

let temp = thermos.temperature; // 24.44 in Celsius

thermos.temperature = 26;

temp = thermos.temperature; // 26 in Celsius

**Adicione um script ao documento HTML do tipo modulee forneça a ele o arquivo de origem deindex.js**

<html>

<body>

<script type="module" src="index.js"></script>

</body>

</html>

**Existem duas funções relacionadas a strings no editor. Exporte ambos usando o método de sua escolha.**

st uppercaseString = (string) => {

return string.toUpperCase();

}

const lowercaseString = (string) => {

return string.toLowerCase()

}

export {uppercaseString, lowercaseString};

**Adicione a import instrução apropriada que permitirá que o arquivo atual use as funções uppercaseString e lowercaseString exportadas na lição anterior. Essas funções estão em um arquivo chamado string_functions.js, que está no mesmo diretório do arquivo atual.**

import {uppercaseString, lowercaseString} from './string_functions.js';

// Only change code above this line

uppercaseString("hello");

lowercaseString("WORLD!");

**O código neste arquivo requer o conteúdo do arquivo:, string_functions.jsque está no mesmo diretório que o arquivo atual. Use a import * assintaxe para importar tudo do arquivo para um objeto chamado stringFunctions.**

import * as stringFunctions from './string_functions.js';

stringFunctions.uppercaseString("hello");

stringFunctions.lowercaseString("WORLD!");

**Como `export default`é usado para declarar um valor de fallback para um módulo ou arquivo, você só pode ter um valor como exportação padrão em cada módulo ou arquivo. Além disso, você não pode usar `export default`com `var`, `let`ou`const`**

---

**A função a seguir deve ser o valor de fallback para o módulo. Adicione o código necessário para fazer isso.**

export default function subtract(x, y) {

return x - y;

}

A sintaxe difere em um lugar-chave. O valor importado,, `add`não está entre chaves ( `{}`). `add`aqui está simplesmente um nome de variável para qualquer que seja a exportação padrão do `math_functions.js`arquivo. Você pode usar qualquer nome aqui ao importar um padrão.

---

No código a seguir, importe a exportação padrão do `math_functions.js`arquivo, localizado no mesmo diretório deste arquivo. Dê o nome à importação `subtract`.

import subtract from './math_functions.js';

subtract(7,4);

**Crie uma nova promess chamada makeServerRequest. Passe uma função com parâmetros resolve e reject para o construtor.**

let makeServerRequest = new Promise((resolve, reject) => {

});

**Faça a promessa lidar com o sucesso e o fracasso. Se responseFromServerfor true, chame o resolve método para completar a promessa com sucesso. Passe resolve uma string com o valor We got the data. Se responseFromServer é false, usar o reject método em vez e passá-lo a string: Data not received.**

 

const makeServerRequest = new Promise((resolve, reject) => {

// responseFromServer represents a response from a server

let responseFromServer;

if(responseFromServer) {

resolve("We got the data");

} else {

reject("Data not received");

}

});

**Adicione o then método à sua promessa. Use result como o parâmetro de sua função de retorno de chamada e registre result no console.**

const makeServerRequest = new Promise((resolve, reject) => {

// responseFromServer is set to true to represent a successful response from a server

let responseFromServer = true;

if(responseFromServer) {

resolve("We got the data").then(result => {

console.log(result)

});

} else {

reject("Data not received");

}

});

**Adicione o catch método à sua promessa. Use error como o parâmetro de sua função de retorno de chamada e registre error no console.**

const makeServerRequest = new Promise((resolve, reject) => {

// responseFromServer is set to false to represent an unsuccessful response from a server

let responseFromServer = false;

if(responseFromServer) {

resolve("We got the data");

} else {

reject("Data not received").catch(error => {

console.log(error)

});

}

});

makeServerRequest.then(result => {

console.log(result);

});