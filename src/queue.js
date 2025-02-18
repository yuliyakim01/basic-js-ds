const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    //if the queue is empty, assign the head and tail to newNode
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else { //else, set the next node after the tail of the current node to newNode
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) {
      return null;
    };
    const valueToReturn = this.head.value;
    this.head = this.head.next;
    
    if (!this.head) {
      this.tail = null;
    }
    return valueToReturn;
  }
  
}

module.exports = {
  Queue
};
