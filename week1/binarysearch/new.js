class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class linkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    pretend(value){
        let node = new Node(value);
        if(this.size==0){
            this.head=node;
            
        }
        else{
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }

    let mid= this.



}

let list = new linkedList();

list.pretend(30);
list.pretend(40);
list.pretend(60);

