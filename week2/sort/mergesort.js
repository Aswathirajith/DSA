const mergesort = (arr)=>{
    if(arr.length<=1)
    {
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    
    let left=mergesort(arr.slice(0,mid));
    let right=mergesort(arr.slice(mid));
    
    return merge(left,right);
     
     
 }
 
 function merge(left,right)
 {
     let temp=[];
     while(left.length && right.length)
     {
         if(left[0]<right[0])
         {
             temp.push(left.shift());
         }
         else{
             temp.push(right.shift());
         }
     }
     return [...temp,...left,...right]
 }
 
 console.log(mergesort([10,4,30,3,-2,43,-1,0]));