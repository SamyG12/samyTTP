/*
We're goin to create a function that takes a number as a parameter
if the number is divisible by 3 we'll print Fizz
if the number is divisible by 5 we'll print buzz
if the number is divisible by 3 and 5 we'll print fizzbuzz
*/

//We will creat a function that takes a number as parameter
// the function will then loop from 1 to the number chosen 
//as a parameter. 
//then check if it matches one of the conditions mentioned above
function fizzBuzz(num){
    for (var i = 1; i <= num; i++) {
    //we start the module by 3 AND 5 to avoid printing 
    // Fizz and ending the loop. As the computer reads 
    // the code from top to bottom. if we put the %3 or %5 first 
    //it'll end the program ahead
        if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");

    // then it checks the next condition if it's divisible by 3
    //it'll print Fizz
        else if (i % 3 === 0) console.log("Fizz");
    //lastly it checks the last condition if it's divisible by 5
    //it'll print Buzz
        else if (i % 5 === 0) console.log("Buzz");

    // if none of the conditions check  just print the number
        else console.log(i);
    }
}

fizzBuzz(5);

// I am familiar with this puzzle, it was presented and solved in one of
// my classes.

//Pseudocode: 
    //def fizzBuzzFun(n)
        //for i in n:
            //if i%15 ==0:
                //print: FizzBuzz
            //elif i%3==0:
                ////print: Fizz
            //elif i%5==0:
                //print: Buzz
            //else:
                //print i;