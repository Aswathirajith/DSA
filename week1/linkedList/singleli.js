
class Node {
    constructor(value) {
        this.value = value; 
        this.next = null;   
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null; 
    }

    
    append(value) {
        const newNode = new Node(value);
        if (this.head === null) { 
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next; 
            }
            current.next = newNode; 
        }
    }

    
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}


const sll = new SinglyLinkedList();
sll.append(10);
sll.append(20);
sll.append(30);
console.log("Singly Linked List Elements:");
sll.printList();
