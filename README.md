# O que é uma estrutura de dados

Uma estrutura de dados é uma `maneira de armazenar dados` como uma `coleção organizada de valores` para `manipulá-los` de forma `eficiente`, incluindo a definição da `relação` entre eles e as `operações aplicáveis` a esses dados.

# Por que aprender estrutura de dados?

Quase toda aplicação que desenvolvemos `envolve dados` que são `modelados de uma certa maneira`. Para gerenciar os dados de forma eficiente, você precisa de estrutura de dados, pois imagine que você está andando em uma biblioteca e descobre que `não há uma organização eficiente` dos livros e eles estão `armazenados de forma aleatória`.

A diferença entre uma função que demora alguns milissegundos e alguns segundos ou até minutos se resume à solução da estrutura de dados correta.

Estrutura de dados ajuda você a a resolver problemas de uma maneira mais eficiente, tanto em termos de tempo como de memória.

Aprender isso ajuda a entender melhor sobre alguns conceitos:

- `DOM - tree data structure`
- `Browser back and forward - stack data structure`
- `OS job scheduling - queue data structure`

# Array

É uma estrutura de dados que pode armazenar uma `coleção de valores` que pode conter uma combinação de `diferentes tipos de dados`, como strings, booleans, números ou até objetos todos em um mesmo array.

```
const arr = [1, 2, 3, "Vishwas"];
```

Caracteristicas

- Arrays são redimensionáveis.
- Você não precisa declarar o tamanho do array antes de criá-lo.
- São indexados em 0 e a ordem de inserção é mantida.
- São iteráveis, então você pode utilizar um for of loop.

```
for(const item of arr) {
  console.log(item);
}
```

# Array - Big-O Time Complexity

- Insert/remove no final - O(1)
- Insert/remove no início - O(n): porque o índice que tem ser resetado para cada elemento do array.
- Access - O(1): buscar pelo primeiro elemento não é diferente de buscar um elemento na posição 1000.
- Search - O(n): porque o elemento pode ser o último do array.
- Push/pop - O(1)
- Shift/unshift/concat/slice/splice - O(n)
- forEach/map/filter/reduce - O(n): ao utilizar forEach ou filter, o callback também pode conter um for loop, tornando O(n²).

# Set

Um Set é uma estrutura de dados que pode armazenar uma `coleção de valores` que pode conter uma combinação de `diferentes tipos de dados`, como strings, booleans, números ou até objetos, no entanto, eles tem que ser `únicos`.

- Sets têm o seu tamanho dinâmico, então você não precisa declarar o tamanho do Set de criá-lo.
- Sets não mantêm uma ordem de inserção, ou seja, eles não são organizados em uma sequência específica.
- Sets são iteráveis, então eles podem ser utilizados com um for of loop.
- Para criar um `Set`, basta utilizar o `construtor Set()`.

```
const set = new Set([1, 2, 3]);

set.add(4);
console.log(set.has(4));
set.delete(3);
console.log(set.size);
set.clear();
```

# Set vs. Array

- Arrays podem conter valores duplicados, enquanto Sets não.
- Existe uma ordem em arrays, mas isso não é o caso dos Sets, que não mantêm uma ordem de inserção.
- `Search` e `delete` em um elemento de um `Set` é mais `rápido` comparado aos `arrays`.

# Object

Um objeto é uma `coleção não ordenada` de `pares chave-valor`. A `chave` deve ser do tipo `string` (mesmo se adicionar um número, ele será convertido para string) ou `symbol`, enquanto o `valor` pode ser de `qualquer dado`.

Para `recuperar um valor`, você pode usar a `chave correspondente`. Isso pode ser feito utilizando `dot notation` ou `bracket notation`. Com bracket notation, a chave pode `conter espaços ou hífens`.

```
const obj = {
  name: "Heisenberg",
  age: 25,
  "key-three": true
};

console.log(obj.name);
console.log(obj["age"]);
console.log(obj["key-three"]);
```

Um objeto não é iterável, então não tem como utilizar ele com um for of loop.

# Object - Big-O Time Complexity

- Insert/remove - O(1)
- Access - O(1)
- Search - O(n)
- Object.keys() - O(n)
- Object.values() - O(n)
- Object.entries() - O(n)

# Map

É uma lista `ordenada` de `pares chave-valor`. Tanto as `chaves` como os `valores` podem ser de `qualquer tipo de dado`.

- Para recuperar um valor, você pode utilizar a chave correspondente.
- Maps são iteráveis, então eles podem ser usados com um for loop.
- Para criar um `Map`, basta usar o `construtor Map()`.

```
const map = new Map([
  ["a", 1],
  ["b", 2],
]);

map.set("c", 3);
map.delete("c");
console.log(map.has("a"));
console.log(map.size);
map.clear();

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
```

# Object vs. Maps

- Objetos não são ordenados enquanto Maps são.
- `Chaves` em `objetos` só podem ser do tipo `string` ou `symbol`, enquanto nos `Maps` elas podem ser de `qualquer tipo`.
- Um objeto tem um prototype e deve conter algumas chaves padrão que podem colidir com suas próprias chaves se você não tomar cuidado. Um Map, por outro lado, não contém chaves por padrão.
- Objetos não são iteráveis, enquanto Maps são.
- O `número de itens` em um `objeto` deve ser determinado manualmente, enquanto está prontamente disponível com a pripriedade `.size` em um `Map`.
- Além de `armazenar dados`, você pode adicionar `funcionalidades` a um `objeto`, enquanto `Maps` são restritos a armazenar `apenas dados`.

# Stack

A estrutura de dados stack é uma `coleção sequencial de elementos` que segue o princípio `Last In First Out` (LIFO), ou seja, o último elemento inserido na pilha é o primeiro elemento a ser removido.

Stack é um `tipo de dado abstrato` que é definida pelo seu `comportamento` e não por ser um modelo matemático, ou seja, ela na realidade `é uma lista`, mas o que faz dela uma stack é `como ela se comporta`.

A stack suporta duas operações principais:

- `Push:` que adiciona um elemento à coleção.
- `Pop:` que remove o elemento mais recentemente adicionado na coleção.

```
               │┌─┐│
               ││A││
               │└─┘│
          │┌─┐││┌─┐││┌─┐│
          ││B││││B││││B││
          │└─┘││└─┘││└─┘│
     │┌─┐││┌─┐││┌─┐││┌─┐││┌─┐│
     ││A││││A││││A││││A││││A││
│   ││└─┘││└─┘││└─┘││└─┘││└─┘││   │
└───┘└───┘└───┘└───┘└───┘└───┘└───┘
      push push push pop  pop
```

# Stack Usage

- Para rastrear seus passos.
- Broser history tracking.
- Undo operation when typing.
- Expression conversation.
- Call stack in JavaScript Runtime.

# Queue

A estrutura de dados queue é uma coleção sequencial de elementos que segue o princípio de First In First Out (FIFO), ou seja, o primeiro elemento inserido na fila é o primeior a ser removido.

Queue é um `tipo de dado abstrato` que é definido pelo seu `comportamento` e não por ser um modelo matemático.

A fila suporta duas operações principais:

- `Enqueue:` adiciona um elemento no começo da coleção.
- `Dequeue:` remove um elemento do final da coleção.

É possível implementar uma fila com um `vetor`, o problema é que a operação de `dequeue` utiliza o `método .shift()`, que é uma operação com `complexidade de tempo O(n)`, pois, ao remover o `1º elemento` do array, os `índices` de todos os outros elementos são `resetados`. Neste caso, é mais eficiente utilizar um `objeto`, pois é possível identificá-lo com um índice e é possível `remover o item` da fila `sem percorrer todos os outros items`.

Os índices do objeto ficarão da seguinte forma:

```
{
  '0': 10,
  '1': 20,
  '2': 30
}
```

```
class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}
```

```
            ───────────────────────

Enqueue ->

            ───────────────────────
                          Rear Front

            ───────────────────────
                              ┌─┐
Enqueue ->                    │A│
                              └─┘
            ───────────────────────
                          Rear Front

            ───────────────────────
              ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐
Enqueue ->    │E│ │D│ │C│ │B│ │A│
              └─┘ └─┘ └─┘ └─┘ └─┘
            ───────────────────────
            Rear              Front

            ───────────────────────
              ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐
              │E│ │D│ │C│ │B│ │A│   -> Dequeue
              └─┘ └─┘ └─┘ └─┘ └─┘
            ───────────────────────
            Rear              Front

            ───────────────────────
              ┌─┐ ┌─┐ ┌─┐ ┌─┐
              │E│ │D│ │C│ │B│       -> Dequeue
              └─┘ └─┘ └─┘ └─┘
            ───────────────────────
            Rear         Front

            ───────────────────────
              ┌─┐ ┌─┐ ┌─┐
              │E│ │D│ │C│           -> Dequeue
              └─┘ └─┘ └─┘
            ───────────────────────
            Rear     Front
```

# Queue Usage

- Printers.
- CPU task scheduling.
- Callback queue in JavaScript runtime.

# Circular Queue

- O tamanho da fila é `fixo` e um único bloco de memória é baseado como se o `primeiro elemento` estivesse `conectado` ao `último elemento`.
- Também conhecido como buffer circular ou buffer de anel e segue o princípio FIFO.
- Uma circular queue vai `reusar` o `bloco vazio criado` durante a operação de dequeue.
- Ao trabalhar com filas de tamanho máximo fixo, uma circular queue é uma ótima opção de implementação.

