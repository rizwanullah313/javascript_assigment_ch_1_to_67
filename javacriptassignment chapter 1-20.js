// JavaScript Document

//chapter 1 task 1 
//alert("Wellcome To Our Website");


//chapter 1 task2
//alert("Error! Please Enter A valid Password");



// chapter 1 task 3
//alert("Wellcome To javascript land...\nHAppy Coding!");



//chapter 1 task4
//alert("Happy Coding\nPrevent this page from creating additional dialogs");



//chapter 1 task5
//alert("Hello... I can run JS through my web browser's control");



//chapter 1 task6
//alert("Most WELLCOME To Rizwan Hotel!");

// *******************************************************************************************************************//
// ******************************************************************************************************* //



// Chapter 2 Task 6
//var b1 = "rizwanullahtiger313@gmail.com";
//alert("My Email Address is "+b1);


// Chapter 2 task 7
//var a1 = "A smarter way to learn JavaScript";
//alert("I am trying to Learn From the Book "+a1);


//chapter 2 task 8
//document.write("Yah! I can write HTML content through JavaScrit");


// chapter 2 task 9
//alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");


// ******************************************************************************************************* //
// ******************************************************************************************************* //


// Chapter 3 task 1
//var v = "23";
//alert("I am "+v+" years old");


// Chater 3 task 4
/*var name = prompt("User NAme");
var type = prompt("product");
var quantity = prompt("quantity");
document.write(name+ " ordered "+quantity+" "+type+" On XYZ Clothing Store");*/

// ******************************************************************************************************* //
// ******************************************************************************************************* //


// chapter 5 task 1
/*var a = parseFloat (prompt("Enter First Number"));
var b = parseFloat (prompt("Enter Second Integer")) ;
var c = 0;
c= a+b;
document.write(c);*/



// Chapter 5 task 2
/*var a = parseFloat(prompt("Enter First Number"));
	var b = parseFloat(prompt("Enter Second Number"));
	var c = a*b;
	var d = a/b;
	var e = a%b;
	var f = a-b;
	
	document.write("Multplication "+a+ " X "+b+" = "+c+'<br>');
	document.write("Division "+a+ " / "+b+" = "+d+'<br>');
	document.write("Modolus "+a+ " % "+b+" = "+e+'<br>');
	document.write("Substraction "+a+ " - "+b+" = "+f+'<br>');
*/



// Chapter 5 task 4
/*alert("Cost of one movie ticket is 600 PKR");
var i = parseFloat(prompt("How many tickets "));
var j = i*600;
document.write("Total Cost to by "+i+" tickets to a movie is "+ j+"PKR");*/



// Chapter 5 task 5
/*var n = parseFloat(prompt("Enter Any number for making table "));  
    
var myVar = n;
var myString = "";
for (i=1; i<=10; i++) {
myString += i+ " x " +myVar+ " = " +(i*myVar)+ "<br/>";
}
document.write(myString);	
*/



// Chapter 5  task 6
/*var a = parseFloat(prompt("Enter Temperature in Celcius: "));
var b = parseFloat(prompt("Enter Temperature in fehranht: "));
	
var c = (b-32)*(5/9);
var d = a*9/5+32;
	
document.write( a +"C is " + d+"F");
document.write('<br>');
document.write( b +"C is " + c+"F");*/



// Chapter 5 task 7
/*var q1 = parseFloat(prompt("Quantity of item 1 "));
var q2 = parseFloat(prompt("Quantity of item 2 "));
document.write("Price of 1 item is 650");
document.write('<br>');
document.write("Quantity of 1 item is "+q1);
document.write('<br>');
document.write("Price of 2 item is 100");
document.write('<br>');
document.write("Quantity of 2 item is "+q2);
document.write('<br>');
document.write('<br>');
var t = 650*q1;
var r = 100*q2;
var total = t+r;
document.write("Total cost of yur order is "+total);*/



// Chapter 5 task 8
/*var a1 = parseFloat(prompt("Total MArks: "));
var a2 = parseFloat(prompt("Obtained MArks "));
var a3 = a1/a2;
var a4 = a3*100;
document.write("Percentage: "+a4+"%");*/



// Chapter 5 task 9
/*var inp1 = parseFloat(prompt("Enter US dollars "));
var inp2 = parseFloat(prompt("Enter Saudi Riyals "));
var t1 = inp1*104.80;
var t2 = inp2*28;
var t3 = t1+t2;
document.write("Total Currency in PKR: "+t3);*/



