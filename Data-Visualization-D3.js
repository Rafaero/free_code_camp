**Adicionar Elementos de Documento com D3**

**O D3 possui vários métodos que permitem adicionar e alterar elementos em seu documento.**

**O `select()`método seleciona um elemento do documento. Recebe um argumento para o nome do elemento que você deseja e retorna um nó HTML para o primeiro elemento no documento que corresponda ao nome. Aqui está um exemplo:**

```
const anchor = d3.select("a");

```

**O exemplo acima encontra a primeira marca de âncora na página e salva um nó HTML para ela na variável `anchor`. Você pode usar a seleção com outros métodos. A `d3`parte do exemplo é uma referência ao objeto D3, que é como você acessa os métodos D3.**

**Dois outros métodos úteis são `append()`e `text()`.**

**O `append()`método usa um argumento para o elemento que você deseja adicionar ao documento. Ele anexa um nó HTML a um item selecionado e retorna um identificador para esse nó.**

**O `text()`método define o texto do nó selecionado ou obtém o texto atual. Para definir o valor, você passa uma string como um argumento dentro dos parênteses do método.**

**Aqui está um exemplo que seleciona uma lista não ordenada, anexa um item da lista e adiciona texto:**

```
d3.select("ul")
  .append("li")
  .text("Very important item");

```

**D3 permite encadear vários métodos com períodos para realizar uma série de ações em uma linha.**

---

**Use o `select`método para selecionar a `body`tag no documento. Em seguida, `append`uma `h1`tag a ele e adicione o texto `Learning D3`ao `h1`elemento.**

<body>

<script>

// Add your code below this line

d3.select("body").append("h1").text("Learning D3");

// Add your code above this line

</script>

</body>

**Selecione um grupo de elementos com D3**

**D3 também possui o `selectAll()`método para selecionar um grupo de elementos. Ele retorna uma matriz de nós HTML para todos os itens no documento que correspondem à string de entrada. Aqui está um exemplo para selecionar todas as tags âncora em um documento:**

```
const anchors = d3.selectAll("a");

```

**Como o `select()`método, `selectAll()`suporta encadeamento de método e você pode usá-lo com outros métodos.**

---

**Selecione todas as `li`tags no documento e altere seu texto para a string `list item`encadeando o `.text()`método.**

<body>

<ul>

<li>Example</li>

<li>Example</li>

<li>Example</li>

</ul>

<script>

// Add your code below this line

d3.selectAll("li").text("list item")

// Add your code above this line

</script>

</body>

**Trabalhe com dados em D3**

**A biblioteca D3 se concentra em uma abordagem baseada em dados. Quando você tem um conjunto de dados, pode aplicar métodos D3 para exibi-lo na página. Os dados vêm em muitos formatos, mas esse desafio usa uma matriz simples de números.**

**A primeira etapa é informar o D3 sobre os dados. O `data()`método é usado em uma seleção de elementos DOM para anexar os dados a esses elementos. O conjunto de dados é passado como um argumento para o método.**

**Um padrão de fluxo de trabalho comum é criar um novo elemento no documento para cada dado no conjunto. D3 tem o `enter()`método para este propósito.**

**Quando `enter()`é combinado com o `data()`método, ele examina os elementos selecionados da página e os compara com o número de itens de dados no conjunto. Se houver menos elementos do que itens de dados, ele cria os elementos ausentes.**

**Aqui está um exemplo que seleciona um `ul`elemento e cria um novo item de lista com base no número de entradas na matriz:**

```
<body><ul></ul><script>
    const dataset = ["a", "b", "c"];
    d3.select("ul").selectAll("li")
      .data(dataset)
      .enter()
      .append("li")
      .text("New item");
  </script></body>
```

**Pode parecer confuso selecionar elementos que ainda não existem. Este código está dizendo ao D3 para primeiro selecionar o `ul`na página. Em seguida, selecione todos os itens da lista, o que retorna uma seleção vazia. Em seguida, o `data()`método revisa o conjunto de dados e executa o código a seguir três vezes, uma para cada item da matriz. O `enter()`método vê que não há `li`elementos na página, mas precisa de 3 (um para cada dado em `dataset`). Novos `li`elementos são anexados ao `ul`e têm o texto `New item`.**

---

**Selecione o `body`nó e, a seguir, selecione todos os `h2`elementos. Faça com que D3 crie e acrescente uma `h2`tag para cada item na `dataset`matriz. O texto no `h2`deveria dizer `New Title`. Seu código deve usar os métodos `data()`e `enter()`.**

<body>

<script>

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// Add your code below this line

d3.select("body").selectAll()

.data(dataset)

.enter()

.append("h2")

.text("New Title")

// Add your code above this line

</script>

</body>

**Trabalhe com dados dinâmicos em D3**

**Os dois últimos desafios cobrem os fundamentos da exibição de dados dinamicamente com D3 usando os métodos `data()`e `enter()`. Esses métodos pegam um conjunto de dados e, junto com o `append()`método, criam um novo elemento DOM para cada entrada no conjunto de dados.**

**No desafio anterior, você criou um novo `h2`elemento para cada item da `dataset`matriz, mas todos eles continham o mesmo texto `New Title`,. Isso ocorre porque você não fez uso dos dados vinculados a cada um dos `h2`elementos.**

**O `text()`método D3 pode usar uma string ou uma função de retorno de chamada como argumento:**

```
selection.text((d) => d)

```

**No exemplo acima, o parâmetro `d`se refere a uma única entrada no conjunto de dados à qual uma seleção está associada.**