```
┌───────────┬────────┐
│           │        │
│     ┌─────┴──┐     │
├─────┤ 4    0 │     │
│     │        │     │
│     │ 3      ├─────┤
│     │        │     │
├─────┤ 2    1 │     │
│     └─────┬──┘     │
│           │        │
└───────────┴────────┘
```

Uma circular queue suporta as duas principais operações.

- `Enqueue:` adiciona um elemento à traseira da coleção.
- `Dequeue:` remove um elemento da frente da coleção.

```
class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}
```

# Enqueue

Na seguinte operação da classe CircularQueue, o `rear`, que é a traseira, é calculado `incrementando` o valor inicial do rear, que é -1, para 0 e fazendo uma `modulação com a variável capacity`, que no exemplo é 5. Essa modulação apenas serve para `impedir que a variável seja igual a 5`. Caso ela `chegue a 5` após o incremento, o resultado será `5 % 5 = 0`, então o `rear voltará a 0`. Além disso, o currentLength será incrementado e o `front também será aumentado para 0`.

```
enqueue(element) {
  if (!this.isFull()) {
    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = element;
    this.currentLength++;
    if (this.front === -1) {
      this.front = this.rear;
    }
  }
}
```

# Dequeue

A operação dequeue verifica se a fila não está vazia. Caso esteja, retorna null, mas caso não esteja, o `item da frente` será `armazenado em uma variável` para o seu posterior `retorno` e o `valor da posição na fila será null`. Em seguida, o valor do `front` será incrementado da `mesma forma que o rear`, para que `não ultrapasse 5 e volte a 0`, e o currentLength será decrementado. Caso o dequeue torne a `fila vazia`, tanto o front como o rear serão `resetados`.

```
dequeue() {
  if (this.isEmpty()) {
    return null;
  }
  const item = this.items[this.front];
  this.items[this.front] = null;
  this.front = (this.front + 1) % this.capacity;
  this.currentLength--;
  if (this.isEmpty()) {
    this.front = -1;
    this.rear = -1;
  }
  return item;
}
```

# Print

Na operação print, a `variável i é criada fora do loop` para o seu posterior uso. Dentro do for loop, ela recebe o `valor de front`, que foi o `primeiro valor` a ser inserido na fila. Em seguida, ela é incrementada de tal forma que, `se ela chega em 4`, `o próximo valor seja 0`. Se o i chegar ao `índice de rear`, o for loop será encerrado, mas a `incrementação será realizada`, então o i será igual ao rear. Dessa forma, todos os valores são inseridos na variável str na ordem correta, do front até o rear, ou seja, da frente até a traseira.

```
print() {
  if (this.isEmpty()) {
    console.log("Queue is empty");
  } else {
    let i;
    let str = "";
    for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
      str += this.items[i] + " ";
    }
    str += this.items[i];
    console.log(str);
  }
}
```

```
                                                    Front                          Front
                                                      v                              v
       ┌───────────┬────────┐        ┌───────────┬────────┐         ┌───────────┬────────┐
       │           │        │        │           │    10  │         │           │    10  │
       │     ┌─────┴──┐     │        │     ┌─────┴──┐     │ < Rear  │     ┌─────┴──┐     │
       ├─────┤ 4    0 │     │        ├─────┤ 4    0 │     │         ├─────┤ 4    0 │     │
       │     │        │     │        │     │        │     │         │     │        │     │
       │     │ 3      ├─────┤        │     │ 3      ├─────┤         │     │ 3      ├─────┤
       │     │        │     │        │     │        │     │         │     │        │     │
       ├─────┤ 2    1 │     │        ├─────┤ 2    1 │     │         ├─────┤ 2    1 │     │
       │     └─────┬──┘     │        │     └─────┬──┘     │         │     └─────┬──┘     │ < Rear
       │           │        │        │           │        │         │           │    20  │
       └───────────┴────────┘        └───────────┴────────┘         └───────────┴────────┘
                Front                        Front                                 Front
                  v                            v                                     v
       ┌───────────┬────────┐        ┌───────────┬────────┐         ┌───────────┬────────┐
       │           │    10  │        │           │    10  │  Rear > │ 50        │    10  │
       │     ┌─────┴──┐     │        │     ┌─────┴──┐     │         │     ┌─────┴──┐     │
       ├─────┤ 4    0 │     │        ├─────┤ 4    0 │     │         ├─────┤ 4    0 │     │
       │     │        │     │        │     │        │     │         │     │        │     │
       │     │ 3      ├─────┤ Rear > │ 40  │ 3      ├─────┤         │ 40  │ 3      ├─────┤
       │     │        │     │        │     │        │     │         │     │        │     │
       ├─────┤ 2    1 │     │        ├─────┤ 2    1 │     │         ├─────┤ 2    1 │     │
       │     └─────┬──┘     │        │     └─────┬──┘     │         │     └─────┬──┘     │
       │ 30        │    20  │        │ 30        │    20  │         │ 30        │    20  │
       └───────────┴────────┘        └───────────┴────────┘         └───────────┴────────┘
          ^
         Rear

       ┌───────────┬────────┐        ┌───────────┬────────┐
Rear > │ 50        │        │ Rear > │ 50        │        │
       │     ┌─────┴──┐     │        │     ┌─────┴──┐     │
       ├─────┤ 4    0 │     │        ├─────┤ 4    0 │     │
       │     │        │     │        │     │        │     │
       │ 40  │ 3      ├─────┤        │ 40  │ 3      ├─────┤
       │     │        │     │        │     │        │     │
       ├─────┤ 2    1 │     │        ├─────┤ 2    1 │     │
       │     └─────┬──┘     │        │     └─────┬──┘     │
       │ 30        │    20  │        │ 30        │    20  │ < Front
       └───────────┴────────┘        └───────────┴────────┘
                        Rear
                         v
       ┌───────────┬────────┐        ┌───────────┬────────┐
       │ 50        │     60 │        │ 50        │     60 │
       │     ┌─────┴──┐     │        │     ┌─────┴──┐     │
       ├─────┤ 4    0 │     │        ├─────┤ 4    0 │     │
       │     │        │     │        │     │        │     │
       │ 40  │ 3      ├─────┤        │ 40  │ 3      ├─────┤
       │     │        │     │        │     │        │     │
       ├─────┤ 2    1 │     │        ├─────┤ 2    1 │     │
       │     └─────┬──┘     │        │     └─────┬──┘     │
       │ 30        │        │        │ 30        │     70 │ < Rear
       └───────────┴────────┘        └───────────┴────────┘
         ^                             ^
       Front                         Front
```

# Linked List

Uma Linked List é uma `estrutura de dados linear` que inclui uma série de `nodes conectados`. Cada node consiste em um `valor` e um `ponteiro` que `aponta para o próximo node`.

- Então a `ordem dos nodes não é dada pela localização na memória`. Em vez disso, cada `node aponta para o próximo`.
- Os elemento da lista podem ser facilmente inseridos e removidos `sem realocação ou reorganização` de `toda a estrutura`.
- Os itens não precisam ser armazenados de forma contínua na memória.
- Acesso aleatório de elementos não é viável e acessar um elemento tem complexidade de tempo linear.

A linked list suporta três operações principais:

- `Insertion:` para adicionar um elemento ao começo (prepend), ao fim (append) ou a um dado índice da lista (insert).
- `Deletion:` remove um item dado ao seu índice ou o seu valor.
- `Search:` encontrar um elemento dado o seu valor.

```
┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘
  ^
head
```

# Linked List Usage

- Todas as aplicações de stacks e queues são aplicações de Linked Lists.
- Image Viewer.

# Linked List - Node: Representação em desenho

```
┌────┬───┐
│ 10 │ •─┼─> null
└────┴───┘
  ^    ^
value next
```

# Linked List - Prepend (Empty list)

Para inserir um node no começo em uma lista vazia, basta tornar esse `node` o `head` da lista e `incrementar o tamanho`.

```
prepend(value) {
  const node = new Node(value);
  if (this.isEmpty()) {
    this.head = node;
  }
  this.size++;
}
```

```
┌────┬─┐
│ 05 │•┼─> null
└────┴─┘
┌────┬─┐
│ 05 │•┼─> null
└────┴─┘
  ^
head
```

# Linked List - Prepend (Existing list)

Para adicionar um node ao começo de uma lista que `já contém outros nodes`, basta instanciar o node, fazer o `ponteiro next` dele `apontar` para o `head` da lista, tornar o node o `próprio head` e incrementar o tamanho.

`Big-O: O(1)`, pois não há necessidade de realocação de toda a estrutura.

```
prepend(value) {
  const node = new Node(value);
  if (this.isEmpty()) {
    this.head = node;
  } else {
    node.next = this.head;
    this.head = node;
  }
  this.size++;
}
```

```
┌────┬─┐        ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 05 │•┼─> null │ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
└────┴─┘        └────┴─┘  └────┴─┘  └────┴─┘
                  ^
                head

┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 05 │•┼─>│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
            ^
          head

┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 05 │•┼─>│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^
head
```

# Linked List - Print

Para exibir todos os nodes da lista, basta criar um `ponteiro` chamado `curr`, que indicará o `atual node`, e iniciá-lo no `head` da lista. A variável head armazena o primeiro node, que armazena o ponteiro para o próximo node. A cada iteração com o while, ele verificará se o `curr não é null` e, caso não seja, `adicionará` o valor do `curr` à `variável listValues` e o valor de `curr` será `alterado` para o `valor do seu ponteiro`, então a cada iteração o `curr armazenará` o `próximo node` da lista. Quando o node chegar em `null`, que é para onde `aponta o ponteiro do último node`, o loop do `while será encerrado` e o valor de listValues será exibido.

