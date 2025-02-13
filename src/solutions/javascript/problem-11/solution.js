function createAccount() {
  let balance = 150 ;

  return { 
    deposit(amount) {
      if (amount <=0){
        return { success: false, message: "Deposit amount must be greater than zero" };
      }
      balance += amount;
      return{success: true,balance};
    },
    withdraw(amount){
      if (amount <=0){
        return {success:false, message:"Withdrawal amount must be greater than zero." };
      }
      if (amount > balance){
        return{success:false,message:"Insufficient balance."};
      }
      balance -=amount;
      return {success: true,balance};
    },
    getBalance(){
      return {success:true,balance};
    }

  };


}
const  account  = createAccount();
console.log(account.withdraw(1000));