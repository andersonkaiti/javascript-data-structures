const LinkedList = require("./linked-list-tail");

// não estamos digitando nenhum código novo, mas sim apenas reutilizando o código da class LinkedList e restringindo o que o usuário pode acessar
class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    this.list.print();
  }
}

const queue = new LinkedListQueue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.getSize());
queue.print();

console.log(queue.dequeue());
queue.print();

console.log(queue.peek());
