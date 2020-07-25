// JavaScript Document




// Chapter 21-25 task 1
/*var a = prompt("Enter First Name: ");
var b = prompt("Enter Last Name: ");
var c = a+b;
document.write("Assalam-o-alaikum "+c);*/





// Chater 21-25 task 2
/*var a = prompt(" user input about his favorite mobile phone model: ");
var b = a.length;
document.write("My Favorite Phone is: "+a);
document.write('<br>');
document.write("Lenght Of the string is: "+b);*/





// Chapter 21-25 task 3
/*var a ="Pakistani";
var b = a.indexOf("n");
document.write("Index of 'n' is: "+b);*/





// Chapter 21-25 task 4
/*var a ="Hello World";
var b = a.lastIndexOf("l");
document.write("String : Hello World");
document.write('<br>');
document.write("Last Index of 'l' is: "+b);*/




// Chater 21-25 task 5
/*var  a = parseInt(prompt("@Enter the index: "));
var b = "Pakistani";
var c = b.charAt(a);
document.write("String : Pakistani");
document.write('<br>');
document.write("character of index '"+a+"' is: "+c);*/





// Chapter 21-25 task 7
/*var a = "hyderababd";
var b = a.replace("hyder","Islam");
document.write("City : Hyderabad");
document.write('<br>');
document.write("After replacement: "+b);*/





// Chapter 21-25 task 9
/*var a = "12345";
var b = parseFloat(a);
document.write(a+" Type is: "+ typeof a);
document.write('<br>');
document.write(b+" Type is: "+ typeof b);
*/








// chapter 21-25 task 10
/*var a = prompt("Enter any String");
var b = a.toUpperCase();
document.write(a);
document.write('<br>');
document.write(b);
*/





// chapter 21-23 task 11
/*function jsUcfirst(string) 
{
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var string = "javscript";
document.write(jsUcfirst(string));

*/





// Chapter 21-25 task 12
/*const num = 35.36;
const without = num.toString().replace(".", ""); 
document.write(without);
*/






// chapter 21-25 task 15
/*var a = prompt("Enter your password:");
var b = /^[a-zA-Z]{0,9}$/;
if(a.value.match(b))
{
	document.write("Correct");
}
else
{
	document.write("lease Enter a valid password");
}
*/








// chapter 21-25 task 16

// a sample 2-D array 
/*var a1 = "University of Karachi";
var a2 = a1.split("");
console.log(a2);
var a = [a2];
 
for (var i in a) 
{
   console.log("row " + i);
   for (var j in a[i]) 
     {
      console.log(" " + a[i][j]);
     }
}

*/







// Chapter 21-25 task 17
/*var a = prompt("Enter any String: ");
var b = a.charAt(a.length-1);
document.write("User input: "+a);
document.write('<br>');
document.write("Last Character of input is: "+b)
*/






// chapter 21-25 task 17
/*var a = prompt("Enter any String");
var res = a.charAt(a.length-1);
document.write(res);
*/







// chapter n21-25 task 18      
/*var j = prompt("Enter any string: ");
var k = prompt("Count String: ");
var r = j.split(k).length - 1; 
document.write(r)*/




// ***************************************************************************************************************//
// ***************************************************************************************************************//




// Chapter 26-30 task 1 //
/*var a =parseFloat(prompt("Enter any Positive Integer: "));
var b = Math.round(a);
var c = Math.floor(a);
var d = Math.ceil(a);
document.write("Number: "+a);
document.write('<br>');
document.write("Rund off value: "+b);
document.write('<br>');
document.write("floor value: "+c);
document.write('<br>');
document.write("ceil value: "+d);*/






// Chapter 26-30 task 2
/*var a =parseFloat(prompt("Enter any Positive Integer: "));
var b = Math.round(a);
var c = Math.floor(a);
var d = Math.ceil(a);
document.write("Number: "+a);
document.write('<br>');
document.write("Rund off value: "+b);
document.write('<br>');
document.write("floor value: "+c);
document.write('<br>');
document.write("ceil value: "+d);*/






