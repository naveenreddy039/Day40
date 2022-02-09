//UC1
let a=Math.floor(Math.random()*1000)%5;
let b=Math.floor(Math.random()*1000)%5;
let c=Math.floor(Math.random()*1000)%5;
let d=Math.floor(Math.random()*1000)%5;
let f=Math.floor(Math.random()*1000)%5;
if (a>b && a>c && a>d && a>f)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>f)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>f)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>f)
{
    console.log(d);
}
else
{
    console.log(f);
}

//UC2
//let day=new Date;
//let today="Today is:"+(day.getMonth()+1)+":"+day.getDate();
//console.log(today);
//if(today<=june20)
//{
  //console.log("True");
//}
//else
//{
  //  console.log("False");
//}

//UC3
    const year=2020;
    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }

//UC4
let FLIP=Math.floor(Math.random()*100)%10;
let coin=1;
if (FLIP==coin)
{
    console.log("heads"); 
}
else
{
console.log("Tails");
}
    

//UC5
let j=Math.floor(Math.random()*1000)%5;
let k=Math.floor(Math.random()*1000)%5;
let l=Math.floor(Math.random()*1000)%5;
let x1=j+k*l;
let x2=l+j/k;
let x3=j%k+l;
let x4=j*k+l;
if(x1>x2 && x1>x3 && x1>x4)
{
    console.log(x1);
}
else if(x2>x1 && x2>x3 && x2>x4)
{
    console.log(x2);
}
else if(x3>x1 && x3>x2 && x3>x4)
{
    console.log(x3);
}
else
 {
     console.log(x4);
 }