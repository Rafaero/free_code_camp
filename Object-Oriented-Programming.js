**Crie um objeto JavaScript básico**

**Pense nas coisas que as pessoas veem todos os dias, como carros, lojas e pássaros. Todos esses são *objetos* : coisas tangíveis que as pessoas podem observar e com as quais interagir.**

**Quais são algumas qualidades desses objetos? Um carro tem rodas. As lojas vendem itens. Os pássaros têm asas.**

**Essas qualidades, ou *propriedades* , definem o que constitui um objeto. Observe que objetos semelhantes compartilham as mesmas propriedades, mas podem ter valores diferentes para essas propriedades. Por exemplo, todos os carros têm rodas, mas nem todos os carros têm o mesmo número de rodas.**

**Os objetos em JavaScript são usados para modelar objetos do mundo real, dando-lhes propriedades e comportamento exatamente como suas contrapartes do mundo real. Aqui está um exemplo usando esses conceitos para criar um `duck`objeto:**

```
let duck = {
  name: "Aflac",
  numLegs: 2
};

```

**Este `duck`objeto tem dois pares de propriedade / valor: a `name`de `Aflac`e a `numLegs`de 2.**

---

**Criar um `dog`objeto com `name`e `numLegs`propriedades, e pô-los em uma string e um número, respectivamente.**

let dog = {

name: "Aflac",

numLegs: 2

};

**Use a notação de pontos para acessar as propriedades de um objeto**

**O último desafio criou um objeto com várias propriedades. Agora você verá como acessar os valores dessas propriedades. Aqui está um exemplo:**

```
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);

```

**A notação de ponto é usada no nome do objeto `duck`, seguido pelo nome da propriedade,, `name`para acessar o valor de `Aflac`.**

---

**Imprima ambas as propriedades do `dog`objeto em seu console.**

let dog = {

name: "Spot",

numLegs: 4

};

// Only change code below this line

console.log(dog.name, dog.numLegs)

**Criar um método em um objeto**

**Os objetos podem ter um tipo especial de propriedade, denominado *método* .**

**Métodos são propriedades que são funções. Isso adiciona um comportamento diferente a um objeto. Aqui está o `duck`exemplo com um método:**

```
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();

```

**O exemplo adiciona o `sayName`método, que é uma função que retorna uma frase com o nome de `duck`. Observe que o método acessou a `name`propriedade na instrução return usando `duck.name`. O próximo desafio cobrirá outra maneira de fazer isso.**

---

**Usando o `dog`objeto, dê a ele um método chamado `sayLegs`. O método deve retornar a frase`This dog has 4 legs.`**

let dog = {

name: "Spot",

numLegs: 4,

sayLegs: function (){

return "This dog has "+dog.numLegs+" legs."

}

};

console.log(dog.sayLegs());

**Torne o código mais reutilizável com esta palavra-chave**

**O último desafio introduziu um método para o `duck`objeto. Ele usou a `duck.name`notação de ponto para acessar o valor da `name`propriedade dentro da instrução de retorno:**

```
sayName: function() {return "The name of this duck is " + duck.name + ".";}

```

**Embora essa seja uma forma válida de acessar a propriedade do objeto, há uma armadilha aqui. Se o nome da variável mudar, qualquer código que faça referência ao nome original também precisará ser atualizado. Em uma definição curta de objeto, não é um problema, mas se um objeto tiver muitas referências às suas propriedades, há uma chance maior de erro.**

**Uma maneira de evitar esses problemas é com a `this`palavra-chave:**

```
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};

```

`**this`é um tópico profundo e o exemplo acima é apenas uma maneira de usá-lo. No actual contexto, `this`refere-se ao objecto que o método está associado com: `duck`. Se o nome do objeto for alterado para `mallard`, não é necessário encontrar todas as referências a `duck`no código. Isso torna o código reutilizável e mais fácil de ler.**

---

**Modifique o `dog.sayLegs`método para remover quaisquer referências a `dog`. Use o `duck`exemplo para orientação.**