// chapter 5 task 10
/*var ina = " ";
var tot = ina + 5 * 10 /2;
document.write(tot);*/




// Chapter 5 task 11
/*var v1 = parseFloat(prompt("Current Year: "));
var v2 = parseFloat(prompt("Birth Year: "));
var final = v1-v2;
document.write("Your age is "+final);*/



// Chapter 5 task 12
/*var in1 = parseFloat(prompt("Radius f a circle: "));
var t1 = 2*Math.PI*in1;
var t2 = (in1*in1)*Math.PI;
document.write("Radius f a circle is: "+in1);
document.write('<br>');
document.write("The Circumference is: "+t1);
document.write('<br>');
document.write("The area is: "+t2);
*/


// ******************************************************************************************************* //
// ******************************************************************************************************* //


// chapter 6-9 task 5



// ******************************************************************************************************* //
// ******************************************************************************************************* //

// chapter 9-11 task 1
/*var c = prompt("Enter Your City Name:");
if(c=="karachi")
{	
         document.write("Welcome To the city of lights");
}
else if(c=="peshawar")
{	
         document.write("Welcome to the city of flowers");
}
else if(c=="lahore")
{	
         document.write("welcome to the heart of pakistan");
}

*/




// Chapter 9-11 task 2
/*var gender = prompt("Entre Gender: ");
if(gender=="male")
{
	document.write(" Good Morning Sir");
}
else if (gender=="female")
{
	document.write(" Good Morning Ma’am");
}
*/




// Chapter 9-11 task 3
/*var sc =prompt("Enter bColor: ");
if(sc=="red")
{
	document.write("Must Stop");
}
else if(sc=="yellow")
{
	document.write("Ready To Move");
}
else if(sc=="green")
{
	document.write("Move Now");
}
*/




// Chapter 9-11 task 5
/*var a = 4; 
if (++a === 5)
{ 
alert("given condition for variable a is true"); 
}  
var b = 82; 
if (b++ === 83)
{ 
alert("given condition for variable b is true"); 
} 
var c = 12; 
if (c++ === 13)
{ 
alert("condition 1 is true"); 
} 
if (c === 13)
{ 
alert("condition 2 is true"); 
} 
if (++c < 14)
{ 
alert("condition 3 is true"); 
} 
if(c === 14)
{ 
alert("condition 4 is true"); 
} 
 
var materialCost = 20000; 
var laborCost = 2000;
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost)
{ 
alert("The cost equals"); 
} 
if (true)
{ 
alert("True");
} 
if (false)
{ 
alert("False"); 
} 
if("car" < "cat")
{ 
alert("car is smaller than cat"); 
} 
*/




// Chapter 9-11 task 6
/*var a1 = parseFloat(prompt("Enter First Subject Marks: "));
var a2 = parseFloat(prompt("Enter Second Subject Marks: "));
var a3 = parseFloat(prompt("Enter Third Subject Marks: "));

var t1 = a1+a2+a3;
var s = 300;
var t2  = t1/s;
var t = t2*100;
if(t>=80 && t<=100)
{
	document.write("Mark Sheet");
	document.write('<br>');
	document.write('<br>');
	document.write("Total Marks: "+s);
	document.write('<br>');
	document.write("Obtained MArks: "+t1);
	document.write('<br>');
	document.write("Percentage: "+t+"%");	
	document.write('<br>');
	document.write("Grade A-one");	
	document.write('<br>');
	document.write("Remarks: Excellent");
}
else if(t>=70 && t<=80)
{
	document.write("Mark Sheet");
	document.write('<br>');
	document.write('<br>');
	document.write("Total Marks: "+s);	
	document.write('<br>');
	document.write("Obtained MArks: "+t1);	
	document.write('<br>');
	document.write("Percentage: "+t+"%");	
	document.write('<br>');
	document.write("Grade A");	
	document.write('<br>');
	document.write("Remarks: Good");
}
else if(t>=600 && t<=70)
{
	document.write("Mark Sheet");
	document.write('<br>');
	document.write('<br>');
	document.write("Total Marks: "+s);	
	document.write('<br>');
	document.write("Obtained MArks: "+t1);	
	document.write('<br>');
	document.write("Percentage: "+t+"%");	
	document.write('<br>');
	document.write("Grade B");	
	document.write('<br>');
	document.write("Remarks: You need to improve");
}
else if(t<60)
{
	document.write("Mark Sheet");
	document.write('<br>');
	document.write('<br>');
	document.write("Total Marks: "+s);	
	document.write('<br>');
	document.write("Obtained MArks: "+t1);	
	document.write('<br>');
	document.write("Percentage: "+t+"%");	
	document.write('<br>');
	document.write("Fail");	
	document.write('<br>');
	document.write("Remarks: Sorry");
}*/



