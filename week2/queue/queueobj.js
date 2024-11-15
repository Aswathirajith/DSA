class Queue{
    constructor()
    {
        this.item={};
        this.front=0;
        this.rear=0;
    }
    enqueue(value)
    {
        this.item[this.rear]=value;
        this.rear++;
    }
    dequeue()
    {
        const val=this.item[this.front];
        delete this.item[this.front];
        this.front++;
        return val;
    }
    isEmpty()
    {
        return this.rear-this.front===0;
    }
    peek()
    {
        return this.item[this.front];
    }
    print()
    {
        console.log(this.item);
    }
}

const queue=new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.print();
queue.dequeue()
queue.print();