# Hash Tables

## ¿Qué es?

Las Hash table funcionan similar a un Array, solo que en vez de indices numericos, tenemos indices o keys en caracteres. No es necesario una funcion intermedia que convierte el key en caracteres en indice numerico

## Metodos

| Metodo | Accion                          |
| ------ | ------------------------------- |
| insert | Inserta un elemento en la tabla |
| search | Busca un elemento por key       |
| delete | Borra un elemento               |

## Colision de Hash Table

En ocasiones, pasar un key distinto puede generar el mismo hash. Eso puede ocasionar que tengas dos elementos guardados en mismo buckets (array de hash).

No hay forma de evitarlo, pero hay estrategias que pueden ayudarte a evitar estos problemas.



**Hash tables en otros lenguajes**

| Lenguaje   | Hash Table   |
| ---------- | ------------ |
| javascript | Objetos      |
| python     | Diccionarios |
| java       | Maps         |
| go         | Maps         |
| ruby       | Hashes       |



![](https://media4.giphy.com/media/qvEkzFvba7v6u3vKbo/giphy.gif)






---

Básicamente una Hash table es similar a un objeto JSON, arreglos asociativos en PHP o Mapas en C++

La unica diferencia es que a la *key* que tu pases, se le va a plicar una función que convertira en una referencia de memoria que es donde se guardaran los valores que tu les pases

Para obtener de regreso sus valores, tienes que usar esa misma *key*; que será convertida de nuevo en Hash con la referencia de memoria en donde estaban guardados tus valores y te los devolverá

## Construyendo una Hash Table

```javascript
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
//Imprime:
/*HashTable {
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
```

# Lists

## Singly Linked List

### Metodos

| Método          | Acción                       |
| --------------- | ---------------------------- |
| prepend         | Agrega un nodo al inicio     |
| append          | Agrega un nodo al final      |
| Lookup / search | Busca un nodo                |
| insert          | Insertar un Nodo en la Lista |
| delete          | Borrar un nodo               |

![Singly Linked List](/home/darkusphantom/Escritorio/Estructuras de datos Javascript/singly-linked-list.png)

Las Listas enlazadas en el nodo tienen dos atributos:

- Valor: Indica el valor que tiene almacenado en el nodo
- Siguiente: Es un puntero que señala al siguiente nodo

Además, esta compuesta por la cabeza y la cola. La cabeza es el primer nodo de la lista mientras la cola es el ultimo nodo de la misma.

Con las Singly Linked List no puedes regresarte. Siempre va recorriendo desde la primera posicion hasta la ultima posicion. Si quieres regresar, tienes que volver a empezar el loop

### Código

```javascript
// 1 --> 2 --> 3 --> 4 --> 5 --> null

let singlyLinkedList = {
	head: {
		value: 1,
		next: {
			value: 2,
			next: {
				value: 3,
				next: {
					value: 4,
					next: {
						value: 5,
						next: null,
					}
				}
			}
		}
	}
}
```

```javascript
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}


class SinglyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new Node(value);

		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}
}
```

Ahora, probemos el código agregando un valor con el método `append`:

```javascript
let myLinkedList = new SinglyLinkedList(1);
console.log(myLinkedList);

myLinkedList.append(2);
console.log(myLinkedList);

myLinkedList.append(3);
console.log(myLinkedList);

myLinkedList.append(4);
console.log(myLinkedList);

myLinkedList.append(5);
console.log(myLinkedList);
```

