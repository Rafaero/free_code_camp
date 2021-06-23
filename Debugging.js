**O console.log()método, que "imprime" a saída do que está entre parênteses no console, provavelmente será a ferramenta de depuração mais útil. Colocá-lo em pontos estratégicos em seu código pode mostrar os valores intermediários das variáveis. É uma boa prática ter uma ideia de como deve ser a saída antes de analisá-la. Ter pontos de verificação para ver o status de seus cálculos em todo o código ajudará a identificar onde está o problema.**

**Use o console.log() método para imprimir o valor da variável aonde anotado no código...**

let a = 5;

let b = 1;

a++;

// Only change code below this line.

let sumAB = a + b;

console.log(sumAB);

console.log(a)

**Se quiser ver todos os registros de todos os testes, execute os testes e abra o console do navegador. Se você preferir usar o console do navegador e quiser que ele imite o console do freeCodeCamp, faça-o `console.clear()`antes de qualquer outra `console`chamada para limpar o console do navegador.**

**Nota: `console.log` s funções internas são impressas no console freeCodeCamp sempre que essas funções são chamadas. Isso pode ajudar a depurar funções que são chamadas durante o teste.**

---

**Primeiro, use `console.log`para registrar a `output`variável. Em seguida, use `console.clear`para limpar o console do navegador.**

// Open your browser console.

let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";

console.log(output)

console.log(output)

console.clear()

**Você pode usar typeofpara verificar a estrutura de dados, ou tipo, de uma variável. Isso é útil na depuração ao trabalhar com vários tipos de dados. Se você pensa que está adicionando dois números, mas um deles é na verdade uma string, os resultados podem ser inesperados. Erros de tipo podem se esconder em cálculos ou chamadas de função. Tenha cuidado especialmente ao acessar e trabalhar com dados externos na forma de um objeto JavaScript Object Notation (JSON).**

**JavaScript reconhece seis tipos primitivos de dados (imutáveis): `Boolean`, `Null`, `Undefined`, `Number`, `String`, e `Symbol`(nova com ES6) e um tipo para itens mutáveis: `Object`. Observe que, em JavaScript, os arrays são tecnicamente um tipo de objeto.**

---

**Adicione duas `console.log()`instruções para verificar `typeof`cada uma das duas variáveis `seven`e `three`no código.**

---

let seven = 7;

let three = "3";

console.log(seven + three);

// Only change code below this line

console.log(typeof seven);

console.log(typeof three);

**Os métodos `console.log()`e `typeof`são as duas maneiras principais de verificar os valores intermediários e os tipos de saída do programa. Agora é hora de entrar nas formas comuns que os bugs assumem. Um problema de nível de sintaxe com o qual digitadores rápidos podem se lamentar é o humilde erro de ortografia.**

**Os caracteres transpostos, ausentes ou mal capitalizados em uma variável ou nome de função farão com que o navegador procure um objeto que não existe - e reclamará na forma de um erro de referência. Os nomes de variáveis e funções JavaScript diferenciam maiúsculas de minúsculas.**

---

**Corrija os dois erros de ortografia no código para que o `netWorkingCapital`cálculo funcione.**

let receivables = 10;

let payables = 8;

let netWorkingCapital = receivables - payables;

console.log(`Net working capital is: ${netWorkingCapital}`);

**Outro erro de sintaxe a ser observado é que todos os parênteses de abertura, colchetes, chaves e aspas têm um par de fechamento. O esquecimento de uma parte tende a acontecer quando você está editando um código existente e inserindo itens com um dos tipos de par. Além disso, tome cuidado ao aninhar blocos de código em outros, como adicionar uma função de retorno de chamada como um argumento para um método.**

**Uma maneira de evitar esse erro é, assim que o caractere de abertura for digitado, incluir imediatamente a correspondência de fechamento, mover o cursor de volta entre eles e continuar a codificação. Felizmente, a maioria dos editores de código modernos gera a segunda metade do par automaticamente.**

---

**Corrija os dois erros de pares no código.**

let myArray = [1, 2, 3];

let arraySum = myArray.reduce((previous, current) =>  previous + current);

console.log(`Sum of array values is: ${arraySum}`);

**JavaScript permite o uso de aspas simples ( `'`) e duplas ( `"`) para declarar uma string. Decidir qual usar geralmente se resume à preferência pessoal, com algumas exceções.**

**Ter duas opções é ótimo quando uma string tem contrações ou outro pedaço de texto que está entre aspas. Apenas tome cuidado para não fechar a string muito cedo, o que causa um erro de sintaxe.**

**Corrija a string para que use aspas diferentes para o hrefvalor ou escape das existentes. Mantenha as aspas duplas ao redor de toda a string.**

let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";

console.log(innerHtml);

**Programas de ramificação, isto é, os que fazem coisas diferentes se forem respeitadas determinadas condições, dependem `if`, `else if`e `else`demonstrações em JavaScript. A condição às vezes assume a forma de testar se um resultado é igual a um valor.**

**Essa lógica é falada (pelo menos em inglês) como "se x for igual a y, então ...", que pode literalmente ser traduzido em código usando o `=`operador de atribuição ou. Isso leva a um fluxo de controle inesperado em seu programa.**