```
print() {
  if (this.isEmpty()) {
    console.log("List is empty");
  } else {
    let curr = this.head;
    let listValues = "";
    while (curr) {
      listValues += `${curr.value} `;
      curr = curr.next;
    }
    console.log(listValues);
  }
}
```

```
┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘
  ^
head

┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘
  ^   ^
head curr

┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘
  ^         ^
head      curr

┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘
  ^                   ^
head                curr
```

# Linked List - Append (Empty list)

Para acrescentar um node a uma lista vazia, basta tornar o `node novo` ao `head` da lista e incrementar o tamanho.

`Big-O: O(n)`

```
append(value) {
  const node = new Node(value);
  if (this.isEmpty()) {
    this.head = node;
  }
  this.size++;
}
```

```
┌────┬─┐
│ 05 │•┼─> null
└────┴─┘
┌────┬─┐
│ 05 │•┼─> null
└────┴─┘
  ^
head
```

# Linked List - Append (Existing list)

Append é uma operação para adicionar um elemento ao final da lista. No entanto, como os `nodes não têm índices` que os identifiquem, é necessário criar um `ponteiro` chamado `prev` que `aponta` para o `head` e que para no penúltimo node. Para isso, a cada iteração o `while verificará` se o node que o ponteiro next aponta é null ou não e, caso não seja null, o valor de `prev` será `alterado` para o `valor de seu ponteiro next`, que é o `próximo node` da lista, até chegar no `penúltimo node`. Em seguida, o `ponteiro next` do último elemento `armazenará` o `node instanciado` e o tamanho será incrementado.

```
append(value) {
  const node = new Node(value);
  if (this.isEmpty()) {
    this.head = node;
  } else {
    let prev = this.head;
    while (prev.next) {
      prev = prev.next;
    }
    prev.next = node;
  }
  this.size++;
}
```

```
Antes do append: 20 30 40 10

Node {
  value: 30,
  next: Node {
    value: 40,
    next: Node {
      value: 10,
      next: null
    }
  }
}
```

```
┌────┬─┐  ┌────┬─┐  ┌────┬─┐          ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null   │ 40 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘          └────┴─┘
  ^   ^
head prev

┌────┬─┐  ┌────┬─┐  ┌────┬─┐          ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null   │ 40 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘          └────┴─┘
  ^         ^
head      prev

┌────┬─┐  ┌────┬─┐  ┌────┬─┐          ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null   │ 40 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘          └────┴─┘
  ^                   ^
head                prev

┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─>│ 40 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^                   ^
head                prev

┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─>│ 40 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^
head
```

# Linked List - Insert (Invalid index)

Caso o índice seja `inválido`.

```
insert(value, index) {
  if (index < 0 || index > this.size) {
    return;
  }
}
```

```
┌────┬─┐                                            ┌────┬─┐
│ 05 │•┼─> null                                     │ 05 │•┼─> null
└────┴─┘                                            └────┴─┘

                ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
                │ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
                └────┴─┘  └────┴─┘  └────┴─┘
  ^
head
```

# Linked List - Insert (Index = 0)

Basta chamar o `método prepend`.

```
insert(value, index) {
    if (index === 0) {
      this.prepend(value);
    }
  }
```

```
┌────┬─┐        ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 05 │•┼─> null │ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
└────┴─┘        └────┴─┘  └────┴─┘  └────┴─┘
                   ^
                  head
```

# Linked List - Insert (Index > 0)

Para inserir um node em um `índice específico` da lista, mesmo que os `nodes não tenham índice`, basta criar um `ponteiro` que começará no `head` da lista, criar um `for loop` que começa em `0` e termina em `index - 1`, `incrementar` o valor de `prev`, de tal forma que, a cada iteração, ele armazene o valor do `seu próprio ponteiro`, que é o `próximo node`. Ao final do loop, o `prev` estará no `índice estabelecido`, então basta atribuir o valor do `ponteiro next` da variável `prev` ao `next` do `node instanciado` (node.next = prev.next) e atribuir o `ponteiro next` da variável `prev` ao `node instanciado` (prev.next = node).

```
insert(value, index) {
    else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
```

```
                  ┌────┬─┐
                  │ 25 │•┼─>
                  └────┴─┘
  0         1         2
┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘
  ^
head

                  ┌────┬─┐
                  │ 25 │•┼─>
                  └────┴─┘
  0         1         2
┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘
  ^   ^
head prev

                  ┌────┬─┐
                  │ 25 │•┼─>
                  └────┴─┘
  0         1         2
┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘
  ^         ^
head       prev

                  ┌────┬─┐
                  │ 25 │•┼──┐
                  └────┴─┘  │
  0         1         2     ↓
┌────┬─┐  ┌────┬─┐      ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─────>│ 30 │•┼─> null
└────┴─┘  └────┴─┘      └────┴─┘
  ^         ^
head       prev

                  ┌────┬─┐
                ┌>│ 25 │•┼──┐
                │ └────┴─┘  │
  0         1   │         2 ↓
┌────┬─┐  ┌────┬┼┐      ┌────┬─┐
│ 10 │•┼─>│ 20 │•│      │ 30 │•┼─> null
└────┴─┘  └────┴─┘      └────┴─┘
  ^         ^
head       prev

  0         1         2        3
┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^         ^
head       prev

  0         1         2        3
┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^
head
```

# Remove List - Remove (Index = 0)

Para remover o node com `índice 0`, basta armazenar o valor do node removido em uma variável, fazer o `ponteiro head` apontar para `head.next`, ou seja, o próximo node depois de head, e `retorna a variável removida`.

```
removeFrom(index) {
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    }
    this.size--;
    return removedNode.value;
  }
```

```
  0         1         2        3
┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 25 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^
head

  0         1         2        3
┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 25 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
            ^
          head

            0         1        2
┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 25 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
            ^
          head

  0         1        2
┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 20 │•┼─>│ 25 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘
  ^
head
```

Caso em que há apenas um node.

```
  0
┌────┬─┐
│ 10 │•┼─> null
└────┴─┘
  ^
head

┌────┬─┐
│ 10 │•┼─> null
└────┴─┘
            ^
          head
```

# Linked List - Remove (Index > 0)

Para remover um node em um `índice` que seja `maior que 0`, basta criar um ponteiro chamado `prev` e criar um `for loop`, utilizando a `mesma lógica` que a da `operação de insert`. Ao final do loop, o `ponteiro prev` apontará para o `penúltimo node da lista`. Basta criar uma `variável` para o `node removido`, atribuir a ela o valor `prev.next`, e fazer o `ponteiro next` de `prev apontar` para o `next do node removido`.

```
removeFrom(index) {
    let removedNode;
    else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }
```

```
  0         1         2         3
┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 25 │•┼─>│ 25 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^   ^
head prev

  0         1         2         3
┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 25 │•┼─>│ 25 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^         ^
head       prev

  0         1         2         3 ↓
┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 25 │•┼─>│ 25 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^         ^         ^
head       prev     remove


                ┌─────────────────┐
  0         1   │     2         3 ↓
┌────┬─┐  ┌────┬┼┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•│  │ 25 │•┼─>│ 25 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^         ^         ^
head       prev     remove

  0         1         2
┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 25 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘
  ^         ^         ^
head       prev     remove
```

# Linked List - Remove (Values in head node)

```
┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 25 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^
head

┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 25 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
            ^
          head

┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 20 │•┼─>│ 25 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘
  ^
head
```

```
┌────┬─┐
│ 20 │•┼─> null
└────┴─┘
  ^
head

┌────┬─┐
│ 20 │•┼─> null
└────┴─┘
            ^
          head

null
 ^
head
```

# Linked List - Remove (Value in node after head)

```
┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 25 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^   ^
head prev

┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 25 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^         ^
head      prev

┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 25 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^         ^         ^
head      prev      remv

                ┌────────────────┐
                │                ↓
┌────┬─┐  ┌────┬┼┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•│  │ 25 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^         ^         ^
head      prev      remv

┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘
  ^
head
```

# Linked List - Find by value

```
  0         1         2         3
┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 25 │•┼─>│ 25 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^   ^
head curr

  0         1         2         3
┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 25 │•┼─>│ 25 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^         ^
head      curr

  0         1         2         3
┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 25 │•┼─>│ 25 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^                   ^
head                curr
```

# Linked List - Reverse

Reverse serve para inverter a ordem dos nodes da seguinte forma.

```
┌───┬─┐  ┌───┬─┐  ┌───┬─┐
│ 1 │•┼─>│ 2 │•┼─>│ 3 │•┼─> null
└───┴─┘  └───┴─┘  └───┴─┘
  ^
head

       ┌─┬───┐  ┌─┬───┐  ┌─┬───┐
null <─┼•│ 1 │<─┼•│ 2 │<─┼•│ 3 │
       └─┴───┘  └─┴───┘  └─┴───┘
                             ^
                            head
```

Criamos o ponteiro `prev`, que aponta para `null`, o ponteiro `curr`, que aponta para o `head` da linked list, e o ponteiro `next`, que aponta para `curr.next`, ou seja, o próximo node após curr. O `curr.next`, que é o ponteiro para o próximo node, recebe `prev`, que é o ponteiro para `null`. Em seguida, apontamos o ponteiro `prev` para o `mesmo node que o ponteiro curr` e depois apontamos o `ponteiro curr` para o `mesmo node que o ponteiro next` e daqui em diante realizamos as mesmas operações (começando na declaração do ponteiro next) até que a linked list esteja invertida.

