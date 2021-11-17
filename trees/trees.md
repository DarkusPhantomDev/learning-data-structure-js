Un Binary Search Tree cuenta de un elemento padre, es decir, el elemento root. A partir de este elemento es donde comienza la busqueda.

La condicion de Binary Search es que tienes dos descendientes, no mas. Los descendientes que son mayores que el elemento padre, se coloca en el lado derecho, y los elementos que son menores que el padre, se colocan en el lado izquierdo.

Para buscar en un Binary Search Tree debes preguntarte: ¿Este elemento es mayor o menor que el que estoy buscando?. Si es mayor, ve a la izquierda hasta que encuentres el elemento que estabas buscando.


----

## ¿Qué son los arboles?

Los arboles son una estructura de datos que puede ser lineal o no. Los arboles tienen una estructura con nodos, que representan los hijos.

- Root: Es el nodo superior de todo el arbol. Es bastante similar al DOM del HTML (como punto de referencia), siendo el HTML el root y padre de todos.

- Parent / Padre: Contienen ramas que apuntan a otros nodos.

- Child / Hijo: es un nodo conectado directamente con otro cuando se aleja de la raiz

- Lead / Hojas: un nodo sin hijos.

- Sibiling / hermanos: Son un conjunto de nodos que vienen del mismo padre

- Subtree / Subarbol: Son arboles que estan dentro de los nodos

- Arm /baso: Es la conexion entre un nodo y otro

## Tipos de arboles

### Arboles binarios (Perfect Binary Tree)

Este tipo de arboles en concreto lo que hacen es que sus nodos se van multiplicando y van aumentando. A esto se le llama **arbol balanceado**, y se debe a que tiene la misma cantidad de nodos en ambos lados. (nunca los veras sin un Lead).

Tienen un nodo principal el cual tendra N ramas, donde las siguientes ramas que salen del padre seran el doble o 2N

### Busqueda de Arboles Binarios 

- **(Balance Tree)**
Estos nos permiten poder buscar los datos de una manera ordenada. Al estar ordenado, de un lado se ponen los numeros que disminuyen y por el otro los que aumentan.

Una de las ventajas que nos da, es que podemos buscar entre grandes cantidades de datos donde podemos aplicar la técnica "Divide y vencerás".

- **(Unbalance Tree)**

Cuando se presente este caso, hay que balancear el arbol. En internet hay metodos que te ayudan a balancear el arbol

## Métodos de los arboles

- Search: Busca un nodo
- Insert: Inserta un nodo
- Delete: Borra un nodo


