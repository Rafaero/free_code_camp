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

**Escreva um Contador Simples**

**Você pode projetar um componente com monitoração de estado mais complexo combinando os conceitos abordados até agora. Isso inclui inicialização `state`, gravação de métodos que definem `state`e atribuição de manipuladores de clique para acionar esses métodos.**

---

**O `Counter`componente rastreia um `count`valor em `state`. Existem dois botões que chamam métodos `increment()`e `decrement()`. Escreva esses métodos de forma que o valor do contador seja incrementado ou diminuído em 1 quando o botão apropriado for clicado. Além disso, crie um `reset()`método para que quando o botão de redefinição for clicado, a contagem seja definida como 0.**

**Nota: Certifique-se de não modificar os `className`s dos botões. Além disso, lembre-se de adicionar as ligações necessárias para os métodos recém-criados no construtor.**

class Counter extends React.Component {

constructor(props) {

super(props);

this.state = {

count: 0

};

this.increment = this.increment.bind(this);

this.decrement = this.decrement.bind(this);

this.reset = this.reset.bind(this);

}

reset() {

this.setState({

count: 0

});

}

increment() {

this.setState(state => ({

count: state.count + 1

}));

}

decrement() {

this.setState(state => ({

count: state.count - 1

}));

}

render() {

return (

<div>

<button className='inc' onClick={this.increment}>Increment!</button>

<button className='dec' onClick={this.decrement}>Decrement!</button>

<button className='reset' onClick={this.reset}>Reset</button>

<h1>Current Count: {this.state.count}</h1>

</div>

);

}

};

**Crie uma entrada controlada**

**Seu aplicativo pode ter interações mais complexas entre `state`e a IU renderizada. Por exemplo, elementos de controle de formulário para entrada de texto, como `input`e `textarea`, mantêm seu próprio estado no DOM conforme o usuário digita. Com o React, você pode mover esse estado mutável para o de um componente React `state`. A entrada do usuário torna-se parte do aplicativo `state`, portanto, o React controla o valor desse campo de entrada. Normalmente, se você tiver componentes React com campos de entrada nos quais o usuário pode digitar, será um formulário de entrada controlado.**

---

**O editor de código possui o esqueleto de um componente chamado `ControlledInput`para criar um `input`elemento controlado . O do componente `state`já foi inicializado com uma `input`propriedade que contém uma string vazia. Este valor representa o texto que um usuário digita no `input`campo.**

**Primeiro, crie um método chamado `handleChange()`que tenha um parâmetro chamado `event`. Quando o método é chamado, ele recebe um `event`objeto que contém uma string de texto do `input`elemento. Você pode acessar essa string com `event.target.value`dentro do método. Atualize a `input`propriedade do componente `state`com esta nova string.**

**No `render`método, crie o `input`elemento acima da `h4`tag. Adicione um `value`atributo que seja igual à `input`propriedade do componente `state`. Em seguida, adicione um `onChange()`manipulador de eventos definido para o `handleChange()`método.**

**Quando você digita na caixa de entrada, esse texto é processado pelo `handleChange()`método, definido como a `input`propriedade no local `state`e processado como o valor na `input`caixa na página. O componente `state`é a única fonte de verdade sobre os dados de entrada.**

**Por último, mas não menos importante, não se esqueça de adicionar as ligações necessárias no construtor.**

---

class ControlledInput extends React.Component {

constructor(props) {

super(props);

this.state = {

input: ''

};

// Change code below this line

this.handleChange = this.handleChange.bind(this)

// Change code above this line

}

// Change code below this line

handleChange(event){

this.setState({

input : event.target.value

})

}

// Change code above this line

render() {

return (

<div>

{ /* Change code below this line */}

<input value={this.state.input} onChange={this.handleChange}/>

{ /* Change code above this line */}

<h4>Controlled Input:</h4>

<p>{this.state.input}</p>

</div>

);

}

};

**Crie um formulário controlado**

**O último desafio mostrou que o React pode controlar o estado interno de certos elementos como `input`e `textarea`, o que os torna componentes controlados. Isso se aplica a outros elementos de formulário também, incluindo o `form`elemento HTML regular .**

---

**O `MyForm`componente é configurado com um vazio `form`com um manipulador de envio. O manipulador de envio será chamado quando o formulário for enviado.**

**Adicionamos um botão que envia o formulário. Você pode ver que ele está `type`configurado para `submit`indicar que é o botão que controla o formulário. Adicione o `input`elemento no `form`e defina seus atributos `value`e `onChange()`como o último desafio. Você deve então completar o `handleSubmit`método para que ele defina a propriedade de estado do componente `submit`para o valor de entrada atual no local `state`.**

**Nota: Você também deve chamar `event.preventDefault()`o manipulador de envio, para evitar o comportamento de envio de formulário padrão que atualizará a página da web. Para conveniência do campista, o comportamento padrão foi desabilitado aqui para evitar que as atualizações redefinam o código de desafio.**

**Finalmente, crie uma `h1`tag após a `form`qual renderiza o `submit`valor do componente `state`. Você pode então digitar o formulário e clicar no botão (ou pressionar enter) e deverá ver sua entrada renderizada na página.**

