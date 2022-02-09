//UC1
let num=2;
let i=1;
let sum=1;
while(i<=10)
{
  sum=num*i;
  console.log("num*i="+sum);
  i++;
}

//UC2
let n=8;
let sum1=0;
for(let i=1;i<=n;i++)
{
  sum1+=(1/i);
  console.log(sum1);
}

//UC3
let number=7;
let isPrime = true;
if (number > 1) 
{
 for (let i = 2; i < number; i++) {
        if (number % i == 0) 
        {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

//UC4
let fact=1;
for(let i=1;i<number;i++)
{
    fact*=i;
}
console.log("Factorial of numner:"+fact);