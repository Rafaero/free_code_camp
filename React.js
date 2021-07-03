**Crie um elemento JSX simples**

**React é uma biblioteca de visualização de código aberto criada e mantida pelo Facebook. É uma ótima ferramenta para renderizar a interface do usuário (IU) de aplicativos da web modernos.**

**O React usa uma extensão de sintaxe de JavaScript chamada JSX, que permite escrever HTML diretamente no JavaScript. Isso traz vários benefícios. Ele permite que você use todo o poder programático do JavaScript no HTML e ajuda a manter o código legível. Na maior parte, JSX é semelhante ao HTML que você já aprendeu, no entanto, existem algumas diferenças importantes que serão abordadas ao longo desses desafios.**

**Por exemplo, como JSX é uma extensão sintática de JavaScript, você pode escrever JavaScript diretamente no JSX. Para fazer isso, você simplesmente incluir o código que você quer ser tratado como JavaScript dentro de chaves: `{ 'this is treated as JavaScript code' }`. Lembre-se disso, pois ele será usado em vários desafios futuros.**

**No entanto, como JSX não é JavaScript válido, o código JSX deve ser compilado em JavaScript. O transpiler Babel é uma ferramenta popular para este processo. Para sua conveniência, já foi adicionado nos bastidores para esses desafios. Se acontecer de você escrever JSX sintaticamente inválido, verá o primeiro teste desses desafios falhar.**

**É importante notar que, por baixo do capô, os desafios estão chamando `ReactDOM.render(JSX, document.getElementById('root'))`. Essa chamada de função é o que coloca seu JSX na representação leve do DOM do próprio React. O React então usa instantâneos de seu próprio DOM para otimizar a atualização de apenas partes específicas do DOM real.**

---

**O código atual usa JSX para atribuir um `div`elemento à constante `JSX`. Substitua o `div`por um `h1`elemento e adicione o texto `Hello JSX!`dentro dele.**

const JSX = <h1>Hello JSX!</h1>;

**Crie um elemento JSX complexo**

**O último desafio foi um exemplo simples de JSX, mas JSX também pode representar HTML mais complexo.**

**Uma coisa importante a saber sobre JSX aninhado é que ele deve retornar um único elemento.**

**Este elemento pai envolveria todos os outros níveis de elementos aninhados.**

**Por exemplo, vários elementos JSX escritos como irmãos sem elemento de wrapper pai não transpilarão.**

**Aqui está um exemplo:**

**JSX válido:**

```
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
```

**JSX inválido:**

```
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```

---

**Defina uma nova constante `JSX`que renderiza um `div`que contém os seguintes elementos em ordem:**

**Um `h1`, um `p`e uma lista não ordenada que contém três `li`itens. Você pode incluir qualquer texto que desejar em cada elemento.**

**Nota: Ao renderizar vários elementos como este, você pode colocá-los todos entre parênteses, mas não é estritamente obrigatório. Observe também que este desafio usa uma `div`tag para envolver todos os elementos filhos em um único elemento pai. Se você remover o `div`, o JSX não irá mais transpilar. Lembre-se disso, pois também se aplicará quando você retornar elementos JSX nos componentes React.**

const JSX = (

<div>

<h1>Paragraph One</h1>

<p>Paragraph Two</p>

<ul>

<li></li>

<li></li>

<li></li>

</ul>

</div> )

**Adicionar comentários em JSX**

**JSX é uma sintaxe que é compilada em JavaScript válido. Às vezes, para facilitar a leitura, você pode precisar adicionar comentários ao seu código. Como a maioria das linguagens de programação, JSX tem sua própria maneira de fazer isso.**

**Para colocar comentários dentro de JSX, você usa a sintaxe `{/* */}`para envolver o texto do comentário.**

---

**O editor de código possui um elemento JSX semelhante ao que você criou no último desafio. Adicione um comentário em algum lugar dentro do `div`elemento fornecido , sem modificar os elementos `h1`ou existentes `p`.**

const JSX = (

<div>

{/*novo comentario*/}

<h1>This is a block of JSX</h1>

<p>Here's a subtitle</p>

</div>

);

**Renderizar elementos HTML para o DOM**

**Até agora, você aprendeu que JSX é uma ferramenta conveniente para escrever HTML legível em JavaScript. Com o React, podemos renderizar esse JSX diretamente para o HTML DOM usando a API de renderização do React, conhecida como ReactDOM.**

**ReactDOM oferece um método simples para renderizar elementos React para o DOM que se parece com este:, `ReactDOM.render(componentToRender, targetNode)`onde o primeiro argumento é o elemento ou componente React que você deseja renderizar e o segundo argumento é o nó DOM para o qual você deseja renderizar o componente .**

**Como você esperaria, `ReactDOM.render()`deve ser chamado após as declarações do elemento JSX, assim como você deve declarar variáveis antes de usá-las.**

---

**O editor de código possui um componente JSX simples. Use o `ReactDOM.render()`método para renderizar este componente na página. Você pode passar elementos JSX definidos diretamente como o primeiro argumento e usar `document.getElementById()`para selecionar o nó DOM para renderizá-los. Existe um `div`com `id='challenge-node'`disponível para você usar. Certifique-se de não alterar a `JSX`constante.**

