function two_sum(nums) {
     let minusNumbers = nums.filter(item => item < 0);
     let arr = [];
       //  return  minusNumbers
    for (let i=0; i<=minusNumbers.length; i++){
 
       if(nums.indexOf(Math.abs(minusNumbers[i]))!==-1){
          let newArr = [];
          newArr.push(nums.indexOf(minusNumbers[i]));
          newArr.push(nums.indexOf(Math.abs(minusNumbers[i])));
          arr.push(newArr);
      }
           
    }
    return arr.length===0 ? null : arr;

    
}

console.log(two_sum([1, 3, -5]));