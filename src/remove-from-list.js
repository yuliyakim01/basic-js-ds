const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  //case where the first value in the list is the one to remove
  while (l !== null && l.value === k){
    l =l.next;
  }
  let head = l;

  //if the list is empty, return null
  if (!head) {
    return null;
  };

  //traverse the list only if the head is a valid Node AND if the next Node is also a valid node
  while (head !== null && head.next !== null ) {
    //check if the next Node's value is the value we're looking for
    if (head.next.value === k){
      //change the reference to point to the Node after
      head.next = head.next.next;
    } else {
      //continue traversing the list
      head = head.next;
    }
  }
  return l;
}

module.exports = {
  removeKFromList
};
