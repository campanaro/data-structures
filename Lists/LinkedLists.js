class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
    this.size = 0
  }

  add(value) {
    let newNode = new Node(value)
    this.size++

    if (!this.head) return this.head = newNode

    let lastNode = this.getLast()
    lastNode.next = newNode
    return this.head
  }

  getLast() {
    let lastNode = this.head
    while (lastNode.next) {
      lastNode = lastNode.next
    }
    return lastNode
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) return false

    let newNode = new Node(value),
      current = this.head,
      previous,
      count = 0

    while (count < index) {
      count++
      previous = current
      current = current.next
    }

    newNode.next = current
    previous.next = newNode

    this.size++
    return this.head
  }

  removeFrom(index) {
    let current = this.head,
      previous = current,
      count = 0
      
    this.size--

    if (index === 0) return this.head = current.next

    while (count < index) {
      count++
      previous = current
      current = current.next
    }

    previous.next = current.next

    return this.head
  }

  removeElement(value) {
    let current = this.head,
      previous = null
      
    while (current) {
      if (current.value === value) {
        (previous === null) ? this.head = current.next : previous.next = current.next
        this.size--
        return current
      }
      previous = current
      current = current.next
    }
    return -1
  }

  indexOf(element) {
    let current = this.head,
      count = 0

    while (current) {
      if (current.value === element) return count
      current = current.next
      count++
    }
    return -1
  }

  isEmpty() {
    return this.head === 0
  }

  length() {
    console.log(this.size)
  }

  print() {
    let current = this.head,
      str = ''

    while (current) {
      str += current.value + ' '
      current = current.next
    }
    console.log(str)
  }
}

let list = new LinkedList()

list.add(1)
list.add(2)
list.add(3)
// Node {
//   value: 1,
//   next: Node { 
//     value: 2, 
//     next: Node { 
//       value: 3, 
//       next: null 
//     } 
//   }
// }

console.log(list.getLast())
// Node { 
//   value: 3, 
//   next: null 
// }

list.insertAt(10, 1);
list.insertAt(20, 3);
list.insertAt(30, 5);
list.print()
// 1 10 2 20 3 30

list.removeFrom(0)
list.removeFrom(1)
list.removeFrom(2)
list.print()
// 10 20 30

list.removeElement(30)
list.print()
// 10 20

console.log(list.indexOf(20))
// 1

console.log(list.isEmpty())
// false

list.length()
// 2