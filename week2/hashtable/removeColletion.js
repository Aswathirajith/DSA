class hashTable{
    constructor(size)
    {
        this.table=new Array(size);
        this.size=size;
    }
    hash(key)
    {
        let total=0;
        for(let i=0;i<key.length;i++)
        {
            total+=key.charCodeAt(i);
        }
        return total%this.size;
    }
    set(key,value)
    {
        const index=this.hash(key);
        //this.table[index]=value;
        const bucket=this.table[index];
        if(!bucket)
        {
            this.table[index]=[[key,value]];
        }else{
            let sameitem=bucket.find(item=>item[0]==key);
            if(sameitem)
            {
                sameitem[1]=value;
            }
            else{
                bucket.push([key,value]);
            }
        }
    }
    get(key)
    {
        const index=this.hash(key);
       // console.log(this.table[index]);
       const bucket=this.table[index];
       if(bucket)
       {
           let sameitem=bucket.find(item=>item[0]==key)
           if(sameitem)
           {
               return sameitem[1];
           }
       }
       return undefined;
    }
    remove(key)
    {
        const index=this.hash(key);
       // this.table[index]=undefined;
       const bucket=this.table[index];
       if(bucket)
       {
           let sameitem=bucket.find(item=>item[0]==key);
           if(sameitem)
           {
               bucket.splice(bucket.indexOf(sameitem),1);
           }
       }
    }
    display()
    {
        for(let i=0;i<this.size;i++)
        {
            if(this.table[i])
            {
                console.log(i,this.table[i]);
            }
        }
    }
}


const table=new hashTable(60);
table.set("name","Aswathi");
table.set("age",31);
table.set("place","benguluru");
table.display();
table.get("name");
table.remove("age");
table.display()