**Usando o exemplo atual como contexto, o primeiro `h2`elemento é vinculado a 12, o segundo `h2`elemento é vinculado a 31, o terceiro `h2`elemento é vinculado a 22 e assim por diante.**

---

**Altere o `text()`método para que cada `h2`elemento exiba o valor correspondente da `dataset`matriz com um único espaço e a string `USD`. Por exemplo, o primeiro título deve ser `12 USD`.**

<body>

<script>

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("h2")

.data(dataset)

.enter()

.append("h2")

// Add your code below this line

.text((ele) => {

return ele + " USD"

});

// Add your code above this line

</script>

</body>

**Adicionar estilo embutido aos elementos**

**D3 permite adicionar estilos CSS embutidos em elementos dinâmicos com o `style()`método.**

**O `style()`método usa um par de valores-chave separados por vírgula como argumento. Aqui está um exemplo para definir a cor do texto da seleção para azul:**

```
selection.style("color","blue");

```

---

**Adicione o `style()`método ao código no editor para fazer com que todo o texto exibido tenha um `font-family`de `verdana`.**

<body>

<script>

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("h2")

.data(dataset)

.enter()

.append("h2")

.text((d) => (d + " USD"))

// Add your code below this line

.style("font-family", "verdana")

// Add your code above this line

</script>

</body>

 

**Alterar estilos com base em dados**

**D3 é sobre visualização e apresentação de dados. É provável que você queira alterar o estilo dos elementos com base nos dados. Você pode usar uma função de retorno de chamada no `style()`método para alterar o estilo de diferentes elementos.**

**Por exemplo, você pode querer colorir um ponto de dados de azul se ele tiver um valor menor que 20 e de vermelho caso contrário. Você pode usar uma função de retorno de chamada no `style()`método e incluir a lógica condicional. A função de retorno de chamada usa o `d`parâmetro para representar o ponto de dados:**

```
selection.style("color", (d) => {});

```

**O `style()`método não se limita a definir o `color`- ele também pode ser usado com outras propriedades CSS.**

---

**Adicione o `style()`método ao código no editor para definir o `color`dos `h2`elementos condicionalmente. Escreva a função de retorno de chamada para que se o valor dos dados for menor que 20, ele retorne vermelho, caso contrário, retorne verde.**

**Nota: Você pode usar a lógica if-else ou o operador ternário.**

<body>

<script>

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("h2")

.data(dataset)

.enter()

.append("h2")

.text((d) => (d + " USD"))

// Add your code below this line

.style("color", (d) => {

if(d < 20){

return("color", "red")

}else{

return("color", "green")

}

})

// Add your code above this line

</script>

</body>

**Adicionar classes com D3**

**Usar muitos estilos embutidos em elementos HTML fica difícil de gerenciar, mesmo para aplicativos menores. É mais fácil adicionar uma classe a elementos e estilizar essa classe uma vez usando regras CSS. D3 tem o `attr()`método para adicionar qualquer atributo HTML a um elemento, incluindo um nome de classe.**

**O `attr()`método funciona da mesma maneira `style()`. Aceita valores separados por vírgula e pode usar uma função de retorno de chamada. Aqui está um exemplo para adicionar uma classe `container`a uma seleção:**

```
selection.attr("class", "container");

```

**Observe que o `class`parâmetro permanecerá o mesmo sempre que você precisar adicionar uma classe e apenas o `container`parâmetro será alterado.**

---

**Adicione o `attr()`método ao código no editor e coloque uma classe de `bar`nos `div`elementos.**

<style>

.bar {

width: 25px;

height: 100px;

display: inline-block;

background-color: blue;

}

</style>

<body>

<script>

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("div")

.data(dataset)

.enter()

.append("div")

// Add your code below this line

.attr("class", "bar");

// Add your code above this line

</script>

</body>

**Atualizar a altura de um elemento dinamicamente**

**Os desafios anteriores cobriram como exibir dados de uma matriz e como adicionar classes CSS. Você pode combinar essas lições para criar um gráfico de barras simples. Existem duas etapas para isso:**

1. **Crie um `div`para cada ponto de dados na matriz**
2. **Dê a cada `div`um deles uma altura dinâmica, usando uma função de retorno de chamada no `style()`método que define a altura igual ao valor dos dados**

**Recupere o formato para definir um estilo usando uma função de retorno de chamada:**

```
selection.style("cssProperty", (d) => d)

```

---

**Adicione o `style()`método ao código no editor para definir a `height`propriedade de cada elemento. Use uma função de retorno de chamada para retornar o valor do ponto de dados com a string `px`adicionada a ele.**

<style>

.bar {

width: 25px;

height: 100px;

display: inline-block;

background-color: blue;

}

</style>

<body>

<script>

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("div")

.data(dataset)

.enter()

.append("div")

.attr("class", "bar")

// Add your code below this line

.style("height", (d) => {

return("height", d+"px")

})

// Add your code above this line

</script>

</body>

**Alterar a apresentação de um gráfico de barras**

**O último desafio criou um gráfico de barras, mas existem algumas alterações de formatação que podem melhorá-lo:**

1. **Adicione espaço entre cada barra para separá-los visualmente, o que é feito adicionando uma margem ao CSS para a `bar`classe**
2. **Aumente a altura das barras para mostrar melhor a diferença de valores, o que é feito multiplicando o valor por um número para dimensionar a altura**

---

**Primeiro, adicione um `margin`of `2px`à `bar`classe na `style`tag. Em seguida, altere a função de retorno de chamada no `style()`método para que ela retorne um valor `10`vezes o valor dos dados originais (mais o `px`).**

**Nota: Multiplicar cada ponto de dados pela *mesma* constante altera apenas a escala. É como aumentar o zoom e não muda o significado dos dados subjacentes.**

