//Palindrome or not 

function checkPalindrome(string){
    //convert string to an array
    const arrayValues=string.split('');
    //reversing the array value
    const reverseArrayValues=arrayValues.reverse();
    //convert array to string
    const  reverseString=reverseArrayValues.join();

    if (string==reverseString) {
        console.log("It is palindrome");
    }
    else {
    console.log("it is not Palindrome");
    }
}

    const string=prompt("enter string :")
    checkPalindrome(string);