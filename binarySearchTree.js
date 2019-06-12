const root = Symbol('root');

class BinarySearchTree {
  constructor() {
    this[root] = null;
  }

  search(node, entryNode) {
    if (node.data === entryNode.data || entryNode === null) {
      return entryNode;
    } else if (node.data < entryNode.data) {
      this.search(node, entryNode.left);
    } else {
      this.search(node, entryNode.right);
    }
  }

  iterativeSearch(node, entryNode) {
    while (node.data !== entryNode.data || entryNode !== null) {
      if (node.data < entryNode.data) {
        entryNode = entryNode.left;
      } else {
        entryNode = entryNode.right;
      }
    }
    return entryNode;
  }

  successor(node) {
    // the smallest key that is greater than the given node,
    // will be found in the right subtree of this given node
    // use minimum() to find the smallest node
    if(node.right !== null) {
      return this.minimum(node.right);
    }

    // two conditions:
    // - right sub-tree is empty
    // - node has a successor, because there can be a case where node doesn't have a successor
    
    // successor is going to be:
    // - ancestor of of input node
    // - lowest ancestor of this input node
    // - input node is in the left sub-tree of this ancestor
    let ancestorNode = node.parent;
    while(ancestorNode && ancestorNode.right === node) {
      // go up one more layer
      node = ancestorNode;
      ancestorNode = ancestorNode.parent;
    }
    return ancestorNode;

  }

  predecessor(node) {
    // predecessor of a given node
    // greatest node that is smaller than the given node
    if(node.left !== null) {
      return this.maximum(node.left);
    }

    // when given node's left sub-tree is empty
    // the given node's predecessor is such:
    // - ancestor of the input node
    // - the input is in the right sub-tree of this ancestor node
    // - lowest ancestor of the input node
    let ancestorNode = node.parent;
    while(ancestorNode && ancestorNode.left === node) {
      node = ancestorNode;
      ancestorNode = ancestorNode.parent;
    }
    return ancestorNode;
  }

  insert(data) {
    let newNode = new BinarySearchTreeNode(data);

    if (this[root] === null) { // when binary search tree is empty
      this[root] = newNode;
    } else {
      let parentNode = this[root];

      while (parentNode !== null) { // find the node in correct left or right sub-tree to add newNode 
        if (newNode.data < parentNode.data) {
          parentNode = parentNode.left;
        } else {
          parentNode = parentNode.right;
        }
      }

      newNode.parent = parentNode;
      if (newNode.data < parentNode.data) {
        parentNode.left = newNode;
      } else {
        parentNode.right = newNode;
      }
    }
  }

  delete(nodeToDelete) {
    if (nodeToDelete.left === null) { // left child is null or both left and right are null
      this.transplant(nodeToDelete, nodeToDelete.right);
    } else if (nodeToDelete.right === null) { // left child is not null, right child is null
      this.transplant(nodeToDelete, nodeToDelete.left);
    } else { // neither left child nor right child is null
      // find a node:
      // - in right sub-tree of nodeToDelete
      // - whose left child is null

      let replacementNode = this.minimum(nodeToDelete.right);
      if (replacementNode.parent !== nodeToDelete) {
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
    if (oldNode.parent === null) {
      this[root] = newNode;
    }
    // find oldNode's parent, decide if oldNode is a left or right child
    // from oldNode's parent perspective to replace oldNode with newNode
    else if (oldNode === oldNode.parent.left) { // oldNode is a left child of its parent
      oldNode.parent.left = newNode;
    } else { // oldNode is a right child of its parent
      oldNode.parent.right = newNode;
    }

    // from newNode's perspective, to replace its parent with oldNode's parent
    if (newNode !== null) {
      newNode.parent = oldNode.parent;
    }
  }

  minimum(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  maximum(node) {
    while (node.right !== null) {
      node = node.right;
    }
    return node;
  }

  inOrderWalk(node) {
    if(node.left) {
      this.inOrderWalk(node.left);
    }
    console.log(node.data);
    if(node.right) {
      this.inOrderWalk(node.right);
    }
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