class MyForm extends React.Component {

constructor(props) {

super(props);

this.state = {

input: '',

submit: ''

};

this.handleChange = this.handleChange.bind(this);

this.handleSubmit = this.handleSubmit.bind(this);

}

handleChange(event) {

this.setState({

input: event.target.value

});

}

handleSubmit(event) {

// Change code below this line

event.preventDefault()

this.setState({

submit: this.state.input

})

// Change code above this line

}

render() {

return (

<div>

<form onSubmit={this.handleSubmit}>

{/* Change code below this line */}

<input value={this.state.input} onChange={this.handleChange}/>

{/* Change code above this line */}

<button type='submit'>Submit!</button>

</form>

{/* Change code below this line */}

<h1>{this.state.submit}</h1>

{/* Change code above this line */}

</div>

);

}

}

**Passe o estado como suporte para componentes filhos**

**Você viu muitos exemplos que passaram adereços para elementos filhos JSX e componentes filhos React em desafios anteriores. Você pode estar se perguntando de onde vêm esses acessórios. Um padrão comum é ter um componente com monitoração de estado contendo o que é `state`importante para seu aplicativo, que então renderiza os componentes filhos. Você deseja que esses componentes tenham acesso a algumas partes disso `state`, que são passadas como adereços.**

**Por exemplo, talvez você tenha um `App`componente que renderiza um `Navbar`, entre outros componentes. No seu `App`, você tem `state`que contém muitas informações do usuário, mas `Navbar`só precisa acessar o nome de usuário do usuário para que possa exibi-lo. Você passa essa peça `state`para o `Navbar`componente como um suporte.**

**Este padrão ilustra alguns paradigmas importantes no React. O primeiro é o *fluxo de dados unidirecional*. O estado flui em uma direção para baixo na árvore dos componentes do seu aplicativo, do componente pai com estado para os componentes filhos. Os componentes filhos recebem apenas os dados de estado de que precisam. A segunda é que aplicativos complexos com estado podem ser divididos em apenas alguns, ou talvez em um único componente com estado. O resto de seus componentes simplesmente recebem o estado do pai como adereços e renderizam uma IU a partir desse estado. Ele começa a criar uma separação onde o gerenciamento de estado é tratado em uma parte do código e a renderização da IU em outra. Este princípio de separar a lógica de estado da lógica da IU é um dos princípios-chave do React. Quando usado corretamente, torna o design de aplicativos complexos e com estado muito mais fácil de gerenciar.**

---

**O `MyApp`componente tem estado e renderiza um `Navbar`componente como filho. Passe a `name`propriedade `state`para o componente filho e, em seguida, mostre `name`na `h1`tag que faz parte do `Navbar`método de renderização. `name`deve aparecer após o texto `Hello, my name is:`.**

class MyApp extends React.Component {

constructor(props) {

super(props);

this.state = {

name: 'CamperBot'

}

}

render() {

return (

<div>

{/* Change code below this line */}

<Navbar name={this.state.name}/>

{/* Change code above this line */}

</div>

);

}

};

class Navbar extends React.Component {

constructor(props) {

super(props);

}

render() {

return (

<div>

{/* Change code below this line */}

<h1>Hello, my name is:{this.props.name} </h1>

{/* Change code above this line */}

</div>

);

}

};

**Passe um retorno de chamada como suporte**

**Você pode passar `state`como adereços para componentes filhos, mas não está limitado a passar dados. Você também pode passar funções de manipulador ou qualquer método definido em um componente React para um componente filho. É assim que você permite que componentes filhos interajam com seus componentes pais. Você passa métodos para uma criança como um adereço normal. É atribuído um nome e você tem acesso a esse nome de método `this.props`no componente filho.**

---

**Existem três componentes descritos no editor de código. O `MyApp`componente é o pai que irá processar os `GetInput`e `RenderInput`criança componentes. Adicione o `GetInput`componente ao método de renderização e, em `MyApp`seguida, passe a ele um prop chamado `input`atribuído a `inputValue`de `MyApp`de `state`. Crie também um prop chamado `handleChange`e passe o manipulador de entrada `handleChange`para ele.**

**Em seguida, adicione `RenderInput`ao método de renderização em `MyApp`, crie um prop chamado `input`e passe o `inputValue`de `state`para ele. Assim que terminar, você poderá digitar no `input`campo do `GetInput`componente, que então chama o método manipulador em seu pai por meio de props. Isso atualiza a entrada no `state`do pai, que é passada como adereços para ambos os filhos. Observe como os dados fluem entre os componentes e como a única fonte da verdade permanece como `state`o componente pai. É certo que este exemplo é um pouco artificial, mas deve servir para ilustrar como os dados e os retornos de chamada podem ser passados entre os componentes do React.**

class MyApp extends React.Component {

constructor(props) {

super(props);

this.state = {

inputValue: ''

}

this.handleChange = this.handleChange.bind(this);

}

handleChange(event) {

this.setState({

inputValue: event.target.value

});

}

render() {

return (

<div>

{ /* Change code below this line */ }

<GetInput input={this.state.inputValue}

handleChange={this.handleChange} />

<RenderInput input={this.state.inputValue} />

{ /* Change code above this line */ }

</div>

);

}

};

class GetInput extends React.Component {

constructor(props) {

super(props);

}

render() {

return (

<div>

<h3>Get Input:</h3>

<input

value={this.props.input}

onChange={this.props.handleChange}/>

</div>

);

}

};

class RenderInput extends React.Component {

constructor(props) {

super(props);

}

render() {

return (

<div>

<h3>Input Render:</h3>

<p>{this.props.input}</p>

</div>

);

}

};

**Use o Lifecycle Method componentWillMount**