// Chapter 9-11 task 8
/*var inp = parseFloat(prompt("Enter any integer to check it is divisible by 3 or not: "));
if(inp%3==0)
{
	document.write("Yes it is divisible by 3");
}
else if(inp%3!=0)
{
	document.write("Sorry not divisible by 3");
}*/



// Chapter 9-11 task 9
/*var inp = parseFloat(prompt("Enter any integer: "));
if(inp%2==0)
{
	document.write(inp+" is Even Number");
}
else
{
	document.write(inp+" is Odd Number");
}*/



//  Chapter 9-11 task 10
/*var t = parseFloat(prompt("Enter Temperature: "));
if(t>40)
{
	document.write("It is too hot outside");
}
else if(t>30)
{
	document.write("The Weather today is Normal");
}
else if(t>20)
{
	document.write("Today’s Weather is cool");
}
else if(t>10)
{
	document.write("OMG! Today’s weather is so Cool");
}*/





// ******************************************************************************************************* //
// ******************************************************************************************************* //

/*chapter 12-13 task 2
    var a = parseFloat(prompt("Enter First Number"));
	var b = parseFloat(prompt("Enter Second Number"));
	if(a>b)
	{
		document.write(a+" is greater number");
	}
	else if(a<b)
	{
		document.write(b+" is greater number");
	}
	else if(a==b)
	{
		document.write(" both are equal number");
	}*/
	
	
	
// chapter 12-13 task 3
    /*var i = parseFloat(prompt("Enter ANy Integer To check Positve negatve or zero"));
	if(i>0)
	{
		document.write(i+" number is positive");
	}
	else if(i<0)
	{
		document.write(i+" number is negetive");
	}
	else if(i==0)
	{
		document.write(i+" number is zero");
	}
	else
	{
		document.write("Please Enter a valid number");
	}*/



// Chapter 12-13 task 5
/*var a = prompt("Enter Your Password: ");
var b = prompt("Enter confirm Password: ");

if(a=="")
document.write("Password Is Required"+'<br>');
if(b=="")
document.write("Confrim Is Required ");
if(a!=b)
document.write("Password Does Not Match");
if(a==b)
document.write("Correct!");
*/

// chapter 12-13 task 6
/*var hour = 13;
if (hour < 18) 
{ 
document.write("Good day"); 
}
else 
{
document.write("Good evening"); 
}*/




// ******************************************************************************************************* //
// ******************************************************************************************************* //



//chapter 17-20 task3
/*for(var i=1; i<=10; i++)
{
	document.write(i+"<br>");
}*/


//chapter 17-20 task4 

/*var myVar = parseFloat(prompt("Enter a number to show its multiplication tables"));
var b = parseFloat((prompt("Enter length multiplication table")));
	
var myString = "";
for (i=1; i<=b; i++) {
myString += i+ " x " +myVar+ " = " +(i*myVar)+ "<br/>";
}
document.write(myString);
*/


// chapter 17-20 task 6
/*document.write("Counting:"+'<br>'+'<br>');
for(var i=0; i<=15; i++)
{
	document.write(i+", ");
}
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write("Reverse Counting:"+'<br>'+'<br>');
for( var j=10; j>0; j--)
{
	document.write(j+", ");
}
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write("Even:"+'<br>'+'<br>');
for(var i=0; i<=20; i=i+2)
{
	document.write(i+", ");
}
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write("Odd:"+'<br>'+'<br>');
for(var i=0; i<20; i++)
{
	i++;
	document.write(i+", ");
}
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write("Series:"+'<br>'+'<br>');
for(var i=2; i<=20; i=i+2)
{
	document.write(i+"k, ");
}
*/




// Chapter 17-20 task 10
/*for(var i=5;  i<=100; i=i+5)
{
	document.write(i+", ");
}*/



// ******************************************************************************************************* //
// ******************************************************************************************************* //







// ******************************************************************************************************* //

// ******************************************************************************************************* //








