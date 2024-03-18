class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  preOrder(root) {
    console.log("Preorder: " + this.pre(root));
  }

  pre(root) {
    let result = "";
    if (root) {
      result += root.value + " ";
      result += this.pre(root.left);
      result += this.pre(root.right);
    }
    return result;
  }

  inOrder(root) {
    console.log("Inorder: " + this.in(root));
  }

  in(root) {
    let result = "";
    if (root) {
      result += this.in(root.left);
      result += root.value + " ";
      result += this.in(root.right);
    }
    return result;
  }

  postOrder(root) {
    console.log("Postorder: " + this.post(root));
  }

  post(root) {
    let result = "";
    if (root) {
      result += this.post(root.left);
      result += this.post(root.right);
      result += root.value + " ";
    }
    return result;
  }

  levelOrder() {
    let result = "";
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      result += curr.value + " ";
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    console.log("BFS Traversal: " + result);
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  print() {
    console.log(this.root);
  }
}

const bst = new BinarySearchTree();
console.log("Tree is empty?", bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);

bst.levelOrder();

bst.delete(15);
bst.levelOrder();

// bst.print();

// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 15));
// console.log(bst.search(bst.root, 20));

// // dfs (depth first search) traversal techniques
// bst.preOrder(bst.root);
// bst.inOrder(bst.root);
// bst.postOrder(bst.root);
// bst.levelOrder(bst.root);

// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));