**Defina uma classe HTML em JSX**

**Agora que você está se acostumando a escrever JSX, pode estar se perguntando como ele difere do HTML.**

**Até agora, pode parecer que HTML e JSX são exatamente iguais.**

**Uma diferença importante no JSX é que você não pode mais usar a palavra `class`para definir classes HTML. Isso ocorre porque `class`é uma palavra reservada em JavaScript. Em vez disso, o JSX usa `className`.**

**Na verdade, a convenção de nomenclatura para todos os atributos HTML e referências de eventos em JSX tornam-se camelCase. Por exemplo, um evento de clique em JSX é `onClick`, em vez de `onclick`. Da mesma forma, `onchange`se torna `onChange`. Embora essa seja uma diferença sutil, é importante manter em mente no futuro.**

---

**Aplique uma classe de `myDiv`ao `div`fornecido no código JSX.**

const JSX = (

<div className="myDiv">

<h1>Add a class to this div</h1>

</div>

);

**Saiba mais sobre tags JSX de fechamento automático**

**Até agora, você viu como o JSX difere do HTML de uma forma importante com o uso de `className`vs. `class`para definir classes HTML.**

**Outra forma importante em que o JSX difere do HTML é na ideia da tag de fechamento automático.**

**Em HTML, quase todas as marcas têm ambos uma abertura e tag de fechamento: `<div></div>`; a tag de fechamento sempre tem uma barra antes do nome da tag que você está fechando. No entanto, existem instâncias especiais em HTML chamadas “tags de auto-fechamento”, ou tags que não requerem uma tag de abertura e de fechamento antes que outra tag possa ser iniciada.**

**Por exemplo, a tag de quebra de linha pode ser escrita como `<br>`ou como `<br />`, mas nunca deve ser escrita como `<br></br>`, uma vez que não contém nenhum conteúdo.**

**No JSX, as regras são um pouco diferentes. Qualquer elemento JSX pode ser escrito com uma tag de fechamento automático e todos os elementos devem ser fechados. A tag de quebra de linha, por exemplo, deve sempre ser escrita como `<br />`para ser um JSX válido que possa ser transpilado. A `<div>`, por outro lado, pode ser escrito como `<div />`ou `<div></div>`. A diferença é que na primeira versão da sintaxe não há como incluir nada no `<div />`. Você verá em desafios posteriores que essa sintaxe é útil ao renderizar componentes do React.**

---

**Corrija os erros no editor de código para que seja JSX válido e seja transpilado com êxito. Certifique-se de não alterar nada do conteúdo - você só precisa fechar as tags onde são necessárias.**

const JSX = (

<div>

<h2>Welcome to React!</h2> <br />

<p>Be sure to close all tags!</p>

<hr />

</div>

);

**Crie um componente funcional sem estado**

**Os componentes são o núcleo do React. Tudo no React é um componente e aqui você aprenderá como criar um.**

**Existem duas maneiras de criar um componente React. A primeira maneira é usar uma função JavaScript. Definir um componente dessa maneira cria um *componente funcional sem estado* . O conceito de estado em um aplicativo será abordado em desafios posteriores. Por enquanto, pense em um componente sem estado como aquele que pode receber dados e processá-los, mas não gerencia ou rastreia alterações nesses dados. (Abordaremos a segunda maneira de criar um componente React no próximo desafio.)**

**Para criar um componente com uma função, basta escrever uma função JavaScript que retorna JSX ou `null`. Uma coisa importante a notar é que o React requer que o nome da sua função comece com uma letra maiúscula. Aqui está um exemplo de um componente funcional sem estado que atribui uma classe HTML em JSX:**

```
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
```

**Depois de ser transpilado, o `<div>`terá uma classe CSS de `customClass`.**

**Como um componente JSX representa HTML, você pode colocar vários componentes juntos para criar uma página HTML mais complexa. Esta é uma das principais vantagens da arquitetura de componente que o React oferece. Ele permite que você componha sua IU a partir de muitos componentes separados e isolados. Isso torna mais fácil construir e manter interfaces de usuário complexas.**

---

**O editor de código tem uma função chamada `MyComponent`. Conclua esta função para que ela retorne um único `div`elemento que contém alguma string de texto.**

**Observação: o texto é considerado filho do `div`elemento, portanto, você não poderá usar uma tag de fechamento automático.**

const MyComponent = function() {

**// Change code below this line**

return (

<div>Uma strin qualquer</div>

)

**// Change code above this line**

}

**Crie um Componente React**

**A outra maneira de definir um componente React é com a `class`sintaxe ES6 . No exemplo a seguir, `Kitten`estende `React.Component`:**

```
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
```

**Isso cria uma classe ES6 `Kitten`que estende a `React.Component`classe. Portanto, a `Kitten`classe agora tem acesso a muitos recursos úteis do React, como estado local e ganchos de ciclo de vida. Não se preocupe se você ainda não estiver familiarizado com esses termos; eles serão abordados com mais detalhes em desafios posteriores. Observe também que a `Kitten`classe tem um `constructor`definido dentro dela que chama `super()`. Ele usa `super()`para chamar o construtor da classe pai, neste caso `React.Component`. O construtor é um método especial usado durante a inicialização de objetos criados com a `class`palavra - chave. É uma prática recomendada chamar um componente `constructor`com `super`e passar`props`para ambos. Isso garante que o componente seja inicializado corretamente. Por enquanto, saiba que a inclusão desse código é padrão. Em breve, você verá outros usos para o construtor também `props`.**

