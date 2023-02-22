class Node { // lo hacemos para no repetir código ya que todas las estructuras acaban y empiezan así (si el siguiente valor es null)
    constructor (value) {
        this.value = value;
        this.next = null;
        this.prev = null;//a diferencia de las sigly, estas pueden ir en ambas direcciones, tanto de head-tail como tail-head y por tanto tienen tres valores, el siguiente, el actual y el previo
    }
}

class MyDoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null,
        }
        this.tail = this.head;

        this.length = 1;
    }
    append(value) { //este método nos añada un valor a la cola
        const newNode = new Node(value);

        newNode.prev = this.tail;
        this.tail.next = newNode; //esto nos incluye el nuevo nodo a la cola pero seguimos teniendo el null
        this.tail = newNode; //con esto añadimos el nuevo nodo que ya lleva en él el nulñl al final
        this.length++;

        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        } else if (index === 0) {
            return this.prepend(value);
        }

        let newNode = new Node(value);
        let prevPointer = this.getTheIndex(index - 1);
        let nextPointer = prevPointer.next;
        newNode.prev = prevPointer;
        newNode.next = nextPointer;
        prevPointer.next = newNode;
        nextPointer.prev = newNode;
        this.length++;
        return this;
    }

    remove(index) {
        if (index >= this.length) {
            console.log("index fuera de rango");
            return;
        }
        let indexToRemove = this.getTheIndex(index);
        let nextPointer = indexToRemove.next;
        let prevPointer = indexToRemove.prev;
        if (prevPointer && nextPointer) {
            prevPointer.next = nextPointer;
            nextPointer.prev = prevPointer;
        } else if (!prevPointer) {
            nextPointer.prev = null;
            this.head = nextPointer;
        } else if (!nextPointer) {
            prevPointer.next = null;
            this.tail = prevPointer;
        }
        this.length--;
        return this;
    }

    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);