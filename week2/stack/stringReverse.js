function reverse(str)
{
    let stack=[];
    let temp=str.split(" ");
    let string="";
    
    for(let char of temp)
    {
        stack.push(char);
    }
    
    while(stack.length)
    {
        string+=" "+stack.pop();
    }
    return string.trim();
}

console.log(reverse("my name is aswathi"));