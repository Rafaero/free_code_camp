**Armazenar dados com variáveis Sass**

**Um recurso do Sass que é diferente do CSS é que ele usa variáveis. Eles são declarados e configurados para armazenar dados, semelhantes ao JavaScript.**

**Em JavaScript, as variáveis são definidas usando as palavras `let`- `const`chave e . No Sass, as variáveis começam com a `$`seguido pelo nome da variável.**

**Aqui estão alguns exemplos:**

```
$main-fonts: Arial, sans-serif;
$headings-color: green;
```

**E para usar as variáveis:**

```
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
```

**Um exemplo em que as variáveis são úteis é quando vários elementos precisam ter a mesma cor. Se essa cor for alterada, o único lugar para editar o código é o valor da variável.**

---

**Crie uma variável `$text-color`e defina-a como `red`. Em seguida, altere o valor da `color`propriedade para `.blog-post`e `h2`para a `$text-color`variável.**

<style type='text/scss'>

$text-color: red;

.header{

text-align: center;

}

.blog-post, h2 {

color: $text-color;

}

</style>

**Nest CSS com Sass**

**O Sass permite o aninhamento de regras CSS, que é uma maneira útil de organizar uma folha de estilo.**

**Normalmente, cada elemento é direcionado a uma linha diferente para estilizá-lo, assim:**

```
nav {
  background-color: red;
}
nav ul {
  list-style: none;
}
nav ul li {
  display: inline-block;
}
```

**Para um projeto grande, o arquivo CSS terá muitas linhas e regras. É aqui que o aninhamento pode ajudar a organizar seu código, colocando regras de estilo filho nos respectivos elementos pai:**

```
nav {
  background-color: red;
  ul {
    list-style: none;
    li {
      display: inline-block;
    }
  }
}
```

---

**Use a técnica de aninhamento mostrada acima para reorganizar as regras CSS para ambos os filhos do `.blog-post`elemento. Para fins de teste, o `h1`deve vir antes do `p`elemento.**

<style type='text/scss'>

.blog-post {

h1 {

text-align: center;

color: blue;

}

p {

font-size: 20px;

}

}

</style>

<div class="blog-post">

<h1>Blog Title</h1>

<p>This is a paragraph</p>

</div>

**Crie CSS Reutilizável com Mixins**

**No Sass, um *mixin* é um grupo de declarações CSS que podem ser reutilizadas em toda a folha de estilo.**

**Os recursos CSS mais recentes levam tempo antes de serem totalmente adotados e prontos para uso em todos os navegadores. Como os recursos são adicionados aos navegadores, as regras CSS que os usam podem precisar de prefixos do fornecedor. Considere `box-shadow`:**

```
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}

```

**É preciso digitar muito para reescrever essa regra para todos os elementos que têm um `box-shadow`, ou para alterar cada valor para testar efeitos diferentes. Mixins são como funções para CSS. Aqui está como escrever um:**

```
@mixin box-shadow($x, $y, $blur, $c){
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}

```

**A definição começa com `@mixin`seguido por um nome personalizado. Os parâmetros (a `$x`, `$y`, `$blur`, e `$c`, no exemplo acima) são opcionais. Agora, sempre que uma `box-shadow`regra é necessária, apenas uma única linha chamando o mixin substitui a necessidade de digitar todos os prefixos do fornecedor. Um mixin é chamado com a `@include`diretiva:**

```
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}

```

---

**Escreva um mixin para `border-radius`e atribua um `$radius`parâmetro a ele . Ele deve usar todos os prefixos do fornecedor do exemplo. Então use o `border-radius`mixin para dar ao `#awesome`elemento um raio de borda de `15px`.**

<style type='text/scss'>

@mixin border-radius($radius){

-webkit-border-radius: $radius;

-moz-border-radius: $radius;

-ms-border-radius: $radius;

border-radius: $radius;

}

#awesome {

width: 150px;

height: 150px;

background-color: green;

@include border-radius(15px);

}

</style>

<div id="awesome"></div>

**Use @if e @else para adicionar lógica aos seus estilos**

**A `@if`diretiva em Sass é útil para testar um caso específico - ela funciona exatamente como a `if`instrução em JavaScript.**

```
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```

**E, assim como em JavaScript, `@else if`e `@else`teste para mais condições:**

```
@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}
```

---

**Crie um mixin chamado `border-stroke`que receba um parâmetro `$val`. O mixin deve verificar as seguintes condições usando `@if`, `@else if`e `@else`:**

```
light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
```

**Se `$val`não é `light`, `medium`ou `heavy`, a fronteira deve ser definido como `none`.**

<style type='text/scss'>

@mixin border-stroke($val){

@if $val == light{

border: 1px solid black;

}@else if $val == medium{

border: 3px solid black;

}@else if $val == heavy {

border: 6px solid black;

}@else{

border: none;

}

}

#box {

width: 150px;

height: 150px;

background-color: red;

@include border-stroke(heavy);

}

</style>

<div id="box"></div

**Use @for to Create a Sass Loop**

**The `@for` directive adds styles in a loop, very similar to a `for` loop in JavaScript.**

`**@for` is used in two ways: "start through end" or "start to end". The main difference is that the "start to end" *excludes* the end number as part of the count, and "start through end" *includes* the end number as part of the count.**

**Here's a start through end example:**

```
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}

```

**The `#{$i}` part is the syntax to combine a variable (`i`) with text to make a string. When the Sass file is converted to CSS, it looks like this:**

```
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}

```

**This is a powerful way to create a grid layout. Now you have twelve options for column widths available as CSS classes.**

---

**Write a `@for` directive that takes a variable `$j` that goes from 1 to 6.**

