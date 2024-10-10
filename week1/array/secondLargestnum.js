let arr =[1,2,9,6,5,3];

let secondLargestNum =(arr)=>{
    let largest= arr[0];
    let secondLargest = arr[0];

    for(i=0;i<arr.length;i++){
        if(arr[i]>=largest){
            secondLargest =largest
            largest =arr[i];
        }else if(arr[i]>secondLargest &&arr[i]!==largest){
            secondLargest=arr[i]
        }
    }
    return secondLargest
}

console.log(secondLargestNum(arr));