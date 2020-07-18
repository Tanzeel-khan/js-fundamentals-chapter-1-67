// ****** Task : 1 ******* //

// var a = Number(prompt('enter value of a'));
// var b = Number(prompt('enter value of b'));

// var pow = function ( a, b ) {
//     var result = 1;
//     if ( b < 0 ) {
//         return ( 1 / pow( a, -(b)) );
//     }
//     for ( var i = 1; i <= b; i++ ) {
//         result = result * a;
//     }
//     return result;
// };

//  document.write('<br/><br/>');
//  document.write(`<h1>custom function of power(a,b): ${pow(a,b)}</h1>`);

// **** TASK 2 ****** //

// var year = Number(prompt("enter year number"));
// if (year==2012){
//     document.write(`<h1>It's a leap year</h1>`); 
// }
// else if(year==2000){
//     document.write(`<h1>It's a leap year</h1>`); 
// }
// else if(year==2004){
//     document.write(`<h1>It's a leap year</h1>`); 
// }
// else if(year==2008){
//     document.write(`<h1>It's a leap year</h1>`); 
// }
// else if(year==2012){
//     document.write(`<h1>It's a leap year</h1>`); 
// }
// else if(year==2016){
//     document.write(`<h1>It's a leap year</h1>`); 
// }
// else if(year==2024){
//     document.write(`<h1>It's a leap year</h1>`); 
// }
// else if(year==2020){
//     document.write(`<h1>It's a leap year</h1>`); 
// }
// else if(year==2028){
//     document.write(`<h1>It's a leap year</h1>`); 
// }
// else if(year==2032){
//     document.write(`<h1>It's a leap year</h1>`); 
// }
// else if(year==2036){
//     document.write(`<h1>It's a leap year</h1>`); 
// }
// else if(year==2040){
//     document.write(`<h1>It's a leap year</h1>`); 
// }
// else if(year==2044){
//     document.write(`<h1>It's a leap year</h1>`); 
// }
// else if(year==2048){
//     document.write(`<h1>It's a leap year</h1>`); 
// }
// else{
//     document.write(`<h1>not a leap year</h1>`);  
// }


// ***** TASK 3 ***//

// var a = Number(prompt('enter value of a'));
// var b = Number(prompt('enter value of b'));
// var c = Number(prompt('enter value of c'));

//  var s = (a+b+c)/2;
//  var triangle = function(a,b,c){
//      var area = s*(s-a)*(s-b)*(s-c);
//     return area;
//  } 
//  document.write('<br/><br/>');
//  document.write(`<h1>area of triangle is: ${triangle(a,b,c)}</h1>`);

 
 //**** TASK 4 **** //

// var  a = Number(prompt('enter value of first subject'));
// var  b = Number(prompt('enter value of second subject'));
// var  c = Number(prompt('enter value of third subject'));
// var average = function(a,b,c){
//     var avg = (a+b+c)/3;
//     return avg;
// }
// var percentage = function(a,b,c){
//     var per = (a+b+c)/300*100;
//     return per;
// }
// var main = function(){
//     average(a,b,c);
//     percentage(a,b,c);
// }

// document.write('<br/><br/>');
// document.write(`<h1>average of 3 subjects is: ${average(a,b,c)}</h1>`);
// document.write(`<h1>percentage of 3 subjects is: ${percentage(a,b,c)}%</h1>`);

// ***** TASK 5 ***** //

// var a=prompt("Enter a Name");
// var c=prompt("Enter a letter to get code");
// function index(){
//     var cd=a.indexOf(c);
//     return cd;
// }
// document.write('<br/><br/>');
// document.write(`<h1>the character you are finding is on index of: ${index()}</h1>`);

// ***** TASK 6 ****** //

// var a ="tanzeel ur rehman";
// var vowels=['a','e','i','o','u'];

// function revowel(){
//     for(var i=0; i<vowels.length;i++){
//         var b=a.length;
//         for(var j=0;j<b.length;j++){
// if(vowels[i]==a.charAt(j)){
// a=a.slice(0,j).concat(string.slice(j+1,b));
// j--;
// b--;
// }

//         }
//     }
//     document.write(a);
// }
// revowel();

// ******** TASK 7 ****** //

// var a="Pleases read this application and give me gratuity"
// var s=a.toLowerCase();
// console.log(s);
// var count=0;
// var cc=0;

// for(var i=0;i<s.length;i++){
//     switch(s.charAt(i)) {
//         case "a":
//             count++;
//             break;
//             case "e":
//                 cc++
//                 break;
            
//              }
// }
// document.write('<br/><br/>');  
// document.write("Vowel a comes "+count+" in given string");
// document.write("<br>"+"Vowel e comes "+cc+" in given string");

// document.write('<br/><br/>');
// document.write("Occurence of vowel a "+count);
// document.write("<br>"+"Occurence of vowel e "+cc);

// **** TASk 8 ***** //

// var a= Number(prompt("Enter the distance between two cities in Km"));
// function meter(){
// document.write("Meters: "+(a*1000));
// }
// function feet(){
//     document.write("<br>"+"Feet: "+(a*3280.8));
// }
// function inches(){
//     var i=(a*1000);
//     document.write("<br>"+"Inches: "+(i*39.3701));
// }
// function centimeters(){
//     var i=(a*1000);
//     var z=(i*39.3701);
//     document.write("<br>"+"Centimeters: "+(z*2.54));
// }
// meter();
// feet();
// inches();
// centimeters();

// ***** TASK 9 ***** //

// var a=prompt("Enter Employee Name");
// var c=Number(prompt("How many hours you over timed"));

// if(c==20){
// document.write("Mr "+a+" your over-timed amoount is "+c*6000+" as u worked fractional hours ");
// }
// else if(c==40){
//     document.write("<br>"+"Mr "+a+" your over-timed salary is "+c*12000);
// }
// else{
//     document.write("Enter valid Hours");
// }

// *** TASK 10 *** //

// var a=Number(prompt("Enter amount to withdraw"));

// function withdraw(){
// var h=((a)/100);
// var f=((a%100)/50);
// var t=(((a%100)%50)/10);
// document.write("You will have "+Math.floor(h)+" hundreds "+Math.floor(f)+" fifty "+Math.floor(t)+" tens ");
// }
// withdraw();



