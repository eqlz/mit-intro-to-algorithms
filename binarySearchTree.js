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
      
      let replacementNode = this.minimum(nodeToDelete.right);
      if(replacementNode.parent !== nodeToDelete) {
        // replacementNode's right child takes the position of replacementNode
        this.transplant(replacementNode, replacementNode.right)

        // nodeToDelete's right child becomes replacementNode's right child
        replacementNode.right = nodeToDelete.right;

        // then nodeToDelete's right child, now replacementNode's child right needs
        // to update its parent from nodeToDelete to replacementNode
        replacementNode.right.parent = replacementNode;
      }
      this.transplant(nodeToDelete, replacementNode);
      replacementNode.left = nodeToDelete.left;
      replacementNode.left.parent = replacementNode;
    }
  }

  transplant(oldNode, newNode) { // newNode takes the position of oldNode
    if(oldNode.parent === null) { 
      this[root] = newNode;
    }
    // find oldNode's parent, decide if oldNode is a left or right child
    // from oldNode's parent perspective to replace oldNode with newNode
    else if(oldNode === oldNode.parent.left) { // oldNode is a left child of its parent
      oldNode.parent.left = newNode;
    }
    else { // oldNode is a right child of its parent
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

  maximum(node) {
    while(node.right !== null) {
      node = node.right;
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