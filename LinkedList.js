const util = require("util");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
  }

  showList() {
    //show the list of node in this format
    //6 ==>1 ==>2 ==>3 ==>4 ==>5 ==>7 ==> null
  }

  sumList() {
    //return the sume of the entire list
  }

  insert(data) {
    //add a note to the list
  }

  prepend(data) {
    //add it to the front of the list
  }

  push(data) {
    //added to the end of the list
  }

  getListSize() {
    //return the size of the list
  }

  printEntireList() {
    //printing out the entire list
    //Clue is somewhere in this file
  }

  getTargetNode(target) {
    //return a specific node
    //if node doesn't exists
    //return `Target ${target} not found`;
  }

  insertByTarget(target, data) {
    //insert a node to the specified target
    //if node doesn't exists
    //return `${target} not found, cannot insert`;
  }

  removeByTarget(target) {
    //remove a node from the specified target
    //if node doesn't exists
    //return `${target} not found, cannot remove`;
  }
}

// Create a linked list
const list = new SingleLinkedList();

// Insert nodes into the list
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
// list.prepend(6);
// list.push(7);
// Display the list
// console.log(list.showList())
// console.log(list.getTargetNode(7))
// console.log(list.insertByTarget(7, 55));
// console.log(list.removeByTarget(55));
// console.log(list.getListSize())
// Sum the elements in the list
// console.log("Sum of the list:", list.sumList());

console.log(
  util.inspect(list, { showHidden: false, depth: null, colors: true })
);

/*

SingleLinkedList {
  head: Node {
    data: 6,
    next: Node {
      data: 1,
      next: Node {
        data: 2,
        next: Node {
          data: 3,
          next: Node {
            data: 4,
            next: Node { data: 5, next: Node { data: 7, next: null } }
          }
        }
      }
    }
  }
}

*/
