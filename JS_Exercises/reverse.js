function reverse(string){
    let i = string.length;
    let empArr = [];
    let arr = string.split('');
    while(i >= 0){

        empArr.push(arr[i]);
        i-=1;


    }
 
return empArr.join('');


}

console.log(reverse("Propulsion Academy"));