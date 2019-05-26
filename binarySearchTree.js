const root = Symbol('root');

class BinarySearchTree {
  constructor() {
    this[root] = null;
  }

  insert(data) {
    let newNode = new BinarySearchTreeNode(data);
    
    if(this[root] === null) { // when binary search tree is empty
      this[root] = newNode;
    }
    else {
      let parentNode = this[root];

      while(parentNode !== null) { // find the node in correct left or right sub-tree to add newNode 
        if(newNode.data < parentNode.data) {
          parentNode = parentNode.left;
        } 
        else {
          parentNode = parentNode.right;
        }
      }

      newNode.parent = parentNode;
      if(newNode.data < parentNode.data) {
        parentNode.left = newNode;
      }
      else {
        parentNode.right = newNode;
      }
    }
  }

  delete() {

  }
}


class BinarySearchTreeNode {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}