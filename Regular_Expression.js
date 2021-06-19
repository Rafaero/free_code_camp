### Expressões regulares são usadas em linguagens de programação para combinar partes de strings. Você cria padrões para ajudá-lo a fazer essa correspondência.

**JavaScript possui várias maneiras de usar regexes. Uma maneira de testar uma regex é usar o .test()método. O .test()método pega o regex, aplica-o a uma string (que é colocada entre parênteses) e retorna true ou false se o seu padrão encontrar algo ou não.**

**Aplique o regex myRegexna string myStringusando o .test()método.**

let myString = "Hello, World!";

let myRegex = /Hello/;

let result = myRegex.test(myString)

**Você também pode pesquisar mais do que apenas dois padrões. Você pode fazer isso adicionando mais padrões com mais `OR`operadores separando-os, como `/yes|no|maybe/`.**

---

**Complete a regex `petRegex`para coincidir com os animais de estimação `dog`, `cat`, `bird`, ou `fish`.**

let petString = "James has a pet cat.";

let petRegex = /dog|cat|bird|fish/;

let result = petRegex.test(petString);

**o `i`sinalizador. Você pode usá-lo anexando-o ao regex. Um exemplo de uso desse sinalizador é `/ignorecase/i`. Este regex pode combinar as cordas `ignorecase`, `igNoreCase`e `IgnoreCase`.**

---

**Escreva uma regex `fccRegex`para corresponder `freeCodeCamp`, não importa o caso. Sua regex não deve corresponder a nenhuma abreviatura ou variação com espaços.**

let myString = "freeCodeCamp";

let fccRegex = /freecOdecamp/i;

let result = fccRegex.test(myString);

**Aplique o .match()método para extrair a string coding.**

let extractStr = "Extract the word 'coding' from this string.";

let codingRegex = /coding/; // Change this line

let result = extractStr.match(codingRegex); // Change this line

**Usando o regex `starRegex`, encontre e extraia ambas as `Twinkle`palavras da string `twinkleStar`.**

**NotaVocê pode ter vários sinalizadores em seu regex, como`/search/gi`**

let twinkleStar = "Twinkle, twinkle, little star";

let starRegex = /twinkle/gi; // Change this line

let result = twinkleStar.match(starRegex); // Change this line

**O caractere curinga .corresponderá a qualquer um dos caracteres. O curinga também é chamado dote period. Você pode usar o caractere curinga como qualquer outro caractere na regex. Por exemplo, se você queria corresponder hug, huh, hut, e hum, você pode usar o regex /hu./para coincidir com todas as quatro palavras.**

**Ambas as `test`chamadas retornariam `true`.**

---

**Complete a regex `unRegex`para que ele corresponda as cordas `run`, `sun`, `fun`, `pun`, `nun`, e `bun`. Sua regex deve usar o caractere curinga.**

let exampleStr = "Let's have fun with regular expressions!";

let unRegex = /.un/; // Change this line

let result = unRegex.test(exampleStr);

**Você pode pesquisar um padrão literal com alguma flexibilidade com classes de caracteres . As classes de caracteres permitem que você defina um grupo de caracteres que deseja combinar, colocando-os entre colchetes ( [e ]).**

**Use uma classe de caráter com vogais ( `a`, `e`, `i`, `o`, `u`) no seu regex `vowelRegex`para encontrar todas as vogais na cadeia `quoteSample`.**

**Nota:** certifique-se de combinar as vogais maiúsculas e minúsculas.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";

let vowelRegex = /[aeiou]/gi; // Change this line

let result = quoteSample.match(vowelRegex); // Change this line

**Dentro de um conjunto de caracteres, você pode definir um intervalo de caracteres para corresponder usando um hífen: `-`.**

**Por exemplo, para combinar letras minúsculas `a`por meio de `e`você usaria `[a-e]`.**

**Em ordem, as três `match`chamadas iria retornar os valores `["cat"]`, `["bat"]`e `null`.**

---

**Combine todas as letras da string `quoteSample`.**

**Nota : Certifique-se de combinar letras maiúsculas e minúsculas.**

let quoteSample = "The quick brown fox jumps over the lazy dog.";

let alphabetRegex = /[a-z]/gi; // Change this line

let result = quoteSample.match(alphabetRegex); // Change this line

**uso do hífen ( `-`) para corresponder a um intervalo de caracteres não se limita a letras. Também funciona para corresponder a um intervalo de números.**

