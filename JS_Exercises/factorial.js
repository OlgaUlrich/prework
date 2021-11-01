function Factorial(number){

  if(number === 0){
      return 1;
  }
  
  else if(number<0){
        return "n must be > or = to 0";
    }

    else{
          let mul = 1;
              for(let i=1; i<number+1; i++)
              {
                mul = mul*i;
              }
              return mul;
        }      
  }


console.log(Factorial(-6))
