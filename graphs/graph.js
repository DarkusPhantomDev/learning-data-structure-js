/*
    2 - 0
  /  \
 1  - 3
*/

//Edge List: Representa las conexiones en arrays
const graph = [
  [0,2],
  [2,3],
  [2,1],
  [1,3]
]

// Adjacent List: Representadas por indices
//              0     1        2     3
const graph = [[2], [2,3], [0,1,3], [1,2]]

//OTra forma de representar el Adjacent List: Representada con Hash table, en forma JSON list
const graph = {
  0: [2],
  1: [2,3],
  2: [0,1,2],
  3: [1,3],
}

// Adjacent Matrix: Se representa con 0 y 1. El 0 representa que no hay ningun nodo conectado con el indice mientras que el 1 si muestra una conexion
const graph = [
// 0,1,2,3
  [0,0,1,0],
  [0,0,1,1],
  [1,1,0,1],
  [0,1,1,0],
]

const graph = {
  0: [0,0,1,0],
  1: [0,0,1,1],
  2: [1,1,0,1],
  3: [0,1,1,0],
}
