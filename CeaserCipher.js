//create a function that takes two parameters 
// one is the string that you want to Encrypt
// The second one is the number for the shifts 
function ceaserCipher(str, num) {

    // Making sure that the num is always less or equal to 26
    //if the user picks a number that's bigger than 26
    //we will module it with 26 and shift the str with the 
    // remainder of it
    num = num % 26;
    //turning the stirng into a lower case using toLowerCase function
    var lowerCaseStr = str.toLowerCase();
    // assigning a variable alphabet to the alphabet with the 
    // dot split function
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    //creating a new variable in order to store our new String 
    var newStr = '';
    // we will loop through the string 
    for(var i=0; i<lowerCaseStr.length; i++){
        //convert it to lower case
        var currentLetter = lowerCaseStr[i];
        // if the letter is a space we leave it as is
        if(currentLetter === ' '){
            newStr += currentLetter;
            continue;        }
            // grabing the index of the current letter
        var currentIndex = alphabet.indexOf(currentLetter);
        //adding the shift to it 
        var newIndex = currentIndex + num;
        // if it's more than 26 we minus 26 from it
        // this is useful in case there is a z it will turn to 
        // and if case the input is negative we add 26
        if(newIndex>25) newInde= newIndex-26;
        if(newIndex<0) newIndex= newIndex +26;
        // converting the uppercases back to their 
        //initial state
        if(str[i] === str[i].toUpperCase()){
            newStr += alphabet[newIndex].toUpperCase();}
        else newStr += alphabet[newIndex];
        //storing it in the newStr
    } 
    // returning the new str
    return newStr
} 
// example of hi with the shift of 2 prints jk
console.log(ceaserCipher('hi', 2))