class Bank {
    constructor() {

        this.customers = {
            0: "Name"
        };

    }
}



Bank.prototype.addCustomer = function(customer) {
  let arrKeys = Object.keys(this.customers).length -1;
  this.customers[arrKeys] = customer;

}

Bank.prototype.printAccount = function(customer) {
    let arrKeys = Object.keys(this.customers);
    console.log(arrKeys);
    arrKeys.forEach(element => {
            if(this.customers[element] === customer){

            // return `${customer} account is ${i}`;
            console.log(`${customer} account is ${element}`);
        }



    });
    
}


Bank.prototype.deposit = function(customer, num){
        let arrKeys = Object.keys(this.customers);
       
        arrKeys.forEach(element => {
                    if(this.customers[element] === customer){
                        let per = element;
                        delete this.customers[element];
                     return this.customers[Number(per)+Number(num)] = customer;  
                    }  
        });
    } 


Bank.prototype.withdraw = function(customer, num){
let arrKeys = Object.keys(this.customers);
arrKeys.forEach(element => {
    if(this.customers[element] === customer){
         let per = element;
        if(Number(per) < Number(num)){

            return ('You cant withdraw this amount')
        }
        else{
        let per = element;
        delete this.customers[element];
        return this.customers[Number(per)-Number(num)] = customer;
        }
    }
    
});



}




var bank = new Bank();

bank.addCustomer('Sheldon');
bank.printAccount('Sheldon');
bank.deposit('Sheldon', 10);
bank.printAccount('Sheldon');
bank.addCustomer('Raj');
bank.printAccount('Raj');
bank.deposit('Raj', 10000);
bank.printAccount('Raj');
bank.withdraw('Raj', 100);
bank.printAccount('Sheldon'); // this should print 'Sheldon account is 10'
bank.printAccount('Raj'); // this should print 'Raj account is 9900'

console.log(bank.customers);