```
reverse() {
  let prev = null;
  let curr = this.head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  this.head = prev;
}
```

```
┌───┬─┐  ┌───┬─┐  ┌───┬─┐
│ 1 │•┼─>│ 2 │•┼─>│ 3 │•┼─> null
└───┴─┘  └───┴─┘  └───┴─┘
  ^
head

Criamos o ponteiro curr, que apontará para o head da linked list.

let prev = null;
let curr = this.head;

      ┌───┬─┐  ┌───┬─┐  ┌───┬─┐
null  │ 1 │•┼─>│ 2 │•┼─>│ 3 │•┼─> null
      └───┴─┘  └───┴─┘  └───┴─┘
 ^     ^   ^
prev head curr

E também criamos o ponteiro next, que receberá curr.next, que é o ponteiro para o próximo node depois de curr.

let next = curr.next;

      ┌───┬─┐  ┌───┬─┐  ┌───┬─┐
null  │ 1 │•┼─>│ 2 │•┼─>│ 3 │•┼─> null
      └───┴─┘  └───┴─┘  └───┴─┘
 ^     ^   ^    ^
prev head curr next

O curr.next, que é o ponteiro para o próximo node, recebe prev, que é o ponteiro para null.

curr.next = prev;

       ┌─┬───┐ ┌───┬─┐  ┌───┬─┐
null <─┼•│ 1 │ │ 2 │•┼─>│ 3 │•┼─> null
       └─┴───┘ └───┴─┘  └───┴─┘
 ^      ^   ^    ^
prev  head curr next

Em seguida, apontamos o ponteiro prev para o mesmo node que o ponteiro curr.

prev = curr;

       ┌─────┬─────┐ ┌───┬─┐  ┌───┬─┐
null <─┼──•  │  1  │ │ 2 │•┼─>│ 3 │•┼─> null
       └─────┴─────┘ └───┴─┘  └───┴─┘
        ^    ^   ^    ^
      head curr prev next

Em seguida, apontamos o ponteiro curr para o mesmo node que o ponteiro next e daqui em diante realizamos as mesmas operações até que a linked list esteja invertida.

curr = next;

       ┌───┬───┐ ┌───┬───┐  ┌───┬─┐
null <─┼─• │ 1 │ │ 2 │ •─┼─>│ 3 │•┼─> null
       └───┴───┘ └───┴───┘  └───┴─┘
        ^    ^    ^    ^
      head  prev next curr

Apontamos o ponteiro next para curr.next.

       ┌───┬───┐  ┌───┬───┐  ┌───┬─┐
null <─┼─• │ 1 │  │ 2 │ •─┼─>│ 3 │•┼─> null
       └───┴───┘  └───┴───┘  └───┴─┘
        ^    ^     ^          ^
      head  prev  curr       next

O curr.next, que é o ponteiro para o próximo node, recebe prev, que é o ponteiro para null.

       ┌───┬───┐  ┌───┬───┐  ┌───┬─┐
null <─┼─• │ 1 │<─┼─• │ 1 │  │ 3 │•┼─> null
       └───┴───┘  └───┴───┘  └───┴─┘
        ^    ^     ^          ^
      head  prev  curr       next

Em seguida, apontamos o ponteiro prev para o mesmo node que o ponteiro curr (operação repetida pela 2ª vez).

       ┌───┬───┐  ┌───┬───┐  ┌───┬─┐
null <─┼─• │ 1 │<─┼─• │ 1 │  │ 3 │•┼─> null
       └───┴───┘  └───┴───┘  └───┴─┘
        ^          ^    ^      ^
      head        curr prev   next

Em seguida, apontamos o ponteiro curr para o mesmo node que o ponteiro next (operação repetida pela 2ª vez).

       ┌───┬───┐  ┌───┬───┐  ┌───┬───┐
null <─┼─• │ 1 │<─┼─• │ 1 │  │ 3 │ •─┼─> null
       └───┴───┘  └───┴───┘  └───┴───┘
        ^          ^           ^   ^
      head        prev       next curr

Apontamos o ponteiro next para curr.next (operação repetida pela 3ª vez).

       ┌───┬───┐  ┌───┬───┐  ┌───┬───┐
null <─┼─• │ 1 │<─┼─• │ 1 │  │ 3 │ •─┼─> null
       └───┴───┘  └───┴───┘  └───┴───┘
        ^          ^          ^           ^
      head        prev       curr        next

O curr.next, que é o ponteiro para o próximo node, recebe prev, que é o ponteiro para o node anterior (operação repetida pela 3ª vez).

       ┌───┬───┐  ┌───┬───┐  ┌───┬───┐
null <─┼─• │ 1 │<─┼─• │ 1 │<─┼─• │ 3 │   null
       └───┴───┘  └───┴───┘  └───┴───┘
        ^                     ^    ^      ^
      head                   curr prev   next

Em seguida, apontamos o ponteiro curr para o mesmo node que o ponteiro next (operação repetida pela 3ª vez).

       ┌───┬───┐  ┌───┬───┐  ┌───┬───┐
null <─┼─• │ 1 │<─┼─• │ 1 │<─┼─• │ 3 │   null
       └───┴───┘  └───┴───┘  └───┴───┘
        ^                     ^          ^  ^
      head                   prev      curr next

E, finalmente, head aponta para o mesmo node que o ponteiro prev.

       ┌───┬───┐  ┌───┬───┐  ┌───┬───┐
null <─┼─• │ 1 │<─┼─• │ 1 │<─┼─• │ 3 │   null
       └───┴───┘  └───┴───┘  └───┴───┘
                              ^    ^     ^  ^
                             head prev curr next
```

# Linked List with tail - Empty

```
with head

  null
   ^
  head

with head + tail

  null
  ^  ^
head tail
```

# Linked List with tail - Insert first node

```
with head

      ┌────┬─┐        ┌────┬─┐
      │ 10 │•┼─> null │ 10 │•┼─> null
      └────┴─┘        └────┴─┘
  ^
head

with head + tail

          ┌────┬─┐        ┌────┬─┐
          │ 10 │•┼─> null │ 10 │•┼─> null
          └────┴─┘        └────┴─┘
  ^   ^                    ^   ^
head tail                head tail
```

# Linked List with tail - Prepend

```
with head

┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 05 │•┼─>│ 10 │•┼─>│ 20 │•┼─>│ 25 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
            ^
          head

┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 05 │•┼─>│ 10 │•┼─>│ 20 │•┼─>│ 25 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^
head

with head + tail

┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 05 │•┼─>│ 10 │•┼─>│ 20 │•┼─>│ 25 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
            ^                             ^
          head                          tail

┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 05 │•┼─>│ 10 │•┼─>│ 20 │•┼─>│ 25 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^                                       ^
head                                    tail
```

# Linked List with tail - Append

```
with head

┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘
  ^                   ^
head                prev

┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─>│ 40 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^
head

with node + tail

┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─>│ 40 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^                   ^
head                tail

┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─>│ 40 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^                            ^
head                          tail
```

# Linked List with tail - Delete only node

```
with head

┌────┬─┐
│ 10 │•┼─> null   null
└────┴─┘
  ^                ^
head              head

with node + tail

┌────┬─┐
│ 10 │•┼─> null   null
└────┴─┘
  ^   ^           ^ ^
head tail      head tail
```

# Linked List with tail - Delete first node

```
with head

            0         1         2
┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 25 │•┼─>│ 25 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
            ^                   ^
          head                prev

            0         1         2
          ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
          │ 20 │•┼─>│ 30 │•┼─>│ 40 │•┼─> null
          └────┴─┘  └────┴─┘  └────┴─┘
            ^
          head

with node + tail

            0         1         2
┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 25 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
            ^                   ^
          head                tail

            0         1         2
          ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
          │ 20 │•┼─>│ 25 │•┼─>│ 30 │•┼─> null
          └────┴─┘  └────┴─┘  └────┴─┘
            ^                   ^
          head                tail
```

# Linked List with tail - Delete last node

```
with head

┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─>│ 40 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^                   ^
head                prev

┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘
  ^
head

with node + tail

┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─>│ 40 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^                   ^         ^
head                prev      tail

┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘
  ^                   ^
head                tail
```

# Linked List - Stack Push

```
┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘
  ^                   ^
head                tail

┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 05 │•┼─>│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
            ^                   ^
          head                tail

┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 05 │•┼─>│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^                             ^
head                          tail
```

# Linked List - Stack pop

```
┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^                             ^
head                          tail

┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 05 │•┼─>│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
            ^                   ^
          head                tail

          ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
          │ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─> null
          └────┴─┘  └────┴─┘  └────┴─┘
            ^                   ^
          head                tail
```

# Linked List - Queue enqueue

```
┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 10 │•┼─>│ 20 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘
  ^                   ^
head                tail

┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─>│ 40 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^                   ^
head                tail

┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─>│ 40 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^                             ^
head                          tail
```

# Linked List - Queue dequeue

```
┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─>│ 40 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
  ^                             ^
head                          tail

┌────┬─┐  ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
│ 10 │•┼─>│ 20 │•┼─>│ 30 │•┼─>│ 40 │•┼─> null
└────┴─┘  └────┴─┘  └────┴─┘  └────┴─┘
            ^                   ^
          head                tail

          ┌────┬─┐  ┌────┬─┐  ┌────┬─┐
          │ 20 │•┼─>│ 30 │•┼─>│ 40 │•┼─> null
          └────┴─┘  └────┴─┘  └────┴─┘
            ^                   ^
          head                tail
```