<style>

.bar {

width: 25px;

height: 100px;

/* Add your code below this line */

margin: 2px;

/* Add your code above this line */

display: inline-block;

background-color: blue;

}

</style>

<body>

<script>

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("div")

.data(dataset)

.enter()

.append("div")

.attr("class", "bar")

.style("height", (d) => {

return (d * 10) + "px"}) // Change this line

</script>

</body>

**Saiba mais sobre SVG em D3**

***SVG* significa *Scalable Vector Graphics* .**

**Aqui, "escalável" significa que, se você aumentar ou diminuir o zoom em um objeto, ele não aparecerá pixelado. Ele se adapta ao sistema de exibição, seja em uma pequena tela de celular ou em um grande monitor de TV.**

**SVG é usado para criar formas geométricas comuns. Como o D3 mapeia os dados em uma representação visual, ele usa SVG para criar as formas da visualização. As formas SVG de uma página da web devem estar dentro de uma `svg`tag HTML .**

**CSS pode ser escalável quando os estilos use unidades relativas (como `vh`, `vw`ou porcentagens), mas usando SVG é mais flexível para visualizações de dados de construção.**

---

**Adicione um `svg`nó ao `body`using `append()`. Dê a ele um `width`conjunto de atributos para a `w`constante fornecida e um `height`conjunto de atributos para a `h`constante fornecida usando os métodos `attr()`ou `style()`para cada um. Você o verá na saída porque há um `background-color`rosa aplicado a ele na `style`tag.**

**Nota: Ao usar os `attr()`atributos de largura e altura, não têm unidades. Este é o bloco de construção do dimensionamento - o elemento sempre terá uma proporção de 5: 1 entre largura e altura, independentemente do nível de zoom.**

<style>

svg {

background-color: pink;

}

</style>

<body>

<script>

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;

const h = 100;

const svg = d3.select("body")

// Add your code below this line

.append("svg")

.style("width", w + "px")

.style("height", h + "px")

// Add your code above this line

</script>

</body>

**Exibir formas com SVG**

**O último desafio criou um `svg`elemento com uma largura e altura dadas, que era visível porque tinha um `background-color`aplicado a ele na `style`tag. O código abriu espaço para a largura e altura fornecidas.**

**A próxima etapa é criar uma forma para colocar na `svg`área. Existem várias formas com suporte em SVG, como retângulos e círculos. Eles são usados para exibir dados. Por exemplo, uma `<rect>`forma SVG retângulo ( ) pode criar uma barra em um gráfico de barras.**

**Quando você coloca uma forma na `svg`área, pode especificar onde ela vai `x`e `y`coordena. O ponto de origem de (0, 0) está no canto superior esquerdo. Os valores positivos para `x`empurram a forma para a direita e os valores positivos para `y`empurram a forma para baixo a partir do ponto de origem.**

**Para colocar uma forma no meio de 500 (largura) x 100 (altura) `svg`do último desafio, a `x`coordenada seria 250 e a `y`coordenada seria 50.**

**Um SVG `rect`possui quatro atributos. Existem as coordenadas `x`e `y`para onde ele é colocado na `svg`área. Também possui um `height`e `width`para especificar o tamanho.**

---

**Adicione uma `rect`forma ao `svg`uso `append()`e atribua a ele um `width`atributo de `25`e um `height`atributo de `100`. Além disso, atribua os atributos `rect` `x`e a `y`cada conjunto `0`.**

<body>

<script>

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;

const h = 100;

const svg = d3.select("body")

.append("svg")

.attr("width", w)

.attr("height", h)

// Add your code below this line

.append("rect")

.attr("width", 25)

.attr("height", 100)

.attr("x", 0)

.attr("y", 0)

// Add your code above this line

</script>

</body>

**Crie uma barra para cada ponto de dados no conjunto**

**O último desafio adicionou apenas um retângulo ao `svg`elemento para representar uma barra. Aqui, você vai combinar o que você aprendeu até agora sobre `data()`, `enter()`e SVG formas para criar e anexar um retângulo para cada ponto de dados `dataset`.**

**Um desafio anterior mostrou o formato de como criar e anexar um `div`para cada item em `dataset`:**

```
d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")

```

**Existem algumas diferenças ao trabalhar com `rect`elementos em vez de `div`elementos. Os `rect`elementos devem ser anexados a um `svg`elemento, não diretamente ao `body`. Além disso, você precisa dizer ao D3 onde colocar cada um `rect`dentro da `svg`área. A colocação da barra será abordada no próximo desafio.**

---

**Use as `data()`, `enter()`e `append()`métodos para criar e anexar um `rect`para cada item `dataset`. As barras devem ser exibidas umas sobre as outras; isso será corrigido no próximo desafio.**

<body>

<script>

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;

const h = 100;

const svg = d3.select("body")

.append("svg")

.attr("width", w)

.attr("height", h);

svg.selectAll("rect")

// Add your code below this line

.data(dataset)

.enter()

.append("rect")

// Add your code above this line

.attr("x", 0)

.attr("y", 0)

.attr("width", 25)

.attr("height", 100);

</script>

</body>

**Defina dinamicamente as coordenadas para cada barra**

**O último desafio criou e anexou um retângulo ao `svg`elemento para cada ponto `dataset`para representar uma barra. Infelizmente, eles estavam todos empilhados uns em cima dos outros.**

**A colocação de um retângulo é tratada pelos atributos `x`e `y`. Eles dizem ao D3 onde começar a desenhar a forma na `svg`área. O último desafio definiu cada um deles para 0, portanto, cada barra foi colocada no canto superior esquerdo.**

