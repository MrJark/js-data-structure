
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
    pop() {// para eliminar el últimmo elemento del array
        const lastItem = this.data[this.length - 1]; //el -1 se debe a que empieza a contar desde el 1 pero en verdad, es el 0 el primer número
        delete this.data[this.length - 1]; //aquí 'delete' es una keyword de js
        this.length--;
        return lastItem;
    }
    delete(index) { //este método es para borrar un index != al último
        const item = this.data[index]
        this.shiftIndex(index);

        return item;
    } 
    shiftIndex(index) { //este método lo que hace es reacomodar todos los elementos al eliminar uno que no sea el último
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data [i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
    unshift(item){
        if(!item){
          return this.length;
        }
        if(this.length === 0){
          this.data[0] = item;
          this.length++;
          return this.length;
        }
        for(let i = this.length; i > 0; i--){
          this.data[i] = this.data[i - 1];
        }
        
        this.data[0] = item;
        this.length++;
        return this.length;
    }
}

const myArray = new MyArray();

//Datos:

//cada método, le sigue un paréntesis y dentro de este puede, o no, haber un item, o un index. Esto es la manera con la que llamamos a los métodos, es decir, si queremos llamar al método 'get' lo haremos: myArray.get('index') Esro nos devuelve el elemento que haya en ese index, en el caso de .push() tenemos que darle el item, no un index.