# Hash Table

Uma `hash table`, também conhecida como hash map, é uma estrutura de dados que é utilizada para `armazenar pares chave-valor`. Dada uma chave, você pode `associar um valor` a `uma chave` para uma pesquisa muito rápida.

Os objetos do JavaScript são implementações especiais da estrutura de dados hash table. No entanto, a classe Object adiciona as suas próprias chaves. As chaves inseridas podem entrar em conflito e substituir as propriedades padrões herdadas.

Os maps, que foram introduzidos em 2015, permitem armazenar pares chave-valor.

Hash table armazena pares chave-valor

- 'in' => 'India'
- 'au' => 'Australia'
- 'fr' => 'France'
- 'it' => 'Italy'

Nós armazenamos pares chave-valor em um `array de tamanho fixo`. No entanto, `arrays` têm `índices numéricos`, então como deixar de usar uma `string` como um `índice` para um `número como índice`?

Uma `função de hashing` aceita a `chave como uma string`, `converte` isso para um `hash code` usando uma lógica definida e, em seguida, mapeia-a em um índice numérico que está dentro do limite do array.

A mesma função de hashing é reusada para recuperar o valor dado uma chave.

- Set para armazenar um par chave-valor.
- Get para recuperar um valor dado uma chave.
- Remove para deletar um par chave-valor.

```
class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
}
```

# Hash Table - Hash

O método recebe uma `key` como parâmetro, que é uma `string`, e um `for loop` percorre sobre cada `caractere` da `key` pegando o `código ASCII` dela e somando ao total. Ao final, é realizado um cálculo com `modulação` para que o `valor de total esteja entre 0 e 49`.

```
hash(key) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  return total % this.size;
}
```

# Hash Table - Set

A chave e o valor são recebidos como parâmetro e o `índice` é obtido utilizando o `método hash`. Em seguida, a `referência` da posição do índice será armazenado na variável `bucket`. Caso não haja `nada` na posição selecionada, ou seja, `caso seja undefined`, a posição `receberá um array contendo outro array` com a `chave` e o `valor`. No entanto, caso já `haja` uma posição com o índice específico, é verificado se existe `algum array com o mesma chave inserida` no método utilizando com `bucket.find`. Se existir, o `valor é trocado` utilizando `sameKeyItem[1] = value`, sendo `1` a `posição do valor`, e, se não existir, um `novo array` é adicionado ao `array bucket` contendo o `par chave-valor`.

```
set(key, value) {
  const index = this.hash(key);
  const bucket = this.table[index];
  if (!bucket) {
    this.table[index] = [[key, value]];
  } else {
    const sameKeyItem = bucket.find((item) => item[0] === key);
    if (sameKeyItem) {
      sameKeyItem[1] = value;
    } else {
      bucket.push([key, value]);
    }
  }
}
```

# Hash Table - Get

É igual ao método set, a diferença é que ele apenas retorna o valor sameKeyItem[1], que é o valor do par chave-valor.

```
get(key) {
  const index = this.hash(key);
  const bucket = this.table[index];
  if (bucket) {
    const sameKeyItem = bucket.find((item) => item[0] === key);
    if (sameKeyItem) {
      return sameKeyItem[1];
    }
  }
  return undefined;
}
```

# Hash Table - Remove

Também é semelhante aos métodos set e get, mas desta vez é utilizado um splice na variável bucket para remover o array dentro do bucket.

```
remove(key) {
  const index = this.hash(key);
  const bucket = this.table[index];
  if (bucket) {
    const sameKeyItem = bucket.find((item) => item[0] === key);
    if (sameKeyItem) {
      bucket.splice(bucket.indexOf(sameKeyItem), 1);
    }
  }
}
```

# Hash Table - Display

```
display() {
  console.log("+----------+-------------------------------------+");
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      let pairs = this.table[i]
        .map((pair) => `${pair[0]}: ${pair[1]}`)
        .join(", ");
      console.log(
        "|",
        i.toString().padStart(8, " "),
        "|",
        pairs.padStart(35, " "),
        "|"
      );
    }
  }
  console.log("+----------+-------------------------------------+");
}
```

# Hash Table - Visualization

```
                          ┌────┬───────────┐
                          │ 00 │   India   │
                          ├────┼───────────┤
                          │ 01 │           │
 keys                     ├────┼───────────┤
┌────┐    ┌──────────┐    │ 02 │ Australia │
│ in │    │          │    ├────┼───────────┤
└────┘    │          │    │ 03 │           │
┌────┐    │          │    ├────┼───────────┤
│ au │    │          │    │ 04 │           │
└────┘    │   hash   │    ├────┼───────────┤
┌────┐    │ function │    │ 05 │           │
│ fr │    │          │    ├────┼───────────┤
└────┘    │          │    │ 06 │  France   │
┌────┐    │          │    ├────┼───────────┤
│ it │    │          │    │ 07 │           │
└────┘    └──────────┘    ├────┼───────────┤
                          │ 08 │   Italy   │
                          ├────┼───────────┤
                          │ 09 │           │
                          ├────┼───────────┤
                          │ 10 │           │
                          └────┴───────────┘
```

# Hash Table Usage

- Hash tables são tipicamente implementadas onde são necessárias pesquisas e inserções em tempo constante.
- Database indexing.
- Caches.

# Hash Table Visualization - Handling Collisions

Ocorre quando há `sobrescrita` de um par chave-valor por conta da adição de um par chave-valor que acaba no mesmo índice por conta da lógica utilizada.

```
                          ┌────┬─────────────────┐
                          │ 00 │   [in, india]   │
                          ├────┼─────────────────┤
                          │ 01 │                 │
 keys                     ├────┼─────────────────┤
┌────┐    ┌──────────┐    │ 02 │ [au, Australia] │
│ in │    │          │    ├────┼─────────────────┤
└────┘    │          │    │ 03 │                 │
┌────┐    │          │    ├────┼─────────────────┤
│ au │    │          │    │ 04 │                 │
└────┘    │   hash   │    ├────┼─────────────────┤
┌────┐    │ function │    │ 05 │                 │
│ fr │    │          │    ├────┼─────────────────┤
└────┘    │          │    │ 06 │  [fr, France]   │
┌────┐    │          │    ├────┼─────────────────┤
│ it │    │          │    │ 07 │                 │
└────┘    └──────────┘    ├────┼─────────────────┤
                          │ 08 │   [it, Italy]   │
                          ├────┼─────────────────┤
                          │ 09 │                 │
                          ├────┼─────────────────┤
                          │ 10 │                 │
                          └────┴─────────────────┘
```

```
 keys                       ┌────┬─────────────────────────────┐
┌──────┐    ┌──────────┐    │ 01 │ [name, Bruce] [mane, Clark] │
│ name │    │          │    ├────┼─────────────────────────────┤
└──────┘    │          │    │ 02 │                             │
┌──────┐    │   hash   │    ├────┼─────────────────────────────┤
│ age  │    │          │    │ 03 │ [age, 25]                   │
└──────┘    │ function │    ├────┼─────────────────────────────┤
┌──────┐    │          │    │ 04 │                             │
│ mane │    │          │    ├────┼─────────────────────────────┤
└──────┘    └──────────┘    │ 05 │                             │
                            └────┴─────────────────────────────┘
```

# Tree

- Uma árvore é uma estrutura de dados hierárquica que consiste em nodes conectados por arestas, e cada node armazena um valor.
- Uma árvore é uma estrutura de dados não linear, comparado a arrays, linked lists, stacks e queues que são estruturas de dados lineares.
- Em estruturas de dados lineares, o tempo requerido para pesquisar é proporcional ao tamanho do conjunto de dados. Árvores, no entanto, devido à natureza linear, permitem acesso mais rápido e fácil aos dados.
- Uma árvore não conterá nenhum loop ou ciclo.

# Tree Visualization

```
          ┌───┐
          │ A │─────────> Node
          └───┘
         /  │  \ ───────> Edge
        /   │   \
       v    v    v
     ┌───┐┌───┐┌───┐
     │ B ││ C ││ D │
     └───┘└───┘└───┘
    /     \
   /       \
  v         v
┌───┐     ┌───┐
│ E │     │ F │
└───┘     └───┘
```

# Tree Usage

- File system for directory structure.
- A family tree.
- An organization tree.
- DOM.
- Chatbots.
- Abstract syntax trees.

# Tree Terminology

- `Node pai:` Um node que é um predecessor imediato de qualquer node.
- `Node filho:` Um node que é sucessor imediato de um node.
- `Node root:` O node do qual a árvore se origina é chamado de node root e ele não tem node pai.
- `Node folha:` são nodes que não têm nenhum filho (E, F, C e D são nodes folha).
- `Nodes irmãos:` nodes com os mesmos nodes pais ((B, C, D) e (E, F) são nodes irmãos).
- Nodes também têm ancestrais, que são nodes pais de nodes pais (A é ancestral de E).
- Path(A, E) é A-B-E.
- Distance(A, E) é 2.
- O `grau` de um node é o `total de nodes filhos` que ele tem (grau de B é 2; grau da árvore é 3).
- A `profundidade` de um node é a `quantidade de arestas do root node até o node` (profundidade de E é 2).
- `Altura` de um node é um `número de arestas do node esquerdo` mais profundo até o node (altura de B e 1; altura da árvore é 2).

