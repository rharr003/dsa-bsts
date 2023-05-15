class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let stack = [];
    if (!this.root) {
      this.root = new Node(val);
    } else {
      stack.push(this.root);
    }
    while (stack.length) {
      const current = stack.pop();
      if (val > current.val)
        current.right
          ? stack.push(current.right)
          : (current.right = new Node(val));
      if (val < current.val)
        current.left
          ? stack.push(current.left)
          : (current.left = new Node(val));
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (!this.root) this.root = new Node(val);
    function recurse(node) {
      if (node.val > val && !node.left) {
        node.left = new Node(val);
      } else if (node.val > val) {
        recurse(node.left);
      } else if (node.val < val && !node.right) {
        node.right = new Node(val);
      } else if (node.val < val) {
        recurse(node.right);
      }
    }
    recurse(this.root);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while (current) {
      if (current.val === val) return current;
      current.val > val ? (current = current.left) : (current = current.right);
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) return;
    function recurse(node) {
      if (!node) return;
      if (node.val === val) {
        return node;
      } else if (node.val > val) {
        return recurse(node.left);
      } else if (node.val < val) {
        return recurse(node.right);
      }
    }
    return recurse(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const arr = [];
    function traverse(node) {
      arr.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const arr = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      arr.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const arr = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      arr.push(node.val);
    }
    traverse(this.root);
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const arr = [];
    let stack = [this.root];
    while (stack.length) {
      const current = stack.shift();
      arr.push(current.val);
      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right);
    }
    return arr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