**Para um gráfico de barras, todas as barras devem ficar no mesmo nível vertical, o que significa que o `y`valor permanece o mesmo (em 0) para todas as barras. O `x`valor, entretanto, precisa ser alterado conforme você adiciona novas barras. Lembre-se de que `x`valores maiores empurram os itens mais para a direita. Conforme você percorre os elementos do array em `dataset`, o `x`valor deve aumentar.**

**O `attr()`método em D3 aceita uma função de retorno de chamada para definir dinamicamente esse atributo. A função de retorno de chamada leva dois argumentos, um para o próprio ponto de dados (geralmente `d`) e outro para o índice do ponto de dados na matriz. O segundo argumento para o índice é opcional. Este é o formato:**

```
selection.attr("property", (d, i) => {

})

```

**É importante observar que você NÃO precisa escrever um `for`loop ou usar `forEach()`para iterar sobre os itens no conjunto de dados. Lembre-se de que o `data()`método analisa o conjunto de dados e qualquer método encadeado depois `data()`é executado uma vez para cada item do conjunto de dados.**

---

**Altere a `x`função de retorno de chamada do atributo para que ela retorne o índice vezes 30.**

**Nota: Cada barra tem uma largura de 25, portanto, aumentar cada `x`valor em 30 adiciona algum espaço entre as barras. Qualquer valor maior que 25 funcionaria neste exemplo.**

<body>

<script>

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;

const h = 100;

const svg = d3.select("body")

.append("svg")

.attr("width", w)

.attr("height", h);

svg.selectAll("rect")

.data(dataset)

.enter()

.append("rect")

.attr("x", (d, i) => {

// Add your code below this line

return i * 30;

// Add your code above this line

})

.attr("y", 0)

.attr("width", 25)

.attr("height", 100);

</script>

</body>

**Alterar dinamicamente a altura de cada barra**

**A altura de cada barra pode ser definida como o valor do ponto de dados na matriz, semelhante a como o `x`valor foi definido dinamicamente.**

```
selection.attr("property", (d, i) => {})

```

**Aqui `d`estaria o valor do ponto de dados e `i`seria o índice do ponto de dados na matriz.**

---

**Altere a função de retorno de chamada do `height`atributo para retornar o valor dos dados vezes 3.**

**Nota: Lembre - se de que multiplicar todos os pontos de dados pela mesma constante dimensiona os dados (como aumentar o zoom). Isso ajuda a ver as diferenças entre os valores das barras neste exemplo.**

<body>

<script>

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;

const h = 100;

const svg = d3.select("body")

.append("svg")

.attr("width", w)

.attr("height", h);

svg.selectAll("rect")

.data(dataset)

.enter()

.append("rect")

.attr("x", (d, i) => i * 30)

.attr("y", 0)

.attr("width", 25)

.attr("height", (d, i) => {

// Add your code below this line

return d * 3;

// Add your code above this line

});

</script>

</body>

**Inverter elementos SVG**

**Você deve ter notado que o gráfico de barras parecia estar de cabeça para baixo ou invertido. Isso ocorre porque o SVG usa as coordenadas (x, y).**

**Em SVG, o ponto de origem das coordenadas está no canto superior esquerdo. Uma `x`coordenada de 0 coloca uma forma na borda esquerda da área SVG. Uma `y`coordenada de 0 coloca uma forma na borda superior da área SVG. `x`Valores mais altos empurram o retângulo para a direita. `y`Valores mais altos empurram o retângulo para baixo.**

**Para fazer as barras com o lado correto para cima, você precisa alterar a forma como a `y`coordenada é calculada. Ele precisa levar em consideração a altura da barra e a altura total da área SVG.**

**A altura da área SVG é 100. Se você tiver um ponto de dados de 0 no conjunto, deseja que a barra comece na parte inferior da área SVG (não na parte superior). Para fazer isso, a `y`coordenada precisa de um valor de 100. Se o valor do ponto de dados fosse 1, você começaria com uma `y`coordenada de 100 para definir a barra na parte inferior. Então você precisa levar em conta a altura da barra de 1, então a `y`coordenada final seria 99.**

**A `y`coordenada `y = heightOfSVG - heightOfBar`posicionaria as barras com o lado correto para cima.**

---

**Altere a função de retorno de chamada do `y`atributo para definir as barras com o lado direito para cima. Lembre-se de que o valor `height`da barra é 3 vezes o valor dos dados `d`.**

**Nota: Em geral, o relacionamento é `y = h - m * d`, onde `m`é a constante que dimensiona os pontos de dados.**

<body>

<script>

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;

const h = 100;

const svg = d3.select("body")

.append("svg")

.attr("width", w)

.attr("height", h);

svg.selectAll("rect")

.data(dataset)

.enter()

.append("rect")

.attr("x", (d, i) => i * 30)

.attr("y", (d, i) => {

// Add your code below this line

return h - d * 3;

// Add your code above this line

})

.attr("width", 25)

.attr("height", (d, i) => 3 * d);

</script>

</body>

**Alterar a cor de um elemento SVG**

**As barras estão na posição certa, mas são todas da mesma cor preta. O SVG tem uma maneira de alterar a cor das barras.**

**Em SVG, uma `rect`forma é colorida com o `fill`atributo. Ele suporta códigos hexadecimais, nomes de cores e valores rgb, bem como opções mais complexas como gradientes e transparência.**

---

**Adicione um `attr()`método para definir o `fill`de todas as barras para a cor marinha.**

<body>

<script>

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;

const h = 100;

const svg = d3.select("body")

.append("svg")

.attr("width", w)

.attr("height", h);

svg.selectAll("rect")

.data(dataset)

.enter()