---

`**MyComponent`é definido no editor de código usando a sintaxe de classe. Termine de escrever o `render`método para que ele retorne um `div`elemento que contenha um `h1`com o texto `Hello React!`.**

class MyComponent extends React.Component {

constructor(props) {

super(props);

}

render() {

// Change code below this line

return (

<div>

<h1>Hello React!</h1>

</div>

)

// Change code above this line

}

};

**Crie um componente com composição**

**Agora veremos como podemos compor vários componentes React juntos. Imagine que você está construindo um aplicativo e criaram três componentes: um `Navbar`, `Dashboard`, e `Footer`.**

**Para compor esses componentes juntos, você pode criar um componente `App` *pai* que renderiza cada um desses três componentes como *filhos* . Para renderizar um componente como filho em um componente React, você inclui o nome do componente escrito como uma tag HTML personalizada no JSX. Por exemplo, no `render`método, você pode escrever:**

```
return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
```

**Quando o React encontra uma tag HTML customizada que faz referência a outro componente (um nome de componente envolvido `< />`como neste exemplo), ele renderiza a marcação para aquele componente no local da tag. Isto deve ilustrar a relação pais / criança entre o `App`componente e a `Navbar`, `Dashboard`, e `Footer`.**

---

**No editor de código, existe um componente funcional simples chamado `ChildComponent`e um componente de classe chamado `ParentComponent`. Componha os dois juntos, renderizando o `ChildComponent`dentro de `ParentComponent`. Certifique-se de fechar a `ChildComponent`tag com uma barra.**

**Nota: `ChildComponent` é definido com uma função de seta ES6 porque esta é uma prática muito comum ao usar o React. No entanto, saiba que esta é apenas uma função. Se você não estiver familiarizado com a sintaxe da função de seta, consulte a seção JavaScript.**

const ChildComponent = () => {

return (

<div>

<p>I am the child</p>

</div>

);

};

class ParentComponent extends React.Component {

constructor(props) {

super(props);

}

render() {

return (

<div>

<h1>I am the parent</h1>

{ /* Change code below this line */ }

<ChildComponent/>

{ /* Change code above this line */ }

</div>

);

}

};

**Use React para renderizar componentes aninhados**

**O último desafio mostrou uma maneira simples de compor dois componentes, mas existem muitas maneiras diferentes de compor componentes com o React.**

**A composição de componentes é um dos recursos poderosos do React. Quando você trabalha com o React, é importante começar a pensar na interface do usuário em termos de componentes como o exemplo do aplicativo no último desafio. Você divide sua IU em seus blocos de construção básicos, e essas peças se tornam os componentes. Isso ajuda a separar o código responsável pela IU do código responsável por manipular a lógica do aplicativo. Pode simplificar muito o desenvolvimento e a manutenção de projetos complexos.**

---

**Existem dois componentes funcionais definidos no editor de código, chamados `TypesOfFruit`e `Fruits`. Pegue o `TypesOfFruit`componente e componha-o ou *aninhe* -o dentro do `Fruits`componente. Em seguida, pegue o `Fruits`componente e aninhe-o dentro do `TypesOfFood`componente. O resultado deve ser um componente filho, aninhado em um componente pai, que está aninhado em um componente pai próprio!**

const TypesOfFruit = () => {

return (

<div>

<h2>Fruits:</h2>

<ul>

<li>Apples</li>

<li>Blueberries</li>

<li>Strawberries</li>

<li>Bananas</li>

</ul>

</div>

);

};

const Fruits = () => {

return (

<div>

{ /* Change code below this line */ }

<TypesOfFruit/>

{ /* Change code above this line */ }

</div>

);

};

class TypesOfFood extends React.Component {

constructor(props) {

super(props);

}

render() {

return (

<div>

<h1>Types of Food:</h1>

{ /* Change code below this line */ }

<Fruits/>

{ /* Change code above this line */ }

</div>

);

}

};

**Compose React Components**

**Como os desafios continuam a usar composições mais complexas com componentes React e JSX, há um ponto importante a ser observado. Renderizar componentes de classe de estilo ES6 dentro de outros componentes não é diferente de renderizar os componentes simples que você usou nos últimos desafios. Você pode renderizar elementos JSX, componentes funcionais sem estado e componentes de classe ES6 dentro de outros componentes.**

---

**No editor de código, o `TypesOfFood`componente já está renderizando um componente chamado `Vegetables`. Além disso, existe o `Fruits`componente do último desafio.**

**Aninhe dois componentes dentro de `Fruits`- primeiro `NonCitrus`e depois `Citrus`. Ambos os componentes são fornecidos para você nos bastidores. Em seguida, aninhe o `Fruits`componente de classe no `TypesOfFood`componente, abaixo do `h1`cabeçalho e acima `Vegetables`. O resultado deve ser uma série de componentes aninhados, que usa dois tipos de componentes diferentes.**

