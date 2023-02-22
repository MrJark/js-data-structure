//   10
//  5   23
// 2 8 34 83

class Node {
    constructor(value) {
        this.left =null;
        this.right =null;
        this.lenght = 0;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; //el primer elemento del nodo
    }
    insert(value) {
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if(value < currentNode.value) {
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
            }
        }
    }
}