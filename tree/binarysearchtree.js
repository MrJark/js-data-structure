//   10
//  5   23
// 2 8 34 83

class Node {
    constructor(value) {
        this.left =null;
        this.right =null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; //el primer elemento del nodo
    }
    insert(value) {
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode; //si no existe nada en el tree, le damos es valor inicial
        } else {
            let currentNode = this.root;
            while (true) {
                if(value < currentNode.value) { //los menosres que el nodo principal, van a la izq
                    if(!currentNode.left) {
                        currentNode.left = newNode;//si no hay nada en la izq, se coloca 
                        return this;
                    }
                    currentNode = currentNode.left; //si sí hay, pasa al siguiente nodo y vuelve a comprobar
                } else { //lo mismo pero para el lado derecho donde los valores son mayores al current
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    search(value)
}
const tree = new BinarySearchTree();