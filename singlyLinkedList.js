// Implement Nicolas Zakas's post:
// https://humanwhocodes.com/blog/2019/01/computer-science-in-javascript-linked-list/

const head = Symbol('head');

class SinglyLinkedList {
  constructor() {
    this[head] = null; 
  }

  add(data) {
    let newNode = LinkedListNode(data);

    if(this[head] === null) {
      this[head] = newNode;
    }
    else {
      let current = this[head];
      while(current.next !== null) {
        curent = current.next;
      }
      current.next = newNode;
    }
  }

  get(index) {
    if(index > -1) {
      let current = this[head];
      let i = 0;

      while(current.next !== null && i < index) {
        current = current.next;
        i = i + 1;
      }

      return current !== null ? curent : undefined;
    }
    else {
      return undefined;
    }
  }

  remove(index) {
    /* 
     * There are four special cases to consider:
     * 1. the linked list is empty
     * 2. index is negative integer
     * 3. index is larger than the length of linked list
     * 4. node to remove is the head of linked list
     * 
     */

    if(this[head] === null || index < 0) { // handle special case 1 and case 2
      throw new RangeError(`Index ${index} does not exist in the list.`)
    }

    if(index === 0) { // handle special case 4
      let nodeToBeRemoved = this[head];
      this[head] = nodeToBeRemoved.next;
      return nodeToBeRemoved;
    }

    let current = this[head];
    let previous = null;
    let i = 0;
    while(current.next !== null && i < index) {
      previous = current;
      current = current.next;
      i ++
    }

    if(current !== null) {
      previous.next = current.next;
      return current;
    }

    throw new RangeError(`Index ${index} does not exist in the list.`);
  }

  *values() {
    let current = this[head];
    while(current !== null) {
      yield current;
      current = current.next;
    }
  }
}

class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}