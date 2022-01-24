//declare a function names reverseWord that takes a parameter as a string
function reverseWord(str){
    //Then we split it into array of characters 
    str = str.split("");
    //j is reverse word(revWord) variable index
    var j=0;
    //declaring an array revWord to hold the rev words
    var revWord=[];

    //Now we will loop through the words to reverse them
    //then we store the result in the array we created
    for(var i=str.length-1;i>=0;i--){
        revWord[j] = str[i];
        j++;
    }

    //we will now use the join function to join it into a string
    revWord = revWord.join("");

    // we will now split the str again
    revWord= revWord.split(" ");

    //reset j to be equal to 0
    j=0;
    //new array do the same steps as the previous ones
    var revWord2=[]
    //loop through one more time to reverse it
    for(var i=revWord.length-1;i>=0;i--){
        revWord2[j] = revWord[i];
        j++;
    }

    // and now will we add the space in between the words 
    revWord2 = revWord2.join(" ");

    //We now return the array
    return revWord2;
}

//We can now call the function and give it a string
//I am happy 

console.log(reverseWord("I am happy"));