let dog = {

name: "Spot",

numLegs: 4,

sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}

};

dog.sayLegs();

**Definir uma função de construtor**

*Construtores* são funções que criam novos objetos. Eles definem propriedades e comportamentos que pertencerão ao novo objeto. Pense neles como um projeto para a criação de novos objetos.

Aqui está um exemplo de um construtor:

```
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

```

**Este construtor define um `Bird`objecto com propriedades `name`, `color`e `numLegs`conjunto de Albert, azul, e dois, respectivamente. Os construtores seguem algumas convenções:**

- **Os construtores são definidos com um nome em maiúscula para distingui-los de outras funções que não o são `constructors`**

    .

- **Os construtores usam a palavra `thisthis`**
    - 

        **chave**

        **para definir as propriedades do objeto que criarão.**

        **Dentro do construtor,**

    **refere-se ao novo objeto que criará.**

- **Os construtores definem propriedades e comportamentos em vez de retornar um valor como outras funções podem fazer.**

---

**Crie um construtor `Dog`,, com propriedades `name`, `color`e `numLegs`que são definidas como uma string, uma string e um número, respectivamente.**

function Dog(){

this.name = "Thor",

this.color= "Brown",

this.numLegs = 4

}

**Use um construtor para criar objetos**Passado

**Este é o `Bird`construtor do desafio anterior:**

```
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}let blueBird = new Bird();

```

**NOTA: `this` dentro do construtor sempre se refere ao objeto que está sendo criado.**

**Observe que o `new`operador é usado ao chamar um construtor. Isso diz ao JavaScript para criar uma nova instância de `Bird`chamada `blueBird`. Sem o `new`operador, `this`dentro do construtor não apontaria para o objeto recém-criado, dando resultados inesperados. Agora `blueBird`tem todas as propriedades definidas dentro do `Bird`construtor:**

```
blueBird.name;
blueBird.color;
blueBird.numLegs;

```

**Assim como qualquer outro objeto, suas propriedades podem ser acessadas e modificadas:**

```
blueBird.name = 'Elvira';
blueBird.name;

```

---

**Use o `Dog`construtor da última lição para criar uma nova instância de `Dog`, atribuindo-o a uma variável `hound`.**

function Dog() {

this.name = "Rupert";

this.color = "brown";

this.numLegs = 4;

}

// Only change code below this line

**Estenda Construtores para Receber Argumentos**

**Os construtores `Bird`e `Dog`do último desafio funcionaram bem. No entanto, observe que todos os `Birds`que são criados com o `Bird`construtor são automaticamente denominados Albert, são da cor azul e têm duas pernas. E se você quiser pássaros com diferentes valores de nome e cor? É possível alterar as propriedades de cada ave manualmente, mas isso daria muito trabalho:**

```
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";

```

**Suponha que você esteja escrevendo um programa para rastrear centenas ou até milhares de pássaros diferentes em um aviário. Levaria muito tempo para criar todos os pássaros e, em seguida, alterar as propriedades para valores diferentes para cada um. Para criar `Bird`objetos diferentes com mais facilidade , você pode projetar seu construtor Bird para aceitar parâmetros:**

```
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

```

**Em seguida, passe os valores como argumentos para definir cada pássaro exclusivo para o `Bird`construtor: `let cardinal = new Bird("Bruce", "red");`Isso fornece uma nova instância de `Bird`com `name`e `color`propriedades definidas para `Bruce`e `red`, respectivamente. A `numLegs`propriedade ainda está definida como 2. O `cardinal`tem estas propriedades:**

```
cardinal.name
cardinal.color
cardinal.numLegs

```

**O construtor é mais flexível. Agora é possível definir as propriedades de cada um `Bird`no momento em que são criados, o que é uma maneira que os construtores JavaScript são tão úteis. Eles agrupam objetos com base em características e comportamentos compartilhados e definem um projeto que automatiza sua criação.**

---