// Chapter 26-30 task 3
/*var a = parseFloat(prompt("Enter any integer: "));
var b = Math.abs(a);
document.write("The absolute value of "+a+" is: "+b);*/






// Chapter 26-30 task 4
/*var a = Math.floor( Math.random() * 10 ) +1;
var b = Math.floor( Math.random() * 10 ) +1;
document.write('Random dice value is: ' + a);
document.write('<br>');
document.write('Random dice value is: ' + b);*/







// chapter 26-30 task 5
/*var a = Math.floor( Math.random() * 2 ) +1;
if(a==2)
{
	document.write(a+" Random coin value : Heads");
}
else if(a==1)
{
		document.write(a+" Random coin value : Tails");
}*/







// Chapter 26-30 task 6
/*var a = Math.floor( Math.random() * 100 ) +1;
document.write('Random dNumber between 1 to 100 is: ' + a);
*/







// Chapter 26-30 task 8
/*var a = Math.floor( Math.random() * 10 ) +1;
var b = parseFloat(prompt("Enter any number between 1-10"));
if(b==a)
{
	alert("congratulate");
}
else
{
	alert("Try Again");
}*/





// ***************************************************************************************************************//
// ***************************************************************************************************************//





// chapter 31-34 task 1
//document.write(Date());






// Chapter 31-34 task 2
/*var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var now       = new Date();
var thisMonth = months[now.getMonth()];
var output = document.getElementById('output');
document.write("Current Month: "+thisMonth);
if(output.textContent !== undefined) {
    output.textContent = thisMonth;
}
else {
    output.innerText = thisMonth;
  }
*/




// Chapter 31-34 task 3
/*var a = new Date();
 var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  var n = weekday[a.getDay()];
  document.write("Today is "+n);*/
  
  
  
  
 // chapter 31-34 task 4
 /*var a = new Date();
 var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  var n = weekday[a.getDay()];
 if(n=="Saturday")
 {
	 document.write("It's fun Day");
 }
 else if(n=="Sunday")
 {
	 document.write("It's fun Day");
 }
 else
 {
	 document.write("It's not a fun Day");
 }*/
 
 
 
 
 
 
 
 // Chapter 31-34 task 5
/* var a = new Date();
 var b = a.getDate();
 if(b<=15)
 {
	 document.write("First Fifteen days of the Months");
 }
 else
 {
	 document.write("Last Fifteen days of the Months");
 }*/
 
 
 
 
 
 
 // Chapter 31-34 task 13
/*var a = parseInt(prompt("Enter Your age: "));
var date = new Date();
var res = date.getFullYear();
var t = res-a;
document.write("Your age is: "+a);
document.write('<br>');
document.write("Your birth year is: "+t);

*/











// chapter 31-34 task 14
/*var a = "Rizwan Ulah";
var nou = 410;
var npu = 16;
var net = nou*npu;
var lt =350;
var gt = net+lt;
document.write("K-Electric Bill");
document.write('<br>');
document.write('<br>');
document.write("Customer Name: "+'<b>'+a+'</b>');
document.write('<br>');
var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var now       = new Date();
var thisMonth = months[now.getMonth()];
var output = document.getElementById('output');
document.write("Month: "+'<b>'+thisMonth+'</b>');

document.write('<br>');
document.write("Number Of Units: "+'<b>'+nou+'</b>');
document.write('<br>');
document.write("Charge per Units: "+'<b>'+npu+'</b>');
document.write('<br>');
document.write('<br>');
document.write("Net amount paybal (with due date): "+'<b>'+net+'</b>');
document.write('<br>');
document.write("Late payment surcharges: "+'<b>'+lt+'</b>');
document.write('<br>');
document.write("Gross amount paybal (after due date): "+'<b>'+gt+'</b>');
if(output.textContent !== undefined) {
    output.textContent = thisMonth;
}
else {
    output.innerText = thisMonth;
  }*/







// ***************************************************************************************************************//
// ***************************************************************************************************************//


// Chapter 35-38 task 1
/*function myfun(a)
{
	return  new Date();
}
document.write(myfun(Date()));*/