Os componentes React têm vários métodos especiais que fornecem oportunidades para executar ações em pontos específicos do ciclo de vida de um componente. Eles são chamados de métodos de ciclo de vida, ou ganchos de ciclo de vida, e permitem capturar componentes em determinados momentos. Isso pode ser antes de serem renderizados, antes de atualizarem, antes de receberem acessórios, antes de desmontarem e assim por diante. Aqui está uma lista de alguns dos principais métodos de ciclo de vida: `componentWillMount()` `componentDidMount()` `shouldComponentUpdate()` `componentDidUpdate()` `componentWillUnmount()`As próximas lições cobrirão alguns dos casos de uso básicos para esses métodos de ciclo de vida.

**Observação:** o `componentWillMount`método de ciclo de vida será descontinuado em uma versão futura de 16.X e removido na versão 17. [(fonte)](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)

---

O `componentWillMount()`método é chamado antes do `render()`método quando um componente está sendo montado no DOM. Registre algo no console `componentWillMount()`interno - você pode querer que o console do seu navegador seja aberto para ver o resultado.

class MyComponent extends React.Component {

constructor(props) {

super(props);

}

componentWillMount() {

// Change code below this line

console.log(<div>algo qualquer</div>)

// Change code above this line

}

render() {

return <div />

}

};

**Use o Lifecycle Method componentDidMount**

**A maioria dos desenvolvedores da web, em algum ponto, precisa chamar um endpoint de API para recuperar dados. Se você estiver trabalhando com o React, é importante saber onde executar essa ação.**

**A prática recomendada com React é colocar chamadas de API ou quaisquer chamadas para seu servidor no método de ciclo de vida `componentDidMount()`. Este método é chamado depois que um componente é montado no DOM. Qualquer chamada para `setState()`aqui irá disparar uma nova renderização do seu componente. Quando você chama uma API neste método e define seu estado com os dados que a API retorna, ela acionará automaticamente uma atualização assim que você receber os dados.**

---

**Há uma chamada de API simulada em `componentDidMount()`. Ele define o estado após 2,5 segundos para simular a chamada de um servidor para recuperar dados. Este exemplo solicita o total de usuários ativos atuais para um site. No método de renderização, renderize o valor de `activeUsers`no `h1`após o texto `Active Users:`. Observe o que acontece na visualização e fique à vontade para alterar o tempo limite para ver os diferentes efeitos.**

class MyComponent extends React.Component {

constructor(props) {

super(props);

this.state = {

activeUsers: null

};

}

componentDidMount() {

setTimeout(() => {

this.setState({

activeUsers: 1273

});

}, 2500);

}

render() {

return (

<div>

{/* Change code below this line */}

<h1>Active Users: activeUsers={this.state.activeUsers}</h1>

{/* Change code above this line */}

</div>

);

}

}

**Adicionar ouvintes de eventos**

**O `componentDidMount()`método também é o melhor lugar para anexar qualquer ouvinte de evento que você precise adicionar para uma funcionalidade específica. O React fornece um sistema de eventos sintéticos que envolve o sistema de eventos nativo presente nos navegadores. Isso significa que o sistema de eventos sintéticos se comporta exatamente da mesma forma, independentemente do navegador do usuário - mesmo que os eventos nativos possam se comportar de maneira diferente entre navegadores diferentes.**

**Você já está usando alguns desses manipuladores de eventos sintéticos, como `onClick()`. O sistema de eventos sintéticos do React é ótimo para usar na maioria das interações que você gerenciará em elementos DOM. No entanto, se você deseja anexar um manipulador de eventos aos objetos de documento ou janela, você deve fazer isso diretamente.**

---

**Anexe um ouvinte de evento no `componentDidMount()`método para `keydown`eventos e faça com que esses eventos acionem o retorno de chamada `handleKeyPress()`. Você pode usar o `document.addEventListener()`que leva o evento (entre aspas) como o primeiro argumento e o retorno de chamada como o segundo argumento.**

**Em seguida, `componentWillUnmount()`remova esse mesmo ouvinte de evento. Você pode passar os mesmos argumentos para `document.removeEventListener()`. É uma boa prática usar este método de ciclo de vida para fazer qualquer limpeza nos componentes do React antes que eles sejam desmontados e destruídos. A remoção de ouvintes de eventos é um exemplo de uma dessas ações de limpeza.**

---

class MyComponent extends React.Component {

constructor(props) {

super(props);

this.state = {

message: ''

};

this.handleEnter = this.handleEnter.bind(this);

this.handleKeyPress = this.handleKeyPress.bind(this);

}

// Change code below this line

componentDidMount() {

document.addEventListener("keydown", this.handleKeyPress)

}

componentWillUnmount() {

document.removeEventListener("keydown", this.handleKeyPress)

}

// Change code above this line

handleEnter() {

this.setState((state) => ({

message: state.message + 'You pressed the enter key! '

}));

}

handleKeyPress(event) {

if (event.keyCode === 13) {

this.handleEnter();

}

}

render() {

return (

<div>

<h1>{this.state.message}</h1>

</div>

);

}

};

**Otimize as novas renderizações com shouldComponentUpdate**

**Até agora, se algum componente receber novo `state`ou novo `props`, ele renderizará novamente a si mesmo e a todos os seus filhos. Isso geralmente está bem. Mas o React fornece um método de ciclo de vida que você pode chamar quando os componentes filhos recebem um novo `state`ou `props`, e declara especificamente se os componentes devem ser atualizados ou não. O método é `shouldComponentUpdate()`, e leva `nextProps`e `nextState`como parâmetros.**

