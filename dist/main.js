/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Node class\nclass Node {\n  constructor(data) {\n    let next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    this.data = data;\n    this.next = next;\n  }\n}\n\n// Linked list class\nclass LinkedList {\n  constructor() {\n    this.head = null;\n    this.size = 0;\n  }\n\n  //   Add node to end of list\n  append(value) {\n    const node = new Node(value);\n    let current;\n    if (!this.head) {\n      this.head = node;\n    } else {\n      current = this.head;\n      while (current.next) {\n        current = current.next;\n      }\n      current.next = node;\n    }\n    this.size++;\n  }\n\n  //   Add node to start of list\n  prepend(value) {\n    this.head = new Node(value, this.head);\n    this.size++;\n  }\n\n  //   Return list size\n  getSize() {\n    return this.size;\n  }\n\n  //   Return first node on the list\n  getHead() {\n    return this.head ? this.head : \"List is empty.\";\n  }\n\n  //   Return last node on the list\n  getTail() {\n    if (!this.head) return \"List is empty.\";\n    let current;\n    current = this.head;\n    while (current.next) {\n      current = current.next;\n    }\n    return current;\n  }\n\n  //   Return data at index\n  getAt(index) {\n    let current = this.head;\n    let count = 0;\n    while (current) {\n      if (count == index) {\n        return current;\n      }\n      count++;\n      current = current.next;\n    }\n    return;\n  }\n\n  //   Remove last node on the list\n  pop() {\n    if (!this.head) return \"List is empty.\";\n    let current = this.head;\n    let previous;\n    while (current.next) {\n      previous = current;\n      current = current.next;\n    }\n    previous.next = current.next;\n    this.size--;\n  }\n\n  //   Check value availability\n  contains(value) {\n    let current = this.head;\n    if (!current) return false;\n    while (current) {\n      if (current.data === value) return true;\n      current = current.next;\n    }\n    return false;\n  }\n\n  //   Return index of found node\n  find(value) {\n    let current = this.head;\n    if (!current) return null;\n    let count = 0;\n    while (current) {\n      if (current.data === value) return count;\n      current = current.next;\n      count++;\n    }\n    return null;\n  }\n\n  //   Stringify values\n  toString() {\n    let current = this.head;\n    let string = \"\";\n    if (!current) return \"This list is empty\";\n    while (current) {\n      string += `( ${current.data} ) -> `;\n      current = current.next;\n    }\n    string += current;\n    return string;\n  }\n\n  //   Add node at index\n  insertAt(value, index) {\n    if (index > 0 && index > this.size) {\n      confirm(\"Provided index is out of range, would you like to append add it to last index?\") ? this.append(value) : \"\";\n      return;\n    }\n    if (index == 0) {\n      this.prepend(value);\n    } else {\n      const node = new Node(value);\n      let current = this.head;\n      let previous;\n      let count = 0;\n      while (count < index) {\n        previous = current;\n        current = current.next;\n        count++;\n      }\n      previous.next = node;\n      node.next = current;\n      this.size++;\n    }\n  }\n\n  //   Remove node at index\n  removeAt(index) {\n    let current = this.head;\n    if (index > 0 && index > this.size || !current) return;\n    if (index == 0) {\n      this.head = current.next;\n    } else {\n      let previous;\n      let count = 0;\n      while (count < index) {\n        previous = current;\n        current = current.next;\n        count++;\n      }\n      previous.next = current.next;\n    }\n    this.size--;\n  }\n}\n\n//# sourceURL=webpack://linkedlistexc/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;