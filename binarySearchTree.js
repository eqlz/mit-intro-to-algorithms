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

  delete(nodeToDelete) {
    if(nodeToDelete.left === null) { // left child is null or both left and right are null
      this.transplant(nodeToDelete, nodeToDelete.right);
    }
    else if(nodeToDelete.right === null) { // left child is not null, right child is null
      this.transplant(nodeToDelete, nodeToDelete.left);
    }
    else { // neither left child nor right child is null
      // find a node:
      // - in right sub-tree of nodeToDelete
      // - whose left child is null
      
      // TO BE CONTINUED
    }
  }

  transplant(oldNode, newNode) {
    if(oldNode.parent === null) { 
      this[root] = newNode;
    }
    // find oldNode's parent, decide if oldNode is a left or right child
    // from oldNode's parent perspective to replace oldNode with newNode
    else if(oldNode === oldNode.parent.left) { 
      oldNode.parent.left = newNode;
    }
    else {
      oldNode.parent.right = newNode;
    }

    // from newNode's perspective, to replace its parent with oldNode's parent
    if(newNode !== null) {
      newNode.parent = oldNode.parent;
    }
  }

  minimum(node) {
    while(node.left !== null) {
      node = node.left;
    }
    return node;
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