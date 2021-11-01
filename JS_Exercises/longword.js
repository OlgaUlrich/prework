
function longest_word(sentence) {
let arr = sentence.split(' ');


let rejex = /[a-z]/ig;
let newArr = arr.filter(item => rejex.test(item)===true)



function maxNum(prevWord, nextWord){
    if (prevWord.length > nextWord.length){
        return prevWord;
    }
    else{
       return nextWord;
    }
}

let longWord = newArr.reduce(maxNum);
return console.log(longWord);
}

longest_word("This is an amazing test");