**Conforme abordado nos desafios anteriores, o operador de atribuição ( `=`) em JavaScript atribui um valor a um nome de variável. E os operadores `==`e `===`verificam a igualdade (os `===`testes triplos para igualdade estrita, o que significa que o valor e o tipo são os mesmos).**

**Corrija a condição para que o programa execute o branch correto e o valor apropriado seja atribuído result.**

let x = 7;

let y = 9;

let result = "to come";

if(x == y) {

result = "Equal!";

} else {

result = "Not equal!";

}

console.log(result);

**Quando uma função ou método não aceita nenhum argumento, você pode esquecer de incluir os parênteses de abertura e fechamento (vazios) ao chamá-lo. Freqüentemente, o resultado de uma chamada de função é salvo em uma variável para outro uso em seu código. Esse erro pode ser detectado registrando os valores das variáveis (ou seus tipos) no console e vendo que um deles é definido como uma referência de função, em vez do valor esperado que a função retorna.**

**Corrija o código para que a variável resultseja definida com o valor retornado da chamada da função getNine.**

function getNine() {

let x = 6;

let y = 3;

return x + y;

}

let result = getNine();

console.log(result);

**Continuando a discussão sobre a chamada de funções, o próximo bug a observar é quando os argumentos de uma função são fornecidos na ordem incorreta. Se os argumentos forem de tipos diferentes, como uma função que espera uma matriz e um inteiro, isso provavelmente gerará um erro de tempo de execução. Se os argumentos forem do mesmo tipo (todos inteiros, por exemplo), então a lógica do código não fará sentido. Certifique-se de fornecer todos os argumentos necessários, na ordem adequada para evitar esses problemas.**

**A função raiseToPowereleva uma base a um expoente. Infelizmente, ele não é chamado corretamente - corrija o código para que o valor de power8 seja o esperado.**

function raiseToPower(b, e) {

return Math.pow(b, e);

}

let base = 2;

let exp = 3;

let power = raiseToPower(base, exp);

console.log(power);

**Erros de desativação por um (às vezes chamados de OBOE) surgem quando você está tentando atingir um índice específico de uma string ou array (para cortar ou acessar um segmento), ou ao fazer um loop sobre os índices deles. A indexação do JavaScript começa em zero, não um, o que significa que o último índice é sempre um a menos que o comprimento do item. Se você tentar acessar um índice igual ao comprimento, o programa pode lançar um erro de referência "índice fora do intervalo" ou imprimir undefined.**

**Quando você usa métodos de string ou array que usam intervalos de índice como argumentos, ajuda a ler a documentação e entender se eles são inclusivos (o item no índice fornecido é parte do que é retornado) ou não.**

**Corrija os dois erros de indexação na função a seguir para que todos os números de 1 a 5 sejam impressos no console.**

function countToFive() {

let firstFive = "12345";

let len = firstFive.length;

// Only change code below this line

for (let i = 0; i < len; i++) {

// Only change code above this line

console.log(firstFive[i]);

}

}

countToFive();

**Sometimes it's necessary to save information, increment counters, or re-set variables within a loop. A potential issue is when variables either should be reinitialized, and aren't, or vice versa. This is particularly dangerous if you accidentally reset the variable being used for the terminal condition, causing an infinite loop.**

**Printing variable values with each cycle of your loop by using `console.log()` can uncover buggy behavior related to resetting, or failing to reset a variable.**

---

**The following function is supposed to create a two-dimensional array with `m` rows and `n` columns of zeroes. Unfortunately, it's not producing the expected output because the `row` variable isn't being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which looks like `[[0, 0], [0, 0], [0, 0]]`.**

function zeroArray(m, n) {

// Creates a 2-D array with m rows and n columns of zeroes

let newArray = [];

let row = [];

for (let i = 0; i < m; i++) {

// Adds the m-th row into newArray

for (let j = 0; j < n; j++) {

// Pushes n zeroes into the current row to create the columns

row.push(0);

}

// Pushes the current row, which now has n zeroes in it, to the array

newArray.push(row);

row = [];

}

return newArray;

}

let matrix = zeroArray(3, 2);

console.log(matrix);

**O tópico final é o temido loop infinito. Os loops são ótimas ferramentas quando você precisa que seu programa execute um bloco de código um certo número de vezes ou até que uma condição seja atendida, mas eles precisam de uma condição terminal que encerre o loop. Os loops infinitos podem congelar ou travar o navegador e causar um caos geral na execução do programa, o que ninguém quer.**

**É trabalho do programador garantir que a condição do terminal, que diz ao programa quando sair do código de loop, seja eventualmente alcançada. Um erro é aumentar ou diminuir uma variável do contador na direção errada da condição do terminal. Outro está redefinindo acidentalmente um contador ou variável de índice dentro do código de loop, em vez de incrementá-lo ou decrementá-lo.**

---

**A `myFunc()`função contém um loop infinito porque a condição terminal `i != 4`nunca será avaliada como `false`(e interromperá o loop) - `i`aumentará em 2 a cada passagem e saltará para a direita acima de 4, pois `i`é estranho para começar. Fixe o operador de comparação na condição do terminal para que o loop execute apenas para `i`menos ou igual a 4.**

function myFunc() {

for (let i = 1; i <= 4; i += 2) {

console.log("Still going!");

}

}
