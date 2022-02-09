//UC1
let num=2;
let i=1;
let sum=0;
while(i<=8)
{  
  sum=Math.pow(num,i);
  console.log(sum);
  i++;
  
}

//UC2
var n = 325;
var Number=n;
var sums = 1;
var res=0;
while (Number > 9)
{
  while(Number>0)
  {
    sums=Number%10;
    res=res+sums;
    Number=Number/10;
  }
  Number=res;
  res=0
}
if (Number==1)
{
  console.log("Magic Number");
}
else
{
  console.log("Not a magic Number");
}

    