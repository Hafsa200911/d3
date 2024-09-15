var number=prompt("Enter number");
var even=0 ;
var odd=0 ;

for(var x=0 ; x<number ; x++)
{
 if(x%2==0)
    {
        even+=1
    }  

    else
    {
        odd+=1
    }
}

console.log("Enen number:" ,even);
console.log("Odd number:" ,odd);

