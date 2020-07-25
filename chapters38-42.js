// JavaScript Document


// chapters38-42 task 1
/*var a = prompt("Enter Integer");
var b = prompt("Enter number for square");
function myFunction() {
	var abc = Math.pow(a, b);
    return abc; 
}
document.write(myFunction());
*/





// chapters38-42 task 2
/*function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
document.write(leapyear(2016)+'<br>');
document.write(leapyear(2000)+'<br>');
document.write(leapyear(1700)+'<br>');
document.write(leapyear(1800)+'<br>');
document.write(leapyear(100)+'<br>');
*/






// chapters38-42 task 3
/*var a = parseFloat(prompt("Enter value of a"));
var b = parseFloat(prompt("Enter value of b"));
var c = parseFloat(prompt("Enter value of c"));
var s = (a+b+c)/2;
var area = [s(s-a)(s-b)(s-c)];
document.write(s);
*/






// chapters38-42 task 4
/*var a = prompt("Enter student name");
var b = parseFloat(prompt("Enter first subject marks"));
var c = parseFloat(prompt("Enter second subject marks"));
var d = parseFloat(prompt("Enter third subject marks"));

function avg()
{
	var a1 = (b+c+d)/3;
	return a1;
}
function per()
{
	var a3 = (b+c+d)/300;
	var a2 = a3*100;
	return a2;
}
function main()
{
	var s = " avg is "+avg()+'<br>'+" percent is "+per();
	return s;
}
document.write(main());*/







// chapters38-42 task 6
/*function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}

var inp = ("Hello Josh");
document.write(disemvowel(inp));
*/










// chapters38-42 task 7
/*function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("Pleases read this application and give me gratuity"));
*/






// chapters38-42 task 8
/*var a = prompt("City one name");
var b = prompt("City two name");
var c = parseFloat((prompt("City one name")));
function meter()
{
	m = c * 1000;
	return m;
}
function centimeter()
{
	cm = c * 1000 * 100;
	return cm;
}
function feet()
{
	f = c * 3280.84;
    return f;
}
function inchc()
{
    inc = c * 39370.08;
	return inc;
}
document.write(" in meter "+meter());
document.write('<br>');
document.write("in centimeter "+centimeter());
document.write('<br>');
document.write("in feet "+feet());
document.write('<br>');
document.write(" in inchc "+inchc());*/






// chapters38-42 task 9
  /*  var ovr_rate = 12;
    var std_hr = 40;
    var hr_worked;
    var ovr_hr;
    var count = 1;
    var pay;

    while (count <= 10)
    {
        var hr_worked = prompt("Enter the Hours worked :");
        ovr_hr = hr_worked - std_hr;
        if (ovr_hr > 0)
        {
            pay = ovr_hr*ovr_rate;
            document.write("The Over Time Pay is: %d",pay+'<br>');
        }
        else document.write("Not eligible for overtime pay"+'<br>');

        count = count + 1;
    }*/





// chapters38-42 task 10
/*var t,t1,t2,t3;
var m1,m2,m3;

var t = prompt("Input notes in hundreds");
t3=parseInt(t/100);
t3;

t2=parseInt((t-t3*100.0)/50);
t2;

t1=parseInt((t-(t3*100.0+t2*50.0))/10);
t1;

document.write('<br>'+"The no of 100 notes is "+t3+'<br>'+"The no of 50 notes is "+t2+'<br>'+"The no of 10 notes is "+t1);*/