```
     root ┌───┐
     ────>│ A │─────────> parent
          └───┘
         /  │  \ ───────> child
        /   │   \
       v    v    v
     ┌───┐┌───┐┌───┐
     │ B ││ C ││ D │
     └───┘└───┘└───┘
    /     \
   /       \
  v         v
┌───┐     ┌───┐
│ E │     │ F │
└───┘     └───┘
  ^         ^
leaf      leaf
```

# Binary Tree

Uma `árvore binária` é uma estrutura de dados em árvore na qual cada node tem no `máximo dois filhos`, que são chamados de `filho esquerdo` e `filho direito`.

```
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  preOrder(root) {
    console.log("Preorder: " + this.pre(root));
  }

  pre(root) {
    let result = "";
    if (root) {
      result += root.value + " ";
      result += this.pre(root.left);
      result += this.pre(root.right);
    }
    return result;
  }

  inOrder(root) {
    console.log("Inorder: " + this.in(root));
  }

  in(root) {
    let result = "";
    if (root) {
      result += this.in(root.left);
      result += root.value + " ";
      result += this.in(root.right);
    }
    return result;
  }

  postOrder(root) {
    console.log("Postorder: " + this.post(root));
  }

  post(root) {
    let result = "";
    if (root) {
      result += this.post(root.left);
      result += this.post(root.right);
      result += root.value + " ";
    }
    return result;
  }

  levelOrder() {
    let result = "";
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      result += curr.value + " ";
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    console.log("BFS Traversal: " + result);
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  print() {
    console.log(this.root);
  }
}
```

# Binary Tree Visualization

```
            ┌─────┐
            │  A  │
            └─────┘
           /       \
          /         \
         v           v
      ┌─────┐     ┌─────┐
      │  B  │     │  C  │
      └─────┘     └─────┘
     /       \
    /         \
   v           v
┌─────┐     ┌─────┐
│  D  │     │  E  │
└─────┘     └─────┘
```

# Binary Search Tree (BST)

- O valor de cada node esquerdo deve ser menor que o do node pai.
- O valor de cada node direito deve ser maior que o do node pai.
- Cada node tem no máximo dois filhos.

```
            ┌─────┐
            │ 10  │
            └─────┘
           /       \
          /         \
         v           v
      ┌─────┐     ┌─────┐
      │  5  │     │ 15  │
      └─────┘     └─────┘
     /       \
    /         \
   v           v
┌─────┐     ┌─────┐
│  3  │     │  7  │
└─────┘     └─────┘
```

# Binary Search Tree Operations

- Insertion para adicionar um node à arvore.
- Search para encontrar um node dado o seu valor.
- DFS e BFS para visitar todos os nodes da árvore.
- Deletion para remover um node dado o seu valor.

# Binary Search Tree Usage

- Searching.
- Sorting.
- Para implementar tipos de dados abstratos, como tabelas de pesquisas e filas de prioridade.

# Binary Search Tree Node

```
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
```

```
      ┌───────┐
      │ value │
      └───────┘
left /         \ right
    v           v
```

# Binary Search Tree with Root Node

```
      root ┌─────┐          root
      ────>│ 10  │          ────> null
           └─────┘
          /       \
         /         \
        v           v
     ┌─────┐     ┌─────┐
     │  5  │     │ 15  │
     └─────┘     └─────┘
    /       \
   /         \
  v           v
┌─────┐    ┌─────┐
│  3  │    │  7  │
└─────┘    └─────┘
```

# Binary Search Tree - Insert Node

```
class BinarySearchTree {
  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
}
```

```
┌─────┐      root  ┌─────┐
│ 10  │      ────> │ 10  │
└─────┘            └─────┘
```

```
root ┌─────┐        root ┌─────┐
────>│ 10  │        ────>│ 10  │
     └─────┘             └─────┘
                        /
                       /
                      v
     ┌─────┐       ┌─────┐
     │  5  │       │  5  │
     └─────┘       └─────┘
```

```

 root ┌─────┐              root ┌─────┐
 ────>│ 10  │              ────>│ 10  │
      └─────┘                   └─────┘
     /                         /       \
    /                         /         \
   v                         v           v
┌─────┐   ┌─────┐         ┌─────┐     ┌─────┐
│  5  │   │ 15  │         │  5  │     │ 15  │
└─────┘   └─────┘         └─────┘     └─────┘
```

```
 root ┌─────┐              root ┌─────┐
 ────>│ 10  │              ────>│ 10  │
      └─────┘                   └─────┘
     /       \                 /       \
    /         \               /         \
   v           v             v           v
┌─────┐     ┌─────┐       ┌─────┐     ┌─────┐
│  5  │     │ 15  │       │  5  │     │ 15  │
└─────┘     └─────┘       └─────┘     └─────┘
                          /
                         /
                        v
┌────┐               ┌─────┐
│ 3  │               │  3  │
└────┘               └─────┘
```

```
       root ┌─────┐               root ┌─────┐
       ────>│ 10  │               ────>│ 10  │
            └─────┘                    └─────┘
           /       \                  /       \
          /         \                /         \
         v           v              v           v
      ┌─────┐     ┌─────┐        ┌─────┐     ┌─────┐
      │  5  │     │ 15  │        │  5  │     │ 15  │
      └─────┘     └─────┘        └─────┘     └─────┘
     /                          /       \
    /                          /         \
   v                          v           v
┌─────┐                    ┌─────┐     ┌─────┐
│  3  │                    │  3  │     │  7  │
└─────┘                    └─────┘     └─────┘



        ┌─────┐
        │  7  │
        └─────┘
```

# Binary Search Tree - Search

O método search é utilizado para descobrir se um node, dado o seu valor, está `presente` na árvore. Para isso, utiliza-se `recursividade` e `dois casos base` são criados: um que verifica se o valor não é um node, ou seja, se chegou a null, o que significa que `ele não foi encontrado`, e outro que verifica se o `valor do node é igual ao valor colocado na chamado do método`. A cada chamada da função, ocorre a `comparação` do valor adicionado na chamada do método com o `valor` do node, determinando se a busca deve prosseguir no `ramo esquerdo` ou `direito` da árvore.

```
class BinarySearchTree {
  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
}
```

```
       root ╔═════╗               root ╔═════╗
       ────>║ 10  ║               ────>║ 10  ║
            ╚═════╝                    ╚═════╝
           /       \                  /       \
          /         \                /         \
         v           v              v           v
      ┌─────┐     ┌─────┐        ┌─────┐     ┌─────┐
      │  5  │     │ 15  │        │  5  │     │ 15  │
      └─────┘     └─────┘        └─────┘     └─────┘
     /     \                    /       \
    /       \                  /         \
   v         v                v           v
┌─────┐   ┌─────┐          ┌─────┐     ┌─────┐
│  3  │   │  7  │          │  3  │     │  7  │
└─────┘   └─────┘          └─────┘     └─────┘
```

```
       root ╔═════╗              root ┌─────┐             root ┌─────┐
       ────>║ 10  ║              ────>│ 10  │             ────>│ 10  │
            ╚═════╝                   └─────┘                  └─────┘
           /       \                 /       \                /       \
          /         \               /         \              /         \
         v           v             v           v            v           v
      ┌─────┐     ┌─────┐        ╔═════╗    ┌─────┐      ┌─────┐     ┌─────┐
      │  5  │     │ 15  │        ║  5  ║    │ 15  │      │  5  │     │ 15  │
      └─────┘     └─────┘        ╚═════╝    └─────┘      └─────┘     └─────┘
     /       \                  /       \                 /     \
    /         \                /         \               /       \
   v           v              v           v             v         v
┌─────┐     ┌─────┐        ┌─────┐     ┌─────┐       ╔═════╗   ┌─────┐
│  3  │     │  7  │        │  3  │     │  7  │       ║  3  ║   │  7  │
└─────┘     └─────┘        └─────┘     └─────┘       ╚═════╝   └─────┘
```

# Tree Traversal

- Visitando cada node da árvore.
- Uma estrutura de dados hierárquica como uma árvore pode ser percorrida de diferentes maneiras.

1. Depth First Search (DFS).
2. Breadth First Search (BFS).

# Depth First Search (DFS)

- O algoritmo DFS começa no node root e explorar o máximo possível ao longo de cada ramo antes de retroceder.
- Visita o node root, visita todos os nodes na sub-árvore esquerda e visita todos os nodes na sub-árvore direita.
- Dependendo da ordem em que isso é feito, há 3 tipos de DFS traversals.

1. Preorder.
2. Inorder.
3. Postorder.

# Preorder Traversal

1. Ler o dado do node.
2. Visitar a sub-árvore esquerda.
3. Visitar a sub-árvore direita.

```
class BinarySearchTree {
  preOrder(root) {
    console.log("Preorder: " + this.pre(root));
  }

  pre(root) {
    let result = "";
    if (root) {
      result += root.value + " ";
      result += this.pre(root.left);
      result += this.pre(root.right);
    }
    return result;
  }
}
```

