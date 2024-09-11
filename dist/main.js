/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n\nfunction generateArray() {\n  const arr = [];\n  for (let i = 0; i < 20; i++) {\n    let num = Math.floor(Math.random() * 101);\n    arr.push(num);\n  }\n  return arr;\n}\nconst tree = new _logic__WEBPACK_IMPORTED_MODULE_0__.Tree();\ntree.buildTree(generateArray());\nconsole.log(tree.isBalanced());\nfunction log(node) {\n  console.log(node);\n}\ntree.levelorderIte(log);\ntree.levelorderRec(log);\ntree.preOrder(log);\ntree.inOrder(log);\ntree.postOrder(log);\ntree.insert(105);\ntree.insert(115);\ntree.insert(125);\nconsole.log(tree.isBalanced());\ntree.rebalance();\nconsole.log(tree.isBalanced());\ntree.levelorderIte(log);\ntree.levelorderRec(log);\ntree.preOrder(log);\ntree.inOrder(log);\ntree.postOrder(log);\nfunction prettyPrint(node) {\n  let prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n  let isLeft = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n  if (node === null) {\n    return;\n  }\n  if (node.right !== null) {\n    prettyPrint(node.right, `${prefix}${isLeft ? \"│   \" : \"    \"}`, false);\n  }\n  console.log(`${prefix}${isLeft ? \"└── \" : \"┌── \"}${node.data}`);\n  if (node.left !== null) {\n    prettyPrint(node.left, `${prefix}${isLeft ? \"    \" : \"│   \"}`, true);\n  }\n}\nprettyPrint(tree.root);\n\n//# sourceURL=webpack://binarysearchtree/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tree: () => (/* binding */ Tree)\n/* harmony export */ });\n\nclass Node {\n  constructor(data) {\n    let left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    let right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n    this.data = data;\n    this.left = left;\n    this.right = right;\n  }\n}\nclass Tree {\n  constructor() {\n    let root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    this.root = root;\n  }\n  sortedArrayToBST() {\n    let array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    if (array.length === 0) return null;\n    array = [...new Set(array.sort((a, b) => a - b))];\n    let mid = Math.floor(array.length / 2);\n    let node = new Node(array[mid]);\n    node.left = this.sortedArrayToBST(array.slice(0, mid));\n    node.right = this.sortedArrayToBST(array.slice(mid + 1, array.length));\n    return node;\n  }\n  buildTree(array) {\n    this.root = this.sortedArrayToBST(array);\n    return this.root;\n  }\n  insert(value) {\n    const addNode = function (root, val) {\n      if (root === null) {\n        return new Node(val);\n      }\n      if (root.data === val) return root;\n      if (root.data < val) {\n        root.right = addNode(root.right, val);\n      } else if (root.data > val) {\n        root.left = addNode(root.left, val);\n      }\n      return root;\n    };\n    this.root = addNode(this.root, value);\n  }\n  find() {\n    let root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;\n    let value = arguments.length > 1 ? arguments[1] : undefined;\n    if (root) {\n      if (root.data === value) return root;\n      if (root.data < value) return this.find(root.right, value);\n      if (root.data > value) return this.find(root.left, value);\n    }\n    return;\n  }\n  delete(value) {\n    const remove = (root, val) => {\n      if (!root) return root;\n      if (root.data > val) {\n        root.left = remove(root.left, val);\n        return root;\n      } else if (root.data < val) {\n        root.right = remove(root.right, val);\n        return root;\n      }\n      if (!root.left) {\n        return root.right;\n      } else if (!root.right) {\n        return root.left;\n      }\n      let succParent = root;\n      let succ = root.right;\n      while (!succ.left) {\n        succParent = succ;\n        succ = succ.left;\n      }\n      root.data = succ.data;\n      if (succParent.left === succ) {\n        succParent.left = succ.right;\n      } else {\n        succParent.right = succ.right;\n      }\n      return root;\n    };\n    this.root = remove(this.root, value);\n  }\n  levelorderRec(callback) {\n    let que = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [this.root];\n    let tempArr = [...que];\n    if (tempArr.length === 0) return;\n    let node = tempArr.shift();\n    if (node) {\n      tempArr.push(node.left, node.right);\n      if (typeof callback != \"function\" || !callback) {\n        throw new TypeError(\"Callback function is required.\");\n      } else callback(node);\n    }\n    this.levelorderRec(callback, tempArr);\n  }\n  levelorderIte(callback) {\n    let tempArr = [this.root];\n    for (let i = 0; i < tempArr.length; i++) {\n      let node = tempArr[i];\n      if (node) {\n        tempArr.push(node.left, node.right);\n        if (typeof callback != \"function\" || !callback) {\n          throw new TypeError(\"Callback function is required.\");\n        } else callback(node);\n      }\n    }\n  }\n  preOrder(callback) {\n    let root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;\n    if (!root) return;\n    if (typeof callback != \"function\" || !callback) {\n      throw new TypeError(\"Callback function is required.\");\n    } else callback(root);\n    this.preOrder(callback, root.left);\n    this.preOrder(callback, root.right);\n  }\n  inOrder(callback) {\n    let root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;\n    if (!root) return;\n    this.inOrder(callback, root.left);\n    if (typeof callback != \"function\" || !callback) {\n      throw new TypeError(\"Callback function is required.\");\n    } else callback(root);\n    this.inOrder(callback, root.right);\n  }\n  postOrder(callback) {\n    let root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;\n    if (!root) return;\n    this.postOrder(callback, root.left);\n    this.postOrder(callback, root.right);\n    if (typeof callback != \"function\" || !callback) {\n      throw new TypeError(\"Callback function is required.\");\n    } else callback(root);\n  }\n  height(node) {\n    if (!this.root) return 0;\n    let root = this.find(this.root, node.data);\n    if (root) {\n      let height = 0;\n      let queue = [root];\n      while (queue.length !== 0) {\n        let levelSize = queue.length;\n        for (let i = 0; i < levelSize; i++) {\n          let node = queue.shift();\n          if (node.left) queue.push(node.left);\n          if (node.right) queue.push(node.right);\n        }\n        height++;\n      }\n      return height;\n    } else return `node doesn't exist`;\n  }\n  depth(node) {\n    let root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;\n    let count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n    if (root) {\n      if (root.data === node.data) return count;\n      if (root.data < node.data) {\n        count++;\n        return this.depth(node, root.right, count);\n      }\n      if (root.data > node.data) {\n        count++;\n        return this.depth(node, root.left, count);\n      }\n    }\n    return \"not found\";\n  }\n  isBalanced() {\n    if (!this.root) return true;\n    let hd = this.height(this.root.left) - this.height(this.root.right);\n    return hd < -1 || hd > 1 ? false : true;\n  }\n  rebalance() {\n    if (!this.isBalanced()) {\n      const arr = [];\n      this.levelorderRec(i => arr.push(i.data));\n      this.root = this.buildTree(arr);\n    } else return;\n  }\n}\n\n//# sourceURL=webpack://binarysearchtree/./src/logic.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;