class Fruits extends React.Component {

constructor(props) {

super(props);

}

render() {

return (

<div>

<h2>Fruits:</h2>

{ /* Change code below this line */ }

<NonCitrus/>

<Citrus/>

{ /* Change code above this line */ }

</div>

);

}

};

class TypesOfFood extends React.Component {

constructor(props) {

super(props);

}

render() {

return (

<div>

<h1>Types of Food:</h1>

{ /* Change code below this line */ }

<Fruits/>

{ /* Change code above this line */ }

<Vegetables />

</div>

);

}

};

**Renderizar um componente de classe para o DOM**

**Você deve se lembrar de usar a API ReactDOM em um desafio anterior para renderizar elementos JSX para o DOM. O processo de renderização dos componentes React será muito semelhante. Os últimos desafios se concentraram em componentes e composição, então a renderização foi feita para você nos bastidores. No entanto, nenhum código React que você escrever será renderizado para o DOM sem fazer uma chamada para a API ReactDOM.**

**Aqui está uma atualização sobre a sintaxe: `ReactDOM.render(componentToRender, targetNode)`. O primeiro argumento é o componente React que você deseja renderizar. O segundo argumento é o nó DOM no qual você deseja renderizar esse componente.**

**Os componentes React são passados de maneira `ReactDOM.render()`um pouco diferente dos elementos JSX. Para elementos JSX, você passa o nome do elemento que deseja renderizar. No entanto, para componentes React, você precisa usar a mesma sintaxe como se estivesse renderizando um componente aninhado, por exemplo `ReactDOM.render(<ComponentToRender />, targetNode)`. Você usa esta sintaxe para componentes de classe ES6 e componentes funcionais.**

---

**Os componentes `Fruits`e `Vegetables`são definidos para você nos bastidores. Renderize ambos os componentes como filhos do `TypesOfFood`componente e, em seguida, renderize `TypesOfFood`para o DOM. Existe um `div`com `id='challenge-node'`disponível para você usar.**

class TypesOfFood extends React.Component {

constructor(props) {

super(props);

}

render() {

return (

<div>

<h1>Types of Food:</h1>

{/* Change code below this line */}

<Fruits/>

<Vegetables/>

{/* Change code above this line */}

</div>

);

}

};

// Change code below this line

ReactDOM.render(<TypesOfFood/>, document.getElementById("challenge-node"))

**Escreva um componente React a partir do zero**

**Agora que você aprendeu o básico dos componentes JSX e React, é hora de escrever um componente por conta própria. Os componentes React são os principais blocos de construção dos aplicativos React, portanto, é importante familiarizar-se com sua criação. Lembre-se de que um componente React típico é um ES6 `class`que se estende `React.Component`. Ele tem um método de renderização que retorna HTML (de JSX) ou `null`. Esta é a forma básica de um componente React. Depois de entender isso bem, você estará preparado para começar a construir projetos React mais complexos.**

---

**Defina uma classe `MyComponent`que se estende `React.Component`. Seu método de renderização deve retornar um `div`que contém uma `h1`tag com o texto: `My First React Component!`nele. Use este texto exatamente, o caso e a pontuação são importantes. Certifique-se de chamar o construtor do seu componente também.**

**Renderize este componente para o DOM usando `ReactDOM.render()`. Existe um `div`com `id='challenge-node'`disponível para você usar.**

// Change code below this line

class MyComponent extends React.Component {

constructor(props){

super(props)

}

render(){

return (

<h1>My First React Component!</h1>

)

}

}

ReactDOM.render(<MyComponent/>, document.getElementById("challenge-node"));

**Passar adereços para um componente funcional sem estado**

**Os desafios anteriores cobriram muito sobre como criar e compor elementos JSX, componentes funcionais e componentes de classe de estilo ES6 no React. Com essa base, é hora de olhar para outro recurso muito comum no React: adereços . No React, você pode passar adereços, ou propriedades, para componentes filhos. Digamos que você tenha um `App`componente que renderiza um componente filho chamado, `Welcome`que é um componente funcional sem estado. Você pode passar `Welcome`uma `user`propriedade escrevendo:**

```
<App>
  <Welcome user='Mark' />
</App>
```

**Você usa atributos HTML personalizados criados por você e suportados pelo React para serem transmitidos ao componente. Neste caso, a propriedade criada `user`é passada para o componente `Welcome`. Por `Welcome`ser um componente funcional sem estado, ele tem acesso a esse valor da seguinte forma:**

```
const Welcome = (props) => <h1>Hello, {props.user}!</h1>

```

**É padrão chamar esse valor `props`e, ao lidar com componentes funcionais sem estado, você basicamente o considera como um argumento para uma função que retorna JSX. Você pode acessar o valor do argumento no corpo da função. Com os componentes de classe, você verá que isso é um pouco diferente.**

---

**Existem componentes `Calendar`e `CurrentDate`no editor de código. Ao renderizar a `CurrentDate`partir do `Calendar`componente, passe uma propriedade de `date`atribuída à data atual do `Date`objeto JavaScript . Em seguida, acesse `prop`no `CurrentDate`componente, mostrando seu valor dentro dos `p`tags. Observe que para os `prop`valores serem avaliados como JavaScript, eles devem ser colocados entre chaves, por exemplo `date={Date()}`.**

