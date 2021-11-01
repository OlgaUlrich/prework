function largest_of_four(arr) {
    function bigNum(prev, next){
        return prev>next?prev:next;
    }

    let empArr = [];
    for(let i=0; i<=arr.length; i++){
  
            let num = arr[i].reduce(bigNum);
            // console.log(num);
            empArr.push(num);
            // console.log(empArr);
    }
    console.log(empArr)
    // return empArr;

}



console.log(largest_of_four([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))