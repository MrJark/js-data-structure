
class Node { //para no repetir código
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.lenght = 0;
    }
    peek() { //este método nos permite señalar el último elemento en la lista que se agregó, el de 'arriba'
        return this.top;
    }
    push(value) { //este método agrega los elementos al final
        const newNode = new Node(value);
        //En estos métodos tenemos que generar una validación apra comprobar si el elemento que estás añadiendo no es el último
        if(this.lenght === 0) { //si no hay, el nuevo nodo creado es tanto el top como tl bottom
            this.top = newNode;
            this.bottom = newNode;
        } else { //pero si existe uno, el que existe lo guardamos en la const para que el garbage colecto de js no lo borre, ponemos tn top el newNode y ponemos en el top.next (el inmediatamente posterior al top) el anterior
            const holdingPointer = this.top; 
            this.top = newNode;
            this.top.next = holdingPointer;
        }

        this.lenght++;
        return this;
    }
    // pop() {//reto (mío, no conseguido)
    //     if (this.lenght === 0) {
    //         this.top = null;
    //         this.bottom = null;
    //     } else {
    //         const prevPointer = this.top.next;
    //         delete this.top;
    //         this.top = prevPointer;
    //     }

    //     this.lenght--;
    //     return this; 
    // }
    pop() {
        if (!this.lenght) {
            console.error('El stack está vacio')
            return;
        }
        const topNode = this.top;
        if(this.lenght === 1) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top = this.top.next;
        }
        this.lenght--;
        return topNode;
    }
}

const myStack = new Stack();