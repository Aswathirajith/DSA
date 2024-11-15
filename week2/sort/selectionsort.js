const selectionsort=(arr)=>{
    let n= arr.length;
    for(let i=0;i<n;i++)
    {
        let minindex=i;
        for(j=i+1;j<n;j++)
        {
            if(arr[j]<arr[minindex])
            {
                minindex=j;
            }
            if(minindex!==i)
            {
                [arr[i],arr[minindex]]=[arr[minindex],arr[i]];
            }
        }
    }
    return arr;
}

console.log(selectionsort([10,0,-1,19,-4,2,7]));