**Crie outro `Dog`construtor. Desta vez, configure-o para receber os parâmetros `name`e `color`, e tenha a propriedade `numLegs`fixada em 4. Em seguida, crie um novo `Dog`salvo em uma variável `terrier`. Passe duas strings como argumentos para as propriedades `name`e `color`.**

function Dog(name, color) {

this.name = name,

this.color = color,

this.numLegs = 4

}

let terrier = new Dog("Thor", "Brown");

**Verifique o construtor de um objeto com instanceof**

**Sempre que uma função construtora cria um novo objeto, esse objeto é considerado uma *instância* de seu construtor. JavaScript fornece uma maneira conveniente de verificar isso com o `instanceof`operador. `instanceof`permite que você compare um objeto a um construtor, retornando `true`ou com `false`base no fato de o objeto ter sido criado ou não com o construtor. Aqui está um exemplo:**

```
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}let crow = new Bird("Alexis", "black");
crow instanceof Bird;

```

**Este `instanceof`método retornaria `true`.**

**Se um objeto for criado sem usar um construtor, `instanceof`verificará se não é uma instância desse construtor:**

```
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};
canary instanceof Bird;

```

**Este `instanceof`método retornaria `false`.**

---

**Crie uma nova instância do `House`construtor, chamando-o `myHouse`e passando vários quartos. Em seguida, use `instanceof`para verificar se é uma instância de `House`.**

function House(numBedrooms) {

this.numBedrooms = numBedrooms;

}

// Only change code below this line

let myHouse = new House(4);

myHouse instanceof House;

**Compreender as próprias propriedades**

**No exemplo a seguir, o `Bird`construtor define duas propriedades: `name`e `numLegs`:**

```
function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}let duck = new Bird("Donald");
let canary = new Bird("Tweety");

```

`**name`e `numLegs`são chamados de *propriedades próprias* , porque são definidos diretamente no objeto de instância. Isso significa que `duck`e `canary`cada um tem a sua própria cópia separada destas propriedades. Na verdade, cada instância de `Bird`terá sua própria cópia dessas propriedades. O código a seguir adiciona todas as propriedades de `duck`à matriz `ownProps`:**

```
let ownProps = [];for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps);

```

**O console exibiria o valor `["name", "numLegs"]`.**

---

**Adicione as próprias propriedades de `canary`ao array `ownProps`.**

function Bird(name) {

this.name = name;

this.numLegs = 2;

}

let canary = new Bird("Tweety");

let ownProps = [];

// Only change code below this line

for(let property in canary){

if(canary.hasOwnProperty(property)){

ownProps.push(property)

}

}

**Use Propriedades de Protótipo para Reduzir Código Duplicado**

**Como `numLegs`provavelmente terá o mesmo valor para todas as instâncias de `Bird`, você essencialmente tem uma variável duplicada `numLegs`dentro de cada `Bird`instância.**

**Isso pode não ser um problema quando há apenas duas instâncias, mas imagine se houver milhões de instâncias. Isso seria um monte de variáveis duplicadas.**

**A melhor maneira é usar o `prototype`de `Bird`. As propriedades no `prototype`são compartilhadas entre TODAS as instâncias de `Bird`. Veja como adicionar `numLegs`ao `Bird prototype`:**

```
Bird.prototype.numLegs = 2;

```

**Agora, todas as instâncias de `Bird`têm a `numLegs`propriedade.**

```
console.log(duck.numLegs);
console.log(canary.numLegs);

```

**Como todas as instâncias têm automaticamente as propriedades no `prototype`, pense em a `prototype`como uma "receita" para criar objetos. Observe que `prototype`for `duck`e `canary`faz parte do `Bird`construtor as `Bird.prototype`. Quase todo objeto em JavaScript tem uma `prototype`propriedade que faz parte da função construtora que o criou.**

---

**Adicione uma `numLegs`propriedade ao `prototype`de`Dog`**

function Dog(name) {

this.name = name;

}

Dog.prototype.numLegs = 2;

// Only change code above this line

let beagle = new Dog("Snoopy");

