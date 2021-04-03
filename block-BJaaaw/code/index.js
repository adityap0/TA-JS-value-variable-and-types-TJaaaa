// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let a = prompt(`Enter the number you want to check.`);
Number(a);
if(a%2 == 0)
alert(`Number is even`);
else
alert(`Number is odd`);

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let numA = prompt(`Enter the first Number `);
let numB = prompt(`Enter the second Number`);
Number(numA, numB);
if (numA > numB)
alert(`The max value is ${numA}`);
else 
alert(`The max value is ${numB}`);
// 3. Convert the above code using`?` terniary operator
(numA > numB) ? alert(`The max value is ${numA}`) : alert(`The max value is ${numB}`);
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let housName = prompt(`Enter the name of the House`);
if(housName == "stark")
alert(`Winter is coming`)
else if(housName == "lannister" )
alert(`A lannister always pays his debt`)
else
alert(`All men must die`)
// 5. Convert the above code using`?` terniary operator

(housName == "stark") ? alert(`Winter is coming`) : ((housName == "lannister") ? alert(`A lannister always pays his debt`) : alert(`All men must die`));
// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
// let month = prompt(`Enter the Month you want to check?`);
switch(month)
{
  case 'Jan'  : alert(`Number of Days : 31`); break;
  case 'Feb'  : alert(`Number of Days : 29`); break;
  case 'March'  : alert(`Number of Days : 31`); break;
  case 'April'  : alert(`Number of Days : 30`); break;
  case 'May'  : alert(`Number of Days : 31`); break;
  case 'June'  : alert(`Number of Days : 31`); break;
  case 'July'  : alert(`Number of Days : 31`); break;
  case 'August'  : alert(`Number of Days : 31`); break;
  case 'Septemeber'  : alert(`Number of Days : 31`); break;
  case 'October'  : alert(`Number of Days : 31`); break;
  case 'Nov'  : alert(`Number of Days : 31`); break;
  case 'December'  : alert(`Number of Days : 31`); break;
  default : alert('Wrong name of Month entered');
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let sal = prompt(`Enter your Salary ?`);
Number(sal);
let inHand;
Number(inHand);
let tax10 = (10/100) * sal;
let tax20 = (20/100) * sal;
let tax30 = (30/100) * sal;
if (sal <= 20000)
{
  inHand = sal - tax10
  alert(inHand);}
else if (sal <=40000)
{
  inHand = sal - tax20
  alert(inHand);
}
else if (sal > 50000)
{
  inHand = sal - tax30
  alert(inHand);
}




//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = prompt(`Enter your Marks.`)
Number(marks);
if (marks > 100){
  alert(`Marks can't be greater than 100`);
}
else if (marks > 80 && marks < 100)
{
  alert(`Grade A`);
}
else if (marks > 50 && marks < 80)
{
  alert(`Grade B`);
}
else if (marks > 30 && marks < 50)
{
  alert(`Grade C`);
}
else
{
  alert(`Grade D`);
}

switch(true)
{
  case (marks > 100) : alert(`Marks can't be greater than 100`);
  break;
  case (marks >= 80 && marks <= 100) : alert(`Grade A`);
  break;
  case (marks >= 50 && marks < 80) : alert(`Grade B`);
  break;
  case (marks >= 30 && marks < 50) : alert(`Grade C`);
  break;
  default : alert(`Grade D`); break;
}
/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let wthr = prompt(`What is the weather like outside?`)
if (wthr == "sunny"){alert(`Wear a T-shirt`)}
else if (wthr == "rainy"){alert(`Don't forget to take your raincoat`)}
else if (wthr == "hot"){alert(`Get a hanky`)}
else if (wthr == "freezing"){alert(`Get your sweeter on`)}
else {alert(`Don't forget to take your raincoat`)}