.append("rect")

.attr("x", (d, i) => i * 30)

.attr("y", (d, i) => h - 3 * d)

.attr("width", 25)

.attr("height", (d, i) => 3 * d)

// Add your code below this line

.attr("fill",() => {

return "navy"

})

// Add your code above this line

</script>

</body>

**Adicionar rótulos a elementos D3**

**D3 permite rotular um elemento gráfico, como uma barra, usando o `text`elemento SVG .**

**Como o `rect`elemento, um `text`elemento precisa ter `x`e `y`atributos para colocá-lo na tela SVG. Ele também precisa acessar os dados para exibir esses valores.**

**O D3 oferece um alto nível de controle sobre como você rotula suas barras.**

---

**O código no editor já vincula os dados a cada novo `text`elemento. Primeiro, anexe `text`nós ao `svg`. Em seguida, adicione atributos para as coordenadas `x`e `y`. Eles devem ser calculados da mesma forma que os `rect`outros, exceto que o `y`valor de `text`deve fazer o rótulo ficar 3 unidades acima da barra. Finalmente, use o `text()`método D3 para definir o rótulo igual ao valor do ponto de dados.**

**Observação: para que o rótulo fique acima da barra, decida se o `y`valor de `text`deve ser 3 maior ou 3 menor que o `y`valor da barra.**

<body>

<script>

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;

const h = 100;

const svg = d3.select("body")

.append("svg")

.attr("width", w)

.attr("height", h);

svg.selectAll("rect")

.data(dataset)

.enter()

.append("rect")

.attr("x", (d, i) => i * 30)

.attr("y", (d, i) => h - 3 * d)

.attr("width", 25)

.attr("height", (d, i) => 3 * d)

.attr("fill", "navy");

svg.selectAll("text")

.data(dataset)

.enter()

// Add your code below this line

.append("text")

.attr("x", (d, i) => i * 30)

.attr("y", (d, i) => (h - 3 * d) - 3)

.text(function(d, i){

return d;

})

// Add your code above this line

</script>

<body>

**Adicionar um efeito de pairar a um elemento D3**

**É possível adicionar efeitos que destacam uma barra quando o usuário passa o mouse sobre ela. Até agora, o estilo dos retângulos é aplicado com os métodos integrados D3 e SVG, mas você também pode usar CSS.**

**Você define a classe CSS nos elementos SVG com o `attr()`método. Em seguida, a `:hover`pseudoclasse para sua nova classe contém as regras de estilo para quaisquer efeitos de foco.**

---

**Use o `attr()`método para adicionar uma classe de `bar`a todos os `rect`elementos. Isso muda a `fill`cor da barra para marrom quando você passa o mouse sobre ela.**

<style>

.bar:hover {

fill: brown;

}

</style>

<body>

<script>

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;

const h = 100;

const svg = d3.select("body")

.append("svg")

.attr("width", w)

.attr("height", h);

svg.selectAll("rect")

.data(dataset)

.enter()

.append("rect")

.attr("x", (d, i) => i * 30)

.attr("y", (d, i) => h - 3 * d)

.attr("width", 25)

.attr("height", (d, i) => 3 * d)

.attr("fill", "navy")

// Add your code below this line

.attr("class", "bar");

// Add your code above this line

svg.selectAll("text")

.data(dataset)

.enter()

.append("text")

.text((d) => d)

.attr("x", (d, i) => i * 30)

.attr("y", (d, i) => h - (3 * d) - 3);

</script>

</body>

**Adicionar uma dica de ferramenta a um elemento D3**

**Uma dica de ferramenta mostra mais informações sobre um item em uma página quando o usuário passa o mouse sobre esse item. Existem várias maneiras de adicionar uma dica de ferramenta a uma visualização, este desafio usa o `title`elemento SVG .**

`**title`emparelha com o `text()`método para adicionar dados dinamicamente às barras.**

---

**Anexe um `title`elemento em cada `rect`nó. Em seguida, chame o `text()`método com uma função de retorno de chamada para que o texto exiba o valor dos dados.**

<style>

.bar:hover {

fill: brown;

}

</style>

<body>

<script>

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;

const h = 100;

const svg = d3.select("body")

.append("svg")

.attr("width", w)

.attr("height", h);

svg.selectAll("rect")

.data(dataset)

.enter()

.append("rect")

.attr("x", (d, i) => i * 30)

.attr("y", (d, i) => h - 3 * d)

.attr("width", 25)

.attr("height", (d, i) => d * 3)

.attr("fill", "navy")

.attr("class", "bar")

// Add your code below this line

.append("title")

.text((d) => {

return d;

})

// Add your code above this line

svg.selectAll("text")

.data(dataset)

.enter()

.append("text")

.text((d) => d)

.attr("x", (d, i) => i * 30)

.attr("y", (d, i) => h - (d * 3 + 3))

</script>

</body>

**Crie um gráfico de dispersão com círculos SVG**

**Um gráfico de dispersão é outro tipo de visualização. Geralmente usa círculos para mapear pontos de dados, que têm dois valores cada. Estes valores amarrar aos `x`e `y`eixos, e são utilizados para posicionar o círculo na visualização.**

**O SVG possui uma `circle`tag para criar a forma do círculo. Funciona muito como os `rect`elementos que você usou para o gráfico de barras.**

---

**Use as `data()`, `enter()`e `append()`métodos para vincular `dataset`a novos `circle`elementos que estão anexados à lona SVG.**

**Observação: os círculos não estarão visíveis porque ainda não definimos seus atributos. Faremos isso no próximo desafio.**

<body>

<script>

