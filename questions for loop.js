//print even numbers from 0 to 100
let num;
for (let i=1;i<=100;i++)
{
if (i%2===0)
{
    console.log(i);
}
}

//guess the game number

let number=13;
let userNum=prompt("Guess the Number");

while(number!=userNum)
{
    userNum=prompt("Guess Again!");
}
console.log("Congrats!");