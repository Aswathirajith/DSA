class Stack{
    constructor()
    {
        this.stack=[];
    }
    push(value)
    {
        this.stack.push(value);
    }
    pop(){
        if(this.isEmpty())
        {
            return "stack is empty";
        }
        return this.stack.pop();
    }
    isEmpty()
    {
        return this.stack.length===0;
    }
    peek()
    {
         if(this.isEmpty())
        {
            return "stack is empty";
        }
        return this.stack[this.stack.length-1]
        
    }
    print()
    {
        console.log(this.stack.toString());
    }
}


const stack=new Stack();
console.log(stack.pop());
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek())

console.log(stack.peek())
console.log(stack.isEmpty())
stack.print();
