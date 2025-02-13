const { resolveObjectURL } = require('buffer');
const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  root() {
    //return the root node, if no root, return null
    return this.rootNode || null;
  }

  add(data) {
    //create new node and assign it a variable newNode
    let newNode = new Node(data);

    //if the root doesn't exist, assign the input value newNode to rootNode
    if (!this.rootNode) {
      this.rootNode = newNode;
      return this;
    }

    //create a variable acting as pointer to the root node, called currentNode
    let currentNode = this.rootNode;

    //if there is already a root node, check its children
    while (currentNode !== null) {
      if (data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      } else {
        return this;
      }
    }
}

has(data) {
  //traverse the tree, if data matches currentNode.data, return true, if not, return false
  let currentNode = this.rootNode;

  while (currentNode) {
    if (data === currentNode.data) {
      return true;
    }
    if (data < currentNode.data) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }
  return false;
}

find(data) {
  let currentNode = this.rootNode;
  while (currentNode) {
    if (data === currentNode.data) {
      return currentNode;
    }
    if (data < currentNode.data) {
      currentNode = currentNode.left;

    } else {
      currentNode = currentNode.right;
    }
  }
  return currentNode;
}

remove(data) {
  //tree is empty
  if (this.rootNode === null) {
    return null;
  }

  // recursive function to remove a node
  const removeNode = (node, data) => {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = removeNode(node.left, data); //assign back to left child
      return node;
    } else if (data > node.data) {
      node.right = removeNode(node.right, data); //assign back to right child
      return node;
    }

    // node found, now remove it

    //case 1: node has no children
    if (node.left === null && node.right === null) {
      return null;
    }

    //case 2: node has one child
    if (node.left === null) {
      return node.right;
    }
    if (node.right === null) {
      return node.left;
    }

    //case 3: node has two children
    //find the in-order successor (smallest node in the right subtree)
    let successor = node.right;
    while (successor.left !== null) {
      successor = successor.left;
    }

    //replace current node's data with successor's data
    node.data = successor.data;

    //delete the successor node from the right subtree
    node.right = removeNode(node.right, successor.data);

    return node;
  };

  // update root reference
  this.rootNode = removeNode(this.rootNode, data);
}


min() {
  let currentNode = this.rootNode;
  while (currentNode.left) {
    currentNode = currentNode.left;
  }
  return currentNode.data;
}

max() {
  let currentNode = this.rootNode;
  while (currentNode.right) {
    currentNode = currentNode.right;
  }
  return currentNode.data;
}
}

module.exports = {
  BinarySearchTree
};