// Chapter 35-38 task 3
/*function myfun(a,b)
{
	var c = a+b;
	return c;
}
var i = prompt("Enter First Name: ");
var j = prompt("Enter Last Name: ");
document.write("Ful name is = "+myfun(i,j));
*/




// Chapter 35-38 task 3
/*function myfun(a,b)
{
	var c = a+b;
	return c;
}
var i = parseFloat(prompt("Enter First Number: "));
var j = parseFloat(prompt("Enter Second Number: "));
document.write("The Sum Of "+i+" and "+j+" is = "+myfun(i,j));*/





// Chapter 35-38 task 4
/*function myfun(a,b,c)
{
	var c = a+b;
	var d = a*b;
	var e = a/b;
	var f = a%b;
	
    return c,d,e,f;
	
}
var i = parseFloat(prompt("Enter First Number: "));
var k = prompt("Enter Module: ");
var j = parseFloat(prompt("Enter Second Number: "));
//if(k=="+")
	{
       document.write("The Sum Of "+i+" and "+j+" is = "+myfun(i,j));
	}
	//else if(k=="*")
	{
       document.write("The Mul Of "+i+" and "+j+" is = "+myfun(i,j));
	}
	//else if(k=="/")
	{
       document.write("The Div Of "+i+" and "+j+" is = "+myfun(i,j));
	}
	//else if(k=="%")
	{
       document.write("The Mod Of "+i+" and "+j+" is = "+myfun(i,j));
	}
*/





// Chapter 35-38 task 5
/*function myfun(x) {
  return x * x;
};
var s = parseFloat(prompt("Enter any integer: "));
document.write(myfun(s)); */




// chapter 35-38 task 6
/*function myfun(a)
{
	var i, a, fact;
    fact=1;
    for(i=1; i<=a; i++)  
    {
    fact= fact*i;
    }  
	return fact;
}
    var i = parseFloat(prompt("Enter Any Number: "));
    document.write(myfun(i));*/





  // chapter 35-38 task 7
 /* function myfun(a,b)
  {
	  for( var i = a; i<=b; i++)
	  {
		  document.write(i+", ");
	  }
	  return i;
  }
  var i = parseFloat(prompt("Enter First number"));
  var j = parseFloat(prompt("Enter Last number"));
  document.write(myfun(i,j));*/
  
  
 
 
 
 // chapter 35-38 task 10
/*function Palindrome()
{ 
    var string1 = [20];
    var i, length;
    var flag = 0;
    
    string1 = "madam";
    
    length = strlen(string1);
    
    for(i=0;i < length ;i++){
        if(string1[i] != string1[length-i-1]){
            flag = 1;
            break;
   }
}
    
    if (flag) {
        document.write(+Palindrome(string1)+ " is not a palindrome"); 
    }    
    else {
       document.write(+Palindrome(string1)+ " is a palindrome" ); 
    }
   */





 
 
 // chapter 35-38 task 11
/*function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));*/




 
 // Chapter 35-38 task 12
/* function fun(s)
{
  var a = s.match(/\w[a-z]{0,}/gi);
  var result = a[0];

  for(var x = 1 ; x < a.length ; x++)
  {
    if(result.length < a[x].length)
    {
    result = a[x];
    } 
  }
  return result;
}
document.write(fun('Web Development Tutorial'));
*/


 
  
 
 
 // Chapter 35-38 task 13
/*function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
var i = prompt("Enter String: ");
var j = prompt("Enter Letter: ");
document.write(char_count(i, j));
*/


  
  
  
  
 // chapter 35-38 task 14
/* function fun1(a)
 {
	 var c = 2*a*Math.PI;
	 document.write("Circumstamnce is: "+c);
	 return c;
 }
   function fun2(b)
 {
	 var ac = Math.PI*(b*b);
	 document.write("Area f circle is: "+ac);
	 return ac;
 }
 var i = parseFloat(prompt("Enter Radius"));
 document.write(fun1(i));
 document.write('<br>');
 document.write(fun2(i));*/

  
  

