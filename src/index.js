import { Tree } from "./logic";

function generateArray() {
  const arr = [];
  for (let i = 0; i < 20; i++) {
    let num = Math.floor(Math.random() * 101);
    arr.push(num);
  }
  return arr;
}

const tree = new Tree();
tree.buildTree(generateArray());
console.log(tree.isBalanced());
function log(node) {
  console.log(node);
}
tree.levelorderIte(log);
tree.levelorderRec(log);
tree.preOrder(log);
tree.inOrder(log);
tree.postOrder(log);
tree.insert(105);
tree.insert(115);
tree.insert(125);
console.log(tree.isBalanced());
tree.rebalance();
console.log(tree.isBalanced());
tree.levelorderIte(log);
tree.levelorderRec(log);
tree.preOrder(log);
tree.inOrder(log);
tree.postOrder(log);

function prettyPrint(node, prefix = "", isLeft = true) {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}
prettyPrint(tree.root);
