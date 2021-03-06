const head = Symbol("head");
const tail = Symbol("tail");

class DoublyLinkedList{
  constructor() {
    this[head] = null;
    this[tail] = null;
  }

  get(index) {
    if(index > -1) {
      let currentNode = this[head];
      let i = 0;
      while(i < index && currentNode !== null) {
        currentNode = currentNode.next;
        i++;
      }
      return currentNode !== null ? currentNode : undefined;
    } 
    else {
      return undefined;
    }
  }

  add(data) {
    const newNode = new DoublyLinkedListNode(data);

    if(this[head] === null) {
      this[head] = newNode;
    } 
    else {
      this[tail].next = newNode;
      newNode.prev = this[tail];
    }

    this[tail] = newNode;
  }

  remove(index) {
    if(this[head] === null || index < 0) {
      throw `Index ${index} doesn't exist in the list.`;
    }

    let nodeToBeRemoved = this.get(index);

    if(nodeToBeRemoved.prev === null && nodeToBeRemoved.next === null) {
      this[head] = null;
      this[tail] = null;
      return nodeToBeRemoved;
    }

    if(nodeToBeRemoved.prev === null) { // remove head
      nodeToBeRemoved.next.prev = null;
      this[head] = nodeToBeRemoved.next;
      return nodeToBeRemoved;
    }
    else if(nodeToBeRemoved.next === null) {// remove tail
      nodeToBeRemoved.prev.next = null;
      this[tail] = nodeToBeRemoved.prev;
      return nodeToBeRemoved;
    }
    else {
      nodeToBeRemoved.prev.next = nodeToBeRemoved.next;
      nodeToBeRemoved.next.prev = nodeToBeRemoved.prev;
      return nodeToBeRemoved;
    }
  }
}

class DoublyLinkedListNode {
  constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
  }
}

module.exports = DoublyLinkedList;

const list = new DoublyLinkedList();
list.add('a');
list.add('b');
list.add('c');
list.add('d');
// console.log(list);
// console.log('head: ', list[head]);
// console.log('tail: ', list[tail]);

// console.log(list.get(0));

// remove head
// list.remove(0)

// remove tail
// list.remove(3)

// remove node between head and tail
// list.remove(2)