**Por exemplo, `/[0-5]/`corresponde a qualquer número entre `0`e `5`, incluindo `0`e `5`.**

**Além disso, é possível combinar uma série de letras e números em um único conjunto de caracteres.**

**Crie uma única regex que corresponda a um intervalo de letras entre he se um intervalo de números entre 2e 6. Lembre-se de incluir os sinalizadores apropriados na regex.**

let quoteSample = "Blueberry 3.141592653s are delicious.";

let myRegex = /[h-s2-6]/gi; // Change this line

let result = quoteSample.match(myRegex); // Change this line

**Para criar um conjunto de caracteres negado, coloque um caractere circunflexo ( `^`) após o colchete de abertura e antes dos caracteres que você não deseja corresponder.**

**Por exemplo, `/[^aeiou]/gi`corresponde a todos os caracteres que não são vogais. Note-se que personagens como `.`, `!`, `[`, `@`, `/`e espaços em branco são combinados - o conjunto de caracteres vogal negada única exclui os caracteres de vogais.**

---

**Crie uma única regex que corresponda a todos os caracteres que não sejam um número ou vogal. Lembre-se de incluir os sinalizadores apropriados na regex.**

let quoteSample = "3 blind mice.";

let myRegex = /[^3 .]/gi; // Change this line

let result = quoteSample.match(myRegex); // Change this line

**Às vezes, você precisa combinar um caractere (ou grupo de caracteres) que aparece uma ou mais vezes consecutivas. Isso significa que ocorre pelo menos uma vez e pode ser repetido.**

**Você pode usar o `+`personagem para verificar se é esse o caso. Lembre-se de que o caractere ou padrão deve estar presente consecutivamente. Ou seja, o personagem deve repetir um após o outro.**

**Por exemplo, `/a+/g`encontraria uma correspondência em `abc`e retornaria `["a"]`. Por causa do `+`, ele também encontraria uma única correspondência em `aabc`e retornaria `["aa"]`.**

**Se, em vez disso, estivesse verificando a string `abab`, ele encontraria duas correspondências e retornaria `["a", "a"]`porque os `a`caracteres não estão em uma linha - há um `b`entre eles. Finalmente, como não há nenhum `a`na string `bcd`, ele não encontraria uma correspondência.**

---

**Você deseja encontrar correspondências quando a letra `s`ocorre uma ou mais vezes em `Mississippi`. Escreva um regex que use o `+`sinal.**

let difficultSpelling = "Mississippi";

let myRegex = /s+/gi; // Change this line

let result = difficultSpelling.match(myRegex);

**O último desafio usou o `+`sinal de mais para procurar caracteres que ocorrem uma ou mais vezes. Também existe uma opção que combina caracteres que ocorrem zero ou mais vezes.**

**O personagem de fazer isso é o asterisco ou estrela: `*`.**

**Em ordem, as três match chamadas iria retornar os valores ["goooooooo"], ["g"]e null.**

**Para este desafio, chewieQuote foi inicializado como a string Aaaaaaaaaaaaaaaarrrgh!nos bastidores. Crie uma regex chewieRegexque use o *caractere para corresponder a um A caractere maiúsculo imediatamente seguido por zero ou mais acaracteres minúsculos em chewieQuote. Sua regex não precisa de sinalizadores ou classes de caracteres e não deve corresponder a nenhuma das outras aspas.**

// Only change code below this line

let chewieRegex = /Aa*/; // Change this line

// Only change code above this line

let result = chewieQuote.match(chewieRegex);

**Em expressões regulares, uma correspondência *gulosa* encontra a parte mais longa possível de uma string que se encaixa no padrão regex e a retorna como uma correspondência. A alternativa é chamada de correspondência *lenta* , que encontra a menor parte possível da string que satisfaça o padrão regex.**

**Você pode aplicar o regex `/t[a-z]*i/`à string `"titanic"`. Esta regex é basicamente um padrão que começa `t`, termina com `i`e tem algumas letras no meio.**

**Expressões regulares são gananciosas por padrão, então a correspondência retornaria `["titani"]`. Ele encontra a maior subcadeia possível para se ajustar ao padrão.**

**No entanto, você pode usar o `?`caractere para alterá-lo para correspondência preguiçosa. `"titanic"`comparada com a regex ajustada de `/t[a-z]*?i/`retornos `["ti"]`.**

**Nota: A análise de HTML com expressões regulares deve ser evitada, mas o padrão de correspondência de uma string HTML com expressões regulares é perfeitamente aceitável.**

