// function fizzBuzz() {
    
//  for (var a = 1;a <= 100; a++) {
    
//     if (a % 3 === 0 && a % 5 === 0) {
//         console.log("FizzBuzz");
//     }
//     else if (a % 3 === 0 && a % 5 !== 0) {
//       console.log("Fizz");
//     } else if (a % 5 === 0 && a % 3 !== 0) {
//       console.log("Buzz");
//     } else {
//         console.log(a);
//     }
    
    
//   }
// }
// fizzBuzz();

// var output = [];
// output.push(1);
// output.push(2);
// output.push(3);
// var popitem = output.pop();

// console.log(output);
// console.log(popitem);
// var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
// function whosPaying(names) {

//     /******Don't change the code above*******/

//         //Write your code here.
//         var randomName = Math.floor(Math.random()*(names.length));
//         var nameGenerated = (names[randomName]);
//         console.log(nameGenerated + " is going to buy lunch today!");
//         /******Don't change the code below*******/
//     }
//     whosPaying(names);

// 

// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }

function fibonacciGenerator(n){
var series =[];
if(n==1){
    return series=[0];
}
else if(n==2){
    return series=[0,1];
    
}
else{
    series=[0,1];
    for(var i=0; i<(n-2); i++){
        series.push(series[i] + series[i+1])
         
    
}
console.log(series);
}
   
}
fibonacciGenerator(10);

    

// var output=[];
// output.push(10);
// output.push(11);
// output.push(12);
// output.push(13);

// console.log(output);
// console.log(output[1+1]);
// console.log(output[3]);
// console.log(output[1]);

// var x=output[1];
// var y=output[1+1];
// var z=output[1+1+1];
// console.log(x,y,z);
