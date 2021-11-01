function repeat_string_num_times(str, num) {
var newStr = ''

    if(num <=0){
      newStr = 'nothing';
    }

    else{
        
for(let i=1; i<=num; i++){
 newStr += str;

}



    }

console.log(newStr);

}




repeat_string_num_times("abc", -6)