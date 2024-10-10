const arr = [0,0,1,0,0,3,2];


let zeromoveright =(arr)=>{
    let newArr = arr.filter((elem)=>elem!==0)
    let newLength = arr.length- newArr.length;
    let i=0;
    while(i<newLength){
        newArr.push(0);
        i++;
    }
    return newArr
}
console.log(zeromoveright(arr));