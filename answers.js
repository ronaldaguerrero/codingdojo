/*[DONE] Setting and Swapping */
var myNum = 42;
var myName = 'Ron';
[myName,myNum] = [myNum,myName]
console.log(myName,myNum);

/*[DONE] Print -52 to 1066 */
for (var i = -52; i <= 1066;i++){
  document.write('\n' + i)
}
    
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
let i = 2000;
while (i <= 5280) {
    document.write(i);
    i++;
}

/*[DONE] You Say It's Your Birthday */
function birthday(day, month) {
return (day == 15 && month == 11) || (day == 11 && month == 15) ? "How did you know?" : 
"Just another day...." ;
}
birthday(11, 15);
birthday(15, 11);
birthday(4, 4);

/*[Done] Leap Year */
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
       
/*[DONE] What Do You Know? */
function outPut(word){
    console.log(word);
}
outPut('incoming')
    
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
        
/*[done] Countdown by Fours */
let m = 2016;
while (m > 0) {
    if (m % 4 == 0) {
        console.log(m);
    }
    m--;
}
        
/*[done] Flexible Countdown */
function flexCount(low, high, mult) {
    let m = high;
    while (m > low) {
        if (m % mult == 0) {
            console.log(m);
        }
        m--;
    }
}
flexCount(2, 9, 3);

/* The Final Countdown */

/* ***************************** */

/*[done] Countdown */
function countDown(num) {
    let newArr = [];
    for (let i = num; i >= 0; i--) {
        newArr.push(i);
    }
    console.log(newArr);
    console.log(`the length is ${newArr.length}`);
}
countDown(44);

/* Print and Return */
function printNreturn(myArr) {
    document.write(myArr[0]);
    return myArr[1];
}
printNreturn([23, 31]);
    
/* First Plus Length */
function firstPlusLength(myArr) {
    return myArr[0] + myArr.length;
}
firstPlusLength([1, 2, 3, 4, 5]);

/* Values Greater than Second */
//Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is. 
function greaterSecond(myArr){
  
  


/* Values Greater than Second, Generalized */
/* This Length, That Value */


/* [done] Fit the first value */ 
function fitFirst(arr) {
    if (arr[0] > arr.length) {
        console.log("Too big!");
    } else if (arr[0] < arr.length) {
        console.log("Too small!");
    } else {
        console.log("Just right!");
    }
}
fitFirst([11, 15, 89]);
  
/* [done] Fahrenheit to Celsius */
function farToCel(deg) {
    let celc = (deg - 32) * (5 / 9);
    return celc.toFixed(2) + " degrees C";
}
farToCel(99);

/* [done] Celsius to Fahrenheit */
function celToFar(deg) {
    let far = (deg * 9 /5) + 32;
    return far.toFixed(2) + " degrees F";
} 
celToFar (33);
