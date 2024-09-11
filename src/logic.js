export { Tree };

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  sortedArrayToBST(array = []) {
    if (array.length === 0) return null;
    array = [...new Set(array.sort((a, b) => a - b))];
    let mid = Math.floor(array.length / 2);
    let node = new Node(array[mid]);
    node.left = this.sortedArrayToBST(array.slice(0, mid));
    node.right = this.sortedArrayToBST(array.slice(mid + 1, array.length));
    return node;
  }

  buildTree(array) {
    this.root = this.sortedArrayToBST(array);
    return this.root;
  }

  insert(value) {
    const addNode = function (root, val) {
      if (root === null) {
        return new Node(val);
      }
      if (root.data === val) return root;
      if (root.data < val) {
        root.right = addNode(root.right, val);
      } else if (root.data > val) {
        root.left = addNode(root.left, val);
      }
      return root;
    };
    this.root = addNode(this.root, value);
  }

  find(root = this.root, value) {
    if (root) {
      if (root.data === value) return root;
      if (root.data < value) return this.find(root.right, value);
      if (root.data > value) return this.find(root.left, value);
    }
    return;
  }

  delete(value) {
    const remove = (root, val) => {
      if (!root) return root;
      if (root.data > val) {
        root.left = remove(root.left, val);
        return root;
      } else if (root.data < val) {
        root.right = remove(root.right, val);
        return root;
      }

      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      let succParent = root;
      let succ = root.right;
      while (!succ.left) {
        succParent = succ;
        succ = succ.left;
      }

      root.data = succ.data;

      if (succParent.left === succ) {
        succParent.left = succ.right;
      } else {
        succParent.right = succ.right;
      }

      return root;
    };
    this.root = remove(this.root, value);
  }

  levelorderRec(callback, que = [this.root]) {
    let tempArr = [...que];
    if (tempArr.length === 0) return;
    let node = tempArr.shift();
    if (node) {
      tempArr.push(node.left, node.right);
      if (typeof callback != "function" || !callback) {
        throw new TypeError("Callback function is required.");
      } else callback(node);
    }
    this.levelorderRec(callback, tempArr);
  }

  levelorderIte(callback) {
    let tempArr = [this.root];
    for (let i = 0; i < tempArr.length; i++) {
      let node = tempArr[i];
      if (node) {
        tempArr.push(node.left, node.right);
        if (typeof callback != "function" || !callback) {
          throw new TypeError("Callback function is required.");
        } else callback(node);
      }
    }
  }

  preOrder(callback, root = this.root) {
    if (!root) return;
    if (typeof callback != "function" || !callback) {
      throw new TypeError("Callback function is required.");
    } else callback(root);
    this.preOrder(callback, root.left);
    this.preOrder(callback, root.right);
  }

  inOrder(callback, root = this.root) {
    if (!root) return;
    this.inOrder(callback, root.left);
    if (typeof callback != "function" || !callback) {
      throw new TypeError("Callback function is required.");
    } else callback(root);
    this.inOrder(callback, root.right);
  }

  postOrder(callback, root = this.root) {
    if (!root) return;
    this.postOrder(callback, root.left);
    this.postOrder(callback, root.right);
    if (typeof callback != "function" || !callback) {
      throw new TypeError("Callback function is required.");
    } else callback(root);
  }

  height(node) {
    if (!this.root) return 0;
    let root = this.find(this.root, node.data);
    if (root) {
      let height = 0;
      let queue = [root];

      while (queue.length !== 0) {
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
          let node = queue.shift();
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
        }
        height++;
      }
      return height;
    } else return `node doesn't exist`;
  }

  depth(node, root = this.root, count = 0) {
    if (root) {
      if (root.data === node.data) return count;
      if (root.data < node.data) {
        count++;
        return this.depth(node, root.right, count);
      }
      if (root.data > node.data) {
        count++;
        return this.depth(node, root.left, count);
      }
    }
    return "not found";
  }

  isBalanced() {
    if (!this.root) return true;
    let hd = this.height(this.root.left) - this.height(this.root.right);
    return hd < -1 || hd > 1 ? false : true;
  }
  rebalance() {
    if (!this.isBalanced()) {
      const arr = [];
      this.levelorderRec((i) => arr.push(i.data));
      this.root = this.buildTree(arr);
    } else return;
  }
}
