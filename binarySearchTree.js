const root = Symbol('root');

class BinarySearchTree {
  constructor() {
    this[root] = root;
  }

  add(data) {
    
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