**Iterar sobre todas as propriedades**

**Agora você viu dois tipos de propriedades: *propriedades próprias* e `prototype`propriedades. As propriedades próprias são definidas diretamente na própria instância do objeto. E as `prototype`propriedades são definidas no `prototype`.**

```
function Bird(name) {
  this.name = name;  //own property
}Bird.prototype.numLegs = 2; // prototype propertylet duck = new Bird("Donald");

```

**Veja como você adiciona `duck`as próprias propriedades de à matriz `ownProps`e as `prototype`propriedades à matriz `prototypeProps`:**

```
let ownProps = [];
let prototypeProps = [];for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
console.log(ownProps);
console.log(prototypeProps);

```

`**console.log(ownProps)`seria exibido `["name"]`no console e `console.log(prototypeProps)`seria exibido `["numLegs"]`.**

---

**Adicione todas as propriedades próprias de `beagle`ao array `ownProps`. Adicione todas as `prototype`propriedades de `Dog`à matriz `prototypeProps`.**

function Dog(name) {

this.name = name;

}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];

let prototypeProps = [];

// Only change code below this line

for(let property in beagle){

if(beagle.hasOwnProperty(property)){

ownProps.push(property);

}else{

prototypeProps.push(property)

}

}

**Compreenda a propriedade do construtor**

**Há uma `constructor`propriedade especial localizada nas instâncias do objeto `duck`e `beagle`que foi criada nos desafios anteriores:**

```
let duck = new Bird();
let beagle = new Dog();
console.log(duck.constructor === Bird);
console.log(beagle.constructor === Dog);

```

**Ambas as `console.log`chamadas seriam exibidas `true`no console.**

**Observe que a `constructor`propriedade é uma referência à função construtora que criou a instância. A vantagem da `constructor`propriedade é que é possível verificar essa propriedade para descobrir que tipo de objeto ela é. Aqui está um exemplo de como isso pode ser usado:**

```
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}

```

**Observação: como a `constructor`propriedade pode ser substituída (o que será abordado nos próximos dois desafios), geralmente é melhor usar o `instanceof`método para verificar o tipo de um objeto.**

---

**Escreva uma `joinDogFraternity`função que receba um `candidate`parâmetro e, usando a `constructor`propriedade, retorne `true`se o candidato for a `Dog`, caso contrário, retorne `false`.**

function Dog(name) {

this.name = name;

}

// Only change code below this line

function joinDogFraternity(candidate) {

if(candidate.constructor === Dog){

return true;

}else{

return false;

}

}

**Mudar o protótipo para um novo objeto**

**Até agora, você tem adicionado propriedades ao `prototype`:**

```
Bird.prototype.numLegs = 2;

```

**Isso se torna tedioso depois de mais do que algumas propriedades.**

```
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}

```

**Uma maneira mais eficiente é definir o `prototype`como um novo objeto que já contém as propriedades. Dessa forma, as propriedades são adicionadas todas de uma vez:**

```
Bird.prototype = {
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

```

---

**Adicione a propriedade `numLegs`e os dois métodos `eat()`e `describe()`ao `prototype`de `Dog`definindo o `prototype`como um novo objeto.**

function Dog(name) {

this.name = name;

}

Dog.prototype = {

// Only change code below this line

numLegs: 4,

eat: function(){

console.log("Comer");

},

describe: function(){

console.log("My name is "+this.name);

}

};

let rankys = new Dog("Rankys")

**Lembre-se de definir a propriedade do construtor ao alterar o protótipo**

**Existe um efeito colateral crucial de configurar manualmente o protótipo para um novo objeto. Apaga a `constructor`propriedade! Esta propriedade pode ser usada para verificar qual função de construtor criou a instância, mas como a propriedade foi substituída, agora fornece resultados falsos:**

```
duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;

```

**No fim, essas expressões seria avaliada como `false`, `true`, e `true`.**

**Para corrigir isso, sempre que um protótipo for definido manualmente para um novo objeto, lembre-se de definir a `constructor`propriedade:**