const dataset = [

[ 34,    78 ],

[ 109,   280 ],

[ 310,   120 ],

[ 79,    411 ],

[ 420,   220 ],

[ 233,   145 ],

[ 333,   96 ],

[ 222,   333 ],

[ 78,    320 ],

[ 21,    123 ]

];

const w = 500;

const h = 500;

const svg = d3.select("body")

.append("svg")

.attr("width", w)

.attr("height", h);

svg.selectAll("circle")

// Add your code below this line

.data(dataset)

.enter()

.append("circle")

// Add your code above this line

</script>

</body>

**Adicionar Atributos aos Elementos do Círculo**

**O último desafio criou os `circle`elementos para cada ponto no `dataset`e os anexou à tela SVG. Mas o D3 precisa de mais informações sobre a posição e o tamanho de cada um `circle`para exibi-los corretamente.**

**A `circle`em SVG tem três atributos principais. Os atributos `cx`e `cy`são as coordenadas. Eles informam ao D3 onde posicionar o *centro* da forma na tela SVG. O raio ( `r`atributo) fornece o tamanho do `circle`.**

**Assim como a `rect` `y`coordenada, o `cy`atributo para a `circle`é medido da parte superior da tela SVG, não da parte inferior.**

**Todos os três atributos podem usar uma função de retorno de chamada para definir seus valores dinamicamente. Lembre-se de que todos os métodos encadeados depois são `data(dataset)`executados uma vez por item em `dataset`. O `d`parâmetro na função de retorno de chamada se refere ao item atual em `dataset`, que é uma matriz para cada ponto. Você usa a notação de colchetes, como `d[0]`, para acessar os valores nesse array.**

---

**Adicionar `cx`, `cy`e `r`atributos aos `circle`elementos. O `cx`valor deve ser o primeiro número na matriz para cada item em `dataset`. O `cy`valor deve ser baseado no segundo número da matriz, mas certifique-se de mostrar o gráfico com o lado direito para cima e não invertido. O `r`valor deve ser `5`para todos os círculos.**

<body>

<script>

const dataset = [

[ 34,    78 ],

[ 109,   280 ],

[ 310,   120 ],

[ 79,    411 ],

[ 420,   220 ],

[ 233,   145 ],

[ 333,   96 ],

[ 222,   333 ],

[ 78,    320 ],

[ 21,    123 ]

];

const w = 500;

const h = 500;

const svg = d3.select("body")

.append("svg")

.attr("width", w)

.attr("height", h);

svg.selectAll("circle")

.data(dataset)

.enter()

.append("circle")

// Add your code below this line

.attr("cx", (dataPoint) => {

return dataPoint[0]

})

.attr("cy", (dataPoint) => {

return w- dataPoint[1]

})

.attr("r", 5)

// Add your code above this line

</script>

</body>

**Adicionar rótulos aos círculos do gráfico de dispersão**

**Você pode adicionar texto para criar rótulos para os pontos em um gráfico de dispersão.**

**O objetivo é exibir os valores separados por vírgulas para o primeiro ( `x`) e o segundo ( `y`) campos de cada item em `dataset`.**

**Os `text`nós precisam `x`e `y`atributos para posicioná-lo na tela SVG. Neste desafio, o `y`valor (que determina a altura) pode usar o mesmo valor que `circle`usa para seu `cy`atributo. O `x`valor pode ser um pouco maior do que o `cx`valor de `circle`, portanto, o rótulo fica visível. Isso empurrará o rótulo para a direita do ponto traçado.**

---

**Identifique cada ponto no gráfico de dispersão usando os `text`elementos. O texto do rótulo deve ter dois valores separados por vírgula e espaço. Por exemplo, o rótulo do primeiro ponto é `34, 78`. Defina o `x`atributo para que seja `5`mais unidades do que o valor usado para o `cx`atributo no `circle`. Defina o `y`atributo da mesma maneira que é usado para o `cy`valor no `circle`.**

<body>

<script>

const dataset = [

[ 34,    78 ],

[ 109,   280 ],

[ 310,   120 ],

[ 79,    411 ],

[ 420,   220 ],

[ 233,   145 ],

[ 333,   96 ],

[ 222,   333 ],

[ 78,    320 ],

[ 21,    123 ]

];

const w = 500;

const h = 500;

const svg = d3.select("body")

.append("svg")

.attr("width", w)

.attr("height", h);

svg.selectAll("circle")

.data(dataset)

.enter()

.append("circle")

.attr("cx", (d, i) => d[0])

.attr("cy", (d, i) => h - d[1])

.attr("r", 5);

svg.selectAll("text")

.data(dataset)

.enter()

.append("text")

// Add your code below this line

.text(function(dataPoint) {

return dataPoint[0] + ", " + dataPoint[1];

})

.attr("x", function(dataPoint) {

return 5 + dataPoint[0];

})

.attr("y", function(dataPoint) {

return h - dataPoint[1];

})

// Add your code above this line

</script>

</body>

**Crie uma escala linear com D3**

**Os gráficos de barra e dispersão plotaram dados diretamente na tela SVG. No entanto, se a altura de uma barra ou um dos pontos de dados fosse maior do que os valores de altura ou largura do SVG, ele sairia da área do SVG.**

**Em D3, existem escalas para ajudar a plotar os dados. `scales`são funções que informam ao programa como mapear um conjunto de pontos de dados brutos nos pixels da tela SVG.**

**Por exemplo, digamos que você tenha uma tela SVG de tamanho 100 x 500 e deseja plotar o Produto Interno Bruto (PIB) de vários países. O conjunto de números estaria na faixa de bilhões ou trilhões de dólares. Você fornece a D3 um tipo de escala para dizer como colocar os grandes valores do PIB nessa área de tamanho 100x500.**

