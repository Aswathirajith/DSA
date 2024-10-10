

let str = 'hello';

let replace =(str)=>{
    let word = str.split('')
    let i=0;
    while( word.length>=i){

        if(word[i]==='l'){
            word[i]='t'
        }
        i++
    }
    return word.join().replace(/,/g,'')
}
console.log(replace(str));