```
Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

```

---

**Defina a `constructor`propriedade no `Dog` `prototype`.**

function Dog(name) {

this.name = name;

}

// Only change code below this line

Dog.prototype = {

constructor: Dog,

numLegs: 4,

eat: function() {

console.log("nom nom nom");

},

describe: function() {

console.log("My name is " + this.name);

}

};

**Entenda de onde vem o protótipo de um objeto**

**Assim como as pessoas herdam genes de seus pais, um objeto herda seus genes `prototype`diretamente da função construtora que o criou. Por exemplo, aqui o `Bird`construtor cria o `duck`objeto:**

```
function Bird(name) {
  this.name = name;
}let duck = new Bird("Donald");

```

`**duck`herda seu `prototype`da `Bird`função de construtor. Você pode mostrar essa relação com o `isPrototypeOf`método:**

```
Bird.prototype.isPrototypeOf(duck);

```

**Isso voltaria `true`.**

---

**Use `isPrototypeOf`para verificar o `prototype`de `beagle`.**

---

**Execute os testes**

**Redefinir todos os códigos**

**Obter ajuda**

function Dog(name) {

this.name = name;

}

let beagle = new Dog("Snoopy");

// Only change code below this line

Dog.prototype.isPrototypeOf(beagle)

**Entenda a cadeia de protótipos**Passado

**Todos os objetos em JavaScript (com algumas exceções) têm um `prototype`. Além disso, o `prototype`próprio objeto é um objeto.**

```
function Bird(name) {
  this.name = name;
}typeof Bird.prototype;

```

**Como a `prototype`é um objeto, a `prototype`pode ter os seus `prototype`! Nesse caso, o `prototype`de `Bird.prototype`é `Object.prototype`:**

```
Object.prototype.isPrototypeOf(Bird.prototype);

```

**Como isso é útil? Você pode se lembrar do `hasOwnProperty`método de um desafio anterior:**

```
let duck = new Bird("Donald");
duck.hasOwnProperty("name");

```

**O `hasOwnProperty`método é definido em `Object.prototype`, que pode ser acessado por `Bird.prototype`, que pode então ser acessado por `duck`. Este é um exemplo da `prototype`cadeia. Nesta `prototype`cadeia, `Bird`é o `supertype`para `duck`, enquanto `duck`é o `subtype`. `Object`é um `supertype`para ambos `Bird`e `duck`. `Object`é um `supertype`para todos os objetos em JavaScript. Portanto, qualquer objeto pode usar o `hasOwnProperty`método.**

---

**Modifique o código para mostrar a cadeia de protótipo correta.**

function Dog(name) {

this.name = name;

}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true

Object.prototype.isPrototypeOf(Dog.prototype);

**Use a herança para não se repetir**

**Existe um princípio de programação chamado *Don't Repeat Yourself (DRY)* . O motivo pelo qual o código repetido é um problema é porque qualquer alteração requer a correção do código em vários lugares. Isso geralmente significa mais trabalho para os programadores e mais espaço para erros.**

**Observe no exemplo abaixo que o `describe`método é compartilhado por `Bird`e `Dog`:**

```
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

```

**O `describe`método é repetido em dois lugares. O código pode ser editado para seguir o princípio DRY criando um `supertype`(ou pai) chamado `Animal`:**

```
function Animal() { };Animal.prototype = {
  constructor: Animal,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

```

**Como `Animal`inclui o `describe`método, você pode removê-lo de `Bird`e `Dog`:**

```
Bird.prototype = {
  constructor: Bird
};Dog.prototype = {
  constructor: Dog
};

```

---

**O `eat`método é repetido em ambos `Cat`e `Bear`. Edite o código no espírito de DRY movendo o `eat`método para o `Animal` `supertype`.**

function Cat(name) {

this.name = name;

}

Cat.prototype = {

constructor: Cat,

};

function Bear(name) {

this.name = name;

}

Bear.prototype = {

constructor: Bear,

};

function Animal() { }