---

**Corrija o regex `/<.*>/`para retornar a tag HTML `<h1>`e não o texto `"<h1>Winter is coming</h1>"`. Lembre-se de que o curinga `.`em uma expressão regular corresponde a qualquer caractere.**

let text = "<h1>Winter is coming</h1>";

let myRegex = /<.*?>/; // Change this line

let result = text.match(myRegex);

**Escreva um regex ganancioso que encontre um ou mais criminosos dentro de um grupo de outras pessoas. Um criminoso é representado pela letra maiúscula C**

let reCriminals = /C+/g; // Change this line

console.log(reCriminals)

**Desafios anteriores mostraram que as expressões regulares podem ser usadas para procurar uma série de correspondências. Eles também são usados para pesquisar padrões em posições específicas em strings.**

**Em um desafio anterior, você usou o caractere circunflexo ( `^`) dentro de um conjunto de caracteres para criar um conjunto de caracteres negado no formulário `[^thingsThatWillNotBeMatched]`. Fora de um conjunto de caracteres, o circunflexo é usado para pesquisar padrões no início das strings.**

**Use o acento circunflexo em uma regex para localizar Calapenas no início da string rickyAndCal.**

let rickyAndCal = "Cal and Ricky both like racing.";

let calRegex = /^Cal/; // Change this line

let result = calRegex.test(rickyAndCal);

**No último desafio, você aprendeu a usar o caractere circunflexo para pesquisar padrões no início de strings. Também existe uma maneira de pesquisar padrões no final das strings.**

**Você pode pesquisar o final das strings usando o caractere de cifrão `$`no final da regex.**

**Use o caractere âncora ( $) para corresponder à string caboose no final da string caboose.**

let caboose = "The last car on a train is the caboose";

let lastRegex = /caboose$/; // Change this line

let result = lastRegex.test(caboose);

**Usando classes de caracteres, você foi capaz de pesquisar todas as letras do alfabeto com `[a-z]`. Esse tipo de classe de caractere é comum o suficiente para que haja um atalho para ela, embora inclua alguns caracteres extras também.**

**A classe de caractere mais próxima em JavaScript para corresponder ao alfabeto é `\w`. Este atalho é igual a `[A-Za-z0-9_]`. Esta classe de caracteres combina letras maiúsculas e minúsculas mais números. Observe que essa classe de caractere também inclui o caractere de sublinhado ( `_`).**

**Estas classes de personagens de atalho são também conhecidas como *classes de personagens taquigrafia* .**

---

**Use a classe de caracteres abreviados `\w`para contar o número de caracteres alfanuméricos em várias aspas e strings.**

let quoteSample = "The five boxing wizards jump quickly.";

let alphabetRegexV2 = /\w/g; // Change this line

let result = quoteSample.match(alphabetRegexV2).length;

**Você aprendeu que pode usar um atalho para combinar os alfanuméricos `[A-Za-z0-9_]`usando `\w`. Um padrão natural que você pode querer pesquisar é o oposto dos alfanuméricos.**

**Você pode pesquisar o oposto de `\w`com `\W`. Observe que o padrão oposto usa uma letra maiúscula. Este atalho é o mesmo que `[^A-Za-z0-9_]`.**

**Use a classe de caracteres abreviados \W para contar o número de caracteres não alfanuméricos em várias aspas e strings.**

let quoteSample = "The five boxing wizards jump quickly.";

let nonAlphabetRegex = /\W/g; // Change this line

let result = quoteSample.match(nonAlphabetRegex).length;

**Você aprendeu atalhos para padrões de string comuns, como alfanuméricos. Outro padrão comum é procurar apenas dígitos ou números.**

**O atalho para procurar caracteres de dígitos é `\d`, com letras minúsculas `d`. Isso é igual à classe de caracteres `[0-9]`, que procura um único caractere de qualquer número entre zero e nove.**

---

**Use a classe de caracteres abreviados `\d`para contar quantos dígitos existem nos títulos dos filmes. Os números escritos ("seis" em vez de 6) não contam.**

let movieName = "2001: A Space Odyssey";

let numRegex = /\d/g; // Change this line

let result = movieName.match(numRegex).length;

**O último desafio mostrou como pesquisar dígitos usando o atalho `\d`com letras minúsculas `d`. Você também pode pesquisar não-dígitos usando um atalho semelhante que usa letras maiúsculas `D`.**

