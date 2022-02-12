class HashTable {
    constructor(size) {
        this.data = new Array(size); //Agrega la cantidad de espacios al data
    }

    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length; //Genera numeros random segun el tamaño de data
        }
        return hash;
    }

    set(key, value) {
        const address = this.hashMethod(key) //Pasamos por parametro la key para que nos devuelva la direccion de ese hash

        if (!this.data[address]) {
            this.data[address] = [];
        }

        this.data[address].push([key, value]);
    }
}

const myHashTable = new HashTable(50); //Le pasa 50 como parametro para indicarle que va a usar 50 espacios inicialmente
console.log(myHashTable); //HashTable { data: [ <50 empty items> ] }

myHashTable.set('Luis', 1999);
console.log(myHashTable); //HashTable { data: [ <22 empty items>, [ [Array] ], <27 empty items> ] }

myHashTable.set('Mariana', 1997);
console.log(myHashTable);

myHashTable.set('Nelcys', 1998);
console.log(myHashTable);

myHashTable.set('Angelo', 1998);
console.log(myHashTable);
/*
HashTable {
  data: [
    <6 empty items>,
    [ [Array] ],
    <3 empty items>,
    [ [Array] ],
    <11 empty items>,
    [ [Array] ],
    [ [Array] ],
    <26 empty items>
  ]
}
*/