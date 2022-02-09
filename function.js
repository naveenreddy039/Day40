function Palindrome()
{
	var rem, temp, final = 0;
	var number = 536;

	temp = number;
	while(number>0)
	{
		rem = number%10;
		number = parseInt(number/10);
		final = final*10+rem;
	}
	if(final==temp)
	{
		console.log("The input number is Palindrome");
	}
	else
	{
		console.log("The input number is not palindrome");
	}
}

