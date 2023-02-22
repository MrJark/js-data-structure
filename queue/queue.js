class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue { //a diferencia de los stacks, en los queues, el que primero sale es el primero que llegó
    constructor() {
        this.first = null;
        this.last = null;
        this.lenght = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) { //añade un elemento a la cola
        const newNode = new Node(value);
        if(this.lenght === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode; //esto es para hacer el pointer, el que señala al último elemento, se conecte con el nuevo nodo
            this.last = newNode;//para hacer que el nuevo nodo sea el último
        }
        this.lenght++;

        return this;
    }
    dequeue() { //reto (mío)
        if(!this.lenght) {
            console.error('No hay elementos');
        } 
        if(this.lenght === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.lenght--;
        return this;
    }
}

const myQueue = new Queue();