**É improvável que você plote os dados brutos como estão. Antes de plotá-lo, você define a escala para todo o conjunto de dados, de modo que os valores `x`e se `y`ajustem à largura e altura da tela.**

**D3 tem vários tipos de escala. Para uma escala linear (geralmente usada com dados quantitativos), existe o método D3 `scaleLinear()`:**

```
const scale = d3.scaleLinear()

```

**Por padrão, uma escala usa o relacionamento de identidade. O valor da entrada é igual ao valor da saída. Um desafio separado aborda como mudar isso.**

---

**Altere a `scale`variável para criar uma escala linear. Em seguida, defina a `output`variável para a escala chamada com um argumento de entrada de `50`.**

<body>

<script>

// Add your code below this line

const scale = d3.scaleLinear(); // Create the scale here

const output = scale(50); // Call scale with an argument here

// Add your code above this line

d3.select("body")

.append("h2")

.text(output);

</script>

</body>

**Definir um domínio e um intervalo em uma escala**

**Por padrão, as escalas usam o relacionamento de identidade. Isso significa que o valor de entrada é mapeado para o valor de saída. No entanto, as escalas podem ser muito mais flexíveis e interessantes.**

**Digamos que um conjunto de dados tenha valores que variam de 50 a 480. Esta é a informação de entrada para uma escala, também conhecida como *domínio* .**

**Você deseja mapear esses pontos ao longo do `x`eixo na tela SVG, entre 10 unidades e 500 unidades. Esta é a informação de saída, também conhecida como *intervalo* .**

**Os métodos `domain()`e `range()`definem esses valores para a escala. Ambos os métodos usam uma matriz de pelo menos dois elementos como argumento. Aqui está um exemplo:**

```
scale.domain([50, 480]);
scale.range([10, 500]);
scale(50)
scale(480)
scale(325)
scale(750)
d3.scaleLinear()

```

**Em ordem, os seguintes valores serão exibidos no console: `10`, `500`, `323.37`, e `807.67`.**

**Observe que a escala usa a relação linear entre os valores de domínio e intervalo para descobrir qual deve ser a saída para um determinado número. O valor mínimo no domínio (50) mapeia para o valor mínimo (10) no intervalo.**

---

**Crie uma escala e defina seu domínio `[250, 500]`e intervalo para `[10, 150]`.**

**Nota: Você pode encadear os métodos `domain()`e `range()`na `scale`variável.**

<body>

<script>

// Add your code below this line

const scale = d3.scaleLinear();

scale.domain([250,500])

scale.range([10,150])

// Add your code above this line

const output = scale(50);

d3.select("body")

.append("h2")

.text(output);

</script>

</body>

**Use as funções d3.max e d3.min para encontrar os valores mínimo e máximo em um conjunto de dados**

**Os métodos D3 `domain()`e `range()`definir essas informações para sua escala com base nos dados. Existem alguns métodos para tornar isso mais fácil.**

**Freqüentemente, ao definir o domínio, você desejará usar os valores mínimo e máximo do conjunto de dados. Tentar encontrar esses valores manualmente, especialmente em um grande conjunto de dados, pode causar erros.**

**D3 tem dois métodos - `min()`e `max()`para retornar essa informação. Aqui está um exemplo:**

```
const exampleData = [34, 234, 73, 90, 6, 52];
d3.min(exampleData)
d3.max(exampleData)

```

**Um conjunto de dados pode ter matrizes aninhadas, como os `[x, y]`pares de coordenadas que estavam no exemplo do gráfico de dispersão. Nesse caso, você precisa dizer ao D3 como calcular o máximo e o mínimo. Felizmente, os métodos `min()`e `max()`usam uma função de retorno de chamada. Neste exemplo, o argumento da função de retorno de chamada `d`é para a matriz interna atual. O retorno de chamada precisa retornar o elemento da matriz interna (o valor `x`ou `y`) sobre o qual você deseja calcular o máximo ou mínimo. Aqui está um exemplo de como encontrar os valores mínimo e máximo com uma matriz de matrizes:**

```
const locationData = [[1, 7],[6, 3],[8, 3]];
const minX = d3.min(locationData, (d) => d[0]);

```

`**minX`teria o valor `1`.**

---

**A `positionData`matriz contém submatrizes de coordenadas x, y e z. Use um método D3 para encontrar o valor máximo da coordenada z (o terceiro valor) das matrizes e salve-o na `output`variável.**

const minX = d3.min(locationData, (d) => d[1]);

**Use escalas dinâmicas**

**O D3 `min()`e os `max()`métodos são úteis para ajudar a definir a escala.**

**Dado um conjunto de dados complexo, uma prioridade é definir a escala para que a visualização se ajuste à largura e à altura do contêiner SVG. Você deseja que todos os dados sejam plotados dentro da tela SVG para que fiquem visíveis na página da web.**

**O exemplo abaixo define a escala do eixo x para os dados do gráfico de dispersão. O `domain()`método passa informações para a escala sobre os valores dos dados brutos para o gráfico. O `range()`método fornece informações sobre o espaço real na página da web para a visualização.**

**No exemplo, o domínio vai de 0 ao máximo do conjunto. Ele usa o `max()`método com uma função de retorno de chamada baseada nos valores x nas matrizes. O intervalo usa a tela SVG 'width ( `w`), mas também inclui algum preenchimento. Isso coloca um espaço entre os pontos do gráfico de dispersão e a borda da tela SVG.**