```
       root ╔═════╗                root ┌─────┐               root ┌─────┐
       ────>║ 10  ║                ────>│ 10  │               ────>│ 10  │
            ╚═════╝                     └─────┘                    └─────┘
           /      \                    /       \                  /       \
          /        \                  /         \                /         \
         v          v                v           v              v           v
      ┌─────┐      ┌─────┐        ╔═════╗     ┌─────┐        ┌─────┐     ┌─────┐
      │  5  │      │ 15  │        ║  5  ║     │ 15  │        │  5  │     │ 15  │
      └─────┘      └─────┘        ╚═════╝     └─────┘        └─────┘     └─────┘
     /       \                   /     \                    /       \
    /         \                 /       \                  /         \
   v           v               v         v                v           v
┌─────┐     ┌─────┐         ┌─────┐   ┌─────┐          ╔═════╗     ┌─────┐
│  3  │     │  7  │         │  3  │   │  7  │          ║  3  ║     │  7  │
└─────┘     └─────┘         └─────┘   └─────┘          ╚═════╝     └─────┘

       root ┌─────┐               root ┌─────┐
       ────>│ 10  │               ────>│ 10  │
            └─────┘                    └─────┘
           /       \                  /       \
          /         \                /         \
         v           v              v           v
      ┌─────┐     ┌─────┐        ┌─────┐     ╔═════╗
      │  5  │     │ 15  │        │  5  │     ║ 15  ║
      └─────┘     └─────┘        └─────┘     ╚═════╝
     /       \                  /       \
    /         \                /         \
   v           v              v           v
┌─────┐     ╔═════╗        ┌─────┐     ┌─────┐
│  3  │     ║  7  ║        │  3  │     │  7  │
└─────┘     ╚═════╝        └─────┘     └─────┘

10 5 3 7 15
```

# Inorder Traversal

1. Visitar a sub-árvore esquerda.
2. Ler o dado do node.
3. Visitar a sub-árvore direita.

```
class BinarySearchTree {
  inOrder(root) {
    console.log("Inorder: " + this.in(root));
  }

  in(root) {
    let result = "";
    if (root) {
      result += this.in(root.left);
      result += root.value + " ";
      result += this.in(root.right);
    }
    return result;
  }
}
```

```
       root ┌─────┐              root ┌─────┐               root ┌─────┐
       ────>│ 10  │              ────>│ 10  │               ────>│ 10  │
            └─────┘                   └─────┘                    └─────┘
           /      \                  /       \                  /       \
          /        \                /         \                /         \
         v          v              v           v              v           v
      ┌─────┐    ┌─────┐        ╔═════╗     ┌─────┐        ┌─────┐     ┌─────┐
      │  5  │    │ 15  │        ║  5  ║     │ 15  │        │  5  │     │ 15  │
      └─────┘    └─────┘        ╚═════╝     └─────┘        └─────┘     └─────┘
     /       \                 /       \                  /       \
    /         \               /         \                /         \
   v           v             v           v              v           v
╔═════╗     ┌─────┐       ┌─────┐     ┌─────┐        ┌─────┐     ╔═════╗
║  3  ║     │  7  │       │  3  │     │  7  │        │  3  │     ║  7  ║
╚═════╝     └─────┘       └─────┘     └─────┘        └─────┘     ╚═════╝

       root ╔═════╗               root ┌─────┐
       ────>║ 10  ║               ────>│ 10  │
            ╚═════╝                    └─────┘
           /       \                  /       \
          /         \                /         \
         v           v              v           v
      ┌─────┐     ┌─────┐        ┌─────┐     ╔═════╗
      │  5  │     │ 15  │        │  5  │     ║ 15  ║
      └─────┘     └─────┘        └─────┘     ╚═════╝
     /       \                  /       \
    /         \                /         \
   v           v              v           v
┌─────┐     ┌─────┐        ┌─────┐     ┌─────┐
│  3  │     │  7  │        │  3  │     │  7  │
└─────┘     └─────┘        └─────┘     └─────┘

3 5 7 10 15
```

# Postorder Traversal

1. Visitar a sub-árvore esquerda.
2. Visitar a sub-árvore direita.
3. Ler o dado do node.

```
class BinarySearchTree {
  postOrder(root) {
    console.log("Postorder: " + this.post(root));
  }

  post(root) {
    let result = "";
    if (root) {
      result += this.post(root.left);
      result += this.post(root.right);
      result += root.value + " ";
    }
    return result;
  }
}
```

```
       root ┌─────┐               root ┌─────┐               root ┌─────┐
       ────>│ 10  │               ────>│ 10  │               ────>│ 10  │
            └─────┘                    └─────┘                    └─────┘
           /       \                  /       \                  /       \
          /         \                /         \                /         \
         v           v              v           v              v           v
      ┌─────┐     ┌─────┐        ┌─────┐     ┌─────┐        ╔═════╗     ┌─────┐
      │  5  │     │ 15  │        │  5  │     │ 15  │        ║  5  ║     │ 15  │
      └─────┘     └─────┘        └─────┘     └─────┘        ╚═════╝     └─────┘
     /       \                  /       \                  /       \
    /         \                /         \                /         \
   v           v              v           v              v           v
╔═════╗     ┌─────┐        ┌─────┐     ╔═════╗        ┌─────┐     ┌─────┐
║  3  ║     │  7  │        │  3  │     ║  7  ║        │  3  │     │  7  │
╚═════╝     └─────┘        └─────┘     ╚═════╝        └─────┘     └─────┘

       root ┌─────┐               root ╔═════╗
       ────>│ 10  │               ────>║ 10  ║
            └─────┘                    ╚═════╝
           /       \                  /       \
          /         \                /         \
         v           v              v           v
      ┌─────┐     ╔═════╗        ┌─────┐     ┌─────┐
      │  5  │     ║ 15  ║        │  5  │     │ 15  │
      └─────┘     ╚═════╝        └─────┘     └─────┘
     /       \                  /       \
    /         \                /         \
   v           v              v           v
┌─────┐     ┌─────┐        ┌─────┐     ┌─────┐
│  3  │     │  7  │        │  3  │     │  7  │
└─────┘     └─────┘        └─────┘     └─────┘

3 7 5 15 10
```

# Breath First Seach (BFS)

Explora todos os nodes na profundidade atual antes de avançar para os nodes no próximo nível de profundidade.

# BFS Traversal

```
       root ╔═════╗                root ┌──────┐               root ┌─────┐
       ────>║ 10  ║                ────>│  10  │               ────>│ 10  │
            ╚═════╝                     └──────┘                    └─────┘
           /       \                   /        \                  /       \
          /         \                 /          \                /         \
         v           v               v            v              v           v
      ┌─────┐     ┌──────┐        ╔═════╗      ┌─────┐        ┌─────┐     ╔═════╗
      │  5  │     │  15  │        ║  5  ║      │ 15  │        │  5  │     ║ 15  ║
      └─────┘     └──────┘        ╚═════╝      └─────┘        └─────┘     ╚═════╝
     /       \                   /       \                   /       \
    /         \                 /         \                 /         \
   v           v               v           v               v           v
┌─────┐     ┌─────┐         ┌─────┐     ┌─────┐         ┌─────┐     ┌─────┐
│  3  │     │  7  │         │  3  │     │  7  │         │  3  │     │  7  │
└─────┘     └─────┘         └─────┘     └─────┘         └─────┘     └─────┘

       root ┌─────┐               root ┌─────┐
       ────>│ 10  │               ────>│ 10  │
            └─────┘                    └─────┘
           /       \                  /       \
          /         \                /         \
         v           v              v           v
      ┌─────┐     ┌─────┐        ┌─────┐     ╔═════╗
      │  5  │     │ 15  │        │  5  │     ║ 15  ║
      └─────┘     └─────┘        └─────┘     ╚═════╝
     /       \                  /       \
    /         \                /         \
   v           v              v           v
╔═════╗     ┌─────┐        ┌─────┐     ╔═════╗
║  3  ║     │  7  │        │  3  │     ║  7  ║
╚═════╝     └─────┘        └─────┘     ╚═════╝

10 5 15 3 7
```

# BFS Traversal Approach

1. Crie uma fila.
2. Enqueue o node root.
3. Contanto que exista um node na fila.

- a. Dequeue o node do front.
- b. Leia o valor do node.
- c. Enqueue o child esquerdo do node, se existir.
- d. Enqueue o child direito do node, se existir.

```
class BinarySearchTree {
  levelOrder() {
    let result = "";
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      result += curr.value + " ";
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    console.log("BFS Traversal: " + result);
  }
}
```

```
┌───────────┐                    root ┌─────┐
│ 10        │                    ────>│ 10  │
└───────────┘                         └─────┘
┌───────────┐                        /       \
│ 5  15     │ 10                    /         \
└───────────┘                      v           v
┌───────────┐                   ┌─────┐     ┌─────┐
│    15 5 7 │ 10 5              │  5  │     │ 15  │
└───────────┘                   └─────┘     └─────┘
┌───────────┐                  /       \
│       3 7 │ 10 5 15         /         \
└───────────┘                v           v
┌───────────┐             ┌─────┐     ┌─────┐
│         7 │ 10 5 15 3   │  3  │     │  7  │
└───────────┘             └─────┘     └─────┘
┌───────────┐
│           │ 10 5 15 3 7
└───────────┘
```

# Min and max nodes

Os métodos `min` e `max` retornam o `menor valor` e o `maior valor` presente na árvore, respectivamente. O menor valor sempre será a `folha mais à esquerda`, enquanto o maior valor sempre será a `folha mais à direita`. O método min emprega recursividade para realizar essa busca. A cada chamada do método, verifica-se se o `filho à esquerda existe`. Se não existir (ou seja, `se for null`), o valor do `nó atual é retornado`, indicando que este é o `menor valor da árvore`, e se existir, o método `prossegue para o próximo ramo à esquerda`. E, para o método max, emprega-se a mesma lógica, mas para o ramo à direita.

```
class BinarySearchTree {
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }
}
```

