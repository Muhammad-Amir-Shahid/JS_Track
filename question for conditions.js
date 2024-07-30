//question: it is divided by 5 or not
let num=prompt("Enter Number");
console.log(num);

if (num%5===0)
{
    console.log("Yes");
}
else {
    console.log("No");
}

//question grading system

let grade = prompt("Enter Marks");
if (grade<=100 && grade>=80)
{
    console.log("A");
}
else if(grade<=79 && grade >=70)
{
    console.log("B");
}
else if (grade<=69 && grade >=60)
{
    console.log("C");
}
else if (grade<=59 && grade >=50)
    {
        console.log("D");
    }
else {
    console.log("F");
}
