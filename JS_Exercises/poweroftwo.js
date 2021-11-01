function is_power_of_two(num) {

    let newNum = num / 2;
 
 if(newNum / 2 > 1){
    is_power_of_two(newNum);
 }
 else if(newNum / 2 === 1 && newNum % 2 === 0){
     console.log(true);
 }
 else {
     console.log(false);
 }
}

is_power_of_two(8);