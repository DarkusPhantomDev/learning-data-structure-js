//      10
//   4      20
// 2  8  17   170

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            let existNode = false;

            while (existNode) { //while(true) {
                if (value < currentNode.value) {
                    if (!currentNode) {
                        currentNode.left = newNode;
                        //return this
                        existNode = true;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        //return this
                        existNode = true;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
}

const tree = new BinarySearchTree();
console.log(tree);

tree.insert(10);
console.log(tree);

tree.insert(4);
console.log(tree);

tree.insert(20);
tree.insert(2);
tree.insert(8);
tree.insert(17);
tree.insert(170);
console.log(tree);