**Este método é uma forma útil de otimizar o desempenho. Por exemplo, o comportamento padrão é que seu componente seja renderizado novamente quando receber novo `props`, mesmo que `props`não tenha mudado. Você pode usar `shouldComponentUpdate()`para evitar isso comparando o `props`. O método deve retornar um `boolean`valor que diga ao React se deve ou não atualizar o componente. Você pode comparar os adereços atuais ( `this.props`) com os próximos adereços ( `nextProps`) para determinar se você precisa atualizar ou não, e retornar `true`ou de `false`acordo.**

---

**O `shouldComponentUpdate()`método é adicionado em um componente chamado `OnlyEvens`. Atualmente, esse método retorna, `true`portanto `OnlyEvens`, é renderizado novamente toda vez que recebe um novo `props`. Modifique o método para que seja `OnlyEvens`atualizado apenas se o número `value`de seus novos adereços for uniforme. Clique no `Add`botão e observe a ordem dos eventos no console do seu navegador à medida que os ganchos do ciclo de vida são acionados.**

class OnlyEvens extends React.Component {

constructor(props) {

super(props);

}

shouldComponentUpdate(nextProps, nextState) {

console.log('Should I update?');

// Change code below this line

if(nextProps.value %2 === 0){

return <h1>nextState={this.props.value}</h1>

}

// Change code above this line

}

componentDidUpdate() {

console.log('Component re-rendered.');

}

render() {

return <h1>{this.props.value}</h1>;

}

}

class Controller extends React.Component {

constructor(props) {

super(props);

this.state = {

value: 0

};

this.addValue = this.addValue.bind(this);

}

addValue() {

this.setState(state => ({

value: state.value + 1

}));

}

render() {

return (

<div>

<button onClick={this.addValue}>Add</button>

<OnlyEvens value={this.state.value} />

</div>

);

}

}

**Apresentando Estilos Inline**