**O atalho para procurar caracteres não-dígitos é `\D`. Isso é igual à classe de caracteres `[^0-9]`, que procura um único caractere que não seja um número entre zero e nove.**

---

**Use a classe de caracteres abreviados para não dígitos `\D`para contar quantos não dígitos existem nos títulos de filmes.**

let movieName = "2001: A Space Odyssey";

let noNumRegex = /\D/g; // Change this line

let result = movieName.match(noNumRegex).length;

**Os nomes de usuário são usados em qualquer lugar na Internet. São eles que dão aos usuários uma identidade única em seus sites favoritos.**

**Você precisa verificar todos os nomes de usuário em um banco de dados. Aqui estão algumas regras simples que os usuários devem seguir ao criar seu nome de usuário.**

1. **Os nomes de usuário podem usar apenas caracteres alfanuméricos.**
2. **Os únicos números no nome de usuário devem estar no final. Pode haver zero ou mais deles no final. O nome de usuário não pode começar com o número.**
3. **As letras do nome de usuário podem ser minúsculas e maiúsculas.**
4. **Os nomes de usuário devem ter pelo menos dois caracteres. Um nome de usuário de dois caracteres só pode usar letras do alfabeto como caracteres.**

---

**Altere o regex `userCheck`para se ajustar às restrições listadas acima.**

let username = "JackOfAllTrades";

let userCheck = /^[a-z][a-z]+\d*$|^[a-z]+\d\d+$/i; // Change this line

let result = userCheck.test(username);

console.log(result)

**Os desafios até agora cobriram a correspondência de letras do alfabeto e números. Você também pode combinar o espaço em branco ou espaços entre as letras.**

**Você pode pesquisar por espaços em branco usando `\s`, que é uma letra minúscula `s`. Este padrão não corresponde apenas ao espaço em branco, mas também ao retorno de carro, tabulação, avanço de formulário e caracteres de nova linha. Você pode pensar nisso como algo semelhante à classe de personagem `[ \r\t\f\n\v]`.**

**Altere o regex countWhiteSpacepara procurar vários caracteres de espaço em branco em uma string.**

let sample = "Whitespace is important in separating words";

let countWhiteSpace = /\s/g; // Change this line

let result = sample.match(countWhiteSpace);

**Você aprendeu a pesquisar por espaços em branco usando `\s`, com letras minúsculas `s`. Você também pode pesquisar tudo, exceto espaços em branco.**

**Pesquise por espaços não em branco usando `\S`, que é uma letra maiúscula `s`. Este padrão não corresponderá a espaços em branco, retorno de carro, tabulação, avanço de formulário e caracteres de nova linha. Você pode pensar que é semelhante à classe de personagem `[^ \r\t\f\n\v]`.**

**Altere o regex countNonWhiteSpacepara procurar vários caracteres que não sejam de espaço em branco em uma string.**

let sample = "Whitespace is important in separating words";

let countNonWhiteSpace = /\S/g; // Change this line

let result = sample.match(countNonWhiteSpace);

**Recall that you use the plus sign `+` to look for one or more characters and the asterisk `*` to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.**

**You can specify the lower and upper number of patterns with *quantity specifiers*. Quantity specifiers are used with curly brackets (`{` and `}`). You put two numbers between the curly brackets - for the lower and upper number of patterns.**

**For example, to match only the letter `a` appearing between `3` and `5` times in the string `ah`, your regex would be `/a{3,5}h/`.**

let ohStr = "Ohhh no";

let ohRegex = /Oh{3,6} no/; // Change this line

let result = ohRegex.test(ohStr);

**Você pode especificar o número inferior e superior de padrões com especificadores de quantidade usando chaves. Às vezes, você só deseja especificar o número inferior de padrões sem limite superior.**

**Para especificar apenas o número inferior de padrões, mantenha o primeiro número seguido por uma vírgula.**

**Por exemplo, para corresponder apenas a string `hah`com a letra que `a`aparece pelo menos `3`vezes, sua regex seria `/ha{3,}h/`.**

**Altere a regex haRegexpara corresponder à palavra Hazzahapenas quando ela tiver quatro ou mais letras z.**

let haStr = "Hazzzzah";

let haRegex = /Haz{4,}ah/; // Change this line

let result = haRegex.test(haStr);

**Você pode especificar o número inferior e superior de padrões com especificadores de quantidade usando chaves. Às vezes, você deseja apenas um número específico de correspondências.**