Animal.prototype = {

constructor: Animal,

eat: function() {

console.log("nom nom nom");

}

};

**Herdar comportamentos de um supertipo**

**No desafio anterior, você criou um `supertype`chamado `Animal`que definiu comportamentos compartilhados por todos os animais:**

```
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

```

**Este e o próximo desafio abordarão como reutilizar os métodos de `Animal`dentro `Bird`e `Dog`sem defini-los novamente. Ele usa uma técnica chamada herança. Este desafio cobre a primeira etapa: criar uma instância de `supertype`(ou pai). Você já conhece uma maneira de criar uma instância de `Animal`uso do `new`operador:**

```
let animal = new Animal();

```

**Existem algumas desvantagens ao usar essa sintaxe para herança, que são muito complexas para o escopo deste desafio. Em vez disso, aqui está uma abordagem alternativa sem essas desvantagens:**

```
let animal = Object.create(Animal.prototype);

```

`**Object.create(obj)`cria um novo objeto e define `obj`como o novo objeto `prototype`. Lembre-se de que o `prototype`é como a "receita" para criar um objeto. Ao definir o `prototype`de `animal`como o `prototype`de `Animal`, você está efetivamente dando à `animal`instância a mesma "receita" que qualquer outra instância de `Animal`.**

```
animal.eat();
animal instanceof Animal;

```

**O `instanceof`método aqui retornaria `true`.**

---

**Use `Object.create`para fazer duas instâncias de `Animal`named `duck`e `beagle`.**

function Animal() { }

Animal.prototype = {

constructor: Animal,

eat: function() {

console.log("nom nom nom");

}

};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line

let beagle = Object.create(Animal.prototype); // Change this line

**Defina o protótipo da criança para uma instância do pai**

**No desafio anterior, você viu a primeira etapa para herdar o comportamento do supertipo (ou pai) `Animal`: criar uma nova instância de `Animal`.**

**Este desafio cobre a próxima etapa: definir o `prototype`do subtipo (ou filho) —neste caso, `Bird`—para ser uma instância de `Animal`.**

```
Bird.prototype = Object.create(Animal.prototype);

```

**Lembre-se de que o `prototype`é como a "receita" para criar um objeto. De certa forma, a receita por `Bird`enquanto inclui todos os principais "ingredientes" de `Animal`.**

```
let duck = new Bird("Donald");
duck.eat();

```

`**duck`herda todas `Animal`as propriedades de, incluindo o `eat`método.**

---

**Modifique o código para que as instâncias sejam `Dog`herdadas de `Animal`.**

function Animal() { }

Animal.prototype = {

constructor: Animal,

eat: function() {

console.log("nom nom nom");

}

};

function Dog() { }

// Only change code below this line

let beagle = new Dog();

Dog.prototype = Object.create(Animal.prototype);

**Redefinir uma propriedade de construtor herdada**

**Quando um objeto herda seu `prototype`de outro objeto, ele também herda a propriedade constructor do supertipo.**

**Aqui está um exemplo:**

```
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor

```

**Mas `duck`e todas as instâncias de `Bird`devem mostrar que foram construídos por `Bird`e não `Animal`. Para fazer isso, você pode definir manualmente a propriedade constructor de `Bird`para o `Bird`objeto:**

```
Bird.prototype.constructor = Bird;
duck.constructor

```

---

**Corrija o código assim `duck.constructor`e `beagle.constructor`retorne seus respectivos construtores.**

function Animal() { }

function Bird() { }

function Dog() { }

Bird.prototype = Object.create(Animal.prototype);

Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

Bird.prototype.constructor = Bird;

Dog.prototype.constructor = Dog;

let duck = new Bird();

let beagle = new Dog();

**Adicionar métodos após herança**

**Uma função construtora que herda seu `prototype`objeto de uma função construtora de supertipo ainda pode ter seus próprios métodos, além dos métodos herdados.**

**Por exemplo, `Bird`é um construtor que herda seu `prototype`de `Animal`:**

```
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

```