**It should create 5 classes called `.text-1` to `.text-5` where each has a `font-size` set to 15px multiplied by the index.**

<style type='text/scss'>

@for $i from 1 to 6 {

.text-#{$i}{

font-size: 15px * $i;

}

}

</style>

<p class="text-1">Hello</p>

<p class="text-2">Hello</p>

<p class="text-3">Hello</p>

<p class="text-4">Hello</p>

<p class="text-5">Hello</p>

**Use @each para mapear itens em uma lista**

**O último desafio mostrou como a `@for`diretiva usa um valor inicial e final para repetir um certo número de vezes. O Sass também oferece a `@each`diretiva que faz um loop sobre cada item em uma lista ou mapa. Em cada iteração, a variável é atribuída ao valor atual da lista ou mapa.**

```
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
```

**Um mapa tem uma sintaxe ligeiramente diferente. Aqui está um exemplo:**

```
$colors: (color1: blue, color2: red, color3: green);
@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
```

**Observe que a `$key`variável é necessária para fazer referência às chaves no mapa. Caso contrário, o CSS compilado teria `color1`, `color2`... nele. Ambos os exemplos de código acima são convertidos no seguinte CSS:**

```
.blue-text {
  color: blue;
}
.red-text {
  color: red;
}
.green-text {
  color: green;
}
```

---

**Escreva uma `@each`diretiva que percorra uma lista: `blue, black, red`e atribua cada variável a uma `.color-bg`classe, onde a `color`parte muda para cada item. Cada classe deve definir `background-color`a respectiva cor.**

<style type='text/scss'>

$colors: (color1: blue, color2: black, color3: red);

@each $key, $color in $colors{

.#{$color}-bg{

background-color: $color;

}

}

div {

height: 200px;

width: 200px;

}

</style>

<div class="blue-bg"></div>

<div class="black-bg"></div>

<div class="red-bg"></div>

**Aplicar um estilo até que uma condição seja atendida com @while**Passado

**A `@while`diretiva é uma opção com funcionalidade semelhante ao `while`loop JavaScript . Ele cria regras CSS até que uma condição seja atendida.**

**O `@for`desafio deu um exemplo para criar um sistema de grade simples. Isso também pode funcionar com `@while`.**

```
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
```

**Primeiro, defina uma variável `$x`e configure-a para 1. Em seguida, use a `@while`diretiva para criar o sistema de grade *enquanto* `$x` for menor que 13. Depois de definir a regra CSS para `width`, `$x`é incrementado em 1 para evitar um loop infinito.**

---

**Use `@while`para criar uma série de classes com diferentes `font-sizes`.**

**Deve haver 5 classes diferentes de `text-1`a `text-5`. Em seguida, defina `font-size`como `15px`multiplicado pelo número do índice atual. Certifique-se de evitar um loop infinito!**

<style type='text/scss'>

$x: 1;

@while $x <= 5 {

.text-#{$x}{

font-size: 15px * $x;

}

$x: $x + 1;

}

</style>

<p class="text-1">Hello</p>

<p class="text-2">Hello</p>

<p class="text-3">Hello</p>

<p class="text-4">Hello</p>

<p class="text-5">Hello</p>

**Divida seus estilos em pedaços menores com parciais**

***Parciais* no Sass são arquivos separados que contêm segmentos de código CSS. Eles são importados e usados em outros arquivos Sass. Esta é uma ótima maneira de agrupar código semelhante em um módulo para mantê-lo organizado.**

**Os nomes para parciais começam com o caractere sublinhado ( `_`), que diz ao Sass que é um pequeno segmento de CSS e não deve ser convertido em um arquivo CSS. Além disso, os arquivos Sass terminam com a `.scss`extensão do arquivo. Para trazer o código parcial para outro arquivo Sass, use a `@import`diretiva.**

**Por exemplo, se todos os seus mixins são salvos em um arquivo parcial denominado "_mixins.scss" e são necessários no arquivo "main.scss", é assim que os usa no arquivo principal:**

```
@import 'mixins'

```

**Observe que o sublinhado e a extensão do arquivo não são necessários na `import`instrução - Sass entende que é parcial. Depois que um parcial é importado para um arquivo, todas as variáveis, mixins e outros códigos ficam disponíveis para uso.**

---

**Escreva uma `@import`instrução para importar uma parte nomeada `_variables.scss`para o arquivo main.scss.**

<!-- The main.scss file -->

@import 'variables'

**Estenda um conjunto de estilos CSS para outro elemento**

**Sass tem um recurso chamado `extend`que torna mais fácil pegar as regras CSS de um elemento e construí-las em outro.**

**Por exemplo, o bloco abaixo de regras CSS estiliza uma `.panel`classe. Tem um `background-color`, `height`e `border`.**

```
.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}

```

**Agora você quer outro painel chamado `.big-panel`. Ele tem as mesmas propriedades de base `.panel`, mas também precisa de um `width`e `font-size`. É possível copiar e colar as regras CSS iniciais `.panel`, mas o código se torna repetitivo conforme você adiciona mais tipos de painéis. A `extend`diretiva é uma maneira simples de reutilizar as regras escritas para um elemento e adicionar mais para outro:**

```
.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}

```

**O `.big-panel`terá as mesmas propriedades `.panel`dos novos estilos.**

---

**Faça uma aula `.info-important`que se estenda `.info`e também tenha um `background-color`conjunto para magenta.**

<style type='text/scss'>

h3{

text-align: center;

}

.info{

width: 200px;

border: 1px solid black;

margin: 0 auto;

}

.info-important{

@extend .info;

background-color: magenta;

}