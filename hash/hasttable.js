class HastTable {
    constructor(size) {
        this.data = new Array(size);
    }
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.lenght; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.lenght;
        }
        return hash;
    }
    set(key, value) {//método para agregar elementos al hash
        const address = this.hashMethod(key);
        if(!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key) { //para obtener los valores del hash a través de darle la key
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for(let i= 0; i < currentBucket.lenght; i++) {
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }   
    delete(key){// reto que no he podido completar
        const address = this.hashMethod(key)
        const currentBucket = this.data[address]
        if (currentBucket) {
          for (let i = 0; i < currentBucket.length; i++) {
            if (currentBucket[i][0] === key) {
              let arrDeletedItems = currentBucket.splice(i, 1)
              return arrDeletedItems[0];
            }
          }
        }
        return undefined;
    }
    getAllKeys(){// reto que no he podido completar
        let keys = []
        for (let i = 0; i < this.data.length; i++) {
          const element = this.data[i]
          if(element){
            if(element.length > 1){
              for (let j = 0; j < element.length; j++) {
                const item = element[j];
                keys = [...keys, item[0]]
              }
            }else{
              keys = [...keys, element[0][0]]
            }
          }
        }
    
        return keys
    }
}
const myHashTable = new HashTable(50);