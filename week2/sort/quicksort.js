const quicksort=(arr)=>{
    if(arr.length<=1)
    {
        return arr;
    }
    let pivot = arr[0];
    let left=[]
    let right=[]
    
    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]<pivot)
        {
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    
    return [...quicksort(left),pivot,...quicksort(right)];
}


console.log(quicksort([10,4,9,-3,-2,0,45,76]));