```
const dataset = [
  [ 34,    78 ],
  [ 109,   280 ],
  [ 310,   120 ],
  [ 79,    411 ],
  [ 420,   220 ],
  [ 233,   145 ],
  [ 333,   96 ],
  [ 222,   333 ],
  [ 78,    320 ],
  [ 21,    123 ]
];
const w = 500;
const h = 500;

const padding = 30;
const xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding]);

```

**O preenchimento pode ser confuso no início. Imagine o eixo x como uma linha horizontal de 0 a 500 (o valor da largura da tela SVG). Incluir o preenchimento no `range()`método força o gráfico a começar em 30 ao longo dessa linha (em vez de 0) e terminar em 470 (em vez de 500).**

---

**Use a `yScale`variável para criar uma escala linear do eixo y. O domínio deve começar do zero e ir para o `y`valor máximo do conjunto. O intervalo deve usar a altura SVG ( `h`) e incluir preenchimento.**

**Nota: Lembre-se de manter o gráfico com o lado direito para cima. Quando você define o intervalo para as coordenadas y, o valor mais alto (altura menos preenchimento) é o primeiro argumento e o valor mais baixo é o segundo argumento.**

<body>

<script>

const dataset = [

[ 34,    78 ],

[ 109,   280 ],

[ 310,   120 ],

[ 79,    411 ],

[ 420,   220 ],

[ 233,   145 ],

[ 333,   96 ],

[ 222,   333 ],

[ 78,    320 ],

[ 21,    123 ]

];

const w = 500;

const h = 500;

// Padding between the SVG canvas boundary and the plot

const padding = 30;

// Create an x and y scale

const xScale = d3.scaleLinear()

.domain([0, d3.max(dataset, (d) => d[0])])

.range([padding, w - padding]);

// Add your code below this line

const yScale = d3.scaleLinear()

.domain([0, d3.max(dataset, function(d){

return d[1]

})])

.range([h - 30, 0 + padding])

;

// Add your code above this line

const output = yScale(411); // Returns 30

d3.select("body")

.append("h2")

.text(output)

</script>

</body>

**Adicionar eixos a uma visualização**

**Outra maneira de melhorar o gráfico de dispersão é adicionar um eixo xe um eixo y.**

**D3 tem dois métodos, `axisLeft()`e `axisBottom()`, para renderizar os eixos y e x, respectivamente. Aqui está um exemplo para criar o eixo x com base nos `xScale`desafios anteriores:**

```
const xAxis = d3.axisBottom(xScale);

```

**A próxima etapa é renderizar o eixo na tela SVG. Para fazer isso, você pode usar um componente SVG geral, o `g`elemento. O `g`significa grupo. Ao contrário de `rect`, `circle`e `text`, um eixo é apenas uma linha reta quando é renderizado. Porque é uma forma simples, usando `g`obras. A última etapa é aplicar um `transform`atributo para posicionar o eixo na tela SVG no lugar certo. Caso contrário, a linha seria renderizada ao longo da borda da tela SVG e não ficaria visível. SVG oferece suporte a diferentes tipos de `transforms`, mas o posicionamento de um eixo precisa `translate`. Quando é aplicado ao `g`elemento, ele move todo o grupo para cima e para baixo nas quantidades fornecidas. Aqui está um exemplo:**

```
const xAxis = d3.axisBottom(xScale);

svg.append("g")
   .attr("transform", "translate(0, " + (h - padding) + ")")
   .call(xAxis);

```

**O código acima coloca o eixo x na parte inferior da tela SVG. Em seguida, é passado como um argumento para o `call()`método. O eixo y funciona da mesma maneira, exceto que o `translate`argumento está na forma `(x, 0)`. Por `translate`ser uma string no `attr()`método acima, você pode usar a concatenação para incluir valores de variáveis em seus argumentos.**

---

**O gráfico de dispersão agora tem um eixo x. Crie um eixo y em uma variável nomeada `yAxis`usando o `axisLeft()`método. Em seguida, renderize o eixo usando um `g`elemento. Certifique-se de usar um `transform`atributo para converter o eixo pela quantidade de unidades de preenchimento à direita e `0`unidades para baixo. Lembre-se `call()`do eixo.**

<body>

<script>

const dataset = [

[ 34,     78 ],

[ 109,   280 ],

[ 310,   120 ],

[ 79,   411 ],

[ 420,   220 ],

[ 233,   145 ],

[ 333,   96 ],

[ 222,    333 ],

[ 78,    320 ],

[ 21,   123 ]

];

const w = 500;

const h = 500;

const padding = 60;

const xScale = d3.scaleLinear()

.domain([0, d3.max(dataset, (d) => d[0])])

.range([padding, w - padding]);

const yScale = d3.scaleLinear()

.domain([0, d3.max(dataset, (d) => d[1])])

.range([h - padding, padding]);

const svg = d3.select("body")

.append("svg")

.attr("width", w)

.attr("height", h);

svg.selectAll("circle")

.data(dataset)

.enter()

.append("circle")

.attr("cx", (d) => xScale(d[0]))

.attr("cy",(d) => yScale(d[1]))

.attr("r", (d) => 5);

svg.selectAll("text")

.data(dataset)

.enter()

.append("text")

.text((d) =>  (d[0] + "," + d[1]))

.attr("x", (d) => xScale(d[0] + 10))

.attr("y", (d) => yScale(d[1]))

const xAxis = d3.axisBottom(xScale);

// Add your code below this line

const yAxis = d3.axisLeft(yScale);

// Add your code above this line

svg.append("g")

.attr("transform", "translate(0," + (h - padding) + ")")

.call(xAxis);

// Add your code below this line

svg.append("g")

.attr("transform", "translate("+ padding + ", 0)")

.call(yAxis);

// Add your code above this line

</script>

</body>
