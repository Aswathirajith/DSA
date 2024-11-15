function bubble(arr)
{
    let swapped;
    do{
        swapped=false;
        for(let i=0;i<arr.length-1;i++)
        {
            if(arr[i]>arr[i+1])
            {
                let temp=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
                swapped=true;
            }
        }
    }while(swapped);
}

let arr=[-6,0,4,0,5,-1,2,9,0,3,2];
bubble(arr);
console.log(arr);



const bubblesort=(arr)=>{
    let n=arr.length;
    for(let i=0;i<n;i++)
    {
        for(j=0;j<n-i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }return arr;
}

console.log(bubblesort([-2,1,-4,5,0,10,3,]))