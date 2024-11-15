
class Queue{
    constructor()
    {
        this.queue=[];
    }
    enqueue(value)
    {
        this.queue.push(value);
    }
    dequeue()
    {
        if(this.isEmpty())
        {
            console.log("queue is empty");
        }
        this.queue.shift();
    }
    isEmpty()
    {
        return this.queue.length===0;
    }
    size()
    {
        return this.queue.length;
    }
    peek()
    {
        return this.queue[0]
    }
    print()
    {
        console.log(this.queue.toString());
    }
}

const queue = new Queue();
queue.dequeue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.print()
console.log(queue.peek())
queue.dequeue();
queue.print()
console.log(queue.peek())