https://repl.it/@gski_31/Coding-Dojo-Chapter-01-Fundamentals

/*[DONE] Setting and Swapping */
var myNum = 42;
var myName = 'Ron';
[myName,myNum] = [myNum,myName]
console.log('my name: ' + myName + ",/nnewNum: " + myNum);

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
function pR(myArr){
    document.write(myArr[0]);
    return myArr[1];
}
pR(4,5);
    

/* First Plus Length */
/* Values Greater than Second */
/* Values Greater than Second, Generalized */
/* This Length, That Value */

