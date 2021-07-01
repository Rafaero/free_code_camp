**Saiba como as tags de script e documentos prontos funcionam**

**Agora estamos prontos para aprender jQuery, a ferramenta JavaScript mais popular de todos os tempos.**

**Antes de começarmos a usar o jQuery, precisamos adicionar algumas coisas ao nosso HTML.**

**Primeiro, adicione um `script`elemento no topo da sua página. Certifique-se de fechá-lo na seguinte linha.**

**Seu navegador executará qualquer JavaScript dentro de um `script`elemento, incluindo jQuery.**

**Dentro do seu `script`elemento, adicione este código: `$(document).ready(function() {`ao seu `script`. Em seguida, feche-o na seguinte linha (ainda dentro do seu `script`elemento) com:`});`**

**Aprenderemos mais sobre isso mais `functions`tarde. O importante é saber que o código inserido nele `function`será executado assim que o navegador carregar a página.**

**Isso é importante porque sem o seu `document ready function`, seu código pode ser executado antes que seu HTML seja renderizado, o que causaria bugs.**

<script>

$(document).ready(function() {

});

</script>

**Elementos HTML de destino com seletores usando jQuery**

**Agora temos um `document ready function`.**

**Agora vamos escrever nossa primeira instrução jQuery. Todas as funções do jQuery começam com um `$`, geralmente conhecido como operador de cifrão ou bling.**

**O jQuery geralmente seleciona um elemento HTML com um *seletor e* , a seguir, faz algo com esse elemento.**

**Por exemplo, vamos fazer todos os seus `button`elementos saltarem. Basta adicionar este código dentro da função de documento pronto:**

```
$("button").addClass("animated bounce");

```

**Observe que já incluímos a biblioteca jQuery e a biblioteca Animate.css em segundo plano para que você possa usá-las no editor. Portanto, você está usando jQuery para aplicar a `bounce`classe Animate.css aos seus `button`elementos.**

<script>

$(document).ready(function() {

$("button").addClass("animated bounce")

});

</script>

**Elementos de destino por id usando jQuery**

**Você também pode direcionar elementos por seus atributos de id.**

**Primeiro, direcione seu `button`elemento com o id `target3`usando o `$("#target3")`seletor.**

**Observe que, assim como com as declarações CSS, você digita a `#`antes do nome do id.**

**Em seguida, use a `.addClass()`função jQuery para adicionar as classes `animated`e `fadeOut`.**

**Veja como você faria o `button`elemento com o id `target6`desaparecer:**

```
$("#target6").addClass("animated fadeOut");

```

<script>

$(document).ready(function() {

$("button").addClass("animated bounce");

$(".well").addClass("animated shake");

$("#target3").addClass("animated fadeOut");

});

</script>

**Exclua suas funções jQuery**

**Essas animações eram legais no começo, mas agora elas estão ficando meio que distrativas.**

**Exclua todas as três funções jQuery do seu `document ready function`, mas deixe o seu `document ready function`próprio intacto.**

<script>

$(document).ready(function() {

});

</script>

**Direcione o mesmo elemento com vários seletores jQuery**

**Agora você conhece três maneiras de direcionar os elementos: por tipo `$("button")`:, por classe: `$(".btn")`e por id `$("#target1")`.**

**Embora seja possível adicionar várias classes em uma única `.addClass()`chamada, vamos adicioná-las ao mesmo elemento de *três maneiras diferentes* .**

**Usando `.addClass()`, adicione apenas uma classe por vez ao mesmo elemento, de três maneiras diferentes:**

**Adicione a `animated`classe a todos os elementos com tipo `button`.**

**Adicione a `shake`classe a todos os botões com classe `.btn`.**

**Adicione a `btn-primary`classe ao botão com id `#target1`.**

**Observação: você deve ter como alvo apenas um elemento e adicionar apenas uma classe de cada vez. Ao todo, os três seletores individuais vai acabar adicionando as três classes `shake`, `animated`e `btn-primary`para `#target1`.**

<script>

$(document).ready(function() {

$("button").addClass("animated");

$(".btn").addClass("shake");

$("#target1").addClass("btn-primary")

});

</script>

**Remova classes de um elemento com jQuery**

**Da mesma forma que você pode adicionar classes a um elemento com a `addClass()`função do jQuery , você pode removê-los com a `removeClass()`função do jQuery .**

**Veja como você faria isso para um botão específico:**

```
$("#target2").removeClass("btn-default");

```

**Vamos remover a `btn-default`classe de todos os nossos `button`elementos.**

<script>

$(document).ready(function() {

$("button").addClass("animated bounce");

$(".well").addClass("animated shake");

$("#target3").addClass("animated fadeOut");

$("button").removeClass("btn-default")

});

</script>

**Alterar o CSS de um elemento usando jQuery**

**Também podemos alterar o CSS de um elemento HTML diretamente com jQuery.**

**jQuery tem uma função chamada `.css()`que permite alterar o CSS de um elemento.**

**Veja como mudaríamos sua cor para azul:**

