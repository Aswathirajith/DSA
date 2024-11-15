function insertsort(arr)
{
  for(let i=1;i<arr.length;i++)
  {
      let num=arr[i];
      let j=i-1;
      while(j>=0 && arr[j]>num)
      {
          arr[j+1]=arr[j];
          j=j-1;
      }
      arr[j+1]=num;
  }
}

let arr=[-6,0,4,0,5,-1,2,9,0,3,2];
insertsort(arr);
console.log(arr);