**Para especificar um certo número de padrões, basta ter aquele número entre as chaves.**

**Por exemplo, para combinar apenas a palavra `hah`com os `a` `3`tempos das letras , sua regex seria `/ha{3}h/`.**

**Altere a regex timRegexpara corresponder à palavra Timberapenas quando ela tiver quatro letras m.**

let timStr = "Timmmmber";

let timRegex = /Tim{4}ber/; // Change this line

let result = timRegex.test(timStr);

**Às vezes, os padrões que você deseja pesquisar podem ter partes que podem ou não existir. No entanto, pode ser importante verificá-los mesmo assim.**

**Você pode especificar a possível existência de um elemento com um ponto de interrogação `?`,. Isso verifica se há zero ou um dos elementos anteriores. Você pode pensar neste símbolo como se o elemento anterior fosse opcional.**

**Por exemplo, existem pequenas diferenças no inglês americano e britânico e você pode usar o ponto de interrogação para corresponder às duas grafias.**

**Altere a regex favRegexpara corresponder às versões em inglês americano ( favorite) e inglês britânico ( favourite) da palavra.**

let favWord = "favorite";

let favRegex = /favou?rite/; // Change this line

let result = favRegex.test(favWord);

***Lookaheads* are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.**

**There are two kinds of lookaheads: *positive lookahead* and *negative lookahead*.**

**A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as `(?=...)` where the `...` is the required part that is not matched.**

**On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as `(?!...)` where the `...` is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.**

**more practical use of lookaheads is to check two or more patterns in one string.**

**Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.**

let sampleWord = "astronaut";

let pwRegex = /(?=\w{6})(?=\D*\d{2})/; // Change this line

let result = pwRegex.test(sampleWord);

**Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses `()`.**

**If you want to find either `Penguin` or `Pumpkin` in a string, you can use the following Regular Expression: `/P(engu|umpk)in/g`**

**Fix the regex so that it checks for the names of `Franklin Roosevelt` or `Eleanor Roosevelt` in a case sensitive manner and it should make concessions for middle names.**

**Then fix the code so that the regex that you have created is checked against `myString` and either `true` or `false` is returned depending on whether the regex matches.**

let myString = "Eleanor Roosevelt";

let myRegex = /(Eleanor|Franklin).*Roosevelt/; // Change this line

let result = myRegex.test(myString); // Change this line

**Alguns padrões que você procura ocorrerão várias vezes em uma string. É um desperdício repetir manualmente essa regex. Há uma maneira melhor de especificar quando você tem várias substrings repetidas em sua string.**

**Você pode pesquisar substrings repetidos usando *grupos de captura* . Parênteses `(`e `)`são usados para localizar substrings repetidas. Você coloca a regex do padrão que se repetirá entre os parênteses.**

**Para especificar onde essa seqüência de repetição aparecerá, você usa uma barra invertida ( `\`) e, em seguida, um número. Este número começa em 1 e aumenta com cada grupo de captura adicional que você usa. Um exemplo seria `\1`combinar o primeiro grupo.**

**O exemplo abaixo corresponde a qualquer palavra que ocorra duas vezes separada por um espaço:**

**Usar o `.match()`método em uma string retornará um array com a string que corresponde, junto com seu grupo de captura.**

---

**Use grupos de captura em `reRegex`para corresponder a uma string que consiste apenas no mesmo número repetido exatamente três vezes separado por espaços simples.**

let repeatNum = "42 42 42";

let reRegex = /^(\d+)\s\1\s\1$/; // Change this line

let result = reRegex.test(repeatNum);

**Pesquisar é útil. No entanto, você pode tornar a pesquisa ainda mais poderosa quando ela também altera (ou substitui) o texto que você encontrou.**

**Você pode pesquisar e substituir texto em uma string usando `.replace()`em uma string. As entradas `.replace()`são primeiro o padrão regex que você deseja pesquisar. O segundo parâmetro é a string para substituir a correspondência ou uma função para fazer algo.**

**Escreva um regex fixRegex usando três grupos de captura que pesquisarão cada palavra na string one two three. Em seguida, atualize a replaceText variável para substituir one two three pela string three two onee atribua o resultado à result variável. Certifique-se de usar grupos de captura na string de substituição usando a $sintaxe do cifrão ( ).**

let str = "one two three";

let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line

let replaceText = "$3 $2 $1"; // Change this line

let result = str.replace(fixRegex, replaceText);