```
$("#target1").css("color", "blue");

```

**Isso é um pouco diferente de uma declaração CSS normal, porque a propriedade CSS e seu valor estão entre aspas e separados por uma vírgula em vez de dois pontos.**

**Exclua seus seletores jQuery, deixando um vazio `document ready function`.**

**Selecione `target1`e mude sua cor para vermelho.**

<script>

$(document).ready(function() {

$("#target1").css("color", "red");

});

</script>

**Desativar um elemento usando jQuery**

**Você também pode alterar as propriedades não CSS de elementos HTML com jQuery. Por exemplo, você pode desativar botões.**

**Quando você desativa um botão, ele fica esmaecido e não pode mais ser clicado.**

**jQuery tem uma função chamada `.prop()`que permite ajustar as propriedades dos elementos.**

**Veja como você desativaria todos os botões:**

```
$("button").prop("disabled", true);

```

**Desative apenas o `target1`botão.**

<script>

$(document).ready(function() {

$("#target1").css("color", "red");

$("#target1").prop("disabled", true);

});

</script>

**Alterar o texto dentro de um elemento usando jQuery**

**Usando jQuery, você pode alterar o texto entre as tags de início e fim de um elemento. Você pode até mesmo alterar a marcação HTML.**

**jQuery tem uma função chamada `.html()`que permite adicionar tags HTML e texto dentro de um elemento. Qualquer conteúdo anterior dentro do elemento será completamente substituído pelo conteúdo que você fornece usando esta função.**

**Veja como você reescreveria e enfatizaria o texto do nosso título:**

```
$("h3").html("<em>jQuery Playground</em>");

```

**jQuery também tem uma função semelhante chamada `.text()`que apenas altera o texto sem adicionar tags. Em outras palavras, essa função não avaliará nenhuma tag HTML passada a ela, mas, em vez disso, a tratará como o texto pelo qual você deseja substituir o conteúdo existente.**

**Altere o botão com id `target4`enfatizando seu texto.**