const CurrentDate = (props) => {

return (

<div>

{ /* Change code below this line */ }

<p>The current date is: {props.date} </p>

{ /* Change code above this line */ }

</div>

);

};

class Calendar extends React.Component {

constructor(props) {

super(props);

}

render() {

return (

<div>

<h3>What date is it?</h3>

{ /* Change code below this line */ }

<CurrentDate date={Date()}/>

{ /* Change code above this line */ }

</div>

);

}

};

**Passe uma matriz como suporte**

**O último desafio demonstrou como passar informações de um componente pai para um componente filho como `props`propriedades ou. Este desafio analisa como os arrays podem ser passados como `props`. Para passar uma matriz para um elemento JSX, ela deve ser tratada como JavaScript e envolvida entre chaves.**

```
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
```

**O componente filho, então, tem acesso à propriedade da matriz `colors`. Métodos de array, como `join()`podem ser usados ao acessar a propriedade. `const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>`Isso unirá todos os `colors`itens do array em uma string separada por vírgulas e produzirá: `<p>green, blue, red</p>`Mais tarde, aprenderemos sobre outros métodos comuns para renderizar arrays de dados no React.**

---

**Existem componentes `List`e `ToDo`no editor de código. Ao renderizar cada um `List`do `ToDo`componente, passe uma `tasks`propriedade atribuída a uma série de tarefas pendentes, por exemplo `["walk dog", "workout"]`. Em seguida, acesse este `tasks`array no `List`componente, mostrando seu valor dentro do `p`elemento. Use `join(", ")`para exibir a `props.tasks`matriz no `p`elemento como uma lista separada por vírgulas. A lista de hoje deve ter pelo menos 2 tarefas e a lista de amanhã deve ter pelo menos 3 tarefas.**

const List = (props) => {

{ /* Change code below this line */ }

return <p>{props.tasks.join(", ")}</p>

{ /* Change code above this line */ }

};

class ToDo extends React.Component {

constructor(props) {

super(props);

}

render() {

return (

<div>

<h1>To Do Lists</h1>

<h2>Today</h2>

{ /* Change code below this line */ }

<List tasks={["walk dog", "workout"]}/>

<h2>Tomorrow</h2>

<List tasks={["walk dog", "workout", "GYM"]}/>

{ /* Change code above this line */ }

</div>

);

}

};

**Usar adereços padrão**

**O React também tem uma opção para definir adereços padrão. Você pode atribuir props padrão a um componente como uma propriedade no próprio componente e o React atribui a prop padrão, se necessário. Isso permite que você especifique o que um valor prop deve ser se nenhum valor for fornecido explicitamente. Por exemplo, se você declarar `MyComponent.defaultProps = { location: 'San Francisco' }`, você definiu uma propriedade de localização que está configurada para a string `San Francisco`, a menos que você especifique o contrário. O React atribui adereços padrão se os adereços forem indefinidos, mas se você passar `null`como o valor de um acessório , ele permanecerá `null`.**

---

**O editor de código mostra um `ShoppingCart`componente. Defina adereços padrão neste componente que especificam um adereço `items`com um valor de `0`.**

const ShoppingCart = (props) => {

return (

<div>

<h1>Shopping Cart Component</h1>

</div>

)

};

// Change code below this line

ShoppingCart.defaultProps = {items: 0}

**Substituir adereços padrão**

**A capacidade de definir adereços padrão é um recurso útil no React. A maneira de substituir os adereços padrão é definir explicitamente os valores dos props para um componente.**

---

**O `ShoppingCart`componente agora renderiza um componente filho `Items`. Este `Items`componente tem uma prop padrão `quantity`definida como o inteiro `0`. Substitua o prop padrão passando um valor de `10`para `quantity`.**

**Nota: Lembre - se de que a sintaxe para adicionar um prop a um componente é semelhante a como você adiciona atributos HTML. No entanto, como o valor de `quantity`é um número inteiro, ele não será colocado entre aspas, mas deve ser colocado entre colchetes. Por exemplo `{100}`,. Essa sintaxe informa ao JSX para interpretar o valor entre colchetes diretamente como JavaScript.**

const Items = (props) => {

return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>

}

Items.defaultProps = {

quantity: 0

}

class ShoppingCart extends React.Component {

constructor(props) {

super(props);

}

render() {

{ /* Change code below this line */ }

return <Items quantity={10}/>

{ /* Change code above this line */ }

}

};

**Use PropTypes para definir os adereços que você espera**

**O React fornece recursos úteis de verificação de tipo para verificar se os componentes recebem acessórios do tipo correto. Por exemplo, seu aplicativo faz uma chamada de API para recuperar dados que você espera que estejam em um array, que são então passados para um componente como um prop. Você pode definir `propTypes`em seu componente para exigir que os dados sejam do tipo `array`. Isso lançará um aviso útil quando os dados forem de qualquer outro tipo.**

