

let str ='apple';

let swap =(str)=>{
    let arrStr =str.split('');
    let temp = arrStr[0];
    arrStr[0]= arrStr[arrStr.length-1];
    arrStr[arrStr.length-1]=temp;

    return arrStr.join().replace(/,/g,'')
}

console.log(swap(str));