[**Veja nosso artigo de notícias para <em>](https://www.freecodecamp.org/news/html-elements-explained-what-are-html-tags/#em-element) para aprender a diferença entre `<i>`e `<em>`e seus usos.**

**Observe que, embora a `<i>`tag tenha sido tradicionalmente usada para enfatizar o texto, ela foi adotada para uso como uma tag para ícones. A `<em>`marca agora é amplamente aceita como a marca para ênfase. Qualquer um deles funcionará para este desafio.**

<script>

$(document).ready(function() {

$("#target1").css("color", "red");

$("#target4").html("<em>#target4</em>")

});

</script>

**Remover um elemento usando jQuery**

**Agora vamos remover um elemento HTML de sua página usando jQuery.**

**jQuery tem uma função chamada `.remove()`que irá remover um elemento HTML inteiramente**

**Remova o `#target4`elemento da página usando a `.remove()`função.**

<script>

$(document).ready(function() {

$("#target1").css("color", "red");

$("#target1").prop("disabled", true);

$("#target4").remove();

});

</script>

**Use appendTo para mover elementos com jQuery**

**Agora, vamos tentar mover os elementos de um `div`para o outro.**

**jQuery tem uma função chamada `appendTo()`que permite selecionar elementos HTML e anexá-los a outro elemento.**

**Por exemplo, se quiséssemos passar `target4`do poço da direita para o poço da esquerda, usaríamos:**

```
$("#target4").appendTo("#left-well");

```

**Mova o seu `target2`elemento do seu `left-well`para o seu `right-well`.**

<script>

$(document).ready(function() {

$("#target1").css("color", "red");

$("#target1").prop("disabled", true);

$("#target4").remove();

$("#target2").appendTo("#right-well")

});

</script>

**Clone um elemento usando jQuery**

**Além de mover elementos, você também pode copiá-los de um lugar para outro.**

**jQuery tem uma função chamada `clone()`que faz uma cópia de um elemento.**

**Por exemplo, se quiséssemos copiar `target2`de nosso `left-well`para o nosso `right-well`, usaríamos:**

```
$("#target2").clone().appendTo("#right-well");

```

**Você notou que isso envolve juntar duas funções jQuery? Isso é chamado de *encadeamento de funções* e é uma maneira conveniente de fazer as coisas com jQuery.**

**Clone seu `target5`elemento e anexe-o ao seu `left-well`.**

<script>

$(document).ready(function() {

$("#target1").css("color", "red");

$("#target1").prop("disabled", true);

$("#target4").remove();

$("#target2").appendTo("#right-well");

$("#target5").clone().appendTo("#left-well");

});

</script>

**Almeje o pai de um elemento usando jQuery**

**Cada elemento HTML possui um `parent`elemento do qual são `inherits`propriedades.**

**Por exemplo, seu `jQuery Playground` `h3`elemento possui o elemento pai de `<div class="container-fluid">`, que também possui o pai `body`.**

**jQuery tem uma função chamada `parent()`que permite acessar o pai de qualquer elemento selecionado.**

**Aqui está um exemplo de como você usaria a `parent()`função se quisesse dar ao elemento pai do `left-well`elemento uma cor de fundo azul:**

```
$("#left-well").parent().css("background-color", "blue")

```

**Dê ao pai do `#target1`elemento uma cor de fundo vermelha.**

<script>

$(document).ready(function() {

$("#target1").css("color", "red");

$("#target1").prop("disabled", true);

$("#target4").remove();

$("#target2").appendTo("#right-well");

$("#target5").clone().appendTo("#left-well");

$("#target1").parent().css("background-color", "red");

});

</script>

**Almeje os filhos de um elemento usando jQuery**

**Quando os elementos HTML são colocados um nível abaixo do outro, eles são chamados de *filhos* desse elemento. Por exemplo, os elementos de botão neste desafio com o texto `#target1`, `#target2`e `#target3`são todos filhos do `<div class="well" id="left-well">`elemento.**

**jQuery tem uma função chamada `children()`que permite acessar os filhos de qualquer elemento selecionado.**

**Aqui está um exemplo de como você usaria a `children()`função para dar aos filhos do seu `left-well`elemento a cor `blue`:**

```
$("#left-well").children().css("color", "blue")

```

---

**Dê a todos os filhos do seu `right-well`elemento a cor laranja.**

<script>

$(document).ready(function() {

$("#target1").css("color", "red");

$("#target1").prop("disabled", true);

$("#target4").remove();

$("#target2").appendTo("#right-well");

$("#target5").clone().appendTo("#left-well");

$("#target1").parent().css("background-color", "red");

$("#right-well").children().css("color", "orange")

});

</script>

**Almeje um filho específico de um elemento usando jQuery**

**Você viu por que os atributos de id são tão convenientes para segmentação com seletores jQuery. Mas você nem sempre terá ids tão legais para trabalhar.**

**Felizmente, o jQuery tem alguns outros truques para direcionar os elementos certos.**

**jQuery usa seletores CSS para direcionar os elementos. O `target:nth-child(n)`seletor CSS permite que você selecione todos os enésimos elementos com a classe de destino ou tipo de elemento.**

**Veja como você daria ao terceiro elemento em cada poço a classe de rejeição:**

```
$(".target:nth-child(3)").addClass("animated bounce");

```

**Faça o segundo filho em cada um de seus elementos de poço pular. Você deve selecionar os filhos dos elementos com a `target`classe.**

<script>

$(document).ready(function() {

$("#target1").css("color", "red");

$("#target1").prop("disabled", true);

$("#target4").remove();

$("#target2").appendTo("#right-well");

$("#target5").clone().appendTo("#left-well");

$("#target1").parent().css("background-color", "red");

$("#right-well").children().css("color", "orange");

***$(".target:nth-child(2)").addClass("animated bounce");***

***$(".target:nth-child(2)").addClass("animated bounce");***

});

</script>

**Alvo elementos pares usando jQuery**

**Você também pode direcionar elementos com base em suas posições usando `:odd`ou `:even`seletores.**

**Observe que jQuery é indexado por zero, o que significa que o primeiro elemento em uma seleção tem uma posição de 0. Isso pode ser um pouco confuso, pois, contra-intuitivamente, `:odd`seleciona o segundo elemento (posição 1), quarto elemento (posição 3) e em breve.**

**Veja como você direcionaria todos os elementos ímpares com classe `target`e daria classes a eles:**

```
$(".target:odd").addClass("animated shake");

```

**Tente selecionar todos os `target`elementos pares e dar a eles as classes de `animated`e `shake`. Lembre-se de que mesmo se refere à posição dos elementos com um sistema baseado em zero em mente.**

<script>

$(document).ready(function() {

$("#target1").css("color", "red");

$("#target1").prop("disabled", true);

$("#target4").remove();

$("#target2").appendTo("#right-well");

$("#target5").clone().appendTo("#left-well");

$("#target1").parent().css("background-color", "red");

$("#right-well").children().css("color", "orange");

$("#left-well").children().css("color", "green");

$(".target:nth-child(2)").addClass("animated bounce");

***$(".target:even").addClass("animated shake");***

});

</script>

**Use jQuery para modificar a página inteira**

**Acabamos de brincar com nosso playground jQuery. Vamos derrubá-lo!**

**O jQuery também pode direcionar o `body`elemento.**

**Veja como faríamos todo o corpo desaparecer: `$("body").addClass("animated fadeOut");`**

**Mas vamos fazer algo mais dramático. Adicione as classes `animated`e `hinge`ao seu `body`elemento.**

<script>

$(document).ready(function() {

$("#target1").css("color", "red");

$("#target1").prop("disabled", true);

$("#target4").remove();

$("#target2").appendTo("#right-well");

$("#target5").clone().appendTo("#left-well");

$("#target1").parent().css("background-color", "red");

$("#right-well").children().css("color", "orange");

$("#left-well").children().css("color", "green");

$(".target:nth-child(2)").addClass("animated bounce");

$(".target:even").addClass("animated shake");

**$("body").addClass("animated hinge");**

});

</script>