**É considerada uma prática recomendada definir `propTypes`quando você sabe o tipo de um adereço com antecedência. Você pode definir uma `propTypes`propriedade para um componente da mesma maneira que definiu `defaultProps`. Isso irá verificar se os adereços de uma determinada chave estão presentes com um determinado tipo. Aqui está um exemplo para exigir o tipo `function`de um prop chamado `handleClick`:**

```
MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }

```

**No exemplo acima, a `PropTypes.func`peça verifica se `handleClick`é uma função. Adicionar `isRequired`informa ao React que `handleClick`é uma propriedade necessária para aquele componente. Você verá um aviso se esse suporte não for fornecido. Observe também que `func`representa `function`. Entre os sete tipos primitivos de JavaScript, `function`e `boolean`(escrito como `bool`) são os únicos dois que usam uma grafia incomum. Além dos tipos primitivos, existem outros tipos disponíveis. Por exemplo, você pode verificar se um prop é um elemento React. Consulte a [documentação](https://reactjs.org/docs/jsx-in-depth.html#specifying-the-react-element-type) para todas as opções.**

**Observação: a partir do React v15.5.0, `PropTypes`é importado independentemente do React, assim:`import PropTypes from 'prop-types';`**

---

**Defina `propTypes`para que o `Items`componente exija `quantity`um suporte e verifique se é do tipo `number`.**

const Items = (props) => {

return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>

};

// Change code below this line

Items.propTypes = {quantity: PropTypes.number.isRequired}

// Change code above this line

Items.defaultProps = {

quantity: 0

};

class ShoppingCart extends React.Component {

constructor(props) {

super(props);

}

render() {

return <Items />

}

};

**Revise o uso de acessórios com componentes funcionais sem estado**

**Exceto para o último desafio, você passou adereços para componentes funcionais sem estado. Esses componentes atuam como funções puras. Eles aceitam acessórios como entrada e retornam a mesma visualização sempre que os mesmos acessórios são passados. Você pode estar se perguntando qual é o estado, e o próximo desafio irá abordá-lo com mais detalhes. Antes disso, aqui está uma revisão da terminologia dos componentes.**

**Um *componente funcional sem estado* é qualquer função que você escreve que aceita adereços e retorna JSX. Um *componente sem estado* , por outro lado, é uma classe que estende `React.Component`, mas não usa o estado interno (abordado no próximo desafio). Finalmente, um *componente com estado* é um componente de classe que mantém seu próprio estado interno. Você pode ver componentes com estado chamados simplesmente de componentes ou componentes React.**

**Um padrão comum é tentar minimizar o estado e criar componentes funcionais sem estado sempre que possível. Isso ajuda a conter o gerenciamento de seu estado em uma área específica de sua aplicação. Por sua vez, isso melhora o desenvolvimento e a manutenção de seu aplicativo, tornando mais fácil acompanhar como as alterações de estado afetam seu comportamento.**

---

**O editor de código tem um `CampSite`componente que renderiza um `Camper`componente como filho. Defina o `Camper`componente e atribua a ele os acessórios padrão `{ name: 'CamperBot' }`. Dentro do `Camper`componente, renderize qualquer código que desejar, mas certifique-se de ter um `p`elemento que inclua apenas o `name`valor que é passado como um `prop`. Por fim, defina `propTypes`o `Camper`componente que `name`deve ser fornecido como suporte e verifique se é do tipo `string`.**

class CampSite extends React.Component {

constructor(props) {

super(props);

}

render() {

return (

<div>

<Camper/>

</div>

);

}

};

// Change code below this line

class Camper extends React.Component{

constructor(props){

super(props);

}

render(){

return (

<p>

{this.props.name}

</p>

)

}

}

Camper.defaultProps = {

name: "CamperBot"

}

Camper.propTypes = {

name: PropTypes.string.isRequired

}

**Crie um componente com estado**

**Um dos tópicos mais importantes no React é `state`. O estado consiste em todos os dados que seu aplicativo precisa conhecer, que podem mudar com o tempo. Você deseja que seus aplicativos respondam às mudanças de estado e apresentem uma IU atualizada quando necessário. O React oferece uma boa solução para o gerenciamento de estado de aplicativos da web modernos.**

**Você cria o estado em um componente React declarando uma `state`propriedade na classe do componente em seu `constructor`. Isso inicializa o componente com `state`quando ele é criado. A `state`propriedade deve ser definida como JavaScript `object`. Declarando que se parece com isto:**

```
this.state = {
}
```

**Você tem acesso ao `state`objeto durante toda a vida do seu componente. Você pode atualizá-lo, renderizá-lo em sua IU e passá-lo como adereços para componentes filhos. O `state`objeto pode ser tão complexo ou simples quanto você precisar. Observe que você deve criar um componente de classe estendendo `React.Component`para criar `state`assim.**

---

**Há um componente no editor de código que está tentando renderizar uma `name`propriedade a partir dele `state`. No entanto, não há nenhum `state`definido. Inicialize o componente com `state`em `constructor`e atribua seu nome a uma propriedade de `name`.**

class StatefulComponent extends React.Component {

constructor(props) {

super(props);

// Only change code below this line

this.state = {

name: "Rafael"

}

// Only change code above this line

}

render() {

return (

<div>

<h1>{this.state.name}</h1>

</div>

);

}

};

**Estado de renderização na interface do usuário**

**Depois de definir o estado inicial de um componente, você pode exibir qualquer parte dele na IU que é renderizada. Se um componente tiver estado, ele sempre terá acesso aos dados `state`em seu `render()`método. Você pode acessar os dados com `this.state`.**

**Se você deseja acessar um valor de estado dentro do `return`método render, você deve colocar o valor entre chaves.**

`**state`é um dos recursos de componentes mais poderosos do React. Ele permite que você rastreie dados importantes em seu aplicativo e renderize uma IU em resposta a alterações nesses dados. Se seus dados mudarem, sua IU mudará. O React usa o que é chamado de DOM virtual, para acompanhar as mudanças nos bastidores. Quando os dados de estado são atualizados, ele dispara uma nova renderização dos componentes usando esses dados - incluindo componentes filhos que receberam os dados como um prop. O React atualiza o DOM real, mas apenas quando necessário. Isso significa que você não precisa se preocupar em alterar o DOM. Você simplesmente declara a aparência da IU.**

**Observe que se você tornar um componente com estado, nenhum outro componente o reconhecerá `state`. Ele `state`é completamente encapsulado ou local para aquele componente, a menos que você passe dados de estado para um componente filho como `props`. Essa noção de encapsulado `state`é muito importante porque permite que você escreva certa lógica e, em seguida, tenha essa lógica contida e isolada em um lugar em seu código.**

---

**No editor de código, `MyComponent`já está com estado. Defina uma `h1`tag no método de renderização do componente que renderiza o valor de `name`do estado do componente.**

**Observação: o `h1`deve renderizar apenas o valor de `state`e nada mais. Em JSX, qualquer código que você escrever com chaves `{ }`será tratado como JavaScript. Portanto, para acessar o valor de `state`apenas coloque a referência entre chaves.**

class MyComponent extends React.Component {

constructor(props) {

super(props);

this.state = {

name: 'freeCodeCamp'

}

}

render() {

return (

<div>

{ /* Change code below this line */ }

<h1>{this.state.name}</h1>

{ /* Change code above this line */ }

</div>

);

}

};

**Renderizar o estado na interface do usuário de outra maneira**

**Existe outra maneira de acessar `state`um componente. No `render()`método, antes da `return`instrução, você pode escrever JavaScript diretamente. Por exemplo, você pode declarar funções, acessar dados de `state`ou `props`, realizar cálculos nesses dados e assim por diante. Em seguida, você pode atribuir quaisquer dados a variáveis, às quais você tem acesso na `return`instrução.**

---

**No `MyComponent`método de renderização, defina um `const`chamado `name`e configure-o igual ao valor do nome no do componente `state`. Como você pode escrever JavaScript diretamente nesta parte do código, não é necessário colocar essa referência entre chaves.**

**Em seguida, na instrução de retorno, renderize esse valor em uma `h1`tag usando a variável `name`. Lembre-se de que você precisa usar a sintaxe JSX (chaves para JavaScript) na instrução return.**

class MyComponent extends React.Component {

constructor(props) {

super(props);

this.state = {

name: 'freeCodeCamp'

}

}

render() {

**// Change code below this line**

const name = this.state.name

**// Change code above this line**

return (

<div>

**{ /* Change code below this line */ }**

<h1>{name}</h1>

**{ /* Change code above this line */ }**

</div>

);

}

};

**Defina o estado com this.setState**

**Os desafios anteriores cobriram o componente `state`e como inicializar o estado no `constructor`. Também existe uma maneira de alterar o do componente `state`. React fornece um método para atualizar o componente `state`chamado `setState`. Você chama o `setState`método dentro de sua classe de componente assim `this.setState()`:, passando um objeto com pares de valores-chave. As chaves são suas propriedades de estado e os valores são os dados de estado atualizados. Por exemplo, se estivéssemos armazenando um `username`estado e quiséssemos atualizá-lo, ele ficaria assim:**

```
this.setState({
  username: 'Lewis'
});
```

**O React espera que você nunca modifique `state`diretamente, em vez disso, sempre use `this.setState()`quando ocorrerem mudanças de estado. Além disso, você deve observar que o React pode agrupar várias atualizações de estado para melhorar o desempenho. Isso significa que as atualizações de estado por meio do `setState`método podem ser assíncronas. Há uma sintaxe alternativa para o `setState`método que fornece uma maneira de contornar esse problema. Isso raramente é necessário, mas é bom ter isso em mente! Consulte a [documentação](https://facebook.github.io/react/docs/state-and-lifecycle.html) do [React](https://facebook.github.io/react/docs/state-and-lifecycle.html) para obter mais detalhes.**

---

**Existe um `button`elemento no editor de código que possui um `onClick()`manipulador. Este manipulador é acionado quando o `button`recebe um evento click no navegador e executa o `handleClick`método definido em `MyComponent`. Dentro do `handleClick`método, atualize o componente `state`usando `this.setState()`. Defina a `name`propriedade em `state`para ser igual à string `React Rocks!`.**

**Clique no botão e observe a atualização do estado renderizado. Não se preocupe se você não entender totalmente como o código do manipulador de cliques funciona neste ponto. É abordado nos próximos desafios.**

class MyComponent extends React.Component {

constructor(props) {

super(props);

this.state = {

name: 'Initial State'

};

this.handleClick = this.handleClick.bind(this);

}

handleClick() {

// Change code below this line

this.setState({

name: 'React Rocks!'

})

// Change code above this line

}

render() {

return (

<div>

<button onClick={this.handleClick}>Click Me</button>

<h1>{this.state.name}</h1>

</div>

);

}

};

**Vincule 'isto' a um Método de Classe**

**Além de configurar e atualizar `state`, você também pode definir métodos para sua classe de componente. Um método de classe normalmente precisa usar a `this`palavra-chave para que possa acessar propriedades na classe (como `state`e `props`) dentro do escopo do método. Existem algumas maneiras de permitir o acesso de seus métodos de classe `this`.**

**Uma maneira comum é vincular explicitamente `this`no construtor, portanto, `this`torna - se vinculado aos métodos de classe quando o componente é inicializado. Você deve ter notado o último desafio usado `this.handleClick = this.handleClick.bind(this)`para seu `handleClick`método no construtor. Então, quando você chama uma função como `this.setState()`dentro do seu método de classe, `this`refere-se à classe e não será `undefined`.**

**Observação: a `this`palavra-chave é um dos aspectos mais confusos do JavaScript, mas desempenha um papel importante no React. Embora seu comportamento aqui seja totalmente normal, essas lições não são o lugar para uma revisão aprofundada do, `this`portanto, consulte as outras lições se o acima for confuso!**

---

**O editor de código possui um componente com um `state`controle do texto. Também possui um método que permite definir o texto como `You clicked!`. No entanto, o método não funciona porque está usando a `this`palavra - chave indefinida. Corrija-o vinculando explicitamente `this`ao `handleClick()`método no construtor do componente.**

**Em seguida, adicione um manipulador de clique ao `button`elemento no método de renderização. Ele deve acionar o `handleClick()`método quando o botão receber um evento de clique. Lembre-se de que o método que você passa para o `onClick`manipulador precisa de chaves porque deve ser interpretado diretamente como JavaScript.**

**Depois de concluir as etapas acima, você poderá clicar no botão e ver `You clicked!`.**

class MyComponent extends React.Component {

constructor(props) {

super(props);

this.state = {

text: "Hello"

};

// Change code below this line

this.handleClick = this.handleClick.bind(this);

// Change code above this line

}

handleClick() {

this.setState({

text: "You clicked!"

});

}

render() {

return (

<div>

{ /* Change code below this line */ }

<button onClick={this.handleClick}>Click Me</button>

{ /* Change code above this line */ }

<h1>{this.state.text}</h1>

</div>

);

}

};

**Use o estado para alternar um elemento**

**Às vezes, você pode precisar saber o estado anterior ao atualizar o estado. No entanto, as atualizações de estado podem ser assíncronas - isso significa que o React pode agrupar várias `setState()`chamadas em uma única atualização. Isso significa que você não pode confiar no valor anterior `this.state`ou `this.props`ao calcular o próximo valor. Portanto, você não deve usar um código como este:**

```
this.setState({
  counter: this.state.counter + this.props.increment
});

```

**Em vez disso, você deve passar `setState`uma função que permite acessar o estado e os adereços. Usar uma função com `setState`garantias de que você está trabalhando com os valores mais atuais de estado e adereços. Isso significa que o texto acima deve ser reescrito como:**

```
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

```

**Você também pode usar um formulário sem `props`se precisar apenas de `state`:**

```
this.setState(state => ({
  counter: state.counter + 1
}));

```

**Observe que você deve envolver o literal do objeto entre parênteses, caso contrário, o JavaScript pensará que é um bloco de código.**

---

`**MyComponent`tem uma `visibility`propriedade que é inicializada com `false`. O método render retorna uma visão se o valor de `visibility`for verdadeiro e uma visão diferente se for falso.**

**Atualmente, não há como atualizar a `visibility`propriedade nos componentes `state`. O valor deve alternar entre verdadeiro e falso. Há um manipulador de cliques no botão que aciona um método de classe chamado `toggleVisibility()`. Passe uma função para `setState`definir este método para que o `state`de `visibility`alterne para o valor oposto quando o método for chamado. Se `visibility`for `false`, o método o definirá como `true`e vice-versa.**

**Por fim, clique no botão para ver a renderização condicional do componente com base nele `state`.**

**Dica: não se esqueça de vincular a `this`palavra-chave ao método no `constructor`!**

class MyComponent extends React.Component {

constructor(props) {

super(props);

this.state = {

visibility: false

};

// Change code below this line

this.toggleVisibility = this.toggleVisibility.bind(this);

// Change code above this line

}

// Change code below this line

toggleVisibility(){

this.setState(state => {

if(state.visibility == true){

return {visibility: false}

}else{

return {visibility: true}

}

})

}

// Change code above this line

render() {

if (this.state.visibility) {

return (

<div>

<button onClick={this.toggleVisibility}>Click Me</button>

<h1>Now you see me!</h1>

</div>

);

} else {

return (

<div>

<button onClick={this.toggleVisibility}>Click Me</button>

</div>

);

}

}

}
