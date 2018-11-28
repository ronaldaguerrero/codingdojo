/*[DONE] Setting and Swapping */
var myNumber = 42;
var myName = 'Ron';
myNumber = myName;
MyName = myNumber;

/*[DONE] Print -52 to 1066 */
for (let i = -52; i < 1067; i++){
    document.write(i);}
    
/*[DONE] Don't Worry, Be Happy */
var beCheerful = 'good morning!';
console.log(beCheerful.repeat(98));

/*[DONE] Multiples of Three -- but Not All */
for (var i = -300; i < 0;i++){
    if (i === -6){
        break;}
    else if (i % 3 === 0){
        document.write(i);}
}


/*[DONE] Printing Integers with While */
var i = 1999, result = "";

while (i++ < 5280) {
    result += i + " ";}

document.write(result);

/*[DONE] You Say It's Your Birthday */
var x = 11;
if (x === 11 || x === 15){
  console.log('How did you know?');
} else {
  console.log('Just another day....');
}

var x = 11;
x = window.prompt('Input a #: ');
if (x = 11||15){
  console.log('How did you know?');
} else {
  console.log('Just another day....');
}
    
/* Leap Year */
year = window.prompt("Input a Year : ");
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
console.log(x);
    
/*[DONE] Print and Count */
for (var i = 512; i <= 4096; i++){
     if (i % 5 === 0){
    console.log(i);
}
} 
    
/*[DONE] Multiples of Six */
var x = 1;
while (x <= 60000){
  if (x % 6 === 0)
  document.write('\n',x);
  x++;
}
    
/*[DONE] Counting, the Dojo Way */
for (i=1; i<=100; i++) {
    if(i % 5 ===0 && i % 10 === 0){
        document.write(' Coding Dojo ');}
    else if(i % 5 === 0){
        document.write('Coding ');}
    else if(i % 10 === 0){
        document.write('Dojo ');}
    else{
        console.log(i);
    }
}
       
 
    
/*[working] Whoa, That Sucker's Huge... */
var sum = 0;
for (var i = -300,000; i < 300,000; i++)
{
    if (i % 2 === 1)
    {
       sum += i;
    }
}
console.log(sum);
        
/* Countdown by Fourts */
        
/* Flexible Countdown */

/* The Final Countdown */
