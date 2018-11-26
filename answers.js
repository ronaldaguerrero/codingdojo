/* Setting and Swapping */
var myNumber = 42
var myName = 'Ron'
var myNumber = myName
var MyName = myNumber 

/* Print -52 to 1066 */
function get_array(){
  var arr = [];
  for (var i = -52; i < 1067; i++){
    arr.push(i)
  }
    console.log(i);
  }
    
/* Don't Worry, Be Happy */
var beCheerful = 'good morning!'
console.log(beCheerful.repeat(98));

/* Multiples of Three -- but Not All */
function newContent() {
  document.open();

  for (var i = -300; i < 1; i += 3) {
    if (i % 2 != 0)
      document.write(i + ' ');
  }
  document.close();
}
