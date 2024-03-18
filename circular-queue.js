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
      // esse cálculo impede que o rear seja maior que 4, então sempre quando ele chegar a 4, após o enqueue, o índice retornará a 0
      // (-1 + 1) % 5 = 0
      // (0 + 1) % 5 = 1
      // (1 + 1) % 5 = 2
      // (2 + 1) % 5 = 3
      // (3 + 1) % 5 = 4
      // (4 + 1) % 5 = 0
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength++;
      // atualiza a variável front para que, ao realizar o dequeue, o elemento na posição 0 seja removido
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
    // caso o dequeue remova o último elemento restante na queue, é necessário resetar os índices
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
      // o i começa no front, ou seja, o 1º elemento colocado na fila, para ignorar os da traseira inicialmente, iterar sobre os outros elementos da fila, do 0 ao 4 e depois o 0 ao 1...
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      // e só depois de iterar sobre todos, adicionar o último elemento da traseira em str
      str += this.items[i];
      console.log(str);
    }
  }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.isFull());
queue.print();

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.peek());
queue.print();
queue.enqueue(60);
queue.enqueue(70);
queue.enqueue(80);
queue.print();
