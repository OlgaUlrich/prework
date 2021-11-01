
function incert(){

class Calculator{
    constructor(a, b){
        this.first = Number(a);
        this.second =  Number(b);
       
  

    }
   
}

Calculator.prototype.adding = function(){
    let d = this.first+this.second;
   
  if (this.first === 0 && this.second===0){
        return 'Insert Numbers, please.'
  }
  else if(Number.isNaN(d) === true){
     return 'Insert Numbers, please.'}
         else {
return d;
      }
  
    
}

let calc = new Calculator(this.document.getElementById('first').value, 
this.document.getElementById('second').value)

this.document.getElementById('summa').innerHTML = calc.adding();
 }


