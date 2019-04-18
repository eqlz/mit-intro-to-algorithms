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

// explanation
/*
  Take first item in array key, 9, it's next is 16 and 16's index in key array is 1.
  so in next array, first item will 1.
  
  prev and next are arrays of indice of items in key array

*/