**Existem outros conceitos complexos que adicionam recursos poderosos ao seu código React. Mas você pode estar se perguntando sobre o problema mais simples de como estilizar os elementos JSX que você cria no React. Você provavelmente sabe que não será exatamente o mesmo que trabalhar com HTML por causa da [maneira como você aplica classes a elementos JSX](https://www.freecodecamp.org/learn/front-end-libraries/react/define-an-html-class-in-jsx) .**

**Se você importar estilos de uma folha de estilo, não será muito diferente. Você aplica uma classe ao seu elemento JSX usando o `className`atributo e aplica estilos à classe em sua folha de estilo. Outra opção é aplicar estilos embutidos, que são muito comuns no desenvolvimento do ReactJS.**

**Você aplica estilos embutidos a elementos JSX de maneira semelhante à forma como o faz em HTML, mas com algumas diferenças de JSX. Aqui está um exemplo de um estilo embutido em HTML:**

```
<div style="color: yellow; font-size: 16px">Mellow Yellow</div>

```

**Os elementos JSX usam o `style`atributo, mas devido à maneira como o JSX é transpilado, você não pode definir o valor como a `string`. Em vez disso, você o define igual a um JavaScript `object`. Aqui está um exemplo:**

```
<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>

```

**Percebeu como colocamos camelCase na `fontSize`propriedade? Isso ocorre porque o React não aceitará chaves caso kebab no objeto de estilo. O React aplicará o nome de propriedade correto para nós no HTML.**

---

**Adicione um `style`atributo ao `div`no editor de código para dar ao texto a cor vermelha e o tamanho da fonte `72px`.**

**Observe que você pode, opcionalmente, definir o tamanho da fonte como um número, omitindo as unidades `px`, ou escrevê-lo como `72px`.**

class Colorful extends React.Component {

render() {

return (

<div style={{color: "red", fontSize: 72}}>Big Red</div>

);

}

};

**Adicionar estilos embutidos no React**

**Você deve ter notado no último desafio que havia várias outras diferenças de sintaxe de estilos embutidos de HTML, além do `style`atributo definido para um objeto JavaScript. Primeiro, os nomes de certas propriedades de estilo CSS usam caixa de camelo. Por exemplo, o último desafio definiu o tamanho da fonte com em `fontSize`vez de `font-size`. Palavras hifenizadas como `font-size`são sintaxe inválida para propriedades de objetos JavaScript, portanto, o React usa maiúsculas e minúsculas. Como regra, todas as propriedades de estilo hifenizadas são escritas com maiúsculas e minúsculas em JSX.**

**Todas as unidades de comprimento de valor de propriedade (como `height`, `width`e `fontSize`) são consideradas in, a `px`menos que especificado de outra forma. Se você quiser usar `em`, por exemplo, coloque o valor e as unidades entre aspas, como `{fontSize: "4em"}`. Além dos valores de comprimento que são padronizados `px`, todos os outros valores de propriedade devem ser colocados entre aspas.**

---

**Se você tiver um grande conjunto de estilos, poderá atribuir um estilo `object`a uma constante para manter seu código organizado. Declare sua constante de estilo como uma variável global na parte superior do arquivo. Inicialize a `styles`constante e atribua um `object`com três propriedades de estilo e seus valores a ele. Forneça `div`uma cor de `purple`, um tamanho de fonte `40`e uma borda de `2px solid purple`. Em seguida, defina o `style`atributo igual à `styles`constante.**

const styles = {color: "purple", fontSize: 40, border: "2px solid purple"}

// Change code above this line

class Colorful extends React.Component {

render() {

// Change code below this line

return (

<div style={styles}>Style Me!</div>

);

// Change code above this line

}

};

**Use JavaScript avançado no método React Render**

**Em desafios anteriores, você aprendeu como injetar código JavaScript no código JSX usando chaves, `{ }`para tarefas como acessar adereços, passar adereços, acessar estado, inserir comentários em seu código e, mais recentemente, estilizar seus componentes. Todos esses são casos de uso comuns para colocar JavaScript em JSX, mas não são a única maneira de utilizar o código JavaScript em seus componentes React.**

**Você também pode escrever JavaScript diretamente em seus `render`métodos, antes da `return`instrução, *sem* inseri-lo entre chaves. Isso ocorre porque ele ainda não está no código JSX. Quando você quiser usar uma variável posteriormente no código JSX *dentro* da `return`instrução, coloque o nome da variável entre chaves.**

---

**No código fornecido, o `render`método tem uma matriz que contém 20 frases para representar as respostas encontradas no clássico brinquedo Magic Eight Ball dos anos 80. O evento de clique do botão está vinculado ao `ask`método, portanto, cada vez que o botão for clicado, um número aleatório será gerado e armazenado como o `randomIndex`estado ativo. Na linha 52, exclua a string `change me!`e reatribua a `answer`const para que seu código acesse aleatoriamente um índice diferente da `possibleAnswers`matriz cada vez que o componente for atualizado. Finalmente, insira o `answer`const dentro das `p`tags.**

const inputStyle = {

width: 235,

margin: 5

};

class MagicEightBall extends React.Component {

constructor(props) {

super(props);

this.state = {

userInput: '',

randomIndex: ''

};

this.ask = this.ask.bind(this);

this.handleChange = this.handleChange.bind(this);

}

ask() {

if (this.state.userInput) {

this.setState({

randomIndex: Math.floor(Math.random() * 20),

userInput: ''

});

}

}

handleChange(event) {

this.setState({

userInput: event.target.value

});

}

render() {

const possibleAnswers = [

'It is certain',

'It is decidedly so',

'Without a doubt',

'Yes, definitely',

'You may rely on it',

'As I see it, yes',

'Outlook good',

'Yes',

'Signs point to yes',

'Reply hazy try again',

'Ask again later',

'Better not tell you now',

'Cannot predict now',

'Concentrate and ask again',

"Don't count on it",

'My reply is no',

'My sources say no',

'Most likely',

'Outlook not so good',

'Very doubtful'

];

const answer = possibleAnswers[this.state.randomIndex]; // Change this line

return (

<div>

<input

type='text'

value={this.state.userInput}

onChange={this.handleChange}

style={inputStyle}

/>

<br />

<button onClick={this.ask}>Ask the Magic Eight Ball!</button>

<br />

<h3>Answer:</h3>

<p>

{/* Change code below this line */}

{answer}

{/* Change code above this line */}

</p>

</div>

);

}

}

**Renderizar com uma condição If-Else**

**Outra aplicação do uso de JavaScript para controlar sua visualização renderizada é vincular os elementos que são renderizados a uma condição. Quando a condição é verdadeira, uma visualização é renderizada. Quando é falso, é uma visão diferente. Você pode fazer isso com uma `if/else`instrução padrão no `render()`método de um componente React.**

---

**MyComponent contém um `boolean`em seu estado que rastreia se você deseja exibir algum elemento na IU ou não. O `button`alterna o estado desse valor. Atualmente, ele renderiza a mesma IU sempre. Reescreva o `render()`método com uma `if/else`instrução para que, se `display`for `true`, você retorne a marcação atual. Caso contrário, retorne a marcação sem o `h1`elemento.**

**Observação: você deve escrever um `if/else`para passar nos testes. O uso do operador ternário não vai passar aqui.**

class MyComponent extends React.Component {

constructor(props) {

super(props);

this.state = {

display: true

}

this.toggleDisplay = this.toggleDisplay.bind(this);

}

toggleDisplay() {

this.setState((state) => ({

display: !state.display

}));

}

render() {

// Change code below this line

if(this.state.display == true){

return (

<div>

<button onClick={this.toggleDisplay}>Toggle Display</button>

<h1>Displayed!</h1>

</div>

);

}else{

return (

<div>

<button onClick={this.toggleDisplay}>Toggle Display</button>

</div>

);

}

}

};

**Use && para uma condicional mais concisa**

**As `if/else`afirmações funcionaram no último desafio, mas existe uma forma mais concisa de chegar ao mesmo resultado. Imagine que você está rastreando várias condições em um componente e deseja que diferentes elementos sejam renderizados, dependendo de cada uma dessas condições. Se você escrever muitas `else if`instruções para retornar interfaces de usuário ligeiramente diferentes, poderá repetir o código, o que deixa espaço para erros. Em vez disso, você pode usar o `&&`operador lógico para executar a lógica condicional de uma forma mais concisa. Isso é possível porque você deseja verificar se uma condição é `true`e, se for, retornar alguma marcação. Aqui está um exemplo:**

```
{condition && <p>markup</p>}

```

**Se `condition`for `true`, a marcação será retornada. Se a condição for `false`, a operação retornará imediatamente `false`após avaliar `condition`e não retornará nada. Você pode incluir essas instruções diretamente em seu JSX e criar uma string de várias condições, escrevendo `&&`após cada uma. Isso permite que você lide com lógicas condicionais mais complexas em seu `render()`método sem repetir muito código.**

---

**Resolva o exemplo anterior novamente, então o `h1`único renderiza se `display`for `true`, mas use o `&&`operador lógico em vez de uma `if/else`instrução.**

class MyComponent extends React.Component {

constructor(props) {

super(props);

this.state = {

display: true

}

this.toggleDisplay = this.toggleDisplay.bind(this);

}

toggleDisplay() {

this.setState(state => ({

display: !state.display

}));

}

render() {

// Change code below this line

return (

<div>

<button onClick={this.toggleDisplay}>Toggle Display</button>

{this.state.display && <h1>Displayed!</h1>}

</div>

);

}

};

**Use uma expressão ternária para renderização condicional**

**Antes de passar para as técnicas de renderização dinâmica, há uma última maneira de usar condicionais JavaScript integrados para renderizar o que você deseja: o *operador ternário* . O operador ternário é frequentemente utilizado como um atalho para `if/else`instruções em JavaScript. Eles não são tão robustos quanto as `if/else`declarações tradicionais , mas são muito populares entre os desenvolvedores do React. Uma razão para isso é como o JSX é compilado, as `if/else`instruções não podem ser inseridas diretamente no código JSX. Você deve ter notado isso alguns desafios atrás - quando uma `if/else`declaração era necessária, era sempre *fora* do`return`demonstração. Expressões ternárias podem ser uma excelente alternativa se você deseja implementar lógica condicional em seu JSX. Lembre-se de que um operador ternário tem três partes, mas você pode combinar várias expressões ternárias. Esta é a sintaxe básica:**

```
condition ? expressionIfTrue : expressionIfFalse;

```

---

**O editor de código possui três constantes definidas no método `CheckUserAge`do componente `render()`. Eles são chamados `buttonOne`, `buttonTwo`e `buttonThree`. Cada um deles recebe uma expressão JSX simples que representa um elemento de botão. Primeiro, inicialize o estado de `CheckUserAge`with `input`e `userAge`ambos defina os valores de uma string vazia.**

**Uma vez que o componente está renderizando informações para a página, os usuários devem ter uma maneira de interagir com ele. Na `return`instrução do componente , configure uma expressão ternária que implemente a seguinte lógica: quando a página for carregada pela primeira vez, renderize o botão de envio,, `buttonOne`para a página. Então, quando um usuário inserir sua idade e clicar no botão, renderize um botão diferente com base na idade. Se um usuário inserir um número menor que `18`, renderize `buttonThree`. Se um usuário inserir um número maior ou igual a `18`, renderize `buttonTwo`.**

const inputStyle = {

width: 235,

margin: 5

};

class CheckUserAge extends React.Component {

constructor(props) {

super(props);

// Change code below this line

this.state = {

input: "",

userAge: ""

}

// Change code above this line

this.submit = this.submit.bind(this);

this.handleChange = this.handleChange.bind(this);

}

handleChange(e) {

this.setState({

input: e.target.value,

userAge: ''

});

}

submit() {

this.setState(state => ({

userAge: state.input

}));

}

render() {

const buttonOne = <button onClick={this.submit}>Submit</button>;

const buttonTwo = <button>You May Enter</button>;

const buttonThree = <button>You Shall Not Pass</button>;

return (

<div>

<h3>Enter Your Age to Continue</h3>

<input

style={inputStyle}

type='number'

value={this.state.input}

onChange={this.handleChange}

/>

<br />

{/* Change code below this line */}

{

this.state.userAge === "" ?

buttonOne :

this.state.userAge < 18 ? buttonThree : buttonTwo

}

{/* Change code above this line */}

</div>

);

}

}

**Renderizar condicionalmente a partir de suportes**

**Até agora, você viu como usar `if/else`, `&&`e o operador ternário ( `condition ? expressionIfTrue : expressionIfFalse`) para tomar decisões condicionais sobre o que renderizar e quando. No entanto, ainda há um tópico importante a ser discutido que permite combinar qualquer um ou todos esses conceitos com outro recurso poderoso do React: adereços. Usar props para renderizar código condicionalmente é muito comum com os desenvolvedores do React - ou seja, eles usam o valor de um determinado prop para tomar decisões automaticamente sobre o que renderizar.**

**Neste desafio, você configurará um componente filho para tomar decisões de renderização com base em adereços. Você também usará o operador ternário, mas poderá ver como vários dos outros conceitos abordados nos últimos desafios podem ser igualmente úteis neste contexto.**

---

**O editor de código tem dois componentes parcialmente definidos para você: um pai chamado `GameOfChance`e um filho chamado `Results`. Eles são usados para criar um jogo simples onde o usuário pressiona um botão para ver se ganha ou perde.**

**Primeiro, você precisará de uma expressão simples que retorne aleatoriamente um valor diferente toda vez que for executada. Você pode usar `Math.random()`. Este método retorna um valor entre `0`(inclusivo) e `1`(exclusivo) cada vez que é chamado. Portanto, para probabilidades de 50/50, use `Math.random() >= .5`em sua expressão. Estatisticamente falando, essa expressão retornará `true`50% das vezes e `false`os outros 50%. No método render, substitua `null`pela expressão acima para completar a declaração da variável.**

**Agora você tem uma expressão que pode usar para tomar uma decisão aleatória no código. Em seguida, você precisa implementar isso. Renderize o `Results`componente como filho de `GameOfChance`e passe `expression`como um prop chamado `fiftyFifty`. No `Results`componente, escreva uma expressão ternária para renderizar o `h1`elemento com o texto `You Win!`ou com `You Lose!`base na `fiftyFifty`prop que está sendo passada `GameOfChance`. Finalmente, certifique-se de que o `handleClick()`método está contando corretamente cada jogada para que o usuário saiba quantas vezes ele jogou. Isso também serve para informar ao usuário que o componente foi realmente atualizado, caso ganhe ou perca duas vezes consecutivas.**

class Results extends React.Component {

constructor(props) {

super(props);

}

render() {

{/* Change code below this line */}

return <h1>

{this.props.fiftyFifty ? "You Win!" : "You Lose!"}

</h1>;

{/* Change code above this line */}

}

}

class GameOfChance extends React.Component {

constructor(props) {

super(props);

this.state = {

counter: 1

};

this.handleClick = this.handleClick.bind(this);

}

handleClick() {

this.setState(prevState => {

// Complete the return statement:

return {

counter: this.state.counter + 1

}

});

}

render() {

const expression = Math.random() >= .5; // Change this line

return (

<div>

<button onClick={this.handleClick}>Play Again</button>

{/* Change code below this line */}

<Results fiftyFifty={expression}/>

{/* Change code above this line */}

<p>{'Turn: ' + this.state.counter}</p>

</div>

);

}

}

**Alterar CSS Inline condicionalmente com base no estado do componente**

**Neste ponto, você viu vários aplicativos de renderização condicional e o uso de estilos embutidos. Aqui está mais um exemplo que combina esses dois tópicos. Você também pode renderizar CSS condicionalmente com base no estado de um componente React. Para fazer isso, você verifica se há uma condição e, se essa condição for atendida, você modifica o objeto de estilos atribuído aos elementos JSX no método de renderização.**

**É importante entender esse paradigma porque é uma mudança dramática em relação à abordagem mais tradicional de aplicar estilos modificando os elementos DOM diretamente (o que é muito comum com jQuery, por exemplo). Nessa abordagem, você deve acompanhar quando os elementos mudam e também lidar diretamente com a manipulação real. Pode se tornar difícil controlar as alterações, tornando sua IU potencialmente imprevisível. Ao definir um objeto de estilo com base em uma condição, você descreve como a IU deve ser exibida em função do estado do aplicativo. Existe um fluxo claro de informações que só se move em uma direção. Este é o método preferido ao escrever aplicativos com React.**

---

**O editor de código possui um componente de entrada controlada simples com uma borda estilizada. Você deseja estilizar essa borda em vermelho se o usuário digitar mais de 15 caracteres de texto na caixa de entrada. Adicione uma condição para verificar isso e, se a condição for válida, defina o estilo da borda de entrada como `3px solid red`. Você pode experimentar inserindo texto na entrada.**

class GateKeeper extends React.Component {

constructor(props) {

super(props);

this.state = {

input: ''

};

this.handleChange = this.handleChange.bind(this);

}

handleChange(event) {

this.setState({ input: event.target.value })

}

render() {

let inputStyle = {

border: '1px solid black'

};

// Change code below this line

let newStyle = {border: '3px solid red'}

// Change code above this line

return (

<div>

<h3>Don't Type Too Much:</h3>

<input

type="text"

style={this.state.input.length < 16 ? inputStyle : newStyle}

value={this.state.input}

onChange={this.handleChange} />

</div>

);

}

};

**Use Array.map () para renderizar elementos dinamicamente**

**A renderização condicional é útil, mas você pode precisar de seus componentes para renderizar um número desconhecido de elementos. Freqüentemente, na programação reativa, um programador não tem como saber qual é o estado de um aplicativo até o tempo de execução, porque muito depende da interação do usuário com aquele programa. Os programadores precisam escrever seu código para lidar corretamente com esse estado desconhecido com antecedência. Usar `Array.map()`no React ilustra esse conceito.**

**Por exemplo, você cria um aplicativo simples de "Lista de tarefas". Como programador, você não tem como saber quantos itens um usuário pode ter em sua lista. Você precisa configurar seu componente para renderizar dinamicamente o número correto de elementos da lista muito antes que alguém usando o programa decida que hoje é o dia da lavanderia.**

---

**O editor de código possui a maior parte do `MyToDoList`componente configurado. Parte desse código deve parecer familiar se você concluiu o desafio do formulário controlado. Você notará a `textarea`e a `button`, junto com alguns métodos que rastreiam seus estados, mas nada foi renderizado na página ainda.**

**Dentro de `constructor`, crie um `this.state`objeto e defina dois estados: `userInput`deve ser inicializado como uma string vazia e `toDoList`deve ser inicializado como um array vazio. Em seguida, exclua o comentário no `render()`método ao lado da `items`variável. Em seu lugar, mapeie a `toDoList`matriz armazenada no estado interno do componente e renderize dinamicamente um `li`para cada item. Tente inserir a string `eat, code, sleep, repeat`no e `textarea`, em seguida, clique no botão e veja o que acontece.**

**Nota: Você deve saber que todos os elementos filhos irmãos criados por uma operação de mapeamento como esta precisam ser fornecidos com um `key`atributo exclusivo . Não se preocupe, esse é o tema do próximo desafio.**

const textAreaStyles = {

width: 235,

margin: 5

};

class MyToDoList extends React.Component {

constructor(props) {

super(props);

// Change code below this line

this.state = {

userInput: "",

toDoList: []

}

// Change code above this line

this.handleSubmit = this.handleSubmit.bind(this);

this.handleChange = this.handleChange.bind(this);

}

handleSubmit() {

const itemsArray = this.state.userInput.split(',');

this.setState({

toDoList: itemsArray

});

}

handleChange(e) {

this.setState({

userInput: e.target.value

});

}

render() {

const items = this.state.toDoList.map(function(element){

return <li>{element}</li>

});

return (

<div>

<textarea

onChange={this.handleChange}

value={this.state.userInput}

style={textAreaStyles}

placeholder='Separate Items With Commas'

/>

<br />

<button onClick={this.handleSubmit}>Create List</button>

<h1>My "To Do" List:</h1>

<ul>{items}</ul>

</div>

);

}

}

**Dê aos Elementos Irmãos um Atributo Chave Único**

**O último desafio mostrou como o `map`método é usado para renderizar dinamicamente uma série de elementos com base na entrada do usuário. No entanto, havia uma peça importante faltando nesse exemplo. Quando você cria uma matriz de elementos, cada um precisa de um `key`conjunto de atributos com um valor exclusivo. O React usa essas chaves para controlar quais itens são adicionados, alterados ou removidos. Isso ajuda a tornar o processo de re-renderização mais eficiente quando a lista é modificada de alguma forma.**

**Nota: As chaves só precisam ser exclusivas entre os elementos irmãos, elas não precisam ser globalmente exclusivas em seu aplicativo.**

---

**O editor de código tem uma matriz com algumas estruturas de front-end e um componente funcional sem estado denominado `Frameworks()`. `Frameworks()`precisa mapear a matriz para uma lista não ordenada, bem como no último desafio. Termine de escrever o `map`retorno de chamada para retornar um `li`elemento para cada estrutura na `frontEndFrameworks`matriz. Desta vez, certifique-se de dar a cada `li`um `key`atributo, definido com um valor exclusivo. Os `li`elementos também devem conter texto de `frontEndFrameworks`.**

**Normalmente, você deseja que a chave seja algo que identifique exclusivamente o elemento sendo renderizado. Como último recurso, o índice da matriz pode ser usado, mas normalmente você deve tentar usar uma identificação única.**

const frontEndFrameworks = [

'React',

'Angular',

'Ember',

'Knockout',

'Backbone',

'Vue'

];

function Frameworks() {

const renderFrameworks = frontEndFrameworks.map(function(element){

return <li key={element}>{element}</li>

}); // Change this line

return (

<div>

<h1>Popular Front End JavaScript Frameworks</h1>

<ul>

{renderFrameworks}

</ul>

</div>

);

};

**Use Array.filter () para filtrar dinamicamente uma matriz**

**O `map`método array é uma ferramenta poderosa que você usará com frequência ao trabalhar com o React. Outro método relacionado a `map`é `filter`, que filtra o conteúdo de uma matriz com base em uma condição e retorna uma nova matriz. Por exemplo, se você tiver uma matriz de usuários em que todos têm uma propriedade `online`que pode ser definida como `true`ou `false`, você pode filtrar apenas os usuários que estão online escrevendo:**

```
let onlineUsers = users.filter(user => user.online);

```

---

**No editor de código, `MyComponent`'s `state`é inicializado com uma matriz de usuários. Alguns usuários estão online e outros não. Filtre a matriz para ver apenas os usuários que estão online. Para fazer isso, use primeiro `filter`para retornar uma nova matriz contendo apenas os usuários cuja `online`propriedade é `true`. Em seguida, na `renderOnline`variável, mapeie a matriz filtrada e retorne um `li`elemento para cada usuário que contém o texto deles `username`. Certifique-se de incluir um exclusivo `key`também, como nos últimos desafios.**

class MyComponent extends React.Component {

constructor(props) {

super(props);

this.state = {

users: [

{

username: 'Jeff',

online: true

},

{

username: 'Alan',

online: false

},

{

username: 'Mary',

online: true

},

{

username: 'Jim',

online: false

},

{

username: 'Sara',

online: true

},

{

username: 'Laura',

online: true

}

]

};

}

render() {

const usersOnline = this.state.users.filter(user => user.online == true);

// Change this line

const renderOnline = usersOnline.map(function(ele){

return <li key={ele.username}>{ele.username}</li>

}); // Change this line

return (

<div>

<h1>Current Online Users:</h1>

<ul>{renderOnline}</ul>

</div>

);

}

}

**Renderizar React no servidor com renderToString**

**Até agora, você renderizou componentes React no cliente. Normalmente, isso é o que você sempre fará. No entanto, existem alguns casos de uso em que faz sentido renderizar um componente React no servidor. Como o React é uma biblioteca de visualização JavaScript e você pode executar o JavaScript no servidor com o Node, isso é possível. Na verdade, o React fornece um `renderToString()`método que você pode usar para essa finalidade.**

**Existem dois motivos principais pelos quais a renderização no servidor pode ser usada em um aplicativo do mundo real. Primeiro, sem fazer isso, seus aplicativos React consistiriam em um arquivo HTML relativamente vazio e um grande pacote de JavaScript quando fosse inicialmente carregado no navegador. Isso pode não ser ideal para mecanismos de pesquisa que estão tentando indexar o conteúdo de suas páginas para que as pessoas possam encontrar você. Se você renderizar a marcação HTML inicial no servidor e enviá-la ao cliente, o carregamento da página inicial conterá todas as marcações da página que podem ser rastreadas pelos mecanismos de pesquisa. Em segundo lugar, isso cria uma experiência de carregamento de página inicial mais rápida porque o HTML renderizado é menor que o código JavaScript de todo o aplicativo. O React ainda será capaz de reconhecer seu aplicativo e gerenciá-lo após o carregamento inicial.**

---

**O `renderToString()`método é fornecido em `ReactDOMServer`, que está disponível aqui como um objeto global. O método recebe um argumento que é um elemento React. Use para renderizar `App`em uma string.**
