function palindrome(string) {
/* Assume there are spaces */

let newStrWithoutSpaces = string.replace(" ", "");
let newArr = newStrWithoutSpaces.split("");

    let wordState = true;
    for(let i=0; i<Math.floor(newArr.length/2); i++){
      
       if(newArr[i] === newArr[newArr.length-1-i]){
               
          
       }
       else {
       wordState = false;
       break;
   
       }
    }
return wordState;
}

console.log(palindrome("abba"))