**Além do que é herdado `Animal`, você deseja adicionar um comportamento exclusivo aos `Bird`objetos. Aqui, `Bird`obterá uma `fly()`função. As funções são adicionadas `Bird's` `prototype`da mesma forma que qualquer função de construtor:**

```
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};

```

**Agora, as instâncias de `Bird`terão os métodos `eat()`e `fly()`:**

```
let duck = new Bird();
duck.eat();
duck.fly();

```

`**duck.eat()`exibiria a string `nom nom nom`no console e `duck.fly()`exibiria a string `I'm flying!`.**

---

**Adicionar todo o código necessário para as `Dog`herda objeto de `Animal`eo `Dog`'s `prototype`construtor está definido para `Dog`. Em seguida, adicione um `bark()`método para o `Dog`objeto de modo que `beagle`pode tanto `eat()`e `bark()`. O `bark()`método deve ser impresso `Woof!`no console.**

function Animal() { }

Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){

console.log("Woof!");

}

// Only change code above this line

let beagle = new Dog();

**Substituir métodos herdados**

**Nas lições anteriores, você aprendeu que um objeto pode herdar seu comportamento (métodos) de outro objeto referenciando seu `prototype`objeto:**

```
ChildObject.prototype = Object.create(ParentObject.prototype);

```

**Em seguida, `ChildObject`recebeu seus próprios métodos, encadeando-os em `prototype`:**

```
ChildObject.prototype.methodName = function() {...};

```

**É possível substituir um método herdado. É feito da mesma maneira - adicionando um método para `ChildObject.prototype`usar o mesmo nome de método daquele a ser substituído. Aqui está um exemplo de `Bird`substituição do `eat()`método herdado de `Animal`:**

```
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }Bird.prototype = Object.create(Animal.prototype);Bird.prototype.eat = function() {
  return "peck peck peck";
};

```

**Se você tiver uma instância `let duck = new Bird();`e chamar `duck.eat()`, é assim que o JavaScript procura o método na `prototype`cadeia de `duck`:**

1. `**duckeat()**`

    **=> Está**

    **definido aqui? Não.**

2. `**Birdeat**()`

    **=> Está**

    **definido aqui? => Sim. Execute-o e pare de pesquisar.**

3. `**Animaleat()**`

    =>

    **também é definido, mas o JavaScript parou de pesquisar antes de atingir esse nível.**

4. **Object => JavaScript parou de pesquisar antes de atingir este nível.**

---

**Substitua o `fly()`método por `Penguin`para que ele retorne a string`Alas, this is a flightless bird.`**

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }

Penguin.prototype = Object.create(Bird.prototype);

Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function(){

return "Alas, this is a flightless bird.";

}

// Only change code above this line

let penguin = new Penguin();

console.log(penguin.fly());

**Use um Mixin para adicionar comportamento comum entre objetos não relacionados**

**Como você viu, o comportamento é compartilhado por meio de herança. No entanto, há casos em que a herança não é a melhor solução. A herança não funciona bem para objetos não relacionados como `Bird`e `Airplane`. Ambos podem voar, mas a `Bird`não é um tipo de `Airplane`e vice-versa.**

**Para objetos não relacionados, é melhor usar *mixins* . Um mixin permite que outros objetos usem uma coleção de funções.**

```
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};

```

**O `flyMixin`pega qualquer objeto e dá a ele o `fly`método.**

```
let bird = {
  name: "Donald",
  numLegs: 2
};let plane = {
  model: "777",
  numPassengers: 524
};flyMixin(bird);
flyMixin(plane);

```

**Aqui `bird`e `plane`são passados para `flyMixin`, que atribui a `fly`função a cada objeto. Agora `bird`e `plane`ambos podem voar:**

```
bird.fly();
plane.fly();

```

**O console exibiria a string `Flying, wooosh!`duas vezes, uma para cada `.fly()`chamada.**

**Observe como o mixin permite que o mesmo `fly`método seja reutilizado por objetos não relacionados `bird`e `plane`.**

