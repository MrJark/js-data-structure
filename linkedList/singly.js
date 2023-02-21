
//visualización de una singlyLinkedList
// let singlyLinkedList = {
//     head: {
//         value: 1,
//         next: {
//             value: 2, 
//             next: {
//                 value: 3,
//                 next: {
//                     value: 4,
//                     next: null
//                 }
//             }
//         }
//     }
// }

class Node { // lo hacemos para no repetir código ya que todas las estructuras acaban y empiezan así (si el siguiente valor es null)
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;

        this.length = 1;
    }
    append(value) { //este método nos añada un valor a la cola
        const newNode = new Node(value);

        this.tail.next = newNode; //esto nos incluye el nuevo nodo a la cola pero seguimos teniendo el null
        this.tail = newNode; //con esto añadimos el nuevo nodo que ya lleva en él el nulñl al final
        this.length++;

        return this;
    }
    prepend (value) { //para agregar nodos a la cabeza y no a la cola
        const newNode = new Node (value);

        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }
    insert(index, value) { //para agregar un nuevo nodo en el lugar que quieras
        if(index >= this.length) { //si lo queremos añadir en una posición que es más grande de la cantidad de elementos, nos lo coloca en la última posición
            return this.append(value);
        }
        // el problema es que tenemos que guardar la posición posterior donde queremos insertarlo sino js lo borra por tanto hacemos lo siguiente:
        const newNode = new Node(value); //el nodo que quiero añadir
        const firstPointer = this.getTheIndex(index - 1); // coger el nodo posterior al nodo que voy a añadir (si lo hubiere)
        const holdingPointer = firstPointer.next; //el nodo posterior mandarlo a la posición next, la siguiente a nuestro nodo
        firstPointer.next = newNode; //crear el nuevo nodo e la psoición que querías
        newNode.next = holdingPointer; //poner el nodo posterior en la posición next del nuevo nodo

        this.length++;

        return this;
    }
    getTheIndex(index) { //método para buscar en index donde quiero añadir ese nodo
        let counter = 0;
        let currentNode = this.head; //la cuenta siempre la empezamos desde el cero, es decir, la cabeza. 

        while (counter !== index) { //es para recorrer la linkedList hasta la psoición qeu el hemos dicho
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index){
        if(index > this.length || index < 0){
            console.error("Index of bounds");
        }
    
        const holdingNode = this.getTheIndex(index-1);
        if (index === 0) {
            this.head = holdingNode.next;
        }else{
            const removedNode = holdingNode.next;
            holdingNode.next = removedNode.next;
        }
        
        this.length--;
        
        return this;    
      }
}

let myLinkedList = new MySinglyLinkedList(1);