```
min node                    max node

       root ┌─────┐               root ┌─────┐
       ────>│ 10  │               ────>│ 10  │
            └─────┘                    └─────┘
           /       \                  /       \
          /         \                /         \
         v           v              v           v
      ┌─────┐     ┌─────┐        ┌─────┐     ╔═════╗
      │  5  │     │ 15  │        │  5  │     ║ 15  ║
      └─────┘     └─────┘        └─────┘     ╚═════╝
     /       \                  /       \
    /         \                /         \
   v           v              v           v
╔═════╗     ┌─────┐        ┌─────┐     ┌─────┐
║  3  ║     │  7  │        │  3  │     │  7  │
╚═════╝     └─────┘        └─────┘     └─────┘

A última folha À           A última folha mais
esquerda é o               à direita é o maior
menor valor                valor na árvore
na árvore
```

# Remove Node - Node Children

O método `delete` chama o método `deleteNode`, que retorna um `novo root node` que conterá a árvore completa, com exceção do node deletado com base no valor colocado como argumento na chamada do método. Basicamente, o método busca pelo nó com o valor especificado. Se o nó não existe na árvore (verificado com `root === null`), o método simplesmente retorna o root, mantendo a árvore inalterada (lembrando que cada ramo da árvore é considerada uma árvore única durante as operações nela). São realizadas duas verificações: a primeira determina se o valor é menor que o valor do nó atual, seguindo para o ramo esquerdo se for o caso; a segunda verifica se o valor é maior que o valor do nó atual, prosseguindo para o ramo direito nesse caso. Se nenhuma das verificações for verdadeira, significa que o nó a ser excluído foi encontrado, iniciando-se as operações de exclusão. Se o node não contém filhos, retorna-se `null`, indicando que o node foi removido. Se o node não tiver filho à esquerda, retorna o filho à esquerda para ocupar a sua posição, e vice-versa para a outra operação. Se o node tiver ambos os filhos, encontra-se o node sucessor, que é o menor valor do ramo direito, que é colocado o lugar do node a ser removido, mantendo a ordem da árvore. Como o node do ramo direito foi realocado, ele é removido chamando o mesmo método novamente.

```
class BinarySearchTree {
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}
```

```
      root ┌─────┐              root ┌─────┐           root ┌─────┐
      ────>│ 10  │              ────>│ 10  │           ────>│ 10  │
           └─────┘                   └─────┘                └─────┘
          /       \                 /       \              /       \
         /         \               /         \            /         \
        v           v             v           v          v           v
     ┌─────┐     ┌─────┐       ┌─────┐     ┌─────┐    ┌─────┐     ┌─────┐
     │  5  │     │ 15  │       │  5  │     │ 15  │    │  5  │     │ 15  │
     └─────┘     └─────┘       └─────┘     └─────┘    └─────┘     └─────┘
    /
   /
  v
╔═════╗                   ┌─────┐
║  3  ║                   │  3  │
╚═════╝                   └─────┘
```

# Remove Node - One Child

```
       root ┌─────┐              root ┌─────┐
       ────>│ 10  │              ────>│ 10  │
            └─────┘                   └─────┘
           /       \                 /       \
          /         \               /         \
         v           v             v           v
      ╔═════╗     ┌─────┐       ┌─────┐     ┌─────┐
      ║  5  ║     │ 15  │       │  3  │     │ 15  │
      ╚═════╝     └─────┘       └─────┘     └─────┘
     /
    /
   v
┌─────┐                    ┌─────┐
│  3  │                    │  3  │
└─────┘                    └─────┘
```

# Remove Node - Two Child Nodes

```
       root ╔═════╗               root ┌─────┐                root ┌─────┐
       ────>║ 10  ║               ────>│ 15  │                ────>│ 10  │
            ╚═════╝                    └─────┘                     └─────┘
           /       \                  /                           /
          /         \                /                           /
         v           v              v                           v
      ┌─────┐     ┌─────┐        ┌─────┐      ┌─────┐        ┌─────┐
      │  5  │     │ 15  │        │  5  │      │ 15  │        │  5  │
      └─────┘     └─────┘        └─────┘      └─────┘        └─────┘
     /                          /                           /
    /                          /                           /
   v                          v                           v
┌─────┐                    ┌─────┐                     ┌─────┐
│  3  │                    │  3  │                     │  3  │
└─────┘                    └─────┘                     └─────┘
```

# Graph

- Um grafo é uma estrutura de dados não linear que consiste em um número finito de vértices (também chamados de nodes) conectados por arestas.
- Árvores são um tipo específico de estrutura de dados de grafos.

```
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  // O(n)
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let adjacencyVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacencyVertex);
    }
    delete this.adjacencyList[vertex];
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
    }
  }
}
```

# Graph Visualization

```
      ┌─────┐
      │  B  │
      └─────┘
     /       \
    /         \
┌─────┐     ┌─────┐
│  A  │     │  C  │
└─────┘     └─────┘
```

- O grafo tem círculos, que representam os vértices, e linhas, que representam as arestas.
- Não há hierarquia em grafos e não há uma maneira definida de representar ou ler um grafo.

# Types of Graph

- Direct.
- Undirect.

# Directed Graph

- Um grafo em que as arestas têm direção.
- As arestas são geralmente por setas apontando na direção em que o grafo pode ser percorrido.

```
      ┌─────┐
      │  B  │
      └─────┘         A -> B -> C
     /       \
    /         \
┌─────┐     ┌─────┐   não tem como percorrer o caminho
│  A  │     │  C  │   C -> B -> A
└─────┘     └─────┘
```

# Undirected Graph

- Um grafo em que as arestas são bidirecionais.
- O grafo pode ser percorrido em qualquer direção.
- A ausência de uma seta indica que o grafo não é direcionado.

```
      ┌─────┐
      │  B  │
      └─────┘         A -> B -> C
     /       \
    /         \       C -> B -> A
┌─────┐     ┌─────┐
│  A  │     │  C  │
└─────┘     └─────┘
```

# More Graph Types

```
        ┌─────┐               ┌─────┐               ┌─────┐
        │  B  │               │  B  │               │  B  │
        └─────┘               └─────┘               └─────┘
       /       \             /       \             ^       \
      /         \           /         \           /         v
  ┌─────┐     ┌─────┐   ┌─────┐     ┌─────┐   ┌─────┐     ┌─────┐
  │  A  │     │  C  │   │  A  │─────│  C  │   │  A  │<────│  C  │
  └─────┘     └─────┘   └─────┘     └─────┘   └─────┘     └─────┘

pode conter           múltiplas arestas     ciclos
apenas vértices       para um node

        ┌─────┐               ┌─────┐               ┌─────┐
        │  B  │               │  B  │               │  B  │
        └─────┘               └─────┘               └─────┘
       /       \                     \           3 /       \ 2
┌───┐ /         \                     \           /         \
│ ┌─┴───┐     ┌─────┐   ┌─────┐     ┌─────┐   ┌─────┐     ┌─────┐
└─┤  A  │     │  C  │   │  A  │─────│  C  │   │  A  │     │  C  │
  └─────┘     └─────┘   └─────┘     └─────┘   └─────┘     └─────┘

loop para um            pode estar            um grafo pode conter
mesmo node              desconectado          pesos nas arestas
                                              representando o custo
                                              de percorrer aquela
                                              aresta
```

# Graph Usage

- Google Maps (cidades são representadas como vértices e estradas como arestas para ajudar a construir um sistema de navegação).
- Social media sites (usuários são vértices e arestas são links entre conexões. Instagram, Facebook e LinkedIn utilizam grafos para mostrar conexões mútuas, sugestões de posts e outras recomendações).

# Graph Representation

- Adjacency Matrix.
- Adjacency List.

# Adjacency Matrix

- Uma adjacency matrix é uma matriz 2D de tamanho V x V, onde V é o número de vértices no grafo.
- Cada linha e coluna representam um vértice.

Se o valor de qualquer elemento, por exemplo, matrix[i][j], for 1, isso representa que há uma aresta conectando o vértice i e o vértice j.

# Adjacency Matrix Representation

```
const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];
```

```
      A   B   C           ┌─────┐
    ┌───────────          │  B  │
  A │ 0   1   0           └─────┘
    │                    /       \ 
  B │ 1   0   1         /         \
    │               ┌─────┐     ┌─────┐
  C │ 0   1   0     │  A  │     │  C  │
                    └─────┘     └─────┘
```

# Adjacency List

- Vértices são armazenados.
- Os vértices são armazenados em uma estrutura semelhante a um mapa, e cada vértice armazena uma list ade seus vértices adjacentes.

# Adjacency List Representation

```
adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

```

```
                          ┌─────┐
                          │  B  │
  A -> B                  └─────┘
                         /       \ 
  B -> A, C             /         \
                    ┌─────┐     ┌─────┐
  C -> B            │  A  │     │  C  │
                    └─────┘     └─────┘
```

# Adjacency Matrix vs. Adjacency List

- Com uma adjacency list, apenas é necessário armazenar os valores para as arestas que existem. Com uma adjacency matrix, os valores são armazenados independentemente de uma aresta existir ou não. Em termos de armazenamento, uma adjacency list é muito mais eficiente.
- Com uma adjacency list, inserir e encontrar nodes adjacency é de complexidade de tempo constante, enquanto com uma adjacency matrix, é de complexidade de tempo linear.
- Uma adjacency list permite que você armazene valores adicionais com uma aresta, como o peso da aresta. Com uma adjacency matrix, tal informação teria que ser armazenada externamente.