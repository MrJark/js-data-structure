
//Contruyendo un array con sus métodos de manera que se pueda ver que está pasando caundo usamos los distintos métodos que tiene por defecto js
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    get(index) {  //este métoo nos permite obtener (get) el índice de cada uno de los datos que le pasemos
        return this.data[index];
    }
    push(item) {// método para enviar elementos al array
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
}

const myArray = new MyArray();