---

**Crie um mixin chamado `glideMixin`que defina um método chamado `glide`. Em seguida, use o `glideMixin`para dar ambos `bird`e `boat`a capacidade de planar.**

let bird = {

name: "Donald",

numLegs: 2

};

let boat = {

name: "Warrior",

type: "race-boat",

};

// Only change code below this line

let glideMixin = function(obj){

obj.glide = function(){

}

}

glideMixin(bird)

glideMixin(boat);

**Use o fechamento para proteger as propriedades de um objeto de serem modificadas externamente**

**No desafio anterior, `bird`tinha um bem público `name`. É considerado público porque pode ser acessado e alterado fora da `bird`definição de.**

```
bird.name = "Duffy";

```

**Portanto, qualquer parte do seu código pode facilmente alterar o nome de `bird`para qualquer valor. Pense em coisas como senhas e contas bancárias que podem ser facilmente alteradas por qualquer parte de sua base de código. Isso pode causar muitos problemas.**

**A maneira mais simples de tornar essa propriedade pública privada é criando uma variável dentro da função do construtor. Isso altera o escopo dessa variável para estar dentro da função do construtor versus disponível globalmente. Dessa forma, a variável só pode ser acessada e alterada por métodos também dentro da função construtora.**

```
function Bird() {
  let hatchedEgg = 10;this.getHatchedEggCount = function() {
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();

```

**Aqui `getHatchedEggCount`está um método privilegiado, porque tem acesso à variável privada `hatchedEgg`. Isso é possível porque `hatchedEgg`é declarado no mesmo contexto que `getHatchedEggCount`. Em JavaScript, uma função sempre tem acesso ao contexto no qual foi criada. Isso é chamado `closure`.**

---

**Altere como `weight`é declarado na `Bird`função para que seja uma variável privada. Em seguida, crie um método `getWeight`que retorne o valor `weight`15.**

function Bird() {

let weight = 15;

this.getWeight = function(){

return weight;

}

}

**Compreender a expressão de função invocada imediatamente (IIFE)**

**Um padrão comum em JavaScript é executar uma função assim que ela for declarada:**

```
(function () {
  console.log("Chirp, chirp!");
})();

```

**Esta é uma expressão de função anônima que é executada imediatamente e tem saída `Chirp, chirp!`imediatamente.**

**Observe que a função não tem nome e não é armazenada em uma variável. Os dois parênteses () no final da expressão da função fazem com que ela seja executada ou chamada imediatamente. Esse padrão é conhecido como *expressão de função imediatamente chamada* ou *IIFE* .**

---

**Reescreva a função `makeNest`e remova sua chamada para que seja uma expressão de função anônima chamada imediatamente (IIFE).**

(function () {

console.log("A cozy nest is ready");

}())

**Use um IIFE para criar um módulo**

**Uma expressão de função imediatamente chamada (IIFE) é freqüentemente usada para agrupar funcionalidades relacionadas em um único objeto ou *módulo* . Por exemplo, um desafio anterior definiu dois mixins:**

```
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}

```

**Podemos agrupar esses mixins em um módulo da seguinte maneira:**

```
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();

```

**Observe que você tem uma expressão de função imediatamente chamada (IIFE) que retorna um objeto `motionModule`. Este objeto retornado contém todos os comportamentos mixin como propriedades do objeto. A vantagem do padrão de módulo é que todos os comportamentos de movimento podem ser empacotados em um único objeto que pode então ser usado por outras partes do seu código. Aqui está um exemplo de uso:**

```
motionModule.glideMixin(duck);
duck.glide();

```

---

**Crie um módulo chamado `funModule`para envolver os dois mixins `isCuteMixin`e `singMixin`. `funModule`deve retornar um objeto.**

let funModule = (function(){

return{

isCuteMixin : function(obj) {

obj.isCute = function() {

};

},

singMixin : function(obj) {

obj.sing = function() {

console.log("Singing to an awesome tune");

};

}

}

})();

console.log(funModule.singMixin);