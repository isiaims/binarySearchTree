// Node class
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Linked list class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //   Add node to end of list
  append(value) {
    const node = new Node(value);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  //   Add node to start of list
  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  //   Return list size
  getSize() {
    return this.size;
  }

  //   Return first node on the list
  getHead() {
    return this.head ? this.head : "List is empty.";
  }

  //   Return last node on the list
  getTail() {
    if (!this.head) return "List is empty.";
    let current;
    current = this.head;

    while (current.next) {
      current = current.next;
    }
    return current;
  }

  //   Return data at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        return current;
      }
      count++;
      current = current.next;
    }

    return;
  }

  //   Remove last node on the list
  pop() {
    if (!this.head) return "List is empty.";
    let current = this.head;
    let previous;

    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.size--;
  }

  //   Check value availability
  contains(value) {
    let current = this.head;
    if (!current) return false;

    while (current) {
      if (current.data === value) return true;
      current = current.next;
    }
    return false;
  }

  //   Return index of found node
  find(value) {
    let current = this.head;
    if (!current) return null;
    let count = 0;

    while (current) {
      if (current.data === value) return count;
      current = current.next;
      count++;
    }
    return null;
  }

  //   Stringify values
  toString() {
    let current = this.head;
    let string = "";
    if (!current) return "This list is empty";

    while (current) {
      string += `( ${current.data} ) -> `;

      current = current.next;
    }
    string += current;
    return string;
  }

  //   Add node at index
  insertAt(value, index) {
    if (index > 0 && index > this.size) {
      confirm(
        "Provided index is out of range, would you like to append add it to last index?"
      )
        ? this.append(value)
        : "";
      return;
    }
    if (index == 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let current = this.head;
      let previous;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = node;
      node.next = current;
      this.size++;
    }
  }

  //   Remove node at index
  removeAt(index) {
    let current = this.head;
    if ((index > 0 && index > this.size) || !current) return;
    if (index == 0) {
      this.head = current.next;
    } else {
      let previous;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
    }
    this.size--;
  }
}
