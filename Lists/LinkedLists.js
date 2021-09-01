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

  getLast() {
    let lastNode = this.head 
    while(lastNode.next) {
      lastNode = lastNode.next
    }
    return lastNode
  }

  add(value) {
    let newNode = new Node(value)
    this.size++

    if(!this.head) return this.head = newNode 

    let lastNode = this.getLast()
    lastNode.next = newNode
    return this.head
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
