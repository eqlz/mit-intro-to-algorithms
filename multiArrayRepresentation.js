/*
 * This is a multi array representation of objects
*/

var DoublyLinkedList = require('./linkedList');

const list = new DoublyLinkedList();
list.add(9);
list.add(16);
list.add(4);
list.add(1);

let key = [9, 16, 4, 1];
let prev = [-1 , 0, 1, 2];
let next = [1, 2, 3, -1];